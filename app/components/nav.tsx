"use client";
import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const navLinks = [
		{ href: "/about", label: "About" },
		{ href: "/projects", label: "Projects" },
		{ href: "/community", label: "Community" },
		{ href: "https://medium.com/@aggiesportsanalytics", label: "Journalism", external: true },
		{ href: "/apply", label: "Join" },
	];

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 duration-200 backdrop-blur-2xl border-zinc-600 ${
					isIntersecting ? "border-none" : "border-b"
				}`}
			>
				<div className="container flex items-center justify-between p-6 mx-auto">
					<Link
						href="/"
						className="duration-200 text-zinc-900 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6" />
					</Link>

					{/* Desktop menu */}
					<nav className="hidden md:flex">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								target={link.external ? "_blank" : undefined}
								className={`px-4 py-2 duration-200 text-zinc-300 ${
									pathname === link.href ? "underline" : ""
								}`}
							>
								{link.label}
							</Link>
						))}
					</nav>

					{/* Mobile menu button */}
					<button
						className="md:hidden text-zinc-300 hover:text-zinc-100"
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					>
						{isDropdownOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>

				{/* Mobile dropdown menu */}
				{isDropdownOpen && (
					<nav className="md:hidden bg-zinc-900 border-t border-zinc-800">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								target={link.external ? "_blank" : undefined}
								className={`block px-6 py-3 duration-200 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 ${
									pathname === link.href ? "underline" : ""
								}`}
								onClick={() => setIsDropdownOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</nav>
				)}
			</div>
		</header>
	);
};
