import React from "react";
import { Footer } from "../components/footer";
import Head from 'next/head';

export default async function AboutPage() {
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
            <div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-8 lg:pt-12">
                <div className="mx-auto lg:mx-0">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Who We Are
                    </h1>
                    <p className="mt-8 text-zinc-300">
				    Aggie Sports Analytics is a student-led club at UC Davis redefining the future of sports technology. 
                    </p>

                    <br />
					<br></br>
                    <center>
                    <figure><img src="/casecomp.jpg" width="600" alt="ASA Case Competition" /></figure>
                    </center>
					<br></br>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        What We Do
                    </h1>
                    <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-1 md:grid-cols-3">
                        <div className="text-zinc-100">
                            <h2 className="text-2xl font-bold">Projects</h2>
							<br></br>
                            <p>ASA's Projects teams work on sports-related endeavors in the domains of web development, data science, machine learning, and hardware. Project managers work with intimate teams of three to four members to revolutionize the way we examine sports through technology.</p>
                        </div>
                        <div className="text-zinc-100">
                            <h2 className="text-2xl font-bold">Business</h2>
							<br></br>
                            <p>ASA's Business branch comprises of the External Affairs, Internal Affairs, and Finance teams. Business heads and associates work together to organize professional development workshops, plan social networking events, handle finances, and coordinate outreach efforts.</p>
                        </div>
                        <div className="text-zinc-100">
                            <h2 className="text-2xl font-bold">Media</h2>
							<br></br>
                            <p>ASA's Media branch is responsible for creating content for our newsletter, articles, and social media platforms. Media heads and associates collaborate to develop and execute strategies that define our public image and strengthen our reach.</p>
                        </div>
                    </div>
                </div>
				<br></br>

            </div>
            <p className="px-6 py-10 mx-auto max-w-7xl lg:px-8 text-center text-zinc-300"></p>
            <div className="flex items-center justify-center mx-4 gap-4 pb-10 flex-wrap">
                {/*className="border border-black"*/}
                <figure><img  src="/banq.jpg" width="400" alt="ASA Spring 2024 Banquet" /></figure>
                <figure><img  src="/github.jpg" width="400" alt="ASA Github Workshop" /></figure>
                <figure><img  src="/ski.jpg" width="400" alt="ASA Ski Trip" /></figure>
                <figure><img  src="/cooking.jpg" width="400" alt="ASA Cooking Competition" /></figure>
                <figure><img  src="/recruitment.jpg" width="400" alt="ASA Spring Recruitment" /></figure>
                <figure><img  src="/field.jpg" width="400" alt="ASA Field Day" /></figure>
            </div>
            <br></br>
			<Footer />
        </div>
    );
}