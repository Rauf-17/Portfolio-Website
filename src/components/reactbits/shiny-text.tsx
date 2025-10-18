"use client";

import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export function ShinyText({ 
  text, 
  disabled = false, 
  speed = 5, 
  className = '' 
}: ShinyTextProps) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(181, 181, 181, 0.64) 40%, rgba(255, 255, 255, 1) 50%, rgba(181, 181, 181, 0.64) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
}