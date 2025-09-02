"use client";

import React from "react";
import Lottie from "lottie-react";
import { FadeIn } from "@/components/reactbits/fade-in";
import workingAnimation from "../../../public/lottiefiles/Working Online.json";

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
  website?: string;
}

const experienceData: ExperienceItem[] = [
    {
        id: 2,
        company: "MADD Technology",
        position: "Junior Software Engineer",
        period: "06 May 2025 - Present",
        location: "Banani, Dhaka",
        website: "https://maddtechbd.com/",
        responsibilities: [
            "Built web apps with Node.js and Angular.",
            "Integrated REST APIs and FastAPI.",
            "Maintained PHP/CodeIgniter projects.",
            "Gathered requirements and delivered demos.",
            "Managed company website and CPanel.",
        ],
    },
    {
        id: 1,
        company: "MADD Technology",
        position: "PHP Developer Intern",
        period: "06 February 2025 - 05 May 2025",
        location: "Banani, Dhaka",
        website: "https://maddtechbd.com/",
        responsibilities: [
            "Maintained PHP/CodeIgniter sites.",
            "Analyzed project requirements.",
            "Delivered client demos and presentations.",
            "Managed website content and performance.",
            "Administered hosting via CPanel.",
        ],
    },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-background to-purple-900/20 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-primary to-purple-500 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional journey & achievements that define my career growth.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Lottie Animation */}
          <FadeIn delay={0.2}>
            <div className="flex justify-center items-center">
              <div className="w-full max-w-md">
                <Lottie
                  animationData={workingAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right Side - Experience Timeline */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[11px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500 via-primary to-purple-500 hidden md:block"></div>

            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <FadeIn key={exp.id} delay={0.3 + index * 0.15}>
                  <div className="relative flex gap-6 group">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex items-start pt-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-primary flex items-center justify-center ring-4 ring-background shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    </div>

                    {/* Experience Card */}
                    <div className="flex-1">
                      <div className="relative overflow-hidden rounded-xl border border-border bg-card hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-cyan-500/10 group-hover:-translate-y-1">
                        {/* Gradient Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative p-6">
                          {/* Position */}
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {exp.position}
                          </h3>

                          {/* Company Name */}
                          {exp.website ? (
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lg font-semibold text-primary hover:text-cyan-500/70 transition-colors duration-300 hover:underline inline-flex items-center gap-2 mb-2"
                            >
                              {exp.company}
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
                            <p className="text-lg font-semibold text-primary mb-2">
                              {exp.company}
                            </p>
                          )}

                          {/* Period and Location */}
                          <div className="flex flex-wrap gap-4 mb-4">
                            <div className="flex items-center gap-2 text-sm">
                              <svg
                                className="w-4 h-4 text-cyan-500"
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
                                {exp.period}
                              </span>
                            </div>

                            <a
                              href="https://maps.app.goo.gl/NESksyG4P8Mm3qsU6"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm hover:text-cyan-500 transition-colors duration-300 cursor-pointer group/location"
                            >
                              <svg
                                className="w-4 h-4 text-cyan-500 group-hover/location:scale-110 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <span className="font-medium text-foreground group-hover/location:underline">
                                {exp.location}
                              </span>
                            </a>
                          </div>

                          {/* Responsibilities */}
                          <div className="space-y-2 mt-4">
                            <p className="text-md font-bold text-cyan-500 mb-2">
                              Key Responsibilities
                            </p>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((resp, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-muted-foreground flex items-start gap-2"
                                >
                                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0"></span>
                                  <span className="flex-1">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Company Logo Badge */}
                          <div className="absolute top-4 right-4">
                            <div className="w-12 h-12 rounded-full bg-card p-1 flex items-center justify-center text-white font-bold text-sm shadow-lg overflow-hidden border border-border">
                                <img
                                    src="/logos/MADD logo.jpg"
                                    alt="MADD Technology"
                                    className="w-full h-full object-cover rounded-full"
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