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
  {
    name: "Vishal Shenoy",
    role: "Advisor",
    img: "/vishal.png",
    linkedin: "https://www.linkedin.com/in/shenoyvishal",
  },
  {
    name: "Krishna Hajari",
    role: "Head of External Affairs",
    img: "/krishna.png",
    linkedin: "https://www.linkedin.com/in/krishnahajari/",
  },
  {
    name: "Luke Harrell",
    role: "Head of Finance",
    img: "/luke.png",
    linkedin: "https://www.linkedin.com/in/luke-harrell/",
  },
  {
    name: "Uzair Dabhoiwala",
    role: "Head of Internal Affairs",
    img: "/uzair.png",
    linkedin: "https://www.linkedin.com/in/mohammed-uzair-dabhoiwala-5973a4260/",
  },
  {
    name: "Anya Kumar",
    role: "Head of Design",
    img: "/anya.png",
    linkedin: "https://www.linkedin.com/in/sharanya-kumar-44273320b/",
  },
  {
    name: "Crystal Garcia Pablo",
    role: "Head of Social Media",
    img: "/crystal.png",
    linkedin: "https://www.linkedin.com/in/crystalll-garcia/",
  },
  {
    name: "Siraj Rayamajhi",
    role: "Head of Journalism",
    img: "/siraj.png",
    linkedin: "https://www.linkedin.com/in/siraj-rayamajhi-0042b5211/",
  },
  {
    name: "Ayush Lenka",
    role: "Project Manager",
    img: "/ayush.png",
    linkedin: "https://www.linkedin.com/in/ayushlenka/",
  },
  {
    name: "Brian Le",
    role: "Project Manager",
    img: "/brianle.png",
    linkedin: "https://www.linkedin.com/in/le-brian/",
  },
  {
    name: "Jishnu Sanyal",
    role: "Project Manager",
    img: "/jishnu.png",
    linkedin: "https://www.linkedin.com/in/jishnu-sanyal/",
  },
  {
    name: "Sachin Venkat",
    role: "Project Manager",
    img: "/sachin.png",
    linkedin: "https://www.linkedin.com/in/sachinvenkat/",
  },
  {
    name: "Samaya Sankuratri",
    role: "Project Manager",
    img: "/samaya.png",
    linkedin: "https://www.linkedin.com/in/samaya-sankuratri-1a1083331/",
  },
  {
    name: "Tarini Maram",
    role: "Project Manager",
    img: "/tarini.png",
    linkedin: "https://www.linkedin.com/in/tarini-maram-834412291/",
  },
  {
    name: "Viet-Thy Tran",
    role: "Project Manager",
    img: "/viet-thy.png",
    linkedin: "https://www.linkedin.com/in/viet-thy-tran-318581299/",
  },
  {
    name: "Zina Zhang",
    role: "Project Manager",
    img: "/zina.png",
    linkedin: "https://www.linkedin.com/in/zina-zhang-42775822a/",
  },
];

function LeadershipGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center gap-6 pb-6 content-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {LEADERS.map((leader, index) => (
        <motion.div
          key={leader.name}
          className="w-48 mb-6 bg-transparent border-gray-700 text-slate-200"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { 
                duration: 0.5, 
                ease: "easeOut",
                delay: index * 0.1 
              },
            },
          }}
        >
          <figure>
            <img
              src={leader.img}
              alt={leader.name}
              className="w-full h-48 object-cover"
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
                className="p-1 transition-colors"
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
  );
}

export default function AboutPage() {
  return (
    <div className="relative bg-[#181818]">
      <Head>
        <title>About | Aggie Sports Analytics at UC Davis</title>
      </Head>

      <Header />

      <section className="relative w-screen h-screen">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#181818] to-transparent z-20"></div>
        <Image src="/champagebw.png" alt="ASA Team" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <motion.h1
              className="font-display tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay:0.0, duration: 0.8, ease: "easeOut" }}
            >
              <span className="font-bold">Who We Are</span>
            </motion.h1>
          </div>
        </div>
      </section>
      <motion.div
        className="bg-[#181818] pl-4 pr-4 md:pl-10 md:pr-10 pt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="px-2 md:px-6 mx-auto space-y-16 max-w-7xl md:space-y-24 md:pt-6 lg:pt-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-start">
            <div className="lg:w-1/2 lg:pr-6 justify-center h-full">
              <br />
              <p className="mt-8 text-lg text-zinc-300">
                Aggie Sports Analytics is a student-led organization pioneering the future of sports technology. We unite driven students from diverse academic backgrounds to develop innovative solutions across business, technology, and media.
              </p>
              <br />
              <p className="mb-8 text-lg text-zinc-300">
                As a tight-knit community, we provide an environment for professional development and personal growth, shaping the future of our field while cultivating meaningful connections.</p>
            </div>
            <div className="lg:w-1/2 lg:pl-6 flex justify-center lg:justify-end pt-3">
              <figure><Image src="/team.png" width={500} height={300} alt="ASA Case Competition"/></figure>
            </div>
          </div>
          <section className="relative max-w-7xl mx-auto">

            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-12">
              Our Branches
            </h1>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 border border-white/10 overflow-hidden"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="px-8 py-16 h-80 border-r border-white/10 hover:bg-white/[0.03] transition-colors">
                <div className="mb-6">
                  <Laptop className="w-6 h-6 text-white mb-4" />
                  <h3 className="text-xl text-white font-semibold">Projects</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                   Teams partner with professional athletic teams to ship solutions in web, data science, ML, and
                  hardware.
                </p>
              </div>

              <div className="px-8 py-16 h-80 border-r border-white/10 hover:bg-white/[0.03] transition-colors">
                <div className="mb-6">
                  <Briefcase className="w-6 h-6 text-white mb-4" />
                  <h3 className="text-xl font-semibold text-white">Business</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Teams operate the events that power ASA, and
                  partner with pro organizations like <a href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer"><i>Perplexity</i></a> and <a href="https://www.ucdavisaggies.com" target="_blank" rel="noopener noreferrer"><i>UCD Athletics</i></a>.
                </p>
              </div>

              <div className="px-8 py-16 h-80 hover:bg-white/[0.03] transition-colors">
                <div className="mb-6">
                  <Camera className="w-6 h-6 text-white mb-4" />
                  <h3 className="text-xl font-semibold text-white">Media</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Teams produce content for newsletters, articles, and social media. These tell our story to grow brand and community.
                </p>
              </div>
            </motion.div>
          </section>

          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-12">
              Leadership
            </h1>

            <LeadershipGrid />
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
