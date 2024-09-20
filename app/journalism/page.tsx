"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function JournalismPage() {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1, // Fade-in over 1 second
      },
    },
  };

  return (
    <div className="relative">
      <Head>
        <title>Journalism | Aggie Sports Analytics at UC Davis</title>
      </Head>
      
      {/* Navigation Bar */}
      <div className="w-screen bg-zinc-950 text-xs">
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
                <li><a href="/journalism"><b>Journalism</b></a></li>
                <li><a href="/members">Team</a></li>
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

      {/* Animated Container */}
      <motion.div
        className="bg-[#111111] pl-10 pr-10 pt-8" // Reduced padding-top for consistency
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="bg-[#111111]">
          <div className="px-6 mx-auto space-y-4 max-w-7xl lg:px-8 md:space-y-8 md:pt-4 lg:pt-6">
            <div className="mx-auto lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-5">
                Journalism
              </h2>
              <p className="mt-4 text-zinc-300">
                Our Journalism team crafts insightful analysis and engaging stories that highlight 
                modern sports topics. We also cover walkthroughs of our own technical projects and 
                provide in-depth breakdowns of the strategies behind our work. Our goal is to bridge 
                the gap between sports analytics and storytelling.
              </p>
            </div>
            <center>
  <h2 className="text-xl py-5">
    <a href="https://medium.com/@aggiesportsanalytics" target="_blank">
      <button className="inline-flex items-center bg-[#F7F7F7] text-black font-bold py-2 px-4 rounded-md hover:scale-105 transform transition duration-300 ease-in-out">
        <img 
          src="/medium.png" 
          alt="Medium Logo" 
          className="w-5 h-5 mr-2"
        />
        Medium
      </button>
    </a>
  </h2>
</center>




            {/* Embed Medium Page */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10"> {/* Increased gap from 4 to 6 */}
                        <motion.figure
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }} // Ensures animation occurs only once
                            className="overflow-hidden rounded-lg"
                        >
                            <img src="/j1.png" alt="ASA Spring 2024 Banquet" className="w-full h-auto object-cover" />
                        </motion.figure>
                        <motion.figure
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }} // Ensures animation occurs only once
                            className="overflow-hidden rounded-lg"
                        >
                            <img src="j2.png" alt="ASA Github Workshop" className="w-full h-auto object-cover" />
                        </motion.figure>
                        <motion.figure
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }} // Ensures animation occurs only once
                            className="overflow-hidden rounded-lg"
                        >
                            <img src="j3.png" alt="ASA Ski Trip" className="w-full h-auto object-cover" />
                        </motion.figure>
                    </div>


            {/* Optional: Add more content or components here */}
          </div>
          <br></br>
          <div className="w-full h-px bg-zinc-800" />
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}
