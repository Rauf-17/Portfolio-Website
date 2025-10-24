"use client";

import React from "react";
import { FadeIn } from "@/components/reactbits/fade-in";
import ProfileCard from "@/components/reactbits/profile-card";
import { ShinyText } from "@/components/reactbits/shiny-text";

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
            </h2>
            <ShinyText 
              text="A quick glimpse into who I am and what drives my work." 
              speed={5}
              className="text-lg"
            />
          </div>
        </FadeIn>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Profile Card */}
          <FadeIn delay={0.2}>
            <ProfileCard
              name="Raufull Islam Rauf"
              title="Junior Software Engineer"
              avatarUrl="/logos/Profile.png"
              enableTilt={true}
              enableMobileTilt={false}
              className="max-w-md mx-auto"
            />
          </FadeIn>

            {/* About Content */}
            <FadeIn delay={0.4}>
            <div className="space-y-6">
              <div className="space-y-4">
              <ShinyText
              text="Passionate Web Developer — Frontend & Backend"
              speed={5}
              className="text-lg bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              />

              <p className="text-lg leading-relaxed text-foreground/90">
              I'm <span className="font-semibold text-foreground bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Raufull Islam Rauf</span>, a
              Web Developer and Junior Software Engineer at{" "}
              <span className="font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              MADD Technology
              </span>
              . I craft responsive, user-friendly interfaces using{" "}
              <span className="font-semibold text-primary">Angular</span>,{" "}
              <span className="font-semibold text-primary">React</span>, and{" "}
              <span className="font-semibold text-primary">Tailwind CSS</span>.
              </p>

              {/* Split the backend paragraph so stats appear immediately after Node.js and PHP */}
              <p className="text-lg leading-relaxed text-foreground/90">
              On the back end I enjoy building robust solutions with{" "}
              <span className="font-semibold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              Node.js
              </span>{" "}
              and{" "}
              <span className="font-semibold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              PHP
              </span>.
              </p>
              <div className="text-lg leading-relaxed text-foreground/90 mb-1">
                I also have experience working as a{" "}
                <span className="font-semibold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                  Software Requirements Analyst
                </span>
                , performing{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Business Requirements Analysis
                </span>
                , and serving as a{" "}
                <span className="font-semibold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                  Scrum Master / Project Lead.
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                1+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Quick
                </div>
                <div className="text-sm text-muted-foreground">Learner</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                100%
                </div>
                <div className="text-sm text-muted-foreground">Dedicated</div>
              </div>
              </div>
              </div>
            </div>
            </FadeIn>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
    </section>
  );
}