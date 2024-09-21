"use client"; // Ensures the component is rendered on the client side

import React from "react";
import { Footer } from "../components/footer";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

// Sample Data
const recruitmentEvents = [
  {
    title: "Breaking into Tech with Sajjaad Khader",
    date: "October 1, 2024",
    description:
      "Introduction to ASA, meet the team, and overview of the recruitment process.",
  },
  {
    title: "Tech Club Mixer",
    date: "October 2, 2024",
    description:
      "Learn the basics of data analytics tools and techniques used in sports analytics.",
  },
  {
    title: "Involvement Fair + Applications Open",
    date: "October 9, 2024",
    description:
      "Presentations of past projects and opportunities for new members to contribute.",
  },
  {
    title: "Info Night",
    date: "October 15, 2024",
    description:
      "One-on-one interviews with team leads to discuss your potential role in ASA.",
  },
  {
    title: "Social Night",
    date: "October 16, 2024",
    description:
      "Networking event to connect with current members and learn more about ASA.",
  },
  {
    title: "Speed Dating",
    date: "October 17, 2024",
    description:
      "Quick interviews with various team leads to find the best fit for your skills.",
  },
  {
    title: "Applications Close",
    date: "November 9, 2024",
    description: "Final date to submit your application for ASA membership.",
  },
  {
    title: "Interviews Begin",
    date: "November 10, 2024",
    description:
      "Start of the interview process for selected applicants to join ASA.",
  },
  {
    title: "Decisions Sent Out",
    date: "November 20, 2024",
    description:
      "Notifications sent to applicants regarding their application status.",
  },
];

// Sample Open Roles Data
const openRoles = [
  {
    title: "Data Analyst",
    description:
      "Analyze sports data to provide actionable insights and support decision-making.",
    image: "/roles/data-analyst.jpg", // Replace with actual image paths
  },
  {
    title: "Software Developer",
    description:
      "Develop and maintain software tools for data collection and analysis.",
    image: "/roles/software-developer.jpg",
  },
  {
    title: "Marketing Coordinator",
    description:
      "Promote ASA events and engage with the community to increase membership.",
    image: "/roles/marketing-coordinator.jpg",
  },
  {
    title: "Graphic Designer",
    description:
      "Create visual content for ASA's projects, events, and online presence.",
    image: "/roles/graphic-designer.jpg",
  },
  {
    title: "Project Manager",
    description:
      "Lead and coordinate projects to ensure timely and successful completion.",
    image: "/roles/project-manager.jpg",
  },
  {
    title: "Research Specialist",
    description:
      "Conduct research to support ASA's initiatives and contribute to knowledge base.",
    image: "/roles/research-specialist.jpg",
  },
];

// Sample FAQ Data
const faqs = [
  {
    question: "What is ASA?",
    answer:
      "Aggie Sports Analytics (ASA) is a student-run organization at UC Davis focused on leveraging data analytics to enhance sports performance and decision-making.",
  },
  {
    question: "How do I apply to ASA?",
    answer:
      "You can apply by clicking the 'Join' button in the navigation bar or the 'Apply Now' button on the main page. Fill out the application form and submit it before the deadline.",
  },
  {
    question: "What are the prerequisites for joining?",
    answer:
      "ASA welcomes members from all backgrounds. While specific roles may require certain skills or experience, we provide resources and support to help you develop them.",
  },
  {
    question: "Are there any membership fees?",
    answer:
      "No, there are no membership fees to join ASA. However, some projects may require fundraising or sponsorships to cover specific expenses.",
  },
  {
    question: "What kind of projects does ASA work on?",
    answer:
      "ASA works on a variety of projects ranging from data analysis and software development to marketing campaigns and research initiatives, all aimed at improving sports analytics.",
  },
  {
    question: "How much time commitment is required?",
    answer:
      "The time commitment varies depending on your role and involvement in projects. We strive to accommodate members' schedules and encourage open communication regarding availability.",
  },
];

export default function MembersPage() {
  // Helper function to format date as MM/DD
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    if (isNaN(date)) return dateStr; // Fallback to original string if invalid
    return date.toLocaleDateString("en-US", { month: "numeric", day: "numeric" });
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
                    <b>Team</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end">
            <button className="btn mr-4 bg-[#5A5CA0] hover:bg-[#393B7F] text-zinc-100">
              <a href="/apply">Join</a>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-zinc-800" />

      {/* Main Content */}
      <div className="flex-grow bg-[#111111]">
        <motion.div
          className="px-6 mx-auto max-w-7xl lg:px-8 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Hero Section */}
          <motion.section
            className="flex flex-col lg:flex-row items-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                Join our Community
              </h2>
              <p className="text-zinc-300">
                Become a part of the next chapter in Aggie Sports Analytics
                history. Collaborate with fellow enthusiasts, work on exciting
                projects, and make an impact in the world of sports and
                technology.
              </p>
              <button className="mt-6 px-6 py-2 bg-[#5A5CA0] hover:bg-[#393B7F] text-zinc-100 rounded">
                <a href="/apply">Apply Now</a>
              </button>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
              <Image
                src="/cooking.jpg" // Replace with your actual image path
                alt="Join ASA"
                width={500}
                height={300}
                className="rounded shadow-lg"
              />
            </div>
          </motion.section>

          {/* Recruitment Events */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="pt-4 text-2xl font-semibold text-white mb-6">Recruitment Events</h3>
            <div className="pt-4 flex flex-col items-center space-y-6">
              {recruitmentEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row p-6 w-full md:w-3/4 lg:w-3/4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Date Section */}
                  <div className="text-4xl font-bold text-[#5A5CA0] w-full md:w-1/4 flex-shrink-0 text-center md:text-left">
                    {formatDate(event.date)}
                  </div>
                  {/* Event Details */}
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <h4 className="text-xl font-bold text-white">{event.title}</h4>
                    <p className="text-zinc-300">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Frequently Asked Questions</h3>
            <div className="max-w-3xl mx-auto">
              <div className="accordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="collapse collapse-arrow border-base-300 rounded-box mb-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium text-white">
                      {faq.question}
                    </div>
                    <div className="collapse-content text-zinc-300">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Open Roles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {openRoles.map((role, index) => (
                <div
                  key={index}
                  className="overflow-hidden flex flex-col"
                >
                  <div className="p-6 flex-grow flex flex-col">
                    <h4 className="text-xl font-bold text-white mb-2">{role.title}</h4>
                    <p className="text-zinc-300 flex-grow">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

        </motion.div>
      </div>

      {/* Footer */}
      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
