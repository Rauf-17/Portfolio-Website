"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { href: "#about", label: "ABOUT" },
  { href: "#education", label: "EDUCATION" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#skills", label: "SKILLS" },
  { href: "/projects", label: "PROJECTS" },
  { href: "#achievements", label: "ACHIEVEMENTS" },
  { href: "#contact", label: "CONTACT" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.replace(/^#/, "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // update the hash without jumping
      history.replaceState(null, "", `#${id}`);
    } else {
      // fallback: set location hash so browser tries to navigate
      window.location.hash = href;
    }
  };

  return (
    <div className="md:hidden relative z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 flex items-center justify-center rounded-md hover:bg-accent transition-colors z-50"
        aria-label="Toggle menu"
      >
        <div className="w-5 h-4 flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel - Overlay from Right */}
      <div
        className={`fixed top-20 right-3 w-56 bg-card/98 backdrop-blur-2xl border border-border/60 rounded-lg shadow-2xl z-40 transform transition-all duration-300 ease-out ${
          isOpen ? "translate-x-0 opacity-100 scale-100" : "translate-x-8 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <nav className="py-3 px-2">
          <div className="space-y-1">
            {navItems.map((item, index) => {
              const commonProps = {
                className:
                  "block text-center py-2.5 px-3 rounded-md hover:bg-accent/50 transition-all duration-200 group border border-transparent hover:border-primary/30",
                style: {
                  animationDelay: `${index * 50}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateX(0)" : "translateX(20px)",
                  transition: `all 0.3s ease-out ${index * 50}ms`,
                } as React.CSSProperties,
              };

              if (item.href.startsWith("#")) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleHashClick(e, item.href)}
                    {...commonProps}
                  >
                    <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  {...commonProps}
                >
                  <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}