"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/footer";

// ---------------- Config ----------------
const SLIDES = [
  { src: "/hp1.png", alt: "ASA team 1" },
  { src: "/hp2.png", alt: "ASA team 2" },
  { src: "/hp3.png", alt: "ASA team 3" },
];

const PILLARS = [
  {
    title: "Projects",
    copy:
      "Hands-on sports analytics and engineering with real datasets, reproducible workflows, and mentorship.",
  },
  {
    title: "Business",
    copy:
      "Partnerships, operations, and growth—turning great work into opportunities for members and sponsors.",
  },
  {
    title: "Media",
    copy:
      "Storytelling across written, video, and social to amplify our work, culture, and impact.",
  },
];

// Company logos from the old logo collage
const LOGOS1 = [
  "/logos/logo01.png",
  "/logos/logo02.png",
  "/logos/logo03.png",
  "/logos/logo04.png",
  "/logos/logo05.png",
  "/logos/logo06.png",
];

const LOGOS2 = [
  "/logos/logo07.png",
  "/logos/logo08.png",
  "/logos/logo09.png",
  "/logos/logo010.png",
  "/logos/logo011.png",
  "/logos/logo012.png",
];

const LOOPED_LOGOS_1 = [...LOGOS1, ...LOGOS1, ...LOGOS1]; // seamless marquee
const LOOPED_LOGOS_2 = [...LOGOS2, ...LOGOS2, ...LOGOS2]; // seamless marquee

export default function Home() {
  // simple slideshow index
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % SLIDES.length);
    }, 8000); // change every 3.5s
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-screen min-h-screen overflow-hidden bg-[#181818] text-white">
      <Header />

      {/* ===== HERO ===== */}
      <section className="bg-[#181818] flex flex-col items-center text-center px-6 pt-20 pb-20 sm:pt-24 sm:pb-20">
        {/* Constrained text column */}
        <div className="max-w-3xl mx-auto mb-5">
          {/* Smaller Title: bold club name, lighter remainder */}
          <motion.h1
            className="font-display tracking-tight text-3xl sm:text-4xl md:text-5xl leading-tight"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-bold text-white">Aggie Sports Analytics</span>{" "}
            <span className="font-light text-zinc-400">
              is redefining the future of sports technology.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-5 text-sm sm:text-base md:text-lg text-zinc-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            We're a student-run community working with collegiate and professional organizations.
          </motion.p>
        </div>

        {/* Single straight photo that changes every few seconds */}
        <div className="relative mt-10 w-full max-w-4xl h-96 sm:h-[400px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={SLIDES[idx].src}
              className="absolute inset-0"
              initial={{ opacity: 0.0 }}
              animate={{ opacity: 1.0 }}
              exit={{ opacity: 0.0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Image
                src={SLIDES[idx].src}
                alt={SLIDES[idx].alt}
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>


      {/* ===== MOVING LOGO COLLAGE ===== */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold pb-4">
            Where We Go
          </h2>

        {/* Row 1 */}
          <div className="mt-8 [mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)]">
            <motion.div
              className="flex gap-10 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 22, ease: "linear", repeat: Infinity }}
            >
              {LOOPED_LOGOS_1.map((src, i) => (
                <div
                  key={`r1-${i}`}
                  className="relative h-12 sm:h-14 w-28 sm:w-36 shrink-0 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition"
                >
                  <Image src={src} alt="Logo" fill className="object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
          <br></br>
          {/* Row 2 (opposite direction for depth) */}
          <div className="mt-5 [mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)]">
            <motion.div
              className="flex gap-10 items-center"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 26, ease: "linear", repeat: Infinity }}
            >
              {LOOPED_LOGOS_2.map((src, i) => (
                <div
                  key={`r2-${i}`}
                  className="relative h-12 sm:h-14 w-28 sm:w-36 shrink-0 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition"
                >
                  <Image src={src} alt="Logo" fill className="object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
