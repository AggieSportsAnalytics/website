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
    role: "Advisor, Project Manager",
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
    name: "Cory Pham",
    role: "Project Manager",
    image: "/cory.png",
    linkedin: "https://www.linkedin.com/in/cory-pham/",
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

// Add new array for additional members (add this near the top with other data)
const additionalMembers = [
  {
    name: "Abhi Barathi",
    role: "External Affairs",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Adeeba Mohamed-Ali",
    role: "External Affairs",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Krishna Hajari",
    role: "External Affairs",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Luke Harrell",
    role: "External Affairs",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Yash Choudhary",
    role: "External Affairs",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Bridget Huang",
    role: "Internal Affairs",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Ivan Yu",
    role: "Internal Affairs",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Uzair Dabhoiwala",
    role: "Internal Affairs",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Jordan Valladolid",
    role: "Production",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Jyo Makala",
    role: "Production",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Kyla Nguyen",
    role: "Production",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Luis Cortez",
    role: "Production",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Michelle Phan",
    role: "Production",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Anya Kumar",
    role: "Design",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Hannah Roxas",
    role: "Design",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Oneeka Prabhakar",
    role: "Design",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Archita Mandal",
    role: "Social Media",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Jocelyn Chern",
    role: "Social Media",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "David Sun",
    role: "Journalism",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Siraj Rayamajhi",
    role: "Social Media",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Aadi Gupta",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Aarav Urgaonkar",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Aariz Iqbal",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Adam Ye",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Adwith Pillai",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Aimee Tsai",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Alex Do",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Archita Sarin",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Atin Kumar Singh",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Ayush Lenka",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Brian Choi",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Brian Le",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Emma Lam",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Etienne Rousseau",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Harsh Karia",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Iain Hennington",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Kaushal Marimuthu",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Kaushal Ramalingam",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Kavya Sasikumar",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Kyoungdeok Han",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Logan Tadano",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Matthias Gabel",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Nikhil Karthikeyan",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Raquib Alam",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Rohan Kaushal",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Ruhi Aggarwal",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Ryan Uyeki",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Sachin Venkat",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Samaya Sankuratri",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Shanyu Dabbiru",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Siya Jain",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Stefan Shakeri",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Tarini Maram",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Vikram Penumarti",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Yash Deshmukh",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Zina Zhang",
    role: "Projects",
    image: "/israel.png",
    linkedin: "https://linkedin.com/",
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
		<div className="w-screen bg-[#070707] text-xs">
		  <div className="navbar bg-zinc-950">
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
				  <li><a className="text-lg" href="/journalism">Journalism</a></li>
				  <li><a className ="text-lg" href="/members">Team</a></li>
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
			<button className="btn mr-4 bg-gradient-to-r from-[#393B7F] to-[#8646B2] hover:from-[#6A1AA2] hover:to-[#3136D3] text-zinc-100 transition duration-300">
				<a href="/apply">Join</a>
			  </button>
			</div>
		  </div>
		</div>
  
		{/* 3. Animated Container */}
		<motion.div
		  className="bg-[#070707] pl-10 pr-10 pt-8" // Reduced pt-12 to pt-8
		  initial="hidden"
		  animate="visible"
		  variants={containerVariants}
		  transition={{ duration: 1 }} // Light fade-in over 1 second
		>
		  <div className="bg-[#070707]">
			<div className="px-6 mx-auto space-y-4 max-w-7xl lg:px-8 md:space-y-8 md:pt-4 lg:pt-6"> {/* Reduced space-y-8 to space-y-4, space-y-16 to space-y-8, pt-8 to pt-4, pt-12 to pt-6 */}
			  <div className="mx-auto lg:mx-0">
				<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-6">
				  Leadership
				</h2>
			  </div>
  
			  {/* Team Members Grid */}
        <motion.div
				className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center gap-6 pb-6 content-center"
				variants={containerVariants}
			  >
				{teamMembers.map((member, index) => (
				  <motion.div
					key={index}
					className="w-48 mb-6 bg-transparent border-gray-700 text-slate-200"
					variants={cardVariants}
				  >
					<figure>
					  <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
					</figure>
					<div className="flex mt-3 justify-between items-center">
					  <div>
						<h2 className="text-sm font-semibold">{member.name}</h2>
						<p className="text-xs">{member.role}</p>
					  </div>
					  <div>
						<Link target="_blank" href={member.linkedin}>
						  <button className="btn btn-sm bg-opacity-0 hover:bg-blue-900 border-0">
							<Linkedin className="w-4 h-4 duration-200 hover:font-medium text-slate-100" />
						  </button>
						</Link>
					  </div>
					</div>
				  </motion.div>
				))}
			  </motion.div>
  
			  {/* New Section for Additional Members */}
			  <div className="mx-auto lg:mx-0 pt-2">
				<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-6">
				  Members
				</h2>
			  </div>
  
			  <motion.div
				className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center gap-6 pb-6 content-center"
				variants={containerVariants}
			  >
				{additionalMembers.map((member, index) => (
				  <motion.div
					key={index}
					className="w-48 mb-6 bg-transparent border-gray-700 text-slate-200"
					variants={cardVariants}
				  >
					<figure>
					  <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
					</figure>
					<div className="flex mt-3 justify-between items-center">
					  <div>
						<h2 className="text-sm font-semibold">{member.name}</h2>
						<p className="text-xs">{member.role}</p>
					  </div>
					  <div>
						<Link target="_blank" href={member.linkedin}>
						  <button className="btn btn-sm bg-opacity-0 hover:bg-blue-900 border-0">
							<Linkedin className="w-4 h-4 duration-200 hover:font-medium text-slate-100" />
						  </button>
						</Link>
					  </div>
					</div>
				  </motion.div>
				))}
			  </motion.div>
  
			  {/* Removed extra <br> tags for cleaner spacing */}
			</div>
		  </div>
		</motion.div>
		<div className="w-full h-px bg-zinc-800" />
		<Footer />
	  </div>
	);
  }
