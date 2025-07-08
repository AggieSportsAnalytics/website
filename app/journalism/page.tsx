"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card"; 
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
                <li><a href="/journalism"><b>Journalism</b></a></li>
                <li><a href="/members">Team</a></li>
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

      {/* Animated Container */}
      <motion.div
        className="bg-[#000000] pl-10 pr-10 pt-8" // Reduced padding-top for consistency
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="bg-[#000000]">
          <div className="px-6 mx-auto space-y-4 max-w-7xl lg:px-8 md:space-y-8 md:pt-4 lg:pt-6">
            <div className="mx-auto lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-5 font-inter">
                Journalism
              </h2>
              
              {/* Text and image side by side */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="pt-5">
                  <p className="text-zinc-300 font-inter">
                    Our journalism team crafts insightful analysis and engaging stories that highlight 
                    modern sports topics. We also cover walkthroughs of our own technical projects and 
                    provide in-depth breakdowns of the strategies behind our work.
                  </p>
                </div>
              </div>
            
            </div>
            
            {/* Medium Button */}
            <div className="flex justify-center pt-2">
              <a href="https://medium.com/@aggiesportsanalytics" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center bg-[#F7F7F7] text-black font-bold py-2 px-6 rounded-md hover:scale-105 transform transition duration-300 ease-in-out font-inter">
                  <img 
                    src="/medium.png" 
                    alt="Medium Logo" 
                    className="w-5 h-5 mr-2"
                  />
                  Medium
                </button>
              </a>
            </div>

                          {/* Images Section - Two images side by side */}
                <div className="flex flex-col md:flex-row justify-center gap-12 pb-8 pt-4">
                <div className="flex justify-center">
                  <img 
                    src="/j1.png" 
                    alt="Journalism Team at Work" 
                    className="rounded-lg object-cover w-full max-w-md h-64 shadow-lg"
                  />
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/j2.png" 
                    alt="Sports Analysis Article" 
                    className="rounded-lg object-cover w-full max-w-md h-64 shadow-lg"
                  />
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/j3.png" 
                    alt="Sports Analysis Article" 
                    className="rounded-lg object-cover w-full max-w-md h-64 shadow-lg"
                  />
                </div>
              </div>
            
       
          </div>
          <br></br>
          <br></br>
        </div>
      </motion.div>
      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
