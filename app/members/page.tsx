"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import Head from 'next/head';
import { motion } from 'framer-motion';

// 1. Define the data array for team members
const teamMembers = [
  {
    name: "Andrew Hale",
    role: "President",
    image: "/andrew.png",
    linkedin: "https://www.linkedin.com/in/andrew-hale6/",
  },
  {
    name: "Jason Yang",
    role: "Vice President",
    image: "/jason.png",
    linkedin: "https://www.linkedin.com/in/jason-yang-269a3a244/",
  },
  {
    name: "Vishal Shenoy",
    role: "Director of Projects",
    image: "/vishal.png",
    linkedin: "https://www.linkedin.com/in/shenoyvishal/",
  },
  {
    name: "Aashritha Javvaji",
    role: "Director of Business",
    image: "/aashritha.png",
    linkedin: "https://www.linkedin.com/in/aashritha-javvaji/",
  },
  {
    name: "Ben Busche",
    role: "Director of Media",
    image: "/benjamin.png",
    linkedin: "https://www.linkedin.com/in/ben-busche/",
  },
  {
    name: "Chris Lo",
    role: "Advisor",
    image: "/chris.png",
    linkedin: "https://www.linkedin.com/in/christopherlo34/",
  },
  {
    name: "Vikram Choudhry",
    role: "Advisor & Project Manager",
    image: "/vikram.png",
    linkedin: "https://www.linkedin.com/in/vikramchoudhry24/",
  },
  {
    name: "Alice Nguyen",
    role: "Project Manager",
    image: "/alice.png",
    linkedin: "https://www.linkedin.com/in/alice-t-nguyen/",
  },
  {
    name: "Arnav Akula",
    role: "Project Manager",
    image: "/arnav.png",
    linkedin: "https://www.linkedin.com/in/arnavakula/",
  },
  {
    name: "Darshan Shivakumar",
    role: "Project Manager",
    image: "/darshan.png",
    linkedin: "https://www.linkedin.com/in/darshan-shivakumar/",
  },
  {
    name: "Devon Streelman",
    role: "Project Manager",
    image: "/devon.png",
    linkedin: "https://www.linkedin.com/in/devon-streelman/",
  },
  {
    name: "Keshav Lodha",
    role: "Project Manager",
    image: "/keshav.png",
    linkedin: "https://www.linkedin.com/in/keshav-lodha-0497541b7/",
  },
  {
    name: "Krishna Gupta",
    role: "Project Manager",
    image: "/krishna.png",
    linkedin: "https://www.linkedin.com/in/krishna-gupta-a19b67233/",
  },
  {
    name: "Nathaniel Maffly",
    role: "Project Manager",
    image: "/nate.png",
    linkedin: "https://www.linkedin.com/in/nathaniel-maffly-390235268/",
  },
  {
    name: "Tej Gaonkar",
    role: "Project Manager",
    image: "/tej.png",
    linkedin: "https://www.linkedin.com/in/tej-gaonkar-89a51a203/",
  },
  {
    name: "Israel Shokrian",
    role: "Head of External Affairs",
    image: "/israel.png",
    linkedin: "https://www.linkedin.com/in/israel-shokrian-5940b1281/",
  },
  {
    name: "Tisha Kathrani",
    role: "Head of Internal Affairs",
    image: "/tisha.png",
    linkedin: "https://www.linkedin.com/in/tishakathrani/",
  },
  {
    name: "Manish Rathor",
    role: "Head of Finance",
    image: "/manish.png",
    linkedin: "https://www.linkedin.com/in/manishrathor03/",
  },
  {
    name: "Jim Qu",
    role: "Head of Design",
    image: "/jim.png",
    linkedin: "https://linkedin.com/in/jimm-qu/",
  },
  {
    name: "Jack Orman",
    role: "Head of Social Media",
    image: "/jack.png",
    linkedin: "https://linkedin.com/in/jackorman/",
  },
  {
    name: "Miwa Hirai",
    role: "Head of Journalism",
    image: "/miwa.png",
    linkedin: "https://www.linkedin.com/in/miwahirai/",
  },
  {
    name: "Salvatoré Martinez",
    role: "Head of Production",
    image: "/salvatore.png",
    linkedin: "https://www.linkedin.com/in/salvatore-martinez/",
  },
];

// 2. Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger by 0.1 seconds
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function MembersPage() {
	return (
	  <div className="relative">
		<Head>
		  <title>Team | Aggie Sports Analytics at UC Davis</title>
		</Head>
		
		{/* Navigation Bar */}
		<div className="w-screen bg-[#111111] text-xs">
		  <div className="navbar bg-zinc-950 m-1">
			<div className="navbar-start">
			  <div className="dropdown">
				<label tabIndex={0} className="btn btn-ghost lg:hidden">
				  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-zinc-300" fill="none" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
				  </svg>
				</label>
				<ul tabIndex={0} className="z-30 menu menu-md dropdown-content mt-3 p-2 shadow bg-zinc-950 rounded-box w-52 text-zinc-300">
				  <li><a className="text-lg" href="/about">About</a></li>
				  <li><a className="text-lg" href="/projects">Projects</a></li>
				  <li><a className="text-lg" href="/articles">Articles</a></li>
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
				  <li><a href="/members"><b>Team</b></a></li>
				</ul>
			  </div>
			</div>
			<div className="navbar-end">
			  <button className="btn mr-4 bg-[#5A5CA0] hover:bg-[#393B7F] text-zinc-100">
				<a href="/apply">Join</a>
			  </button>
			</div>
		  </div>
		</div>
		<div className="w-full h-px bg-zinc-800" />
  
		{/* 3. Animated Container */}
		<motion.div
		  className="bg-[#111111] pl-10 pr-10 pt-8" // Reduced pt-12 to pt-8
		  initial="hidden"
		  animate="visible"
		  variants={containerVariants}
		  transition={{ duration: 1 }} // Light fade-in over 1 second
		>
		  <div className="bg-[#111111]">
			<div className="px-6 mx-auto space-y-4 max-w-7xl lg:px-8 md:space-y-8 md:pt-4 lg:pt-6"> {/* Reduced space-y-8 to space-y-4, space-y-16 to space-y-8, pt-8 to pt-4, pt-12 to pt-6 */}
			  <div className="mx-auto lg:mx-0">
				<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-6">
				  Our Team
				</h2>
			  </div>
  
			  {/* Team Members Grid */}
			  <motion.div
				className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-y-8 pb-6 content-center"
				variants={containerVariants}
			  >
				{teamMembers.map((member, index) => (
				  <motion.div
					key={index}
					className="w-64 mb-10 bg-transparent border-gray-700 text-slate-200"
					variants={cardVariants}
				  >
					<figure>
					  <img src={member.image} alt={member.name} />
					</figure>
					<div className="flex mt-5 justify-between items-center">
					  <div>
						<h2 className="card-title">{member.name}</h2>
						<p className="text-md">{member.role}</p>
					  </div>
					  <div className="card-actions">
						<Link target="_blank" href={member.linkedin}>
						  <button className="btn bg-opacity-30 hover:bg-blue-900">
							<Linkedin className="w-5 h-5 duration-200 hover:font-medium text-slate-100" />
						  </button>
						</Link>
					  </div>
					</div>
				  </motion.div>
				))}
			  </motion.div>
  
			  {/* Removed extra <br> tags for cleaner spacing */}
			</div>
			<div className="w-full h-px bg-zinc-800" />
			<Footer />
		  </div>
		</motion.div>
	  </div>
	);
  }
