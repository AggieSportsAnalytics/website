import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from 'next/image'

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Events", href: "/events" },
	{ name: "About", href: "/about" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-br from-[#7477B2]/20 via-[#494A9F]/20 to-[#332E8A]/20">
			<nav className="my-16 ">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-slate-300 hover:text-slate-200"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			
			<Particles
				className="absolute inset-0 -z-10"
				
			/>
			<h1 className="drop-shadow-glow z-10 text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline  font-display sm:text-5xl md:text-8xl whitespace-nowrap bg-clip-text animate-title">
				Aggie Sports Analytics
				
			</h1>
			<Image
				className="pt-8 animate-fade-in"
				src="/borderLogo.png"
				alt="Logo"
				width={250}
				height={200}
			/>

			<div className="my-16 text-center ">
				<h2 className="text-sm text-slate-300">
					Revolutioning sports success through data science and machine learning.



				</h2>
			</div>
		</div>
	);
}
