"use client";

import React from "react";
import { FadeIn } from "@/components/reactbits/fade-in";
import { TextType } from "@/components/reactbits/text-type";
import { LogoLoop } from "@/components/reactbits/logo-loop";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";
import {
	SiAngular,
	SiReact,
	SiNextdotjs,
	SiElectron,
	SiTailwindcss,
	SiPhp,
	SiCodeigniter,
	SiCplusplus,
	SiPostgresql,
	SiMongodb,
	SiMysql,
	SiNodedotjs,
	SiTypescript,
    SiPrimereact,
	SiPostman,
	SiGit,
	SiPython,
	SiSqlite,
} from "react-icons/si";const socialLinks = [
    { icon: "pi pi-github", href: "https://github.com/Rauf-17", label: "GitHub" },
    { icon: "pi pi-linkedin", href: "https://linkedin.com/in/raufislam17", label: "LinkedIn" },
    { icon: "pi pi-facebook", href: "https://facebook.com/raufull.islam.rauf", label: "Facebook" },
    { icon: "pi pi-google", href: "mailto:rauf.shuvo3272@gmail.com", label: "Google" },
    { icon: "pi pi-twitter", href: "https://twitter.com/rauf_shuvo", label: "Twitter" },
];

const techLogos = [
	{ node: <SiAngular className="text-[#DD0031]" />, title: "Angular", href: "https://angular.io" },
	{ node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
	{ node: <SiNextdotjs className="text-foreground" />, title: "Next.js", href: "https://nextjs.org" },
	{ node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
	{ node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://typescriptlang.org" },
	{ node: <SiElectron className="text-[#47848F]" />, title: "Electron", href: "https://electronjs.org" },
	{ node: <SiPrimereact className="text-[#42B0FF]" />, title: "PrimeReact", href: "https://primereact.org" },
    { node: <SiPrimereact className="text-[#DD0031]" />, title: "PrimeNG", href: "https://primeng.org" },
    { node: <img src={"/shadcn-logo.png"} alt="Shadcn UI" className="w-6 h-6" />, title: "Shadcn UI", href: "https://shadcn.com/ui" },
    { node: <img src={"react-bits-logo.svg"} alt="React Bits" className="w-6 h-6" />, title: "React Bits", href: "https://react-bits.com" },
    { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
	{ node: <SiPhp className="text-[#777BB4]" />, title: "PHP", href: "https://php.net" },
	{ node: <SiCodeigniter className="text-[#EF4223]" />, title: "CodeIgniter", href: "https://codeigniter.com" },
	{ node: <SiPython className="text-[#3776AB]" />, title: "Python", href: "https://python.org" },
	{ node: <SiCplusplus className="text-[#00599C]" />, title: "C++", href: "https://isocpp.org" },
	{ node: <SiPostgresql className="text-[#4169E1]" />, title: "PostgreSQL", href: "https://postgresql.org" },
	{ node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB", href: "https://mongodb.com" },
	{ node: <SiMysql className="text-[#4479A1]" />, title: "MySQL", href: "https://mysql.com" },
	{ node: <SiSqlite className="text-[#003B57]" />, title: "SQLite", href: "https://sqlite.org" },
	{ node: <SiGit className="text-[#F05032]" />, title: "Git", href: "https://git-scm.com" },
	{ node: <SiPostman className="text-[#FF6C37]" />, title: "Postman", href: "https://postman.com" },
];export function HeroSection() {
    return (
        <section className="relative py-12 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20 pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto relative z-10 space-y-12">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <FadeIn>
                        <div className="space-y-6">
                            {/* Greeting */}
                            <div className="space-y-3">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                    Hello,
                                </h2>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                    <span className="text-foreground">This is </span>
                                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent animate-gradient">
                                        RAUFULL ISLAM RAUF,
                                    </span>
                                </h1>
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight flex items-center gap-2 flex-wrap">
                                    <span className="text-foreground">I'm a </span>
                                    <TextType
                                        text={["Junior Software Engineer", "Frontend Developer"]}
                                        as="span"
                                        typingSpeed={75}
                                        pauseDuration={1500}
                                        deletingSpeed={50}
                                        showCursor={true}
                                        cursorCharacter="|"
                                        cursorClassName="text-cyan-400"
                                        className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent"
                                        textColors={["#22d3ee", "#a855f7", "#ec4899", "#22d3ee"]}
                                        loop={true}
                                    />
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-pink-500/20 hover:from-purple-500/40 hover:to-pink-500/40 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <i
                                            className={`${social.icon} text-xl text-cyan-500 group-hover:text-purple-500 group-hover:scale-110 transition-transform`}
                                        />
                                    </Link>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-3">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-purple-500/50 text-foreground hover:bg-purple-500/20 hover:border-purple-500 rounded-full px-6 transition-all duration-300"
                                >
                                    <Link href="#contact">
                                        <i className="pi pi-user mr-2" />
                                        CONTACT ME
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-6 shadow-lg shadow-pink-500/30 transition-all duration-300"
                                >
                                    <a href="/Raufull Islam Rauf - CV.pdf" download="Raufull_Islam_Rauf_CV.pdf">
                                        <i className="pi pi-download mr-2" />
                                        GET RESUME
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Content - Code Block */}
                    <FadeIn delay={0.2}>
                        <div className="relative">
                            {/* Code Window */}
                            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg shadow-2xl overflow-hidden">
                                {/* Window Controls */}
                                <div className="flex items-center gap-2 px-4 py-2.5 bg-card/80 border-b border-border">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>

                                {/* Code Content */}
                                <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-x-auto max-h-[500px] overflow-y-auto">
                                    <div className="space-y-0.5">
                                        <div>
                                            <span className="text-pink-400">const</span>{" "}
                                            <span className="text-cyan-400">coder</span>{" "}
                                            <span className="text-foreground/70">=</span>{" "}
                                            <span className="text-yellow-400">{"{"}</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-cyan-400">name:</span>{" "}
                                            <span className="text-green-400">'Raufull Islam Rauf'</span>
                                            <span className="text-foreground/70">,</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-cyan-400">skills:</span>
                                            <span className="text-yellow-400">[</span>
                                            <span className="text-green-400">'Angular'</span>
                                            <span className="text-foreground/70">, </span>
                                            <span className="text-green-400">'React'</span>
                                            <span className="text-foreground/70">, </span>
                                            <span className="text-green-400">'NextJS'</span>
                                            <span className="text-foreground/70">, </span>
                                            <span className="text-green-400">'ElectronJS'</span>
                                            <span className="text-foreground/70">, </span>
                                            <span className="text-green-400">'Tailwind'</span>
                                            <span className="text-foreground/70">, </span>
                                            <span className="text-green-400">'PHP'</span>
                                            <span className="text-foreground/70">, </span>
                                            <span className="text-green-400">'CodeIgnitor'</span>
                                            <span className="text-foreground/70">, </span>
                                            <span className="text-green-400">'C++'</span>
                                            <span className="text-foreground/70">,</span>
											<span className="text-green-400">'Python'</span>
                                            <span className="text-foreground/70">,</span>
                                        </div>
                                        <div className="pl-12">
                                            <span className="text-green-400">'PostgreSQL'</span>
                                            <span className="text-foreground/70">, </span>
                                            <span className="text-green-400">'MongoDB'</span>
                                            <span className="text-foreground/70">, </span>
                                            <span className="text-green-400">'MySQL'</span>
											<span className="text-green-400">'SQLite'</span>
                                            <span className="text-yellow-400">]</span>
                                            <span className="text-foreground/70">,</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-cyan-400">QuickLearner:</span>{" "}
                                            <span className="text-purple-400">true</span>
                                            <span className="text-foreground/70">,</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-cyan-400">ProblemSolver:</span>{" "}
                                            <span className="text-purple-400">true</span>
                                            <span className="text-foreground/70">,</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-cyan-400">AiEnthusiastic:</span>{" "}
                                            <span className="text-purple-400">true</span>
                                            <span className="text-foreground/70">,</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-cyan-400">hireable:</span>{" "}
                                            <span className="text-pink-400">function</span>
                                            <span className="text-yellow-400">()</span>{" "}
                                            <span className="text-yellow-400">{"{"}</span>
                                        </div>
                                        <div className="pl-8">
                                            <span className="text-pink-400">return</span>{" "}
                                            <span className="text-yellow-400">(</span>
                                        </div>
                                        <div className="pl-12">
                                            <span className="text-purple-400">this</span>
                                            <span className="text-foreground/70">.</span>
                                            <span className="text-cyan-400">QuickLearner</span>{" "}
                                            <span className="text-pink-400">&&</span>
                                        </div>
                                        <div className="pl-12">
                                            <span className="text-purple-400">this</span>
                                            <span className="text-foreground/70">.</span>
                                            <span className="text-cyan-400">ProblemSolver</span>{" "}
                                            <span className="text-pink-400">&&</span>
                                        </div>
                                        <div className="pl-12">
                                            <span className="text-purple-400">this</span>
                                            <span className="text-foreground/70">.</span>
                                            <span className="text-cyan-400">AiEnthusiastic</span>{" "}
                                            <span className="text-pink-400">&&</span>
                                        </div>
                                        <div className="pl-12">
                                            <span className="text-purple-400">this</span>
                                            <span className="text-foreground/70">.</span>
                                            <span className="text-cyan-400">skills</span>
                                            <span className="text-foreground/70">.</span>
                                            <span className="text-cyan-400">length</span>{" "}
                                            <span className="text-pink-400">{">="}</span>{" "}
                                            <span className="text-purple-400">11</span>
                                        </div>
                                        <div className="pl-8">
                                            <span className="text-yellow-400">);</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-yellow-400">{"}"}</span>
                                        </div>
                                        <div>
                                            <span className="text-yellow-400">{"};"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-2xl pointer-events-none" />
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl pointer-events-none" />
                        </div>
                    </FadeIn>
                </div>

                {/* Skills Marquee Section */}
                <FadeIn delay={0.4}>
                    <div className="space-y-6 pt-8">
                        <div className="text-center space-y-2">
                            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Technologies & Tools
                            </h3>
                            <p className="text-muted-foreground">
                                Powered by modern frameworks and cutting-edge technologies
                            </p>
                        </div>
                        <div className="h-24 relative">
                            <LogoLoop
                                logos={techLogos}
                                speed={120}
                                direction="left"
                                logoHeight={48}
                                gap={48}
                                pauseOnHover
                                scaleOnHover
                                fadeOut
                                ariaLabel="Technologies I work with"
                            />
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}