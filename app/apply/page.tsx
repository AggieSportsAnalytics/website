"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/footer";

export default function JoinUsPage() {

  return (
    <div className="relative min-h-screen flex flex-col bg-[#181818] text-white overflow-hidden">
      <Head>
        <title>Join ASA | Aggie Sports Analytics</title>
      </Head>
      <Header />
      
      {/* Main content with two-column layout */}
      <main className="relative flex-grow flex">
        {/* Left half - Image */}
        <div className="relative w-1/2 min-h-screen">
          {/* Gradient overlays for blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#181818] z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818]/30 via-transparent to-[#181818]/30 z-10"></div>
          {/* Top gradient for header blending */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#181818] to-transparent z-20"></div>
          
          <Image
            src="/bbbw.png"
            alt="ASA Team"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right half - Content */}
        <div className="w-1/2 flex items-center justify-center px-12">
          <div className="max-w-lg">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Join Us
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-zinc-300 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Be a part of our vibrant community, attend social and professional
              events, and collaborate on impactful projects at ASA.
            </motion.p>
            
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Link
                href="/apply"
                className="inline-flex items-center px-4 py-2 bg-transparent border border-zinc-600 text-zinc-400 text-sm font-medium rounded-full hover:border-zinc-500 hover:text-zinc-300 transition-colors duration-300"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      
      <div className="w-full h-px bg-zinc-800/70" />
      <Footer />
    </div>
  );
}