"use client";

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from 'next/image';
import ProjectsLayout from "./projects/layout";
import { LogoNav } from "./components/logonav";
import Head from 'next/head';
import { Footer } from "./components/footer";

// Import Framer Motion components
import { motion } from 'framer-motion';

// Define your navigation links
const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Articles", href: "/articles" },
  { name: "Members", href: "/members" },
  { name: "About", href: "/about" },
];

export default function Home() {
  return (
    <div className="w-screen min-h-screen overflow-hidden bg-[#000000] text-xs">
      
      {/* Navbar Section (Exempt from Animation) */}
      <div className="navbar bg-[#000000]">
        <div className="navbar navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-zinc-300" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="z-30 menu menu-md dropdown-content mt-3 p-2 shadow bg-zinc-950 rounded-box w-52 text-zinc-300">
              <li><a className="text-lg" href="/about">About</a></li>
              <li><a className="text-lg" href="/projects">Projects</a></li>
              <li><a className="text-lg" href="/journalism">Journalism</a></li>
              <li><a className="text-lg" href="/members">Team</a></li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost">
            <img src="/bLogo.png" alt="Aggie Sports Analytics Logo" width={100} />
          </a>
        </div>
        <div className="navbar-center">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-zinc-200 text-xl">
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/journalism">Journalism</a></li>
              <li><a href="/members">Team</a></li>			
            </ul>
          </div>
        </div>
        <div className="navbar-end">
		<button className="btn mr-4 bg-[#346DD0] text-zinc-100">
            <a href="/apply">Join</a>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#000000] min-h-screen">
      {/* Main Content with Fade-In Animation */}
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 20 }}      // Start with opacity 0 and slightly shifted down
        animate={{ opacity: 1, y: 0 }}      // Animate to opacity 1 and original position
        transition={{ duration: 1, ease: "easeOut" }} // Duration and easing of the animation
      >
        <div className="mt-16 mb-4 px-4 bottom-2 z-20 text-4xl leading-[3rem] duration-1000 bg-gradient-to-r from-20% bg-clip-text text-transparent from-[#346DD0] to-[#E2BD6B] cursor-default font-display sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:leading-[7.5rem] whitespace-nowrap">
          Aggie Sports Analytics
        </div>

        {/* Optional Buttons (Commented Out) */}
        {/* 
        <div className="flex pt-2">
          <button className="mt-8 mx-1 btn bg-[#ffffff] hover:bg-[#7477b2] text-black">Join Now</button>
          <button className="mt-8 mx-1 btn btn-outline hover:bg-neutral-950 text-slate-300">Contact Us</button>
        </div>
        */}

        {/* Subtitle */}
        <div className="my-4 px-8 text-center">
          <h2 className="text-lg text-zinc-300 font-semibold sm:text-xl md:text-2xl">
            Redefining the future of sports technology at UC Davis
          </h2>
        </div>

        <br></br>
        <br></br>

        {/* Image Collage */}
        <div className="w-full max-w-6xl px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <motion.div 
              className="relative h-64 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, rotate: -4 }}
              animate={{ opacity: 1, rotate: -3 }}
              whileHover={{ scale: 1.03, rotate: -6 }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.3 },
                scale: { duration: 0.3 }
              }}
            >
              <Image 
                src="/hp2.png" 
                alt="Sports Analytics" 
                fill 
                className="object-cover"
              />
            </motion.div>
            <motion.div 
              className="relative h-64 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, rotate: 2 }}
              animate={{ opacity: 1, rotate: 2 }}
              whileHover={{ scale: 1.03, rotate: 6 }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.6 },
                scale: { duration: 0.3 }
              }}
            >
              <Image 
                src="/hp1.png" 
                alt="Data Analysis" 
                fill 
                className="object-cover"
              />
            </motion.div>
            <motion.div 
              className="relative h-64 rounded-lg overflow-hidden col-span-2 md:col-span-1 shadow-lg"
              initial={{ opacity: 0, rotate: -3 }}
              animate={{ opacity: 1, rotate: -2 }}
              whileHover={{ scale: 1.03, rotate: -6 }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.9 },
                scale: { duration: 0.3 }
              }}
            >
              <Image 
                src="/hp3.png" 
                alt="Team Collaboration" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
        
      </motion.div>

      {/* Footer Section (Exempt from Animation) */}
	  </div>
	  <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
