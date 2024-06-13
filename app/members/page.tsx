
import React from "react";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export default async function MembersPage() {
	

	return (
		<div className="">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight pt-4 text-zinc-100 sm:text-4xl">
						Meet Our Team
					</h2>
				</div>
				<h2 className="text-2xl font-semibold space-y-0 tracking-tight text-zinc-100  ">
						Executive Board
					</h2>
				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  items-center justify-center gap-y-8 pb-6 content-center  ">

				<div className="card w-64  g-transparent border text-slate-200 ">
				<figure><img src="/andrew.png"  alt="Andrew Hale" /></figure>
					<div className="card-body">
						<h2 className="card-title">Andrew Hale</h2>
						<p className="text-md">President</p>
						{/*<p className="text-sm text-slate-300">Favorite Athlete: Devin Booker</p>	*/}
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/andrew-hale6/">
							<button className="btn bg-blue-800  hover:bg-blue-900">
							<Linkedin
										className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
									/>
							</button>
						</Link>


						</div>
					</div>
				</div>

				<div className="card w-64  g-transparent border text-slate-200 ">
				<figure><img src="/jason.png"  alt="Jason Yang" /></figure>
					<div className="card-body">
						<h2 className="card-title">Jason Yang</h2>
						<p className="text-md">Vice President</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/jason-yang-269a3a244/">
						<button className="btn bg-blue-800  hover:bg-blue-900 ">

							<Linkedin
										className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
									/>
							</button>
						</Link>


						</div>
					</div>
				</div>

				<div className="card w-64  g-transparent border text-slate-200 ">
				<figure><img src="/vishalpic.png"  alt="Vishal Shenoy" /></figure>
					<div className="card-body">
						<h2 className="card-title">Vishal Shenoy</h2>
						<p className="text-md">Director of Projects</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/shenoyvishal/">
						<button className="btn bg-blue-800  hover:bg-blue-900 ">

							<Linkedin
										className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
									/>
							</button>
						</Link>


						</div>
					</div>
				</div>

				<div className="card w-64  g-transparent border text-slate-200 ">
				<figure><img src="/aashritha.png"  alt="Aashritha Javvaji" /></figure>
					<div className="card-body">
						<h2 className="card-title">Aashritha Javvaji</h2>
						<p className="text-md">Director of Business</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/aashritha-javvaji/">
						<button className="btn bg-blue-800  hover:bg-blue-900 ">

							<Linkedin
										className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
									/>
							</button>
						</Link>


						</div>
					</div>
				</div>

				<div className="card w-64  g-transparent border text-slate-200 ">
				<figure><img src="/benjamin.png"  alt="Ben Busche" /></figure>
					<div className="card-body">
						<h2 className="card-title">Ben Busche</h2>
						<p className="text-md">Director of Media</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/ben-busche/">
						<button className="btn bg-blue-800  hover:bg-blue-900 ">

							<Linkedin
										className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
									/>
							</button>
						</Link>


						</div>
					</div>
				</div>
			</div>

			<h2 className="text-2xl font-semibold space-y-0 tracking-tight text-zinc-100  ">
						Advisory Board
					</h2>
				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  items-center justify-center gap-y-8 pb-6 content-center  ">

			<div className="card w-64  g-transparent border text-slate-200 ">
				<figure><img src="/chris.png"  alt="Christopher Lo" /></figure>
					<div className="card-body">
						<h2 className="card-title">Chris Lo</h2>
						<p className="text-md">Advisor</p>
						{/*<p className="text-sm text-slate-300">Favorite Athlete: Devin Booker</p>	*/}
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/christopherlo34/">
							<button className="btn bg-blue-800  hover:bg-blue-900">
							<Linkedin
										className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
									/>
							</button>
						</Link>


						</div>
					</div>
				</div>

				<div className="card w-64  g-transparent border text-slate-200 ">
				<figure><img src="/vikram.png"  alt="Vikram Choudhry" /></figure>
					<div className="card-body">
						<h2 className="card-title">Vikram Choudhry</h2>
						<p className="text-md">Advisor</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/vikramchoudhry24/">
						<button className="btn bg-blue-800  hover:bg-blue-900 ">

							<Linkedin
										className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
									/>
							</button>
						</Link>


						</div>
					</div>
				</div>
</div>
					<br></br>
					<br></br>


			</div>
			

			<Footer></Footer>
		</div>
	);
}
