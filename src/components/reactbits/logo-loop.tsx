import React, {

memo,
useCallback,
useEffect,
useMemo,
useRef,
useState,
RefObject,
CSSProperties,
} from 'react';

const ANIMATION_CONFIG = {
SMOOTH_TAU: 0.25,
MIN_COPIES: 2,
COPY_HEADROOM: 2,
} as const;

const toCssLength = (value?: number | string) =>
typeof value === 'number' ? `${value}px` : value ?? undefined;

const cx = (...parts: Array<string | false | null | undefined>) =>
parts.filter(Boolean).join(' ');

/* ---------------------- Hooks ---------------------- */

const useResizeObserver = (
callback: () => void,
elements: Array<RefObject<HTMLElement | null>>,
dependencies: any[]
) => {
useEffect(() => {
    if (typeof window === 'undefined') {
        callback();
        return;
    }

    if (!(window as any).ResizeObserver) {
        const handleResize = () => callback();
        window.addEventListener('resize', handleResize);
        callback();
        return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map((ref) => {
        const el = ref.current;
        if (!el) return null;
        const observer = new (window as any).ResizeObserver(callback);
        observer.observe(el);
        return observer as { disconnect: () => void } | null;
    });

    callback();

    return () => {
        observers.forEach((o) => o?.disconnect());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, dependencies);
};

const useImageLoader = (
seqRef: RefObject<HTMLElement | null>,
onLoad: () => void,
dependencies: any[]
) => {
useEffect(() => {
    const imgs = (seqRef.current?.querySelectorAll?.('img') ??
        []) as NodeListOf<HTMLImageElement>;

    if (!imgs || imgs.length === 0) {
        onLoad();
        return;
    }

    let remaining = imgs.length;
    const handle = () => {
        remaining -= 1;
        if (remaining <= 0) onLoad();
    };

    imgs.forEach((img) => {
        if (img.complete) {
            handle();
        } else {
            img.addEventListener('load', handle, { once: true });
            img.addEventListener('error', handle, { once: true });
        }
    });

    return () => {
        imgs.forEach((img) => {
            img.removeEventListener('load', handle);
            img.removeEventListener('error', handle);
        });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, dependencies);
};

const useAnimationLoop = (
trackRef: RefObject<HTMLElement | null>,
targetVelocity: number,
seqWidth: number,
isHovered: boolean,
pauseOnHover: boolean
) => {
const rafRef = useRef<number | null>(null);
const lastTimestampRef = useRef<number | null>(null);
const offsetRef = useRef(0);
const velocityRef = useRef(0);

useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
        typeof window !== 'undefined' &&
        !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    if (seqWidth > 0) {
        offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    if (prefersReduced) {
        track.style.transform = 'translate3d(0, 0, 0)';
        lastTimestampRef.current = null;
        return;
    }

    const animate = (timestamp: number) => {
        if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;
        const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
        lastTimestampRef.current = timestamp;

        const target = pauseOnHover && isHovered ? 0 : targetVelocity;
        const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
        velocityRef.current += (target - velocityRef.current) * easingFactor;

        if (seqWidth > 0) {
            let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
            nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
            offsetRef.current = nextOffset;
            const translateX = -offsetRef.current;
            track.style.transform = `translate3d(${translateX}px, 0, 0)`;
        }

        rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
        if (rafRef.current !== null) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
        lastTimestampRef.current = null;
    };
}, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]);
};

/* ---------------------- Types ---------------------- */

type NodeLogo = {
node: React.ReactNode;
title?: string;
href?: string;
ariaLabel?: string;
};

type ImageLogo = {
src: string;
alt?: string;
href?: string;
srcSet?: string;
sizes?: string;
width?: number | string;
height?: number | string;
title?: string;
ariaLabel?: string;
};

export type LogoItem = NodeLogo | ImageLogo;

export type LogoLoopProps = {
logos: LogoItem[];
speed?: number; // pixels per second (positive values move left when direction === 'left')
direction?: 'left' | 'right';
width?: number | string;
logoHeight?: number;
gap?: number;
pauseOnHover?: boolean;
fadeOut?: boolean;
fadeOutColor?: string;
scaleOnHover?: boolean;
ariaLabel?: string;
className?: string;
style?: CSSProperties;
};

/* ---------------------- Component ---------------------- */

export const LogoLoop = memo(function LogoLoop({
logos,
speed = 200,
direction = 'left',
width = '100%',
logoHeight = 28,
gap = 32,
pauseOnHover = true,
fadeOut = false,
fadeOutColor,
scaleOnHover = false,
ariaLabel = 'Partner logos',
className,
style,
}: LogoLoopProps) {
const containerRef = useRef<HTMLDivElement | null>(null);
const trackRef = useRef<HTMLDivElement | null>(null);
const seqRef = useRef<HTMLUListElement | null>(null);

const [seqWidth, setSeqWidth] = useState(0);
const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
const [isHovered, setIsHovered] = useState(false);

const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed);
    const directionMultiplier = direction === 'left' ? 1 : -1;
    const speedMultiplier = speed < 0 ? -1 : 1;
    return magnitude * directionMultiplier * speedMultiplier;
}, [speed, direction]);

const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = Math.ceil(seqRef.current?.getBoundingClientRect?.()?.width ?? 0);

    if (sequenceWidth > 0) {
        setSeqWidth(sequenceWidth);
        const copiesNeeded =
            Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
}, []);

useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);
useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

