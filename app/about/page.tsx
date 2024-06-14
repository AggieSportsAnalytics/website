import React from "react";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";

export default async function AboutPage() {
    return (
        <div className="">
            <Navigation />

            <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="mx-auto lg:mx-0">
                    <h1 className="text-4xl font-bold tracking-tight pt-4 text-zinc-100 sm:text-4xl">
                        About Us
                    </h1>
                    <p className="mt-8 text-zinc-300">
					<b>Aggie Sports Analytics (ASA)</b> is forging the intersection between sports and technology at UC Davis. 
					We have three branches — <b>Projects</b>, <b>Business</b>, and <b>Media</b> — which work together seamlessly to build 
					projects, organize events, and curate media. So far, we have completed over 25 projects and 
					hosted dozens of workshops, guest speaker events, and socials. Currently, we have over 100 members. 
					<br></br><br></br>
					Our primary goal is to build a <b>tight-knit community</b> where members can 
					collaborate, learn, and grow together. ASA is dedicated to creating meaningful projects that not only advance our 
					understanding of sports analytics but also have a real-world impact. Together, we are redefining the future 
					of technology in sports.
                    </p>
                    <br />
					<br></br>
                    <center>
                    <figure><img className="border border-black" src="/casecomp.jpg" width="600" alt="ASA Case Competition" /></figure>
                    </center>
					<br></br>
                    <h1 className="text-4xl font-bold tracking-tight pt-10 text-zinc-100 sm:text-4xl">
                        Our Branches
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
					<center>
					<p><i>We will be opening applications for new members in Fall 2024!</i></p>
					</center>
				<h1 className="text-4xl font-bold tracking-tight pt-5 text-zinc-100 sm:text-4xl">
                       23-24 Highlights
                    </h1>
            </div>
            <p className="px-6 py-10 mx-auto max-w-7xl lg:px-8 text-center text-zinc-300"></p>
            <div className="flex items-center justify-center mx-4 gap-4 pb-10 flex-wrap">
                <figure><img className="border border-black" src="/banq.jpg" width="400" alt="ASA Spring 2024 Banquet" /></figure>
                <figure><img className="border border-black" src="/github.jpg" width="400" alt="ASA Github Workshop" /></figure>
                <figure><img className="border border-black" src="/ski.jpg" width="400" alt="ASA Ski Trip" /></figure>
                <figure><img className="border border-black" src="/cooking.jpg" width="400" alt="ASA Cooking Competition" /></figure>
                <figure><img className="border border-black" src="/recruitment.jpg" width="400" alt="ASA Spring Recruitment" /></figure>
                <figure><img className="border border-black" src="/field.jpg" width="400" alt="ASA Field Day" /></figure>
            </div>
            <br></br>
			<Footer />
        </div>
    );
}
