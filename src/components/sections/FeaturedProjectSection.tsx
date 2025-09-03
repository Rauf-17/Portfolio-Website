"use client";

import React from "react";
import { FadeIn } from "@/components/reactbits/fade-in";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Neeramoy Desktop Application",
    description: "A powerful cross-platform desktop application built with Electron.js, Angular, and Node.js. Features offline support, data synchronization, customizable themes, and real-time updates across Windows, macOS, and Linux.",
    image: "/projects/neeramoy-desktop.png",
    technologies: ["Angular", "Node.js", "Electron.js", "SQLite3", "PrimeNG"],
    githubUrl: "https://github.com/Rauf-17/Neeramoy_Desktop",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Queue Management System",
    description: "A modern queue management system with real-time updates and notifications. Features customer and service desk management, responsive design, and seamless integration with backend services for various service environments.",
    image: "/projects/queue-management-system.png",
    technologies: ["Angular", "Node.js", "PrimeNG", "TypeScript"],
    githubUrl: "https://github.com/Rauf-17/queue-management-system",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "This neon-themed portfolio built with Next.js 15, Tailwind CSS 4, and Framer Motion, featuring smooth animations and dark mode.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/Rauf-17/Portfolio-Website",
    liveUrl: "https://portfolio-demo.com",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Popular Furniture Website",
    description: "A full-featured e-commerce furniture platform built with Laravel and PHP. Features user and admin authentication, role-based permissions, automated backups, API authentication with Passport, and CAPTCHA security integration.",
    image: "/projects/popular-furniture.png",
    technologies: ["PHP", "Laravel", "MySQL", "Alpine.js", "Chart.js"],
    githubUrl: "https://github.com/Rauf-17/Popular-Furniture",
    liveUrl: "https://popularfurniturebd.com/",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "PC Builder & Component Shopping",
    description: "A comprehensive Windows desktop application for building custom PCs and shopping computer components. Features role-based access control with Admin, Staff, and Buyer roles, product management, order tracking, and inventory management.",
    image: "/projects/pc-builder.png",
    technologies: ["C#", "WinForms", "ADO.NET", "SQL Server"],
    githubUrl: "https://github.com/Rauf-17/Projects/blob/main/PC%20Builder%20and%20Component%20Shopping.zip",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 6,
    title: "Padma Bridge - 3D Visualization",
    description: "A 3D graphical representation of Bangladesh's iconic Padma Bridge using C++ and OpenGL. Features multiple environmental scenarios (day, night, rain), animated vehicles and boats, interactive scene switching, and real-time rendering.",
    image: "/projects/padma-bridge-1.png",
    technologies: ["C++", "OpenGL", "FreeGLUT", "Computer Graphics"],
    githubUrl: "https://github.com/Rauf-17/Computer-Graphics/tree/main/Architecture%20Marvel-%20Padma%20Bridge",
    gradient: "from-blue-500 to-cyan-500",
  },
];

export default function FeaturedProjectSection() {
  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-background to-purple-900/20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my most impactful and technically challenging work.
            </p>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 + index * 0.1}>
              <div className="group relative h-full">
                <div className="relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-2 h-full flex flex-col">
                  {/* Gradient Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Project Image */}
                  <div className="relative w-full h-48 bg-muted overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="relative p-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 group/icon"
                            aria-label="View on GitHub"
                          >
                            <Github className="w-5 h-5 group-hover/icon:scale-110 transition-transform duration-300" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 group/icon"
                            aria-label="View Live Project"
                          >
                            <ExternalLink className="w-5 h-5 group-hover/icon:scale-110 transition-transform duration-300" />
                          </a>
                        )}
                      </div>

                      <a
                        href={project.liveUrl || project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300 group/link"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}