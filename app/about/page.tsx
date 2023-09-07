
import React from "react";
import { Navigation } from "../components/nav";


export default async function AboutPage() {
	

	return (
		<div className="">
			<Navigation />

			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight pt-4 text-zinc-100 sm:text-4xl">
						About Us
					</h2>
					<p className="mt-8 text-zinc-300">
						Aggie Sports Analytics was founded in summer 2022 by a group of friends trying to forge an intersection between sports
						and computer science at UC Davis. While we may have started out as 4 people and 1 project team, we've completed close to 20
						projects and had over 100 members in our short lifetime. We value our sense of community and want to grow sustainably in an 
						inviting and accepting manner. Most importantly, we want to use the common passion for sports to make people enthusiastic about
						computer science, business, and design.
					</p>

				</div>
				<div className="w-full h-px bg-zinc-600" />

			</div>
			<p className="px-6 py-10 mx-auto max-w-7xl lg:px-8 text-center text-zinc-300">
					Throwback to the "Sports Analytics Club at UC Davis" trying to recruit early members :D
				</p>
				<div className="flex  items-center justify-center mx-4 gap-4 max-[1250px]:flex-col">
					<img className="" src="/pic1.JPG" width="400" alt="Chris Lo, Yash Deshmukh, and Vikram Choudhry"></img>
					<img className="" src="/pic2.JPG" width="400" alt="Vikram Choudhry"></img>
					<img className="" src="/pic3.JPG" width="400" alt="Yash Deshmukh, Chris Lo, and Amar Singh"></img>
				</div>
		</div>
	);
}