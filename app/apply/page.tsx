
import React from "react";
import { Navigation } from "../components/nav";


export default async function AboutPage() {
	

	return (
		<div className="">
			<Navigation />

			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight pt-4 text-zinc-100 sm:text-4xl">
						Apply
					</h2>

					<h4 className="pt-4 pb-12">Join our fast-growing team! We are currently recruiting for Fall 2023.</h4>
					<div className="w-full h-px bg-zinc-600" />
					<div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pt-12 justify-center">
						<div className="card w-80 md:w-[22rem] lg:w-96 outline outline-1 outline-zinc-500 text-primary-content">
							<div className="card-body">
								<h2 className="card-title">Developer</h2>
								<p>Be part of a team and work on a technical project!</p>
								<div className="card-actions justify-end">
								<button className="btn bg-indigo-800 hover:bg-indigo-700 text-white"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdkkzSw4q0UQiFZN87F13rZeedBtFU49XHYs-HWv4sPzCQgPg/viewform?usp=sf_link" target="_blank">Apply</a></button>
								</div>
							</div>
						</div>
						<div className="card w-80 md:w-[22rem] lg:w-96 outline outline-1 outline-zinc-500 text-primary-content">
							<div className="card-body">
								<h2 className="card-title">Internal Affairs Chair</h2>
								<p>Manage the day to day activities within the club!</p>
								<div className="card-actions justify-end">
								<button className="btn bg-indigo-800 hover:bg-indigo-700 text-white"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfcuxKvBqJHHx51h0-5KukobQPh1EqOOhydkLB58Xm3ExDqgA/viewform?usp=sf_link" target="_blank">Apply</a></button>
								</div>
							</div>
						</div>
						<div className="card w-80 md:w-[22rem] lg:w-96 outline outline-1 outline-zinc-500 text-primary-content">
							<div className="card-body">
								<h2 className="card-title">Outreach Chair</h2>
								<p>Build relationships with other organizations and find clients!</p>
								<div className="card-actions justify-end">
								<button className="btn bg-indigo-800 hover:bg-indigo-700 text-white"><a href="https://docs.google.com/forms/d/e/1FAIpQLSe9oSsNv-PKLdgCs6oat0RjhFTLvOlYfvyPgYR1NxrpukWb-Q/viewform?usp=sf_link" target="_blank">Apply</a></button>
								</div>
							</div>
						</div>
						<div className="card w-80 md:w-[22rem] lg:w-96 outline outline-1 outline-zinc-500 text-primary-content">
							<div className="card-body">
								<h2 className="card-title">Finance Chair</h2>
								<p>Raise money for the club and manage our  internal finances!</p>
								<div className="card-actions justify-end">
								<button className="btn bg-indigo-800 hover:bg-indigo-700 text-white"><a href="https://docs.google.com/forms/d/e/1FAIpQLSeEEZkO1--HYnGDpAjMVsPKxjLGGmsicbEZNQJ7bWE1ctJGVg/viewform?usp=sf_link" target="_blank">Apply</a></button>
								</div>
							</div>
						</div>
						<div className="card w-80 md:w-[22rem] lg:w-96 outline outline-1 outline-zinc-500 text-primary-content">
							<div className="card-body">
								<h2 className="card-title">Designer</h2>
								<p>Join a team of designers and work on UI/UX and social media design!</p>
								<div className="card-actions justify-end">
								<button className="btn bg-indigo-800 hover:bg-indigo-700 text-white"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfBS8cVGU58loads9PgibPVotO6EQSN-GfmCB0kU56LU5b2pg/viewform?usp=sf_link" target="_blank">Apply</a></button>
								</div>
							</div>
						</div>
						<div className="card w-80 md:w-[22rem] lg:w-96 outline outline-1 outline-zinc-500 text-primary-content">
							<div className="card-body">
								<h2 className="card-title">Writer</h2>
								<p>Research the intersection of sports and other subjects!</p>
								<div className="card-actions justify-end">
								<button className="btn bg-indigo-800 hover:bg-indigo-700 text-white"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdPxtWs0F45CqCCx7wYzqIlEm4WfvDQkrPjr2g3DdRK8Qq54g/viewform?usp=sf_link" target="_blank">Apply</a></button>
								</div>
							</div>
						</div>
					</div>
	
				</div>
			</div>
		</div>
	);
}