"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm">
      {/* Gradient background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-background to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-2">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Raufull Islam Rauf. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 text-center">
            Built with{" "}
            <span className="text-red-500 animate-pulse">❤️</span> using{" "}
            <span className="text-primary font-semibold">Next.js</span> &{" "}
            <span className="text-primary font-semibold">Tailwind CSS</span>
          </p>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-50" />
    </footer>
  );
}