"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50  duration-200 backdrop-blur  border-zinc-600 ${
					isIntersecting
						? " border-none"
						:  " border-b "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-2 xl:gap-6 2xl:gap-8">
						<Link
							href="/about"
							className="duration-200 text-zinc-300 hover:text-zinc-100 "
						>
							About
						</Link>
						<Link
							href="/projects"
							className="duration-200 text-zinc-300 hover:text-zinc-100 "
						>
							Projects
						</Link>
						<Link
							href="/articles"
							className="duration-200 text-zinc-300 hover:text-zinc-100 "
						>
							Articles
						</Link>
						<Link
							href="/members"
							className="duration-200 text-zinc-300 hover:text-zinc-100 "
						>
							Team
						</Link>
						<Link
							href="/apply"
							className="duration-200 text-zinc-300 hover:text-zinc-100 "
						>
							Join
						</Link>

					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					> 
						 <ArrowLeft className="w-6 h-6 " />

					</Link>
				</div>
			</div>
		</header>
	);
};
