
import React from "react";
import { Navigation } from "../components/nav";


export default async function EventsPage() {
	

	return (
		<div className="">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight pt-4 text-zinc-100 sm:text-4xl">
						Events
					</h2>
					<p className="mt-8 text-zinc-300">
						We host recruitment, workshops, panels, and large events every quarter. All updates will be posted here as well as our social media!
					</p>
					
				</div>
				<div className="w-full h-px bg-zinc-600" />
				<h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
						Fall Quarter 2023
				</h2>
				<div className="  text-slate-200">
					<div className="card  border mb-6 bg-transparent ">
						<div className="card-body">
							<h2 className="card-title text-zinc-100">First Meeting</h2>
							<p>New member or old, come attend to see what we were up to this summer and what we have planned this year!</p>
							<div className="card-actions justify-end">
							<button className="btn mt-2 bg-indigo-950 hover:bg-indigo-950 text-zinc-100">Oct 18, 2023</button>
							</div>
						</div>
					</div>
					<div className="card  border mb-6 bg-zinc-950 bg-transparent">
						<div className="card-body">
							<h2 className="card-title text-zinc-100">General Recruitment</h2>
							<p>This date marks the week of recruitment! We will be recruiting project, business, and media team members.</p>
							<div className="card-actions justify-end">
							<button className="btn dro mt-2 bg-indigo-950 hover:bg-indigo-950 text-zinc-100">Oct 24, 2023</button>
							</div>
						</div>
					</div>
					<div className="card  border  bg-zinc-950  bg-transparent ">
						<div className="card-body">
							<h2 className="card-title text-zinc-100">Sports Analytics Symposium</h2>
							<p>Join us at the ARC Ballroom as we host a panel of sports analysts from the 49ers, Kings, and more!</p>
							<div className="card-actions justify-end">
							<button className="btn mt-2 bg-indigo-950 hover:bg-indigo-950 text-zinc-100">Nov 4, 2023</button>
							</div>
						</div>
					</div>
					<div className="p-6"></div>
				</div>
			</div>
		</div>
	);
}