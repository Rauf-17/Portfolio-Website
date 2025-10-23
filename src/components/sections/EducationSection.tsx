"use client";

import React, { useRef } from "react";
import Lottie from "lottie-react";
import { FadeIn } from "@/components/reactbits/fade-in";
import bookAnimation from "../../../public/lottiefiles/Book loading.json";

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  period: string;
  grade: string;
  major?: string;
  website?: string;
}

const educationData: EducationItem[] = [
  {
    id: 3,
    institution: "American International University-Bangladesh",
    degree: "B.Sc. in Computer Science and Engineering",
    period: "2025",
    grade: "3.93/4",
    major: "Major in Information Technology",
    website: "https://www.aiub.edu/",
  },
  {
    id: 2,
    institution: "Bangladesh Navy College, Dhaka",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2020",
    grade: "5/5",
    major: "Science",
    website: "https://bncd.edu.bd/",
  },
  {
    id: 1,
    institution: "Banani Bidyaniketan School and College",
    degree: "Secondary School Certificate (SSC)",
    period: "2018",
    grade: "5/5",
    major: "Science",
    website: "https://www.bbnsc.edu.bd/",
  },
];

export default function EducationSection() {
  const getLogoPath = (id: number) => {
    switch (id) {
      case 3:
        return "/logos/uni-logo.png"; 
      case 2:
        return "/logos/college-logo.png"; 
      case 1:
        return "/logos/school-logo.png";
      default:
        return "/logos/default.png";
    }
  };

  const getLogoAlt = (id: number) => {
    switch (id) {
      case 3:
        return "aiub";
      case 2:
        return "bncd";
      case 1:
        return "bbnsc";
      default:
        return "Logo";
    }
  };

  return (
    <section
      id="education"
      className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic journey & milestones that shaped my career path.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Lottie Animation */}
          <FadeIn delay={0.2}>
            <div className="flex justify-center items-center">
              <div className="w-full max-w-md">
                <Lottie
                  animationData={bookAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right Side - Education Timeline */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[11px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500 hidden md:block"></div>

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <FadeIn key={edu.id} delay={0.3 + index * 0.15}>
                  <div className="relative flex gap-6 group">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex items-start pt-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center ring-4 ring-background shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    </div>

                    {/* Education Card */}
                    <div className="flex-1">
                      <div className="relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-1">
                        {/* Gradient Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative p-6">
                          {/* Institution Name */}
                          {edu.website ? (
                            <a
                              href={edu.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xl font-bold text-foreground mb-2 hover:text-primary/70 transition-colors duration-300 hover:underline inline-flex items-center gap-2"
                            >
                              {edu.institution}
                              <svg
                                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                          ) : (
                            <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary/70 transition-colors duration-300">
                              {edu.institution}
                            </h3>
                          )}

                          {/* Degree */}
                          <p className="text-lg font-semibold text-muted-foreground mb-2">
                            {edu.degree}
                          </p>

                          {/* Major (if exists) */}
                          {edu.major && (
                            <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
                              {edu.major}
                            </p>
                          )}

                          {/* Period and Grade */}
                          <div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex items-center gap-2 text-sm">
                              <svg
                                className="w-4 h-4 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span className="font-medium text-foreground">
                                {edu.period}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                              <svg
                                className="w-4 h-4 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                              </svg>
                              <span className="font-medium text-foreground">
                                Grade: {edu.grade}
                              </span>
                            </div>
                          </div>

                          {/* Logo Badge (replaces numeric badge) */}
                            <div className="absolute top-4 right-4">
                            <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-white font-bold text-sm shadow-lg overflow-hidden border border-border">
                              <img
                              src={getLogoPath(edu.id)}
                              alt={getLogoAlt(edu.id)}
                              className="w-9 h-9 object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
