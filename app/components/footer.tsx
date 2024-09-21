"use client";
import Link from "next/link";
import { Mail, Instagram, Twitter, Linkedin, Github,  } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export const Footer: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to handle the newsletter subscription
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer ref={ref} className="bg-[#070707] bg-opacity-50 text-gray-300">
      <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left side with branding and newsletter */}
        <div className="mb-6 md:mb-0 text-center md:text-left md:w-1/3">
          <a className="inline-block mb-4">
            <img src="/bLogo.png" alt="Aggie Sports Analytics Logo" width={80} />
          </a>
          <h2 className="text-xl font-bold mb-2">Aggie Sports Analytics</h2>
          <p className="mb-4">Redefining the future of sports technology at UC Davis</p>
        </div>
        <div className="mb-6 md:mb-0 text-center md:text-left md:w-1/5">
        {/*
        <center>
        <h2 className="text-lg font-bold mb-2">Join our Mailing List</h2>
          <button className="btn bg-[#5A5CA0] hover:bg-[#393B7F] text-zinc-100">
						<a href="/apply">Sign Up</a>
					</button>
              </center>
              */}
        </div>

        {/* Right side with links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:w-1/3 md:justify-end">
          <div>
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <a href="mailto:team@aggiesportsanalytics.com" className="flex items-center hover:text-gray-100 transition duration-300">
              <Mail className="w-5 h-5 mr-2" />
              <span>Email</span>
            </a>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Connect</h2>
            <nav className="flex flex-col gap-2">
              <a href="https://instagram.com/aggiesportsanalytics" target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start hover:text-gray-100">
                <Instagram className="w-5 h-5" />
                <span className="pl-2">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/aggiesportsanalytics/" target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start hover:text-gray-100">
                <Linkedin className="w-5 h-5" />
                <span className="pl-2">LinkedIn</span>
              </a>
              {/*
              <a href="https://medium.com/@aggiesportsanalytics" target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start hover:text-gray-100">
                <span style={{ fontSize: '15px', fontWeight: 'bold', marginRight: '4px', marginLeft: '2px'  }}>M</span>
                <span className="pl-2">Medium</span>
              </a>
              */}
              {/*
              <a href="https://twitter.com/AggieSportStats" target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start hover:text-gray-100">
                <Twitter className="w-5 h-5" />
                <span className="pl-2">Twitter</span>
              </a>
              */}
              <a href="https://github.com/AggieSportsAnalytics" target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start hover:text-gray-100">
                <Github className="w-5 h-5" />
                <span className="pl-2">GitHub</span>
              </a>
            </nav>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Navigate</h2>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="duration-200 hover:text-gray-100">
                About
              </Link>
              <Link href="/projects" className="duration-200 hover:text-gray-100">
                Projects
              </Link>
              <Link href="/journalism" className="duration-200 hover:text-gray-100">
                Journalism
              </Link>
              <Link href="/members" className="duration-200 hover:text-gray-100">
                Team
              </Link>
              <Link href="/apply" className="duration-200 hover:text-gray-100">
                Join
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
