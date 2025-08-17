"use client"; // Ensures the component is rendered on the client side

import React, { useState } from "react";
import Footer from "../components/footer";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/Header";

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
    <div className="relative bg-[#181818] min-h-screen flex flex-col">
      <Head>
        <title>Join ASA | Aggie Sports Analytics at UC Davis</title>
      </Head>

      <Header />


      {/* Main Content */}
      <div className="flex-grow bg-[#181818] px-12">
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