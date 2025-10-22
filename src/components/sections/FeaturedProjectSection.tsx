"use client";

import React from "react";
import Link from "next/link";
import { FadeIn } from "@/components/reactbits/fade-in";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function FeaturedProjectSection() {
  // Take only first 6 projects for featured section
  const featuredProjects = projects.slice(0, 6);

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
        {/* Header with top-right "View All Projects" button */}
        <div className="relative mb-16">
          <Link
            href="/projects"
            className="absolute right-0 top-0 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-primary/10 text-primary border border-border transition-all duration-300"
            aria-label="View all projects"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>

          <FadeIn>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A showcase of my most impactful and technically challenging work.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 + index * 0.1}>
              <Link href={`/projects/${project.slug}`}>
                <div className="group relative h-full cursor-pointer">
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
                        {project.shortDescription}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 5).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
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
                              onClick={(e) => e.stopPropagation()}
                              className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 group/icon"
                              aria-label="View Live Project"
                            >
                              <ExternalLink className="w-5 h-5 group-hover/icon:scale-110 transition-transform duration-300" />
                            </a>
                          )}
                        </div>

                        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-primary/80 transition-colors duration-300">
                          View Details
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}