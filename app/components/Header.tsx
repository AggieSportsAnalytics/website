"use client";

import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-screen bg-[#181818] text-xs">
      <div className="navbar bg-[#181818]">
        <div className="navbar navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 stroke-zinc-300"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
                          <ul
                tabIndex={0}
                className="z-30 menu menu-md dropdown-content mt-3 p-2 shadow bg-zinc-950 rounded-box w-52 text-zinc-300"
              >
                <li>
                  <a className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent" href="/projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent" href="https://medium.com/@aggiesportsanalytics" target="_blank">
                    Journalism
                  </a>
                </li>
                <li>
                  <a className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent" href="/apply">
                    Join
                  </a>
                </li>
              </ul>
          </div>
          <a href="/" className="hover:bg-transparent active:bg-transparent ml-2">
            <Image
              src="/bLogo.png"
              alt="Aggie Sports Analytics Logo"
              width={100}
              height={50}
              className="hover:grayscale-0"
            />
          </a>
        </div>
        <div className="navbar-center">
          <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-zinc-200 text-xl">
                <li>
                  <a href="/about" className="hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent">About</a>
                </li>
                <li>
                  <a href="/community" className="hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent">Community</a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent">Projects</a>
                </li>
                <li>
                  <a href="https://medium.com/@aggiesportsanalytics" target="_blank" className="hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent">Journalism</a>
                </li>

              </ul>
          </div>
        </div>
        <div className="navbar-end">
          <a 
            href="/apply" 
            className="inline-flex items-center px-5 py-3 mr-2 bg-transparent border border-white text-white text-sm font-medium rounded-full hover:border-zinc-500 hover:text-zinc-300 transition-colors duration-300"
          >
            Join
          </a>
        </div>
      </div>
    </div>
  );
} 