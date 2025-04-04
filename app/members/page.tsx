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
    image: "/abhi.png",
    linkedin: "https://www.linkedin.com/in/abhinav-barathi/",
  },
  {
    name: "Krishna Hajari",
    role: "External Affairs",
    image: "/krishnah.png",
    linkedin: "https://www.linkedin.com/in/krishna-uday-hajari-a323a9303/",
  },
  {
    name: "Luke Harrell",
    role: "External Affairs",
    image: "/luke.png",
    linkedin: "https://www.linkedin.com/in/luke-harrell/",
  },
  {
    name: "Yash Choudhary",
    role: "External Affairs",
    image: "/yashc.png",
    linkedin: "https://www.linkedin.com/in/yash2403/",
  },
  {
    name: "Ivan Yu",
    role: "External Affairs",
    image: "/ivan.png",
    linkedin: "https://www.linkedin.com/in/ikyu/",
  },
  {
    name: "Bridget Huang",
    role: "Internal Affairs",
    image: "/bridget.png",
    linkedin: "https://www.linkedin.com/in/bridget-huangg/",
  },
  {
    name: "Uzair Dabhoiwala",
    role: "Internal Affairs",
    image: "/uzair.png",
    linkedin: "https://www.linkedin.com/in/mohammed-uzair-dabhoiwala-5973a4260/",
  },
  {
    name: "Jordan Valladolid",
    role: "Production",
    image: "/jv.png",
    linkedin: "https://www.linkedin.com/in/jordan-valladolid-699b671b0/",
  },
  {
    name: "Kyla Nguyen",
    role: "Production",
    image: "/kyla.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Luis Cortez",
    role: "Production",
    image: "/luis.png",
    linkedin: "https://www.linkedin.com/in/luis-cortez-a44b991a2/",
  },
  {
    name: "Michelle Phan",
    role: "Production",
    image: "/michelle.png",
    linkedin: "https://www.linkedin.com/in/michellemtphan/",
  },
  {
    name: "Anya Kumar",
    role: "Design",
    image: "/anya.png",
    linkedin: "https://www.linkedin.com/in/sharanya-kumar-44273320b/",
  },
  {
    name: "Hannah Roxas",
    role: "Design",
    image: "/hannah.png",
    linkedin: "https://www.linkedin.com/in/hannah-roxas-1440ba299/",
  },
  {
    name: "Oneeka Prabhakar",
    role: "Design",
    image: "/oneeka.png",
    linkedin: "https://www.linkedin.com/in/oneeka-prabhakar-90b638257/",
  },
  {
    name: "Archita Mandal",
    role: "Social Media",
    image: "/am.png",
    linkedin: "https://www.linkedin.com/in/architamandal/",
  },
  {
    name: "David Sun",
    role: "Journalism",
    image: "/david.png",
    linkedin: "https://www.linkedin.com/in/dawei-sun-169718263/",
  },
  {
    name: "Siraj Rayamajhi",
    role: "Journalism",
    image: "/siraj.png",
    linkedin: "https://www.linkedin.com/in/siraj-rayamajhi-0042b5211/",
  },
  {
    name: "Aarav Urgaonkar",
    role: "Projects",
    image: "/aarav.png",
    linkedin: "https://www.linkedin.com/in/aaravurg/",
  },
  {
    name: "Aariz Iqbal",
    role: "Projects",
    image: "/aariz.png",
    linkedin: "https://www.linkedin.com/in/aariz-iqbal/",
  },
  {
    name: "Adam Ye",
    role: "Projects",
    image: "/adam.png",
    linkedin: "https://www.linkedin.com/in/zhizhou-adam-ye-771837333/",
  },
  {
    name: "Adwith Pillai",
    role: "Projects",
    image: "/adwith.png",
    linkedin: "https://www.linkedin.com/in/adwithpillai/",
  },
  {
    name: "Aimee Tsai",
    role: "Projects",
    image: "/aimee.png",
    linkedin: "https://www.linkedin.com/in/aimee-tsai/",
  },
  {
    name: "Alex Do",
    role: "Projects",
    image: "/alex.png",
    linkedin: "https://www.linkedin.com/in/alex-do-33851b294/",
  },
  {
    name: "Archita Sarin",
    role: "Projects",
    image: "/architas.png",
    linkedin: "https://www.linkedin.com/in/archita-sarin/",
  },
  {
    name: "Atin Kumar Singh",
    role: "Projects",
    image: "/atin.png",
    linkedin: "https://www.linkedin.com/in/atin-kumar-singh-125831216/",
  },
  {
    name: "Ayush Lenka",
    role: "Projects",
    image: "/ayush.png",
    linkedin: "https://www.linkedin.com/in/ayushlenka/",
  },
  {
    name: "Brian Le",
    role: "Projects",
    image: "/brianl.png",
    linkedin: "https://www.linkedin.com/in/le-brian/",
  },
  {
    name: "Bum Soo Choi",
    role: "Projects",
    image: "/brianc.png",
    linkedin: "https://www.linkedin.com/in/bumsoo-choi-766717232/",
  },
  {
    name: "Emma Lam",
    role: "Projects",
    image: "/emma.png",
    linkedin: "https://www.linkedin.com/in/emmaklam/",
  },
  {
    name: "Etienne Rousseau",
    role: "Projects",
    image: "/etn.png",
    linkedin: "https://www.linkedin.com/in/etiennerousseau1/",
  },
  {
    name: "Harsh Karia",
    role: "Projects",
    image: "/harsh.png",
    linkedin: "https://www.linkedin.com/in/harshkaria108/",
  },
  {
    name: "Iain Hennington",
    role: "Projects",
    image: "/iain.png",
    linkedin: "https://www.linkedin.com/in/iain-hennington-94143b303/",
  },
  {
    name: "Kaushal Marimuthu",
    role: "Projects",
    image: "/kaushalm.png",
    linkedin: "https://www.linkedin.com/in/kaushal-marimuthu/",
  },
  {
    name: "Kaushal Ramalingam",
    role: "Projects",
    image: "/kaushalr.png",
    linkedin: "https://www.linkedin.com/in/kaushal-ramalingam/",
  },
  {
    name: "Logan Tadano",
    role: "Projects",
    image: "/logan.png",
    linkedin: "https://www.linkedin.com/in/logantadano/",
  },
  {
    name: "Matthias Gabel",
    role: "Projects",
    image: "/matthias.png",
    linkedin: "https://www.linkedin.com/in/matthias-gabel/",
  },
  {
    name: "Nikhil Karthikeyan",
    role: "Projects",
    image: "/jj.png",
    linkedin: "https://www.linkedin.com/in/nikhil-karthikeyan/",
  },
  {
    name: "Raquib Alam",
    role: "Projects",
    image: "/raquib.png",
    linkedin: "https://www.linkedin.com/in/raquib-alam/",
  },
  {
    name: "Rohan Kaushal",
    role: "Projects",
    image: "/rohan.png",
    linkedin: "https://www.linkedin.com/in/rohankaushal1/",
  },
  {
    name: "Ruhi Aggarwal",
    role: "Projects",
    image: "/ruhi.png",
    linkedin: "https://www.linkedin.com/in/ruhi-aggarwal/",
  },
  {
    name: "Ryan Uyeki",
    role: "Projects",
    image: "/ryan.png",
    linkedin: "https://www.linkedin.com/in/ruyeki/",
  },
  {
    name: "Sachin Venkat",
    role: "Projects",
    image: "/sachin.png",
    linkedin: "https://www.linkedin.com/in/sachinvenkat/",
  },
  {
    name: "Samaya Sankuratri",
    role: "Projects",
    image: "/samaya.png",
    linkedin: "https://www.linkedin.com/in/samaya-sankuratri-1a1083331/",
  },
  {
    name: "Shanyu Dabbiru",
    role: "Projects",
    image: "/shanyu.png",
    linkedin: "https://www.linkedin.com/in/shanyu-dabbiru/",
  },
  {
    name: "Siya Jain",
    role: "Projects",
    image: "/siya.png",
    linkedin: "https://www.linkedin.com/in/siyjain/",
  },
  {
    name: "Soumil Gad",
    role: "Projects",
    image: "/soumil.png",
    linkedin: "https://www.linkedin.com/in/soumil-gad/",
  },
  {
    name: "Stefan Shakeri",
    role: "Projects",
    image: "/stefan.png",
    linkedin: "https://www.linkedin.com/in/stefan-shakeri/",
  },
  {
    name: "Tarini Maram",
    role: "Projects",
    image: "/tarini.png",
    linkedin: "https://www.linkedin.com/in/tarini-maram-834412291/",
  },
  {
    name: "Vikram Penumarti",
    role: "Projects",
    image: "/vikramp.png",
    linkedin: "https://www.linkedin.com/in/vikram-penumarti/",
  },
  {
    name: "Yash Deshmukh",
    role: "Projects",
    image: "/yash.png",
    linkedin: "https://www.linkedin.com/in/yashdesh6/",
  },
  {
    name: "Zina Zhang",
    role: "Projects",
    image: "/zina.png",
    linkedin: "https://www.linkedin.com/in/zina-zhang-42775822a/",
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
	  <div className="relative font-sans">
		<Head>
		  <title>Team | Aggie Sports Analytics at UC Davis</title>
		</Head>
		
		{/* Navigation Bar */}
		<div className="w-screen bg-[#000000] text-xs">
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
				  <li><a href="/members"><b>Team</b></a></li>
				</ul>
			  </div>
			</div>
			<div className="navbar-end">
      <button className="btn mr-4 bg-[#5075B5] text-zinc-100">
            <a href="/apply">Join</a>
          </button>
			</div>
		  </div>
		</div>
  
		{/* 3. Animated Container */}
		<motion.div
		  className="bg-[#000000] pl-10 pr-10 pt-8" // Reduced pt-12 to pt-8
		  initial="hidden"
		  animate="visible"
		  variants={containerVariants}
		  transition={{ duration: 1 }} // Light fade-in over 1 second
		>
		  <div className="bg-[#000000]">
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
					  <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-md" />
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
					  <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-md" />
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
