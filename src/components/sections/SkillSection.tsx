"use client";

import React from "react";
import Lottie from "lottie-react";
import { FadeIn } from "@/components/reactbits/fade-in";
import developerSkillsAnimation from "../../../public/lottiefiles/developer skills.json";
import {
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiSharp,
  SiPython,
  SiMysql,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiCss3,
  SiPhp,
  SiNodedotjs,
  SiElectron,
  SiExpress,
  SiFastapi,
  SiPostman,
  SiPostgresql,
  SiOracle,
  SiSqlite,
  SiMongodb,
  SiPrimereact,
} from "react-icons/si";
import { Database, Code2, Layout, Server } from "lucide-react";
import { FaJava } from "react-icons/fa";
import { TbAssembly } from "react-icons/tb";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  gradient: string;
  borderGradient: string;
  iconColor: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Programming Language",
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    borderGradient: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500",
    skills: [
      { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
      { name: "C++", icon: <SiCplusplus />, color: "text-[#00599C]" },
      { name: "C#", icon: <SiSharp />, color: "text-[#239120]" },
      { name: "Java", icon: <FaJava />, color: "text-[#DD0031]" },
      { name: "Python", icon: <SiPython />, color: "text-[#3776AB]" },
      { name: "Assembly", icon: <TbAssembly />, color: "text-[#007AAC]" },
      { name: "SQL", icon: <Database className="w-5 h-5" />, color: "text-[#4479A1]" },
    ],
  },
  {
    id: 2,
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    borderGradient: "from-cyan-500 to-blue-500",
    iconColor: "text-cyan-500",
    skills: [
      { name: "Angular", icon: <SiAngular />, color: "text-[#DD0031]" },
      { name: "React", icon: <SiReact />, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-foreground" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
      { name: "CSS3", icon: <SiCss3 />, color: "text-[#1572B6]" },
      { name: "PrimeNG", icon: <SiPrimereact />, color: "text-[#DD0031]" },
      { name: "PrimeReact", icon: <SiPrimereact />, color: "text-[#61DAFB]" },
      { name: "Shadcn UI", icon: <img src="/logos/shadcn-logo.png" alt="Shadcn UI" className="w-5 h-5" />, color: "text-foreground" },
      { name: "Reactbits", icon: <img src="/logos/react-bits-logo.svg" alt="Reactbits" className="w-5 h-5" />, color: "text-[#61DAFB]" },
    ],
  },
  {
    id: 3,
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    borderGradient: "from-green-500 to-emerald-500",
    iconColor: "text-green-500",
    skills: [
      { name: "PHP", icon: <SiPhp />, color: "text-[#777BB4]" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]" },
      { name: "Electron.js", icon: <SiElectron />, color: "text-[#47848F]" },
      { name: "Express.js", icon: <SiExpress />, color: "text-foreground" },
      { name: "FastAPI", icon: <SiFastapi />, color: "text-[#009688]" },
      { name: "REST API", icon: <Database className="w-5 h-5" />, color: "text-primary" },
      { name: "Postman", icon: <SiPostman />, color: "text-[#FF6C37]" },
    ],
  },
  {
    id: 4,
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-orange-500 via-red-500 to-pink-500",
    borderGradient: "from-orange-500 to-red-500",
    iconColor: "text-orange-500",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "text-[#4479A1]" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#4169E1]" },
      { name: "Microsoft SQL Server", icon: <Database className="w-4 h-4" />, color: "text-[#339933]" },
      { name: "Oracle SQL", icon: <SiOracle />, color: "text-[#F80000]" },
      { name: "SQLite3", icon: <SiSqlite />, color: "text-[#003B57]" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
    ],
  },
];

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Skills
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A professional overview of my technical skills, tools, and frameworks.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Lottie Animation */}
          <FadeIn delay={0.2}>
            <div className="flex justify-center items-center lg:sticky lg:top-20">
              <div className="w-full max-w-md">
                <Lottie
                  animationData={developerSkillsAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right Side - Skill Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-auto">
            {skillCategories.map((category, index) => (
              <FadeIn key={category.id} delay={0.3 + index * 0.1}>
                <div className="group relative h-full">
                  <div className="relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-1 h-full flex flex-col">
                    {/* Gradient Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    <div className="relative p-6 flex flex-col h-full">
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`${category.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                          {category.icon}
                        </div>
                        <h3 className="text-lg font-bold text-foreground">
                          {category.title}
                        </h3>
                      </div>

                      {/* Skills List */}
                      <div className="space-y-3 flex-grow">
                        {category.skills.map((skill, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 group/skill"
                          >
                            <div className={`${skill.color} text-xl group-hover/skill:scale-110 transition-transform duration-300 flex-shrink-0`}>
                              {skill.icon}
                            </div>
                            <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}