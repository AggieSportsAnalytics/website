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
    <footer ref={ref} className="bg-black bg-opacity-30 text-gray-300">
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2">
        {/* Right side with links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 order-2 md:order-1 text-center md:text-left">
          <div>
            <h2 className="text-lg font-bold mb-4">Navigate</h2>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="duration-200 hover:text-gray-100">
                About
              </Link>
              <Link href="/projects" className="duration-200 hover:text-gray-100">
                Projects
              </Link>
              <Link href="/articles" className="duration-200 hover:text-gray-100">
                Articles
              </Link>
              <Link href="/members" className="duration-200 hover:text-gray-100">
                Team
              </Link>
              <Link href="/apply" className="duration-200 hover:text-gray-100">
                Join
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Social Media</h2>
            <div className="flex flex-col gap-2">
              <a href="https://instagram.com/aggiesportsanalytics" target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start hover:text-gray-100">
                <Instagram className="w-5 h-5" />
                <span className="pl-2">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/aggiesportsanalytics/" target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start hover:text-gray-100">
                <Linkedin className="w-5 h-5" />
                <span className="pl-2">LinkedIn</span>
              </a>
              <a href="https://medium.com/@aggiesportsanalytics" target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start hover:text-gray-100">
                <span style={{ fontSize: '15px', fontWeight: 'bold', marginRight: '4px', marginLeft: '2px'  }}>M</span>
                <span className="pl-2">Medium</span>
              </a>
              <a href="https://twitter.com/AggieSportStats" target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start hover:text-gray-100">
                <Twitter className="w-5 h-5" />
                <span className="pl-2">Twitter</span>
              </a>
              <a href="https://github.com/AggieSportsAnalytics" target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start hover:text-gray-100">
                <Github className="w-5 h-5" />
                <span className="pl-2">GitHub</span>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <div className="flex items-center justify-center md:justify-start hover:text-gray-100">
              <Mail className="w-5 h-5" />
              <a href="mailto:sportsanalyticsucd@gmail.com" target="_blank" rel="noreferrer" className="pl-2">
                Email
              </a>
            </div>
          </div>
        </div>
        {/* Left side with message centered */}
        <div className="flex flex-col justify-center items-center md:items-center md:pl-6 mb-6 md:mb-10 order-1 md:order-2 text-center md:text-center">
          <div>
            {/*}
            Made with 💜 by Aggie Sports Analytics
            <br />
            <br />
  */}
            <form onSubmit={handleSubscribe} className="flex flex-col items-center">
              <label htmlFor="newsletter-email" className="text-lg font-bold mb-2">Join our Mailing List!</label>
              <div className="flex items-center">
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="p-2 text-white rounded-md mr-2"
                  required
                />
                <button type="submit" className="bg-indigo-800 text-white p-2 rounded-md hover:bg-indigo-900 duration-200">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
