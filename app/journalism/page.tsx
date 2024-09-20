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
                Our Journalism team is dedicated to providing insightful analysis and engaging stories that highlight the intersection of sports and data analytics. We cover a wide range of topics, including game analysis, player statistics, and the latest trends in sports technology.
              </p>
            </div>

            {/* Embed Medium Page */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-zinc-200 mb-4">
                Latest Articles
              </h3>
              {/* Medium Embed via iframe (Note: Medium may have restrictions on embedding. Alternatively, you can link to your Medium page or use RSS feeds to fetch articles.) */}
              <iframe
                src="https://medium.com/embed/aggiesportsanalytics"
                title="Medium Articles"
                className="w-full h-96 border-0"
                allowFullScreen
              ></iframe>
              {/* 
                Replace 'YOUR_MEDIUM_USERNAME' with your actual Medium username.
                If Medium does not support direct embedding via iframe, consider alternative methods:
                - Linking directly to your Medium publications.
                - Fetching and displaying articles using Medium's API or RSS feeds.
              */}
            </div>

            {/* Optional: Add more content or components here */}
          </div>
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}
