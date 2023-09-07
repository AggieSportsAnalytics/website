import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from 'next/image'
import ProjectsLayout from "./projects/layout";
import { LogoNav } from "./components/logonav";
import Head from 'next/head';

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Events", href: "/events" },
	{ name: "Community", href: "/community" },
	{ name: "About", href: "/about" },
];

export default function Home() {
	return (
		<div className=" w-screen min-h-screen  overflow-hidden bg-zinc-950 text-xs ">

		<div className="navbar bg-zinc-950 m-1">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-zinc-300" fill="none" viewBox="0 0 24 24" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="z-30 menu menu-md dropdown-content mt-3 p-2 shadow bg-zinc-950  rounded-box w-52 text-zinc-400 ">
        <li><a href="/projects">Projects</a></li>
		<li><a href="/events">Events</a></li>
        <li><a href="/community">Community</a></li>
		<li><a href="/about">About</a></li>
      </ul>
    </div>
    <a href="/" className="btn btn-ghost ml-4 "><img src="/bLogo.png" alt="Aggie Sports Analytics Logo" width={100}></img></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-zinc-200 text-lg">
	<li><a href="/projects">Projects</a></li>
		<li><a href="/events">Events</a></li>
        <li><a href="/community">Community</a></li>
		<li><a href="/about">About</a></li>
		
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn mr-8 bg-indigo-800  text-zinc-100 ">Join Now</button>
  </div>
</div>
<div className="w-full h-px bg-zinc-800" />
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
			
			<div className="flex flex-col justify-center items-center">
			<div className=" mt-20 mb-4 drop-shadow-glow px-4 bottom-2 z-20 text-4xl leading-[3rem] duration-1000 bg-gradient-to-r from-20% bg-clip-text text-transparent from-purple-400 to-blue-400 cursor-default  font-display sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap  ">
				Aggie Sports Analytics
				
			</div>

			{/* <div className="flex pt-2 ">
				<button className="mt-8 mx-1 btn bg-[#ffffff] hover:bg-[#7477b2] text-black">Join Now</button>
				<button className="mt-8 mx-1 btn btn-outline  hover:bg-neutral-950  text-slate-300">Contact Us</button>
			</div> */}


			<div className="my-4 px-8 text-center  ">
				<h2 className="text-md text-zinc-300 pt-2 font-semibold sm:text-xl md:text-2xl">
					Redefining sports success through data science and machine learning.



				</h2>
			</div>
			<Image
				className="px-4"
				src="/hero.png"
				width={550}
				height={550}
				alt="Aggie Sports Analytics Hero Image"
				/>
			</div>


		</div>
		
	);
}
