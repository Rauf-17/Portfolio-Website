"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group overflow-hidden"
          aria-label="Scroll to top"
        >
          <motion.div
            className="flex items-center gap-2 whitespace-nowrap"
            animate={{
              width: isHovered ? "auto" : "24px",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ArrowUp className="w-6 h-6 flex-shrink-0 group-hover:-translate-y-1 transition-transform duration-300" />
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                width: isHovered ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="text-sm font-medium"
            >
              Scroll to Top
            </motion.span>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}