
import React from "react";
import { Navigation } from "../components/nav";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export default async function MembersPage() {
	

	return (
		<div className="">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight pt-4 text-zinc-100 sm:text-4xl">
						Members
					</h2>
					<p className="mt-8 text-zinc-300">
						This page will show our current board, members, and club alumni. More faces will be added after complete our fall quarter recruitment and we've taken 
						official board and member headshots!
					</p>
					
				</div>
				<div className="w-full h-px bg-zinc-600" />
				<h2 className="text-2xl font-semibold space-y-0 tracking-tight text-zinc-100  ">
						Active Members
					</h2>
				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  items-center justify-center gap-y-8 pb-6 content-center  ">

				<div className="card w-64 g-transparent border text-slate-200 ">
				<figure><img src="/chris.jpg"  alt="Chris Lo" /></figure>
					<div className="card-body">
						<h2 className="card-title">Chris Lo</h2>
						<p className="text-md">Co-President</p>
						<p className="text-sm text-slate-300">Favorite Athlete: Dikembe Mutumbo</p>
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
				<figure><img src="/vikram.jpg"  alt="Vikram Choudhry" /></figure>
					<div className="card-body">
						<h2 className="card-title">Vikram Choudhry</h2>
						<p className="text-md">Co-President</p>
						<p className="text-sm text-slate-300">Favorite Athlete: Patrick Willis</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/vikram-choudhry-05a8a0250/">
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
				<figure><img src="/yash.jpg"  alt="Yash Deshmukh" /></figure>
					<div className="card-body">
						<h2 className="card-title">Yash Deshmukh</h2>
						<p className="text-md">Vice President</p>
						<p className="text-sm text-slate-300">Favorite Athlete: Rodney Stuckey</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/yashdesh6/">
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
				<figure><img src="/andrew.jpg"  alt="Andrew Hale" /></figure>
					<div className="card-body">
						<h2 className="card-title">Andrew Hale</h2>
						<p className="text-md">Director of Projects</p>
						<p className="text-sm text-slate-300">Favorite Athlete: Alex Morgan</p>
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
				<figure><img src="/soumil.jpg"  alt="Soumil Gad" /></figure>
					<div className="card-body">
						<h2 className="card-title">Soumil Gad</h2>
						<p className="text-md">Director of Business</p>
						<p className="text-sm text-slate-300">Favorite Athlete: Jude Bellingham</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/soumil-gad/">
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
				<figure><img src="/abhi.jpg"  alt="Abhi Sharma" /></figure>
					<div className="card-body">
						<h2 className="card-title">Abhi Sharma</h2>
						<p className="text-md">Director of Media</p>
						<p className="text-sm text-slate-300">Favorite Athlete: Deandre Liggins</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/company/aggiesportsanalytics">
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
				<figure><img src="/honor.jpg"  alt="Honoré Alexander" /></figure>
					<div className="card-body">
						<h2 className="card-title">Honoré Alexander</h2>
						<p className="text-md">External Affairs Chair</p>
						<p className="text-sm text-slate-300">Favorite Athlete: Venus Williams</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/honore-alexander/">
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
				<figure><img src="/victoria.jpg"  alt="Victoria Kerslake" /></figure>
					<div className="card-body">
						<h2 className="card-title">Victoria Kerslake</h2>
						<p className="text-md">Design Chair</p>
						<p className="text-sm text-slate-300">Favorite Athlete: Draymond Green</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/victoria-kerslake-861a12243/">
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
				<figure><img src="/sal.jpg"  alt="Salvatoré Martinez" /></figure>
					<div className="card-body">
						<h2 className="card-title">Salvatoré Martinez</h2>
						<p className="text-md">Content Producer</p>
						<p className="text-sm text-slate-300">Favorite Athlete: Daniel Sorenson</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/salvator%C3%A9-martinez-77a82719b/">
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
				<figure><img src="/amar.jpg"  alt="Amar Singh" /></figure>
					<div className="card-body">
						<h2 className="card-title">Amar Singh</h2>
						<p className="text-md">Project Manager</p>
						<p className="text-sm text-slate-300">Favorite Athlete: Magnus Carslen</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/amar-singh-1b87a11b0/">
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
				<figure><img src="/varun.jpg"  alt="Varun Wadhwa" /></figure>
					<div className="card-body">
						<h2 className="card-title">Varun Wadhwa</h2>
						<p className="text-md">Project Manager</p>
						<p className="text-sm text-slate-300">Favorite Athlete: DeAndre Jordan</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/varun-wadhwa-a17845162/">
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
				<figure><img src="/sujash.jpg"  alt="Sujash Barman" /></figure>
					<div className="card-body">
						<h2 className="card-title">Sujash Barman</h2>
						<p className="text-md">Project Manager</p>
						<p className="text-sm text-slate-300">Favorite Athlete: Floyd Mayweather</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/sujash-barman/">
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
				<figure><img src="/daniel.jpg"  alt="Daniel Kim" /></figure>
					<div className="card-body">
						<h2 className="card-title">Daniel Kim</h2>
						<p className="text-md">Project Manager</p>
						<p className="text-sm text-slate-300">Favorite Athlete: Diana Taurasi</p>
						<div className="card-actions justify-end">
						<Link target="_blank" href="https://www.linkedin.com/in/dhyunkim/">
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
				<figure><img src="/vishal.jpg"  alt="Vishal Shenoy" /></figure>
					<div className="card-body">
						<h2 className="card-title">Vishal Shenoy</h2>
						<p className="text-md">Project Manager</p>
						<p className="text-sm text-slate-300">Favorite Athlete: Patrick Mahomes</p>
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





			</div>
			</div>


		</div>
	);
}