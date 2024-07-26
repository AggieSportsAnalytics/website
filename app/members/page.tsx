
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
				{/*}
				<h2 className="text-2xl font-semibold space-y-0 tracking-tight text-zinc-100  ">
						Executive Board
	</h2>*/}
				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  items-center justify-center gap-y-8 pb-6 content-center  ">

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/andrew.png"  alt="Andrew Hale" /></figure>
					<div className="card-body">
						<h2 className="card-title">Andrew Hale</h2>
						<p className="text-md">President</p>
						{/*<p className="text-sm text-slate-300">Favorite Athlete: Devin Booker</p>	*/}
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/andrew-hale6/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/jason.png"  alt="Jason Yang" /></figure>
					<div className="card-body">
						<h2 className="card-title">Jason Yang</h2>
						<p className="text-md">Vice President</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/jason-yang-269a3a244/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/vishalpic.png"  alt="Vishal Shenoy" /></figure>
					<div className="card-body">
						<h2 className="card-title">Vishal Shenoy</h2>
						<p className="text-md">Director of Projects</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/shenoyvishal/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/aashritha.png"  alt="Aashritha Javvaji" /></figure>
					<div className="card-body">
						<h2 className="card-title">Aashritha Javvaji</h2>
						<p className="text-md">Director of Business</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/aashritha-javvaji/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/benjamin.png"  alt="Ben Busche" /></figure>
					<div className="card-body">
						<h2 className="card-title">Ben Busche</h2>
						<p className="text-md">Director of Media</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/ben-busche/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/chris.png"  alt="Christopher Lo" /></figure>
					<div className="card-body">
						<h2 className="card-title">Chris Lo</h2>
						<p className="text-md">Advisor</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/christopherlo34/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/vikram.png"  alt="Vikram Choudhry" /></figure>
					<div className="card-body">
						<h2 className="card-title">Vikram Choudhry</h2>
						<p className="text-md">Advisor/Project Manager</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/vikramchoudhry24/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>	
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/alice.png"  alt="Alice Nguyen" /></figure>
					<div className="card-body">
						<h2 className="card-title">Alice Nguyen</h2>
						<p className="text-md">Project Manager</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/alice-t-nguyen/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>	
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/arnav.png"  alt="Arnav Akula" /></figure>
					<div className="card-body">
						<h2 className="card-title">Arnav Akula</h2>
						<p className="text-md">Project Manager</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/arnavakula/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>	
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/darshan.png"  alt="Darshan Shivakumar" /></figure>
					<div className="card-body">
					<h2 className="card-title" style={{ fontSize: '19px' }}>Darshan Shivakumar</h2>
						<p className="text-md">Project Manager</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/darshan-shivakumar/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>	
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/devon.png"  alt="Devon Streelman" /></figure>
					<div className="card-body">
						<h2 className="card-title">Devon Streelman</h2>
						<p className="text-md">Project Manager</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/devon-streelman/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>	
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/keshav.png"  alt="Keshav Lodha" /></figure>
					<div className="card-body">
						<h2 className="card-title">Keshav Lodha</h2>
						<p className="text-md">Project Manager</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/keshav-lodha-0497541b7/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>	
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/krishna.png"  alt="Krishna Gupta" /></figure>
					<div className="card-body">
						<h2 className="card-title">Krishna Gupta</h2>
						<p className="text-md">Project Manager</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/krishna-gupta-a19b67233/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>	
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/nate.png"  alt="Nathaniel Maffly" /></figure>
					<div className="card-body">
						<h2 className="card-title">Nathaniel Maffly</h2>
						<p className="text-md">Project Manager</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/nathaniel-maffly-390235268/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>	
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/rishit.png"  alt="Rishit Das" /></figure>
					<div className="card-body">
						<h2 className="card-title">Rishit Das</h2>
						<p className="text-md">Project Manager</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/rishitdas/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>	
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/tej.png"  alt="Tej Gaonkar" /></figure>
					<div className="card-body">
						<h2 className="card-title">Tej Gaonkar</h2>
						<p className="text-md">Project Manager</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/tej-gaonkar-89a51a203/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>	
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/israel.png"  alt="Israel Shokrian" /></figure>
					<div className="card-body">
						<h2 className="card-title">Israel Shokrian</h2>
						<p className="text-md">Head of External Affairs</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/israel-shokrian-5940b1281/">
								<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>
						</div>
					</div>
				</div>
			
				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/tisha.png"  alt="Tisha Kathrani" /></figure>
					<div className="card-body">
						<h2 className="card-title">Tisha Kathrani</h2>
						<p className="text-md">Head of Internal Affairs</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/tishakathrani/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>	
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/manish.png"  alt="Manish Rathor" /></figure>
					<div className="card-body">
						<h2 className="card-title">Manish Rathor</h2>
						<p className="text-md">Head of Finance</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/manishrathor03/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>	
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/jim.png"  alt="Jim Qu" /></figure>
					<div className="card-body">
						<h2 className="card-title">Jim Qu</h2>
						<p className="text-md">Head of Design</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://linkedin.com/in/jimm-qu">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>	
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/jack.png"  alt="Jack Orman" /></figure>
					<div className="card-body">
						<h2 className="card-title">Jack Orman</h2>
						<p className="text-md">Head of Social Media</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://linkedin.com/in/jackorman/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>	
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/miwa.png"  alt="Miwa Hirai" /></figure>
					<div className="card-body">
						<h2 className="card-title">Miwa Hirai</h2>
						<p className="text-md">Head of Journalism</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/miwahirai/">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
								<Linkedin
									className="w-5 h-5 duration-200 hover:font-medium text-slate-100" 
								/>
							</button>
							</Link>	
						</div>
					</div>
				</div>

				<div className="card w-64 bg-transparent border border-gray-700 text-slate-200">
				<figure><img src="/salvatore.png"  alt="Salvatoré Martinez" /></figure>
					<div className="card-body">
						<h2 className="card-title">Salvatoré Martinez</h2>
						<p className="text-md">Head of Production</p>
						<div className="card-actions justify-end">
							<Link target="_blank" href="https://www.linkedin.com/in/salvatore-martinez">
							<button className="btn bg-opacity-30 hover:bg-blue-900">
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
