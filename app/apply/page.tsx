"use client"; // Ensures the component is rendered on the client side

import React from "react";
import { Footer } from "../components/footer";
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function MembersPage() {
    return (
        <div className="relative">
            <Head>
                <title>Apply | Aggie Sports Analytics at UC Davis</title>
            </Head>
            
            {/* Navbar */}
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
                                <li><a className="text-lg" href="/about">About</a></li>
                                <li><a className="text-lg" href="/projects">Projects</a></li>
                                <li><a className="text-lg" href="/articles">Articles</a></li>
                                <li><a className="text-lg" href="/members">Team</a></li>
                            </ul>
                        </div>
                        <a href="/" className="btn btn-ghost">
                            <img src="/bLogo.png" alt="Aggie Sports Analytics Logo" width={100} />
                        </a>
                    </div>
                    <div className="navbar-center">
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-zinc-200 text-xl">
                                <li><a href="/about">About</a></li>
                                <li><a href="/projects">Projects</a></li>
                                <li><a href="/journalism">Journalism</a></li>
                                <li><a href="/members"><b>Team</b></a></li>
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
            <div className="bg-[#111111] px-6 mx-auto max-w-7xl lg:px-8 py-12">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12">
                    Recruitment Timeline
                </h2>

</div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
