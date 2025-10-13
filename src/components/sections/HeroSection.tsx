"use client";

import React from "react";
import { FadeIn } from "@/components/reactbits/fade-in";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";

const socialLinks = [
	{ icon: "pi pi-github", href: "https://github.com/Rauf-17", label: "GitHub" },
	{ icon: "pi pi-linkedin", href: "https://linkedin.com/in/raufislam17", label: "LinkedIn" },
	{ icon: "pi pi-facebook", href: "https://facebook.com/raufull.islam.rauf", label: "Facebook" },
	{ icon: "pi pi-google", href: "mailto:rauf.shuvo3272@gmail.com", label: "Google" },
	{ icon: "pi pi-twitter", href: "https://twitter.com/rauf_shuvo", label: "Twitter" },
];

export function HeroSection() {
	return (
		<section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
			{/* Background gradient effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20 pointer-events-none" />
			<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

			<div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
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
							<p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
								<span className="text-foreground"> I'm a Junior </span>
								<span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
									Software Engineer.
								</span>
							</p>
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
									<i className={`${social.icon} text-xl text-cyan-500 group-hover:text-purple-500 group-hover:scale-110 transition-transform`} />
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
								<Link href="/resume.pdf" target="_blank">
									<i className="pi pi-download mr-2" />
									GET RESUME
								</Link>
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
									</div>
									<div className="pl-12">
										<span className="text-green-400">'PostgreSQL'</span>
										<span className="text-foreground/70">, </span>
										<span className="text-green-400">'MongoDB'</span>
										<span className="text-foreground/70">, </span>
										<span className="text-green-400">'MySQL'</span>
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
		</section>
	);
}