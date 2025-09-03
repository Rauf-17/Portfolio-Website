"use client";

import React from "react";
import Link from "next/link";

const navItems = [
	{ href: "#about", label: "ABOUT" },
	{ href: "#education", label: "EDUCATION" },
	{ href: "#experience", label: "EXPERIENCE" },
	{ href: "#skills", label: "SKILLS" },
	{ href: "#projects", label: "PROJECTS" },
	{ href: "#certificates", label: "CERTIFICATES" },
	{ href: "#contact", label: "CONTACT" },
];

export function MainNav() {
	return (
		<nav className="hidden md:flex items-center gap-8">
			{navItems.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors duration-200 relative group"
				>
					{item.label}
					<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
				</Link>
			))}
		</nav>
	);
}