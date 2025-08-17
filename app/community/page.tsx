"use client";

import React from "react";
import { Card } from "../components/card"; 
import Footer from "../components/footer";
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from "../components/Header";

export default function CommunityPage() {
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
        <title>Community | Aggie Sports Analytics at UC Davis</title>
      </Head>
      
      <Header />

      {/* Animated Container */}
      <motion.div
        className="bg-[#181818] pl-10 pr-10 pt-8" // Reduced padding-top for consistency
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
                  <div className="bg-[#181818]">
          <div className="px-6 mx-auto space-y-4 max-w-7xl lg:px-8 md:space-y-8 md:pt-4 lg:pt-6">
          

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
          <br></br>
          <br></br>
        </div>
      </motion.div>
      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
