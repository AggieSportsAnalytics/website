"use client";

import React from "react";
import Footer from "../components/footer";
import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Laptop, Briefcase, Camera, Linkedin } from "lucide-react";
import Header from "../components/Header";

type Leader = {
  name: string;
  role: string;
  img: string;
  linkedin: string;
};

const LEADERS: Leader[] = [
  {
    name: "Ben Busche",
    role: "President",
    img: "/ben.png",
    linkedin: "https://www.linkedin.com/in/ben-busche",
  },
  {
    name: "Tisha Kathrani",
    role: "Vice President",
    img: "/tisha.png",
    linkedin: "https://www.linkedin.com/in/tisha-kathrani",
  },
  {
    name: "Stefan Shakeri",
    role: "Director of Projects",
    img: "/stef.png",
    linkedin: "https://www.linkedin.com/in/stefan-shakeri",
  },
  {
    name: "Israel Shokrian",
    role: "Director of Business",
    img: "/israel.png",
    linkedin: "https://www.linkedin.com/in/israel-shokrian",
  },
  {
    name: "Miwa Hirai",
    role: "Director of Media",
    img: "/miw.png",
    linkedin: "https://www.linkedin.com/in/miwa-hirai",
  },
];

export default function AboutPage() {
  // Refs and inView states for scroll-triggered animations
  const { ref: projectRef, inView: projectInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: businessRef, inView: businessInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: mediaRef, inView: mediaInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative bg-[#181818]">
      <Head>
        <title>About | Aggie Sports Analytics at UC Davis</title>
      </Head>

      <Header />

      {/* ===== FULL SCREEN HERO IMAGE ===== */}
      <section className="relative w-screen h-screen">
        {/* Gradient fade from header into image */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#181818] to-transparent z-10"></div>
        <Image src="/groupwqs.png" alt="ASA Team" fill priority className="object-cover" />

        {/* Overlay text on the image */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <motion.h1
              className="font-display tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="font-bold">Who We Are</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Main Content with Fade-In (excluding Navbar) */}
      <motion.div
        className="bg-[#181818] pl-4 pr-4 md:pl-10 md:pr-10 pt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="px-2 md:px-6 mx-auto space-y-16 max-w-7xl md:space-y-24 md:pt-6 lg:pt-10">
          {/* Who We Are Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-start">
                        <div className="lg:w-1/2 lg:pr-6 justify-center h-full">
                            <br />
                            <p className="mt-8 text-lg text-zinc-300">
                                Aggie Sports Analytics is a student-led organization redefining the future of sports technology. We unite driven students from diverse academic backgrounds to develop innovative solutions across business, technology, and media.
                            </p>
                            <br />
                            <p className="mb-8 text-lg text-zinc-300">
                            As a tight-knit community, we are committed to fostering both professional development and personal growth, shaping the future of our field while cultivating meaningful connections.</p>
                        </div>
                        <div className="lg:w-1/2 lg:pl-6 flex justify-center lg:justify-end pt-3">
                            <figure><Image src="/groupwqs.png" width={500} height={300} alt="ASA Case Competition" className="rounded-md"/></figure>
                        </div>
                    </div>
          {/* ===== What We Do Section: 3 vertical selections with holographic logo behind ===== */}
          <section className="relative max-w-7xl mx-auto">

            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-5">
              What We Do
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6">
              {/* card component */}
              <motion.article
                ref={projectRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: projectInView ? 1 : 0, y: projectInView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10"
              >
                <div className="rounded-2xl h-full bg-[#171717] p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl p-2 bg-white/5 backdrop-blur group-hover:scale-105 transition">
                      <Laptop className="w-5 h-5 text-zinc-100" />
                    </div>
                    <h2 className="text-xl font-semibold text-zinc-100">Projects</h2>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Teams partner with UC Davis athletics to ship solutions in web, data science, ML, and
                    hardware. Typical team size ≈ 5.
                  </p>
                </div>
                {/* hover shimmer */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
              </motion.article>

              <motion.article
                ref={businessRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: businessInView ? 1 : 0, y: businessInView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10"
              >
                <div className="rounded-2xl h-full bg-[#171717] p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl p-2 bg-white/5 backdrop-blur group-hover:scale-105 transition">
                      <Briefcase className="w-5 h-5 text-zinc-100" />
                    </div>
                    <h2 className="text-xl font-semibold text-zinc-100">Business</h2>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    External & internal affairs + finance. We run workshops, socials, partnerships, and
                    operations that power ASA.
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
              </motion.article>

              <motion.article
                ref={mediaRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mediaInView ? 1 : 0, y: mediaInView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10"
              >
                <div className="rounded-2xl h-full bg-[#171717] p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl p-2 bg-white/5 backdrop-blur group-hover:scale-105 transition">
                      <Camera className="w-5 h-5 text-zinc-100" />
                    </div>
                    <h2 className="text-xl font-semibold text-zinc-100">Media</h2>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    We produce content for newsletters, articles, and social. Storytelling that grows the
                    brand and community.
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
              </motion.article>
            </div>
          </section>

          {/* Leadership */}
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-6">
              Leadership
            </h1>

            <motion.div
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center gap-6 pb-6 content-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {LEADERS.map((leader) => (
                <motion.div
                  key={leader.name}
                  className="w-48 mb-6 bg-transparent border-gray-700 text-slate-200"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                >
                  <figure>
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </figure>
                  <div className="flex mt-3 justify-between items-center">
                    <div>
                      <h2 className="text-sm font-semibold">{leader.name}</h2>
                      <p className="text-xs">{leader.role}</p>
                    </div>
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-md hover:bg-zinc-800 transition-colors"
                        aria-label={`${leader.name} LinkedIn`}
                        title="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4 text-zinc-400 hover:text-zinc-200 transition-colors" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <br />
        <br />
        <br />
      </motion.div>

      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
