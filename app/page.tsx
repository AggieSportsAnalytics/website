"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Code, BarChart3, Users2 } from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/footer";

// ---------------- Config ----------------
const SLIDES = [
  { src: "/hp1.png", alt: "ASA team 1" },
  { src: "/hp2.png", alt: "ASA team 2" },
  { src: "/hp3.png", alt: "ASA team 3" },
];

const TAGS = [
  {
    title: "Projects",
    blurb:
      "Ship real analytics and engineering work with reproducible code, presentations, and results.",
  },
  {
    title: "Mentorship",
    blurb:
      "Level up fast with peer reviews, office hours, and alumni guidance tailored to your goals.",
  },
  {
    title: "Analytics",
    blurb:
      "Work with live datasets, modeling, and visualization to answer real sports questions.",
  },
  {
    title: "Community",
    blurb:
      "A tight crew that builds together, studies together, and shows up for each other.",
  },
  {
    title: "Careers",
    blurb:
      "Resume workshops, referrals, and recruiter intros—plus a portfolio you can actually show.",
  },
  {
    title: "Leadership",
    blurb:
      "Take on leadership roles in project management, event coordination, and team building.",
  },
  {
    title: "Networking",
    blurb:
      "Connect with industry professionals, alumni, and peers across the sports analytics world.",
  },
  {
    title: "Innovation",
    blurb:
      "Push the boundaries of what's possible in sports technology and data science.",
  },
  {
    title: "Growth",
    blurb:
      "Continuous learning through workshops, hackathons, and real-world project experience.",
  },
  {
    title: "Impact",
    blurb:
      "Make a real difference in sports through data-driven insights and solutions.",
  },
  {
    title: "Growth",
    blurb:
      "Continuous learning through workshops, hackathons, and real-world project experience.",
  },
  {
    title: "Impact",
    blurb:
      "Make a real difference in sports through data-driven insights and solutions.",
  },
  {
    title: "Growth",
    blurb:
      "Continuous learning through workshops, hackathons, and real-world project experience.",
  },
  {
    title: "Impact",
    blurb:
      "Make a real difference in sports through data-driven insights and solutions.",
  },
  {
    title: "Test2",
    blurb:
      "Continuous learning through workshops, hackathons, and real-world project experience.",
  },
  {
    title: "Test",
    blurb:
      "Make a real difference in sports through data-driven insights and solutions.",
  },
];

// Logo grid - 5x3 layout (15 logos)
const ALL_LOGOS = [
  "/logos/logo01.png",
  "/logos/logo02.png",
  "/logos/logo03.png",
  "/logos/logo04.png",
  "/logos/logo05.png",
  "/logos/logo06.png",
  "/logos/logo07.png",
  "/logos/logo08.png",
  "/logos/logo09.png",
  "/logos/logo010.png",
  "/logos/logo011.png",
  "/logos/logo012.png",
  "/logos/logo01.png", // Repeat to fill 15 slots
  "/logos/logo02.png",
  "/logos/logo03.png",
];

