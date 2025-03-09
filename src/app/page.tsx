"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
