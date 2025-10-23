"use client";

import React from "react";
import { FadeIn } from "@/components/reactbits/fade-in";
import RollingGallery from "./../reactbits/rolling-gallery";
import { Trophy } from "lucide-react";

// Achievement images data
const achievementImages = [
    {
        src: "/achievements/Master-HTML-and-CSS-by-building-real-world-projects.jpg",
        title: "Master HTML and CSS by building real world projects"
    },
    {
        src: "/achievements/Deans-Award-Fall-2022-2023.JPG",
        title: "Dean's Award Fall 2022-2023"
    },
    {
        src: "/achievements/Deans-Award-Fall-2023-2024.JPG",
        title: "Dean's Award Fall 2023-2024"
    },
    {
        src: "/achievements/Deans-Award-Fall-2024-2025.JPG",
        title: "Dean's Award Fall 2024-2025"
    },
    {
        src: "/achievements/Deans-Award-Spring-2022-2023.JPG",
        title: "Dean's Award Spring 2022-2023"
    },
    {
        src: "/achievements/Deans-Award-Spring-2023-2024.JPG",
        title: "Dean's Award Spring 2023-2024"
    },
    {
        src: "/achievements/Certificate-of-Internship.png",
        title: "Certificate of Internship"
    },
    {
        src: "/achievements/Cisco-IT-Essentials.png",
        title: "Cisco IT Essentials"
    },
    {
        src: "/achievements/School-Sports-Certificate-Football-2017.JPG",
        title: "School Sports Certificate - Football (2017)"
    },
    {
        src: "/achievements/kabadi.JPG",
        title: "School Sports Certificate - Kabadi (2017)",
        alt: "School Sports Certificate - Kabadi (2017)"
    }
];

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-10 h-10 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                Achievements & Recognition
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of milestones, awards, and recognitions throughout my journey
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative">
            <RollingGallery 
              autoplay={true} 
              pauseOnHover={true} 
              images={achievementImages}
            />
            
            {/* Instruction text */}
            <div className="text-center mt-8">
              <p className="text-md text-muted-foreground">
                ← Drag to explore or hover to pause →
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}