"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform, PanInfo, ResolvedValues } from 'framer-motion';

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: { src: string; title: string }[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({ 
  autoplay = false, 
  pauseOnHover = false, 
  images = [] 
}) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(false);
  
  useEffect(() => {
    setIsScreenSizeSm(window.innerWidth <= 640);
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cylinderWidth: number = isScreenSizeSm ? 1800 : 3200;
  const faceCount: number = images.length;
  const faceWidth: number = cylinderWidth / faceCount;
  const radius: number = cylinderWidth / (2 * Math.PI);

  const dragFactor: number = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(rotation, (val: number) => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 60,
        ease: 'linear',
        repeat: Infinity
      }
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: ResolvedValues) => {
    if (typeof latest.rotateY === 'number') {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[600px] md:h-[650px] w-full overflow-hidden">
      {/* Left gradient */}
      <div
        className="absolute top-0 left-0 h-full w-[80px] z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, rgba(0,0,0,0) 0%, hsl(var(--background)) 100%)'
        }}
      />
      {/* Right gradient */}
      <div
        className="absolute top-0 right-0 h-full w-[80px] z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, hsl(var(--background)) 100%)'
        }}
      />
      
      <div className="flex h-full items-center justify-center [perspective:2000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d'
          }}
          className="flex min-h-[200px] cursor-grab active:cursor-grabbing items-center justify-center [transform-style:preserve-3d]"
        >
          {images.map((image, i) => (
            <div
              key={i}
              className="group absolute flex flex-col h-fit items-center justify-center [backface-visibility:hidden]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`
              }}
            >
              {/* Card Container */}
              <div className="bg-card/80 backdrop-blur-sm rounded-xl border-2 border-border p-4 transition-all duration-300 ease-out group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:scale-105">
                {/* Image Container with fixed aspect ratio */}
                <div className="relative w-[360px] h-[280px] sm:w-[300px] sm:h-[220px] rounded-lg overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.title}
                    className="pointer-events-none w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                
                {/* Title */}
                <p className="mt-4 text-sm font-semibold text-center text-foreground group-hover:text-primary transition-colors duration-300 max-w-[360px] sm:max-w-[300px] line-clamp-2">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;