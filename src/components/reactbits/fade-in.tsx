"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 1,
  className 
}: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration, 
          delay,
          ease: "power3.out"
        }
      );
    }
  }, [delay, duration]);

  return (
    <div ref={elementRef} className={cn(className)}>
      {children}
    </div>
  );
}
