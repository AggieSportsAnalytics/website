"use client"; // Ensures the component is rendered on the client side

import React from "react";
import { Footer } from "../components/footer";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MembersPage() {
  // Define recruitment events
  const recruitmentEvents = [
    {
      date: "9/25",
      title: "Interest Form Open",
      location: "ASA Headquarters",
      time: "1:00 PM",
      description: "Final selection interviews for prospective members."
    },
    {
      date: "10/1",
      title: "Breaking into Tech with Sajjaad Khader",
      location: "UC Davis Campus Center",
      time: "10:00 AM",
      description: "Join us for the official recruitment kickoff meeting to learn more about ASA."
    },
    {
      date: "10/2",
      title: "Tech Club Mixer (AISC x AggieWorks)",
      location: "Room 101 | Engineering Building",
      time: "2:00 PM",
      description: "Participate in hands-on workshops to get a feel for our projects and methodologies."
    },
    {
      date: "10/9",
      title: "Involvement Fair",
      location: "Local Sports Bar",
      time: "6:00 PM",
      description: "Connect with current members and alumni over drinks and appetizers."
    },
    {
      date: "10/14",
      title: "Applications Open",
      location: "ASA Headquarters",
      time: "1:00 PM",
      description: "Final selection interviews for prospective members."
    },
    {
      date: "10/15",
      title: "Info Night",
      location: "ASA Headquarters",
      time: "1:00 PM",
      description: "Final selection interviews for prospective members."
    },
    {
      date: "10/16",
      title: "Social Night",
      location: "ASA Headquarters",
      time: "1:00 PM",
      description: "Final selection interviews for prospective members."
    },
    {
      date: "10/17",
      title: "Speed Dating",
      location: "ASA Headquarters",
      time: "1:00 PM",
      description: "Final selection interviews for prospective members."
    },
    {
      date: "10/18",
      title: "Applications Close",
      location: "ASA Headquarters",
      time: "1:00 PM",
      description: "Final selection interviews for prospective members."
    },
    {
      date: "10/22 to 10/24",
      title: "Interviews",
      location: "ASA Headquarters",
      time: "1:00 PM",
      description: "Final selection interviews for prospective members."
    },
    {
      date: "10/28",
      title: "Decisions Released",
      location: "ASA Headquarters",
      time: "1:00 PM",
      description: "Final selection interviews for prospective members."
    },
  ];

  return (
    <div className="relative bg-[#111111] min-h-screen flex flex-col">
      <Head>
        <title>Join ASA | Aggie Sports Analytics at UC Davis</title>
      </Head>

      {/* Navbar */}
      <div className="w-screen bg-zinc-950 text-xs">
        <div className="navbar bg-zinc-950 m-1">
          <div className="navbar-start">
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
                  <a href="/members">
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end">
            <button className="btn mr-4 bg-gradient-to-r from-[#5A5CA0] to-[#393B7F] hover:from-[#393B7F] hover:to-[#5A5CA0] text-zinc-100 transition duration-300">
              <a href="/apply">Join</a>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-zinc-800" />

      {/* Main Content */}
      <div className="flex-grow bg-[#111111] px-12">
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
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-4xl mb-6">
                Join Our Community
              </h2>
              <p className="text-zinc-300 text-lg mb-6">
                Become a part of the next chapter in Aggie Sports Analytics history.
                Applications for <b>Fall 2024</b> are opening soon. In the meantime, follow us
                on Instagram to stay up-to-date with recruitment news!
              </p>
              <button className="mt-4 px-5 py-3 bg-gradient-to-r from-[#5A5CA0] to-[#393B7F] hover:from-[#393B7F] hover:to-[#5A5CA0] text-zinc-100 rounded-md transition duration-300">
                <a href="https://www.instagram.com/aggiesportsanalytics" target="_blank" rel="noopener noreferrer">
                  Stay Updated
                </a>
              </button>
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

          {/* Recruitment Timeline */}
          <section className="py-12 bg-[#111111] px-6">
            <h2 className="text-3xl font-extrabold text-white mb-8">Recruitment Timeline</h2>
            <br></br>
            <div className="max-w-4xl mx-auto space-y-8">
              {recruitmentEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row items-start"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Event Date */}
                  <div className="md:w-1/4 md:text-right pr-4 mb-4 md:mb-0">
                    <div className="text-lg font-semibold text-zinc-200">{event.date}</div>
                  </div>
                  {/* Event Content */}
                  <div className="md:w-3/4 rounded-lg p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                    <div className="text-zinc-400 mb-2">
                      {event.location} | {event.time}
                    </div>
                    <p className="text-zinc-300">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </motion.div>
        <br />
      </div>

      {/* Footer */}
      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
