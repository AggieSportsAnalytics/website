"use client";

import React from "react";
import { Footer } from "../components/footer";
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'; // Import Next.js Image component
import { Laptop, Briefcase, Camera } from "lucide-react";

export default function AboutPage() {
    // Refs and inView states for scroll-triggered animations
    const { ref: projectRef, inView: projectInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: businessRef, inView: businessInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: mediaRef, inView: mediaInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    
    // Ref and inView for the logos collage
    const { ref: logosRef, inView: logosInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    // Array of logo image sources
    const logos = Array.from({ length: 12 }, (_, i) => `/logos/logo${i + 1}.png`); // Ensure these images are optimized

    return (
        <div className="relative">
            <Head>
                <title>About | Aggie Sports Analytics at UC Davis</title>
            </Head>
            
            {/* Navbar */}
            <div className="w-screen bg-red text-xs">
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
                                <li><a className="text-lg" href="/journalism">Journalism</a></li>
                                <li><a className="text-lg" href="/members">Team</a></li>
                            </ul>
                        </div>
                        <a href="/" className="btn btn-ghost"><Image src="/bLogo.png" alt="Aggie Sports Analytics Logo" width={100} height={100} /></a>
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
                    <button className="btn mr-4 bg-gradient-to-r from-[#393B7F] to-[#8646B2] hover:from-[#6A1AA2] hover:to-[#3136D3] text-zinc-100 transition duration-300">
                            <a href="/apply">Join</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-px bg-zinc-800" />

            {/* Main Content with Fade-In (excluding Navbar) */}
            <motion.div
                className="bg-[#111111] pl-10 pr-10 pt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }} // Light fade-in over 1 second
            >
                <div className="px-6 mx-auto space-y-16 max-w-7xl lg:px-8 md:space-y-24 md:pt-6 lg:pt-10">
                    {/* Who We Are Section */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-start">
                        <div className="lg:w-1/2 lg:pr-6 justify-center h-full">
                            <br />
                            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                                Who We Are
                            </h1>
                            <p className="mt-8 text-lg text-zinc-300">
                                Aggie Sports Analytics is a student-led organization redefining the future of sports technology. We unite driven students from diverse academic backgrounds to develop innovative solutions across business, technology, and media.
                            </p>
                            <br />
                            <p className="mb-8 text-lg text-zinc-300">
                            As a tight-knit community, we are committed to fostering both professional development and personal growth, shaping the future of our field while cultivating meaningful connections.</p>
                        </div>
                        <div className="lg:w-1/2 lg:pl-6 flex justify-center lg:justify-end pt-3">
                            <figure><Image src="/casecomp.jpg" width={500} height={300} alt="ASA Case Competition" /></figure>
                        </div>
                    </div>

                    {/* What We Do Section with Scroll-Triggered Animations */}
                    <div className="max-w-7xl mx-auto pt-3">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-5">
                            What We Do
                        </h1>
                        <br></br>
                        <div className=" p-10 mb-10 space-y-16"> {/* Increased spacing */}
                            {/* Projects */}
                            <motion.div
                                ref={projectRef}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: projectInView ? 1 : 0, y: projectInView ? 0 : 20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row justify-between items-start flex items-center h-full"
                            >
                                {/* Removed Icon */}
                                <h2 className="inline-flex items-center px-5 py-3 text-2xl font-bold text-zinc-100 bg-gradient-to-r  from-[#171A7E] to-[#CDA652] rounded-2xl mb-4 md:mb-0">
                                    Projects &nbsp; <Laptop className=""></Laptop>
                                </h2>
                                <p className="text-zinc-300 md:w-2/3">
                                    The project teams work on endeavors in the domains of web development, data science, machine learning, and hardware. Project managers work with intimate teams of three to four members to revolutionize the way we examine sports through technology.
                                </p>
                            </motion.div>

                            {/* Business */}
                            <motion.div
                                ref={businessRef}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: businessInView ? 1 : 0, y: businessInView ? 0 : 20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row justify-between items-start flex items-center h-full"
                            >
                                {/* Removed Icon */}
                                <h2 className="inline-flex items-center px-5 py-3 text-2xl font-bold text-zinc-100 bg-gradient-to-r  from-[#4A2564] to-[#A3957E] rounded-2xl mb-4 md:mb-0">
                                    Business &nbsp; <Briefcase className=""></Briefcase>
                                </h2>
                                <p className="text-zinc-300 md:w-2/3">
                                    The business branch comprises the external affairs, internal affairs, and finance teams. Business heads and associates work together to organize professional development workshops, plan social networking events, handle finances, and coordinate outreach efforts.
                                </p>
                            </motion.div>

                            {/* Media */}
                            <motion.div
                                ref={mediaRef}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: mediaInView ? 1 : 0, y: mediaInView ? 0 : 20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row justify-between items-start flex items-center h-full"
                            >
                                {/* Removed Icon */}
                                <h2 className="inline-flex items-center px-5 py-3 text-2xl font-bold text-zinc-100 bg-gradient-to-r  from-[#0F0A53] to-[#89847B] rounded-2xl mb-4 md:mb-0">
                                    Media &nbsp; <Camera className=""></Camera>
                                </h2>
                                <p className="text-zinc-300 md:w-2/3">
                                    The media branch is responsible for creating content for our newsletter, articles, and social media platforms. Media heads and associates collaborate to develop and execute strategies that define our public image and strengthen our reach.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Increased gap from 4 to 6 */}
                        <motion.figure
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }} // Ensures animation occurs only once
                            className="overflow-hidden rounded-lg"
                        >
                            <Image src="/cooking.jpg" alt="ASA Cooking Competition" width={800} height={600} className="w-full h-auto object-cover" />
                        </motion.figure>
                        <motion.figure
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }} // Ensures animation occurs only once
                            className="overflow-hidden rounded-lg"
                        >
                            <Image src="/recruitment.png" alt="ASA Spring Recruitment" width={800} height={600} className="w-full h-auto object-cover" />
                        </motion.figure>
                        <motion.figure
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }} // Ensures animation occurs only once
                            className="overflow-hidden rounded-lg"
                        >
                            <Image src="/field.jpg" alt="ASA Field Day" width={800} height={600} className="w-full h-auto object-cover" />
                        </motion.figure>
                    </div>

                    {/* Where We Go Section */}
                    <div className="max-w-7xl mx-auto pt-5">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-6">
                            Where We Go
                        </h1>
                        <p className="text-lg text-zinc-300 mb-8">
                        Our members pursue successful careers in a wide range of industries, including tech, consulting, finance, business strategy, and more. </p>
                        <br></br>
                        <motion.div
                            ref={logosRef}
                            initial="hidden"
                            animate={logosInView ? "visible" : "hidden"}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1,
                                    },
                                },
                            }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                        >
                            {logos.map((logoSrc, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center justify-center p-4 rounded-lg shadow-lg"
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8 },
                                        visible: { opacity: 1, scale: 1 },
                                    }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Image
                                        src={logoSrc}
                                        alt={`Partner Logo ${index + 1}`}
                                        width={100} // Adjust based on your design
                                        height={100} // Adjust based on your design
                                        className="max-h-16 object-contain"
                                        priority={false} // Ensures lazy loading
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <br />

                    {/* Photo Gallery Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Increased gap from 4 to 6 */}
                    <motion.figure
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }} // Ensures animation occurs only once
                            className="overflow-hidden rounded-lg"
                        >
                            <Image src="/banq.jpg" alt="ASA Spring 2024 Banquet" width={800} height={600} className="w-full h-auto object-cover" />
                        </motion.figure>
                        <motion.figure
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }} // Ensures animation occurs only once
                            className="overflow-hidden rounded-lg"
                        >
                            <Image src="/github.jpg" alt="ASA Github Workshop" width={800} height={600} className="w-full h-auto object-cover" />
                        </motion.figure>
                        <motion.figure
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }} // Ensures animation occurs only once
                            className="overflow-hidden rounded-lg"
                        >
                            <Image src="/ski.jpg" alt="ASA Ski Trip" width={800} height={600} className="w-full h-auto object-cover" />
                        </motion.figure>

                    </div>

                    {/* Logos Collage Section */}
                </div>
                <br></br>
                <br></br>
                <br></br>
            </motion.div>
            <div className="w-full h-px bg-zinc-800" />
            <Footer />
        </div>
    );
}
