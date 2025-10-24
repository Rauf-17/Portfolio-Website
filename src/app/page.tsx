"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillSection from "@/components/sections/SkillSection";
import FeaturedProjectSection from "@/components/sections/FeaturedProjectSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillSection />
      <FeaturedProjectSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
