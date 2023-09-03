import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from 'next/image'
import ProjectsLayout from "./projects/layout";
import { LogoNav } from "./components/logonav";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Events", href: "/events" },
	{ name: "About", href: "/about" },
];

export default function Home() {
	return (

		<div className="flex flex-col items-center w-screen h-screen overflow-hidden bg-zinc-950 ">
			

			<div className="navbar-center hidden lg:flex text-slate-300 mt-8 drop-shadow-glow z-10">
				<ul className="menu menu-horizontal px-1 text-lg font-extrabold z-10">
				<li><Link href="/projects">Projects</Link></li>
				<li><a>Events</a></li>


				<li><a>Community</a></li>
				<li><a>About Us</a></li>
				</ul>
				

				</div>
			{/* <nav className="my-12 ">
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
			</nav> */}
			
			<Particles
				className="absolute inset-0   "
				
			/>
			<h1 className="mt-44 drop-shadow-glow z-10 text-3xl text-transparent duration-1000 bg-gradient-to-r from-[#bb9cff] to-[#ffa3ba] cursor-default  font-display sm:text-5xl md:text-8xl whitespace-nowrap bg-clip-text ">
				Aggie Sports Analytics
				
			</h1>

			{/* <div className="flex pt-2 ">
				<button className="mt-8 mx-1 btn bg-[#ffffff] hover:bg-[#7477b2] text-black">Join Now</button>
				<button className="mt-8 mx-1 btn btn-outline  hover:bg-neutral-950  text-slate-300">Contact Us</button>
			</div> */}
						<Image
				className="pt-6 m-6 z-10"
				src="/bLogo.png"
				alt="Logo"
				width={250}
				height={200}
			/>

			<div className="my-2 px-8 text-center  ">
				<h2 className="text-2xl text-zinc-300 pt-2 drop-shadow-glow">
					Redefining sports success through data science and machine learning.



				</h2>
			</div>

		</div>
		
	);
}
