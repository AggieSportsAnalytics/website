"use client"; // Ensures the component is rendered on the client side

import React, { useState } from "react";
import { Footer } from "../components/footer";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MembersPage() {
  // Define FAQ items
  const faqs = [
    {
      question: "How is ASA structured?",
      answer:
        "ASA operates in three branches - Projects, Business, and Media. These branches are highly interconnected and work in close collaboration throughout the school year.",
    },
    {
      question: "Are there prerequisites to join ASA?",
      answer:
        "There are no strict prerequisites - we welcome all students, regardless of their background. However, familiarity with the basic skills for a specific position will boost your application.",
    },
    {
      question: "What is the time commitment for ASA members?",
      answer:
        "Members are expected to commit approximately 5 to 10 hours per week. This includes club general meetings, branch-specific project meetings, professional events, social gatherings, and asynchronous work.",
    },
    {
      question: "Can ASA support me academically and professionally?",
      answer:
        "An overwhelming majority of our members use skills learned in ASA to accel in courses, along with landing internship and full-time opportunities.",
    },
    {
      question: "Does ASA have membership dues?",
      answer:
        "Membership dues are $15 per quarter. This money is used to fund projects and cover the cost of events.",
    },
  ];

  // State for FAQ accordion
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Update type here

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-[#111111] min-h-screen flex flex-col">
      <Head>
        <title>Join ASA | Aggie Sports Analytics at UC Davis</title>
      </Head>

      {/* Navbar */}
      <div className="w-screen bg-[#000000] text-xs">
        <div className="navbar bg-[#000000]">
          <div className="navbar navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 stroke-zinc-300"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="z-30 menu menu-md dropdown-content mt-3 p-2 shadow bg-zinc-950 rounded-box w-52 text-zinc-300"
              >
                <li>
                  <a className="text-lg" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="/projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="/journalism">
                    Journalism
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="/members">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <a href="/" className="btn btn-ghost">
              <Image
                src="/bLogo.png"
                alt="Aggie Sports Analytics Logo"
                width={100}
                height={50}
              />
            </a>
          </div>
          <div className="navbar-center">
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-zinc-200 text-xl">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/projects">Projects</a>
                </li>
                <li>
                  <a href="/journalism">Journalism</a>
                </li>
                <li>
                  <a href="/members">Team</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end">
          <button className="btn mr-4 bg-[#5075B5] text-zinc-100">
            <a href="/apply">Join</a>
          </button>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex-grow bg-[#000000] px-12">
        <motion.div
          className="px-6 mx-auto max-w-7xl lg:px-8 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Hero Section */}
          <motion.section
            className="flex flex-col lg:flex-row items-center mb-12 mt-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:w-1/2 text-center lg:text-left pr-5">
              <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-4xl mb-6">
                Join Our Community
              </h2>
              <p className="text-zinc-300 text-lg mb-6">
                Applications are closed. Follow us on <b><u><a href="https://www.instagram.com/aggiesportsanalytics" target="_blank">Instagram</a></u></b> to stay updated with latest club news and events.
              </p>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
              <Image
                src="/collage.png" // Replace with your actual image path
                alt="Join ASA"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </motion.section>

        </motion.div>
        <br />
      </div>

      {/* Footer */}
      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}