export default function Home() {

  return (
    <div className="w-screen min-h-screen overflow-hidden bg-[#181818] text-white">
      <Header />

      {/* ===== HERO ===== */}
      <section className="bg-[#181818] flex flex-col items-center text-center pt-6 pb-20 sm:pt-24 sm:pb-20">
        <br></br>
        <div className="max-w-4xl mx-auto mb-5">
          <motion.h1
            className="font-display tracking-tight text-3xl sm:text-4xl md:text-5xl leading-tight font-extrabold text-white"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Aggie Sports Analytics
          </motion.h1>

          <motion.h2
            className="mt-4 font-display tracking-tight text-2xl sm:text-3xl md:text-4xl leading-tight font-light text-zinc-400"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            is redefining the future of sports technology.
          </motion.h2>

          <motion.p
            className="mt-8 text-sm sm:text-base md:text-lg text-zinc-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            We're a consulting group building technology to empower the best sports teams.
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="/about"
              className="inline-flex items-center px-4 py-2 bg-transparent border border-zinc-600 text-zinc-400 text-sm font-medium rounded-full hover:border-zinc-500 hover:text-zinc-300 transition-colors duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Hero image */}
        <div className="relative -mx-10 mt-10 w-full aspect-video [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_100%)]">
          {/* Top gradient fade */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#181818] to-transparent z-10"></div>
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#181818] to-transparent z-10"></div>
          <Image
            src="/skibw.png"
            alt="ASA team"
            fill
            priority
            className="object-contain"
          />
        </div>
      </section>

      {/* ===== BY THE NUMBERS ===== */}
      <section className="bg-[#181818] px-6 pt-10 pb-6">
      <div className="mx-auto max-w-6xl text-left">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            By The Numbers
          </motion.h2>
          <br></br>
          <br></br>
          </div>
        <div className="mx-auto max-w-6xl text-center">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">60+</div>
              <div className="text-lg text-zinc-400">Active Members</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">28</div>
              <div className="text-lg text-zinc-400">Projects Completed</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">5+</div>
              <div className="text-lg text-zinc-400">Industry Partners</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== OUR WORK ===== */}
      <section className="bg-[#181818] py-8 sm:py-20">
        <div className="mx-auto max-w-6xl text-left">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.h2>
        </div>
        <br></br>
        <div className="mx-auto max-w-6xl">

          <div className="relative">

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 border border-white/10 overflow-hidden relative z-20"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
            <div className="px-8 py-16 h-80 border-b border-r border-white/10 hover:bg-white/[0.03] transition-colors">
              <div className="mb-6">
                <Users className="w-6 h-6 text-white mb-4" />
                <h3 className="text-xl font-semibold">Real Partnerships</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                We collaborate with collegiate and professional organizations on scoped analytics
                problems that matter.
              </p>
            </div>

            <div className="px-8 py-16 h-80 border-b border-white/10 hover:bg-white/[0.03] transition-colors">
              <div className="mb-6">
                <Code className="w-6 h-6 text-white mb-4" />
                <h3 className="text-xl font-semibold">Engineering + Analytics</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                We ship models, data pipelines, and interactive tools with reproducible code and
                mentorship.
              </p>
            </div>

            <div className="px-8 py-16 h-80 border-r border-white/10 hover:bg-white/[0.03] transition-colors">
              <div className="mb-6">
                <BarChart3 className="w-6 h-6 text-white mb-4" />
                <h3 className="text-xl font-semibold">Stories & Impact</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                We publish writeups, dashboards, and talks that communicate insights and drive
                decisions.
              </p>
            </div>

            <div className="px-8 py-16 h-80 hover:bg-white/[0.03] transition-colors">
              <div className="mb-6">
                <Users2 className="w-6 h-6 text-white mb-4" />
                <h3 className="text-xl font-semibold">Community Building</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                We foster connections through workshops, networking events, and collaborative
                learning experiences.
              </p>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== LOGO GRID ===== */}
      <section className="bg-[#181818] pt-4 pb-16">
        <div className="mx-auto max-w-6xl text-left">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Where We Go
          </motion.h2>
        </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-5 gap-4 w-full">
              {ALL_LOGOS.map((src, i) => {
                // Calculate row and column for diagonal stagger
                const row = Math.floor(i / 5);
                const col = i % 5;
                const delay = (row + col) * 0.1;
                
                return (
                  <motion.div
                    key={`logo-${i}`}
                    className="relative h-30 border border-white/10 hover:bg-white/[0.03] transition-colors p-4 flex items-center justify-center"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: delay,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Image 
                      src={src} 
                      alt="Company logo" 
                      width={60} 
                      height={40} 
                      className="object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition"
                    />
                  </motion.div>
                );
              })}
            </div>
        </div>
      </section>
      <br></br>
      <br></br>

      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
