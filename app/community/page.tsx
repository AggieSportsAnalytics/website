"use client";

import React from "react";
import Footer from "../components/footer";
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from "../components/Header";

const events = [
  {
    id: 1,
    image: "/sajjaad.png",
    title: "ASA X Sajjaad Khader"
  },
  {
    id: 2,
    image: "/involvement.png",
    title: "Involvement Fair"
  },
  {
    id: 2,
    image: "/techmixer.png",
    title: "Tech Mixer"
  },
  {
    id: 2,
    image: "/fall.png",
    title: "Fall Recruitment"
  },
  {
    id: 3,
    image: "/resumeworkshop.png",
    title: "Professional Development Workshop"
  },
  {
    id: 4,
    image: "/volleyball.png",
    title: "Sunset & Sports"
  },
  {
    id: 4,
    image: "/thanksgiving.png",
    title: "Thanksgiving Potluck"
  },
  {
    id: 4,
    image: "/whiteelephant.png",
    title: "White Elephant"
  },
  {
    id: 7,
    image: "/winterretreat.png",
    title: "Winter Retreat"
  },
  {
    id: 8,
    image: "/ski.png",
    title: "Ski Trip"
  },
  {
    id: 9,
    image: "/agents.png",
    title: "Agent Orchestration Workshop"
  },
  {
    id: 10,
    image: "/pickleball.png",
    title: "Pickleball Day"
  },
  {
    id: 11,
    image: "/midyear.png",
    title: "Mid-Year Showcase"
  },
  {
    id: 12,
    image: "/springretreat.png",
    title: "Spring Retreat"
  },
  {
    id: 13,
    image: "/napa.png",
    title: "Napa Trip"
  },
  {
    id: 14,
    image: "/lastgm.png",
    title: "Final General Meeting"
  },
  {
    id: 14,
    image: "/interviewworkshop.png",
    title: "Interview Workshop"
  },
  {
    id: 14,
    image: "/casecomp.png",
    title: "Case Competition"
  },
  {
    id: 15,
    image: "/banquet.png",
    title: "End of Year Banquet"
  },
  {
    id: 16,
    image: "/senior.png",
    title: "Senior Sendoff"
  }
];

export default function CommunityPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="relative">
      <Head>
        <title>Community | Aggie Sports Analytics at UC Davis</title>
      </Head>
      
      <Header />

      <motion.div
        className="bg-[#181818] pl-10 pr-10 pt-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="bg-[#181818]">
          <div className="px-6 mx-auto max-w-7xl lg:px-8 md:pt-4 lg:pt-6">
            
            <div className="text-left mb-12">
              <h1 className="text-4xl font-bold text-white mb-2">Community</h1>
              <p className="text-zinc-400 text-lg">Events from our 2024-2025 cycle.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10 overflow-hidden">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="px-16 py-20 border-r border-b border-white/10 hover:bg-white/[0.03] transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  animate="visible"
                  transition={{ 
                    delay: (index % 2) * 0.1,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                >
                  <div className="w-full h-80 overflow-hidden mb-4 mx-auto">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="text-white text-lg font-medium text-left">
                    {event.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <br></br>
      <br></br>
      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
