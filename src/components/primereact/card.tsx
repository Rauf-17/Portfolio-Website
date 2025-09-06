"use client";

import React from "react";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <div className={`rounded-lg border p-6 shadow-sm ${className}`}>
      {title && <h3 className="text-2xl font-semibold mb-4">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}
