import React from "react";
import { Navigation } from "../components/nav";
import Link from "next/link";
import { Footer } from "../components/footer";

export default async function AboutPage() {
  return (
    <div className="">
      <Navigation />

      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight pt-4 text-zinc-100 sm:text-4xl">
            Join Us
          </h2>
          <br></br>
          {/*
          <h4 className="pt-4 pb-12 text-zinc-300">
          We will be opening applications for Project, Business, and Media members in Fall 2024!
          </h4>
  */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pt-12 justify-center">
            <div className="card w-80 md:w-[22rem] lg:w-96 outline outline-1 outline-zinc-500 text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Business Head Application</h2>
                <p>
                Join our Board and lead our Internal Affairs, External Affairs, or Finance branch!
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn bg-indigo-800 hover:bg-indigo-700 text-white">
                    <a
                      href="https://forms.gle/UYNQF2pS1eRrtSdMA"
                      target="_blank">
                      Apply
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-80 md:w-[22rem] lg:w-96 outline outline-1 outline-zinc-500 text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Media Head Application</h2>
                <p>
                  Join our Board and lead our Design, Photo/Video,
                  Journalism, or Social Media branch!
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn bg-indigo-800 hover:bg-indigo-700 text-white">
                    <a
                      href="https://forms.gle/SqRUUtahAD4Z87X4A"
                      target="_blank">
                      Apply
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
            {/*
          <div className="mt-1s flex gap-1 text-gray-300">
            <p>
            In the meantime, follow us on Instagram {" "}(
            <Link
              className="underline text-blue-200"
              href="https://www.instagram.com/aggiesportsanalytics/">
              @aggiesportsanalytics
            </Link>
              ){" "} to stay updated on our recruitment timeline and latest news.
            </p>
          </div>
            */}
                  <br></br>
      <br></br>
      <br></br>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <Footer></Footer>
    </div>
  );
}
