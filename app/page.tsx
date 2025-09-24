"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Code, Newspaper, HeartHandshake } from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/footer";

const ALL_LOGOS = [
  "/logos/logoamazon.png",
  "/logos/logonvidia.png",
  "/logos/logometa.png",
  "/logos/logogoogle.png",
  "/logos/logocap1.png",
  "/logos/logoatlassian.png",
  "/logos/logoqualcomm.png",
  "/logos/logotesla.png",
  "/logos/logodeloitte.png",
  "/logos/logoey.png",
  "/logos/logokpmg.png",
  "/logos/logopwc.png",
  "/logos/logowf.png",
  "/logos/logoNBA.png",
  "/logos/logoSF.png",
];

export default function Home() {

  return (
    <div className="w-screen min-h-screen overflow-hidden bg-[#181818] text-white">
      <Header />
      <section className="bg-[#181818] flex flex-col items-center text-center pt-6 pb-20 sm:pt-24 sm:pb-20">
        <br></br>
        <div className="max-w-4xl mx-auto mb-5">
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight font-extrabold text-white pb-2">
            Aggie Sports Analytics
          </h1>
          <motion.h2
            className="mt-2 font-display tracking-tight text-2xl sm:text-3xl md:text-4xl leading-tight font-light text-zinc-400"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          >
            is redefining the future of sports technology.
          </motion.h2>
          <motion.p
            className="mt-10 text-sm sm:text-base md:text-lg text-zinc-400"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            We're a consulting group building technology to empower the best teams.
          </motion.p>
          <motion.div
            className="mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            <a
              href="/about"
              className="inline-flex items-center px-4 py-2 bg-transparent border border-zinc-600 text-zinc-400 text-sm font-medium rounded-full hover:border-zinc-500 hover:text-zinc-300 transition-colors duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        <div className="relative -mx-10 mt-10 w-full aspect-video [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_100%)]">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#181818] to-transparent z-10"></div>
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
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">70</div>
              <div className="text-lg text-zinc-400">Active Members</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">25</div>
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
                <h3 className="text-xl font-semibold">Partnerships</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">
              We collaborate with collegiate teams and industry partners to
              solve real sports analytics challenges.
              </p>
            </div>
            <div className="px-8 py-16 h-80 border-b border-white/10 hover:bg-white/[0.03] transition-colors">
              <div className="mb-6">
                <Code className="w-6 h-6 text-white mb-4" />
                <h3 className="text-xl font-semibold">Engineering + Data</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">
              We design full-stack tools, machine learning models, and scalable data pipelines to power
              decision-making in sports.
              </p>
            </div>
            <div className="px-8 py-16 h-80 border-r border-white/10 hover:bg-white/[0.03] transition-colors">
              <div className="mb-6">
                <Newspaper className="w-6 h-6 text-white mb-4" />
                <h3 className="text-xl font-semibold">Impact</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">
              We publish research, media, and case studies that highlight how data transforms athletic
              performance and strategy.
              </p>
            </div>
            <div className="px-8 py-16 h-80 hover:bg-white/[0.03] transition-colors">
              <div className="mb-6">
                <HeartHandshake className="w-6 h-6 text-white mb-4" />
                <h3 className="text-xl font-semibold">Community</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                We foster connections through events and collaborative projects that
                bring students and professionals together.
              </p>
            </div>
            </motion.div>
          </div>
        </div>
      </section>
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
                const row = Math.floor(i / 5);
                const col = i % 5;
                const delay = (row + col) * 0.1;
                
                return (
                  <motion.div
                    key={`logo-${i}`}
                    className="relative h-24 border border-white/10 hover:bg-white/[0.03] transition-colors p-4 flex items-center justify-center group"
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
                      className="object-contain grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition"
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