const cssVariables = useMemo(
    () =>
        ({
            '--logoloop-gap': `${gap}px`,
            '--logoloop-logoHeight': `${logoHeight}px`,
            ...(fadeOutColor ? { '--logoloop-fadeColor': fadeOutColor } : {}),
        } as CSSProperties),
    [gap, logoHeight, fadeOutColor]
);

const rootClasses = useMemo(
    () =>
        cx(
            'relative overflow-x-hidden group',
            '[--logoloop-gap:32px]',
            '[--logoloop-logoHeight:28px]',
            '[--logoloop-fadeColorAuto:#ffffff]',
            'dark:[--logoloop-fadeColorAuto:#0b0b0b]',
            scaleOnHover && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
            className ?? ''
        ),
    [scaleOnHover, className]
);

const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsHovered(true);
}, [pauseOnHover]);

const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsHovered(false);
}, [pauseOnHover]);

const renderLogoItem = useCallback(
    (item: LogoItem, key: string) => {
        const isNodeItem = Object.prototype.hasOwnProperty.call(item, 'node');

        const content = isNodeItem ? (
            <span
                className={cx(
                    'inline-flex items-center',
                    'motion-reduce:transition-none',
                    scaleOnHover &&
                        'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
                )}
                aria-hidden={!!(item as NodeLogo).href && !(item as NodeLogo).ariaLabel}
            >
                {(item as NodeLogo).node}
            </span>
        ) : (
            <img
                className={cx(
                    'h-[var(--logoloop-logoHeight)] w-auto block object-contain',
                    '[-webkit-user-drag:none] pointer-events-none',
                    '[image-rendering:-webkit-optimize-contrast]',
                    'motion-reduce:transition-none',
                    scaleOnHover &&
                        'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
                )}
                src={(item as ImageLogo).src}
                srcSet={(item as ImageLogo).srcSet}
                sizes={(item as ImageLogo).sizes}
                width={(item as ImageLogo).width as any}
                height={(item as ImageLogo).height as any}
                alt={(item as ImageLogo).alt ?? ''}
                title={(item as ImageLogo).title}
                loading="lazy"
                decoding="async"
                draggable={false}
            />
        );

        const itemAriaLabel = isNodeItem
            ? (item as NodeLogo).ariaLabel ?? (item as NodeLogo).title
            : (item as ImageLogo).ariaLabel ?? (item as ImageLogo).alt ?? (item as ImageLogo).title;

        const inner = (item as any).href ? (
            <a
                className={cx(
                    'inline-flex items-center no-underline rounded',
                    'transition-opacity duration-200 ease-linear',
                    'hover:opacity-80',
                    'focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2'
                )}
                href={(item as any).href}
                aria-label={itemAriaLabel || 'logo link'}
                target="_blank"
                rel="noreferrer noopener"
            >
                {content}
            </a>
        ) : (
            content
        );

        return (
            <li
                className={cx(
                    'flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1]',
                    scaleOnHover && 'overflow-visible group/item'
                )}
                key={key}
                role="listitem"
            >
                {inner}
            </li>
        );
    },
    [scaleOnHover]
);

const logoLists = useMemo(
    () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
            <ul
                className="flex items-center"
                key={`copy-${copyIndex}`}
                role="list"
                aria-hidden={copyIndex > 0}
                ref={copyIndex === 0 ? seqRef : undefined}
            >
                {logos.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
            </ul>
        )),
    [copyCount, logos, renderLogoItem]
);

const containerStyle = useMemo(
    () =>
        ({
            width: toCssLength(width) ?? '100%',
            ...cssVariables,
            ...style,
        } as CSSProperties),
    [width, cssVariables, style]
);

return (
    <div
        ref={containerRef}
        className={rootClasses}
        style={containerStyle}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        {fadeOut && (
            <>
                <div
                    aria-hidden
                    className={cx(
                        'pointer-events-none absolute inset-y-0 left-0 z-[1]',
                        'w-[clamp(24px,8%,120px)]',
                        'bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                    )}
                />
                <div
                    aria-hidden
                    className={cx(
                        'pointer-events-none absolute inset-y-0 right-0 z-[1]',
                        'w-[clamp(24px,8%,120px)]',
                        'bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                    )}
                />
            </>
        )}

        <div
            className={cx('flex w-max will-change-transform select-none', 'motion-reduce:transform-none')}
            ref={trackRef}
        >
            {logoLists}
        </div>
    </div>
);
});

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;