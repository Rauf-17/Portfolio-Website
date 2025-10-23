"use client";

import React, { useMemo } from "react";
import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Calendar, Sparkles, Code2 } from "lucide-react";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/reactbits/fade-in";
import { notFound } from "next/navigation";

interface SingleProjectProps {
  params: Promise<{ slug: string }>;
}

export default function SingleProject({ params }: SingleProjectProps) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Get 3 deterministic "random" projects based on current project ID
  // This ensures server and client render the same projects
  const randomProjects = useMemo(() => {
    const otherProjects = projects.filter((p) => p.id !== project.id);
    
    // Use project ID as seed for deterministic selection
    const seed = project.id;
    const selectedIndices = new Set<number>();
    
    // Generate 3 deterministic indices
    for (let i = 0; i < Math.min(3, otherProjects.length); i++) {
      let index = (seed * (i + 1) * 7) % otherProjects.length;
      // Ensure unique indices
      while (selectedIndices.has(index)) {
        index = (index + 1) % otherProjects.length;
      }
      selectedIndices.add(index);
    }
    
    return Array.from(selectedIndices).map(i => otherProjects[i]);
  }, [project.id]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Back Button - Fixed Position */}
      <div className="sticky top-6 z-50 px-4 md:px-8 lg:px-16 py-4">
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-pink-500 bg-card/80 backdrop-blur-md border border-border text-foreground font-semibold hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to projects
          </Link>
        </FadeIn>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 relative z-10">
        {/* Project Header */}
        <FadeIn>
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary font-medium border border-primary/30">
                {project.category}
              </span>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="p-2 rounded-full bg-primary/20 text-primary border border-primary/30">
                  <Calendar className="w-4 h-4" />
                </span>
                <span className="text-sm font-medium">{project.date} - {project.status}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              {project.title}
            </h1>
          </div>
        </FadeIn>

        {/* Hero Image - Contained */}
        <FadeIn delay={0.1}>
          <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-border mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>

        {/* Project Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Description - Takes 2 columns */}
          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Code2 className="w-8 h-8 text-primary" />
                  About the Project
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                  >
                    <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-card border-2 border-border font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300 group shadow-lg"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </FadeIn>

          {/* Technologies Sidebar */}
          <FadeIn delay={0.3}>
            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm sticky top-32 h-fit">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Project Features Section */}
        <FadeIn delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16" />

        {/* Related Projects */}
        <FadeIn delay={0.5}>
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">You might also like</h2>
              <Link
                href="/projects"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-2 group"
              >
                View All Projects
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {randomProjects.map((relatedProject, index) => (
                <FadeIn key={relatedProject.id} delay={0.6 + index * 0.1}>
                  <Link href={`/projects/${relatedProject.slug}`}>
                    <div className="group relative h-full cursor-pointer">
                      <div className="relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-2 h-full flex flex-col">
                        {/* Category Badge */}
                        <div className="absolute top-4 right-4 z-20">
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm">
                            {relatedProject.category}
                          </span>
                        </div>

                        {/* Gradient Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${relatedProject.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10`}></div>

                        {/* Project Image */}
                        <div className="relative w-full h-48 bg-muted overflow-hidden">
                          <Image
                            src={relatedProject.image}
                            alt={relatedProject.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        {/* Project Content */}
                        <div className="relative p-5 flex flex-col flex-grow">
                          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                            {relatedProject.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                            {relatedProject.shortDescription}
                          </p>
                          
                          {/* Tech Tags */}
                          <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                            {relatedProject.technologies.slice(0, 3).map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 text-xs font-medium rounded bg-primary/10 text-primary"
                              >
                                {tech}
                              </span>
                            ))}
                            {relatedProject.technologies.length > 3 && (
                              <span className="px-2 py-1 text-xs font-medium rounded bg-primary/10 text-primary">
                                +{relatedProject.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}