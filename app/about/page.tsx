"use client";

import React from "react";
import { Footer } from "../components/footer";
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutPage() {
    const { ref: projectRef, inView: projectInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: businessRef, inView: businessInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: mediaRef, inView: mediaInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="relative">
            <Head>
                <title>About | Aggie Sports Analytics at UC Davis</title>
            </Head>
            
            <div className="w-screen bg-zinc-950 text-xs">
                <div className="navbar bg-zinc-950 m-1">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-zinc-300" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="z-30 menu menu-md dropdown-content mt-3 p-2 shadow bg-zinc-950 rounded-box w-52 text-zinc-300">
                                <li><a className="text-lg" href="/about"><b>About</b></a></li>
                                <li><a className="text-lg" href="/projects">Projects</a></li>
                                <li><a className="text-lg" href="/articles">Articles</a></li>
                                <li><a className="text-lg" href="/members">Team</a></li>
                            </ul>
                        </div>
                        <a href="/" className="btn btn-ghost"><img src="/bLogo.png" alt="Aggie Sports Analytics Logo" width={100}></img></a>
                    </div>
                    <div className="navbar-center">
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-zinc-200 text-xl">
                                <li><a href="/about"><b>About</b></a></li>
                                <li><a href="/projects">Projects</a></li>
                                <li><a href="/journalism">Journalism</a></li>
                                <li><a href="/members">Team</a></li>
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

            {/* Existing content */}
            <div className="bg-[#111111] pl-10 pr-10">
                <div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-8 lg:pt-12">
                    <div className="flex flex-col lg:flex-row items-start lg:items-start">
                        <div className="lg:w-1/2 lg:pr-6 justify-center h-full">
                            <br></br>
                            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                                Who We Are
                            </h1>
                            <p className="mt-8 text-lg text-zinc-300">
                                Aggie Sports Analytics is redefining the future of sports technology. We are a passionate and tight-knit community of students working on innovative ventures in business, technology, and media.
                            </p>
                            <br />
                            <p className="mb-8 text-lg text-zinc-300">
                                Since being established in 2022, we have brought together ambitious students from all academic disciplines. We foster both professional and personal growth. To date, we have completed over 25 projects and hosted.
                            </p>
                        </div>
                        <div className="lg:w-1/2 lg:pl-6 flex justify-center lg:justify-end">
                            <figure><img src="/casecomp.jpg" width="500" alt="ASA Case Competition" /></figure>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-5">
                            What We Do
                        </h1>

                        <div className="mt-10 space-y-8">
                            <motion.div
                                ref={projectRef}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: projectInView ? 1 : 0, y: projectInView ? 0 : 20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row justify-between items-start"
                            >
                                <h2 className="text-2xl font-bold text-zinc-100 md:w-1/3">Projects</h2>
                                <p className="text-zinc-300 md:w-2/3">
                                    ASA's Projects teams work on sports-related endeavors in the domains of web development, data science, machine learning, and hardware. Project managers work with intimate teams of three to four members to revolutionize the way we examine sports through technology.
                                </p>
                            </motion.div>

                            <motion.div
                                ref={businessRef}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: businessInView ? 1 : 0, y: businessInView ? 0 : 20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row justify-between items-start"
                            >
                                <h2 className="text-2xl font-bold text-zinc-100 md:w-1/3">Business</h2>
                                <p className="text-zinc-300 md:w-2/3">
                                    ASA's Business branch comprises the External Affairs, Internal Affairs, and Finance teams. Business heads and associates work together to organize professional development workshops, plan social networking events, handle finances, and coordinate outreach efforts.
                                </p>
                            </motion.div>

                            <motion.div
                                ref={mediaRef}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: mediaInView ? 1 : 0, y: mediaInView ? 0 : 20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row justify-between items-start"
                            >
                                <h2 className="text-2xl font-bold text-zinc-100 md:w-1/3">Media</h2>
                                <p className="text-zinc-300 md:w-2/3">
                                    ASA's Media branch is responsible for creating content for our newsletter, articles, and social media platforms. Media heads and associates collaborate to develop and execute strategies that define our public image and strengthen our reach.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    <br />

                    <div className="flex flex-wrap justify-center gap-2 pb-10">
                        <figure><img src="/banq.jpg" width="400" alt="ASA Spring 2024 Banquet" /></figure>
                        <figure><img src="/github.jpg" width="400" alt="ASA Github Workshop" /></figure>
                        <figure><img src="/ski.jpg" width="400" alt="ASA Ski Trip" /></figure>
                        <figure><img src="/cooking.jpg" width="400" alt="ASA Cooking Competition" /></figure>
                        <figure><img src="/recruitment.jpg" width="400" alt="ASA Spring Recruitment" /></figure>
                        <figure><img src="/field.jpg" width="400" alt="ASA Field Day" /></figure>
                    </div>

                    <div>
                        <div className="flex flex-col justify-between items-start mb-10 p-5 bg-[#5A5Ca0]">
                            <h2>Join our mission</h2>
                            <p className="text-zinc-300">
                                ASA's Projects teams work on sports-related endeavors in the domains of web development, data science, machine learning, and hardware. Project managers work with intimate teams of three to four members to revolutionize the way we examine sports through technology.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-px bg-zinc-800" />
                <Footer />
            </div>
        </div>
    );
}
