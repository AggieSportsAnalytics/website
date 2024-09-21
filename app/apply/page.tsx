"use client"; // Ensures the component is rendered on the client side

import React from "react";
import { Footer } from "../components/footer";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MembersPage() {

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
                  <a className="text-lg" href="/articles">
                    Articles
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
      <div className="flex-grow bg-[#111111]  px-12">
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
                <a href="https://www.instagram.com/aggiesportsanalytics" target="_blank">Stay Updated</a>
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
        </motion.div>
        <br></br>
      </div>

      {/* Footer */}
      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
