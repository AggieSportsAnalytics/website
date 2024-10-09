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
      question: "When are ASA general meetings?",
      answer:
        "Our general meeting is on Wednesdays from 7:30 pm to 9:00 pm. We expect ALL members to be able to attend GMs, with no exceptions.",
    },
    {
      question: "What is the duration of a position in ASA?",
      answer:
        "Membership is a year-long commitment! However, we will work with members to ensure a good experience in urgent circumstances. Please note that we only hold one recruitment cycle for the entire academic year.",
    },
    {
      question: "Can ASA support me academically and professionally?",
      answer:
        "An overwhelming majority of our members use skills learned in ASA to accel in courses, along with landing internship and full-time opportunities.",
    },
    {
      question: "Does ASA ve membership dues?",
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
                  <a href="/members">Team</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end">
          <button className="btn mr-4 bg-gradient-to-r from-[#393B7F] to-[#8646B2] hover:from-[#6A1AA2] hover:to-[#3136D3] text-zinc-100 transition duration-300">
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
            <div className="lg:w-1/2 text-center lg:text-left pr-5">
              <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-4xl mb-6">
                Join Our Community
              </h2>
              <p className="text-zinc-300 text-xl mb-6"><b>Fall 2024 Recruitment</b></p>
              <p className="text-zinc-300 text-lg mb-6">
                Become a part of the next chapter in Aggie Sports Analytics history.
                Follow us on <a href="https://www.instagram.com/aggiesportsanalytics" target="_blank" className="underline">Instagram</a> to stay up-to-date with recruitment news, and 
                check out our recruitment timeline, available roles, and FAQ below!
              </p>
              <button className="mt-4 px-5 py-3 bg-gradient-to-r from-[#393B7F] to-[#8646B2] hover:from-[#6A1AA2] hover:to-[#3136D3] text-zinc-100 rounded-md transition duration-300">
                <a
                  href="https://forms.gle/aC9on2bo6p3qCg7Z7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>Interest Form</b>
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

          <section className="py-12 bg-[#111111]">
  <h2 className="text-3xl font-extrabold text-white mb-8">Available Roles</h2>
  <br></br>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <motion.div
      className="rounded-lg p-6 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1 * 0.1 }}
    >
      <h3 className="text-2xl font-semibold text-white mb-4 text-center">Project Developer</h3>
      <p className="text-zinc-300 text-center">
        Dive headfirst into a client software project, using technology to improve current sports analytics methods.
      </p>
      <center>
        <br></br>
        <button className="align-center mt-4 px-5 py-3 bg-[#202020] hover:bg-[#2F2F2F] text-zinc-100 rounded-md transition duration-300">
          <a
            href="https://forms.gle/aC9on2bo6p3qCg7Z7"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <b>Apply Now</b>
          </a>
        </button>
      </center>
    </motion.div>

    <motion.div
      className="rounded-lg p-6 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 2 * 0.1 }}
    >
      <h3 className="text-2xl font-semibold text-white mb-4 text-center">Business Associate</h3>
      <p className="text-zinc-300 text-center">
        Coordinate outreach and client relations with External Affairs, or organize logistics and events with Internal Affairs.
      </p>
      <center>
        <br></br>
        <button className="align-center mt-4 px-5 py-3 bg-[#202020] hover:bg-[#2F2F2F] text-zinc-100 rounded-md transition duration-300">
          <a
            href="https://forms.gle/aC9on2bo6p3qCg7Z7"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <b>Apply Now</b>
          </a>
        </button>
      </center>
    </motion.div>

    <motion.div
      className="rounded-lg p-6 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 3 * 0.1 }}
    >
      <h3 className="text-2xl font-semibold text-white mb-4 text-center">Media Associate</h3>
      <p className="text-zinc-300 text-center">
        Curate our brand and content with Social Media, Design, or Production, or explore investigative writing with Journalism.
      </p>
      <center>
        <br></br>
        <button className="align-center mt-4 px-5 py-3 bg-[#202020] hover:bg-[#2F2F2F] text-zinc-100 rounded-md transition duration-300">

          <a
            href="https://forms.gle/aC9on2bo6p3qCg7Z7"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <b>Apply Now</b>
          </a>
        </button>
      </center>
    </motion.div>
  </div>
</section>


          {/* Recruitment Timeline */}
          <section className="py-12 bg-[#111111]">
            <h2 className="text-3xl font-extrabold text-white mb-8">Recruitment Timeline</h2>
            <motion.div
                className="flex flex-col md:flex-row items-start"
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.1 }}
              >            <p className="text-zinc-300 text-lg">We invite you to attend as many events as possible to learn more about the club and engage with current members. Our key recruitment events include Info Night, Resume Workshop, and Speed Dating.</p></motion.div>
            <br></br>
            <br></br>
            <div className="max-w-4xl mx-auto space-y-8 md:pl-10">
              
              {/* Event 4 */}
              <motion.div
                className="flex flex-col md:flex-row items-start"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {/* Event Date */}
                <div className="md:w-1/4 md:text-left pr-6 md:pl-12 mb-4 md:mb-0">
                <br></br>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#8646B2] to-[#3136D3] bg-clip-text text-transparent">10/9</div>
                </div>
                {/* Event Content */}
                <div className="md:w-3/4 rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-white mb-3">Applications Open</h3>
                  <p className="text-zinc-300">
                    Projects, Business, and Media member applications open.
                  </p>
                </div>
              </motion.div>

              {/* Event 5 */}
              <motion.div
                className="flex flex-col md:flex-row items-start"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {/* Event Date */}
                <div className="md:w-1/4 md:text-left pr-6 md:pl-12 mb-4 md:mb-0">
                <br></br>
                  <div className="text-4xl font-bold text-zinc-200">10/15</div>
                </div>
                {/* Event Content */}
                <div className="md:w-3/4 rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-white">Info Night</h3>
                  <div className="text-zinc-400 mb-2">
                    Walker 1310 | 7:30 PM to 8:30 PM
                  </div>
                  <p className="text-zinc-300">
                    Learn about what we do, our purpose, and our community. Plus, network with
                    board members.
                  </p>
                </div>
              </motion.div>

              {/* Event 6 */}
              <motion.div
                className="flex flex-col md:flex-row items-start"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {/* Event Date */}
                <div className="md:w-1/4 md:text-left pr-6 md:pl-12 mb-4 md:mb-0">
                <br></br>
                  <div className="text-4xl font-bold text-zinc-200">10/16</div>
                </div>
                {/* Event Content */}
                <div className="md:w-3/4 rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-white">Resume Workshop</h3>
                  <div className="text-zinc-400 mb-2">
                    TLC 1215 | 7:30 PM to 8:30 PM
                  </div>
                  <p className="text-zinc-300">
                    Boost your resume for applying to jobs and clubs this year! Stick around for some
                    fun activities after the workshop.
                  </p>
                </div>
              </motion.div>

              {/* Event 7 */}
              <motion.div
                className="flex flex-col md:flex-row items-start"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {/* Event Date */}
                <div className="md:w-1/4 md:text-left pr-6 md:pl-12 mb-4 md:mb-0">
                <br></br>
                  <div className="text-4xl font-bold text-zinc-200">10/17</div>
                </div>
                {/* Event Content */}
                <div className="md:w-3/4 rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-white">Speed Dating</h3>
                  <div className="text-zinc-400 mb-2">
                    Walker 1330 | 8:00 PM to 10:00 PM
                  </div>
                  <p className="text-zinc-300">
                    Learn about our projects starting this year. <b>Mandatory</b> for all project applicants.
                  </p>
                </div>
              </motion.div>

              {/* Event 8 */}
              <br></br>
              <motion.div
                className="flex flex-col md:flex-row items-start"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {/* Event Date */}
                <div className="md:w-1/4 md:text-left pr-6 md:pl-12 mb-4 md:mb-0">
                <br></br>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#8646B2] to-[#3136D3] bg-clip-text text-transparent">10/18</div>
                </div>
                {/* Event Content */}
                <div className="md:w-3/4 rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-white mb-3">Applications Close</h3>
                  <p className="text-zinc-300">
                    All applications for Projects, Business, and Media branches close at midnight.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 bg-[#111111]">
            <h2 className="text-3xl font-extrabold text-white mb-10">Frequently Asked Questions</h2>
            <br></br>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-lg shadow-lg">
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-zinc-300 transition-transform duration-100 ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {openIndex === index && (
                    <motion.div
                      className="px-6 py-4 border-t border-zinc-800"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-zinc-300">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
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