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
  linkedin?: string;
};

const LEADERS: Leader[] = [
  {
    name: "Stefan Shakeri",
    role: "President",
    img: "/stef.png",
    linkedin: "https://www.linkedin.com/in/stefan-shakeri",
  },
  {
    name: "Viet-Thy Tran",
    role: "Vice President",
    img: "/viet-thy.png",
    linkedin: "https://www.linkedin.com/in/viet-thy-tran-318581299/",
  },
  {
    name: "Sachin Venkat",
    role: "Director of Projects",
    img: "/sachin.png",
    linkedin: "https://www.linkedin.com/in/sachinvenkat/",
  },
  {
    name: "Luke Harrell",
    role: "Director of Business",
    img: "/luke.png",
    linkedin: "https://www.linkedin.com/in/luke-harrell/",
  },
  {
    name: "Crystal Garcia Pablo",
    role: "Director of Media",
    img: "/crystal.png",
    linkedin: "https://www.linkedin.com/in/crystalll-garcia/",
  },
  {
    name: "Ruth Jaquette",
    role: "Head of External Affairs",
    img: "/ruth_jaquette_U09NE4CMUQ0.jpg",
    linkedin: "https://www.linkedin.com/in/ruth-jaquette/",
  },
  {
    name: "Abhinav Barathi",
    role: "Head of Finance",
    img: "/abhinav_barathi_U07TTR95B29.jpg",
    linkedin: "https://www.linkedin.com/in/abhinav-barathi/",
  },
  {
    name: "Jessica Mendieta",
    role: "Head of Internal Affairs",
    img: "/jessica_mendieta_U09MLT4TH7E.jpg",
    linkedin: "https://www.linkedin.com/in/jessica-mendieta/",
  },
  {
    name: "Naomi Petersen",
    role: "Head of Design",
    img: "/naomi_petersen_U09M7N1MAEP.jpg",
    linkedin: "https://www.linkedin.com/in/naomipetersen-/",
  },
  {
    name: "Grace Lim",
    role: "Head of Social Media",
    img: "/grace_lim_U09M34GE7SB.jpg",
  },
  {
    name: "Jishnu Sanyal",
    role: "Head of Journalism",
    img: "/jishnu.png",
    linkedin: "https://www.linkedin.com/in/jishnu-sanyal/",
  },
  {
    name: "Anik Majumdar",
    role: "Project Manager",
    img: "/anik_majumdar_U09M82PG9LK.jpg",
    linkedin: "https://www.linkedin.com/in/anik-maj/",
  },
  {
    name: "Beckett Hayes",
    role: "Project Manager",
    img: "/beckett_hayes_U09MWVBE8GH.jpg",
    linkedin: "https://www.linkedin.com/in/beckett-hayes/",
  },
  {
    name: "Devin Sidhu",
    role: "Project Manager",
    img: "/devin_sidhu_U09MAJE5B45.jpg",
    linkedin: "https://www.linkedin.com/in/devin-gill-sidhu-a03745328/",
  },
  {
    name: "Logan Tadano",
    role: "Project Manager",
    img: "/logan_tadano_U07TLKNFGKZ.jpg",
    linkedin: "https://www.linkedin.com/in/logantadano/",
  },
  {
    name: "Munneth Gill",
    role: "Project Manager",
    img: "/munneth_gill_U09N96MM9EV.jpg",
    linkedin: "https://www.linkedin.com/in/munnethgill/",
  },
  {
    name: "Samaya Sankuratri",
    role: "Project Manager",
    img: "/samaya.png",
    linkedin: "https://www.linkedin.com/in/samaya-sankuratri-1a1083331/",
  },
  {
    name: "Sebastian Martin Del Campo",
    role: "Project Manager",
    img: "/sebastian_martin_del_campo_U09MC3W2CJ2.jpg",
  },
  {
    name: "Tarini Maram",
    role: "Project Manager",
    img: "/tarini.png",
    linkedin: "https://www.linkedin.com/in/tarini-maram-834412291/",
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
