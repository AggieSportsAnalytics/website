"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/footer";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="bg-zinc-900/50 border-b border-zinc-800 overflow-hidden transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center"
      >
        <span className="text-zinc-100 font-medium">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-zinc-400"
        >
          ▼
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4 text-zinc-300 text-sm">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function JoinUsPage() {
  const deadline = new Date('2025-10-12T01:00:00-07:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);

  useEffect(() => {
    const now = new Date();
    setIsDeadlinePassed(now >= deadline);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#181818] text-white overflow-hidden">
      <Head>
        <title>Join ASA | Aggie Sports Analytics</title>
      </Head>
      <Header />
      
      <main className="relative flex-grow flex">
        <div className="relative w-1/2 min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#181818] z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-[#181818]/30 z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#181818] to-transparent z-10"></div>
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#181818] to-transparent z-20"></div>
          
          <Image
            src="/bbbw.png"
            alt="ASA Team"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="w-1/2 flex items-center justify-center px-12">
          <div className="max-w-lg">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Apply Now
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-zinc-300 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Become a part of our community and build sports technology at ASA. Applications are now open for our Projects, Business, and Media teams!
            </motion.p>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              {isDeadlinePassed ? (
                <>
                  <button
                    disabled
                    className="inline-flex items-center px-4 py-2 bg-transparent border border-zinc-700 text-zinc-500 text-sm font-medium rounded-full cursor-not-allowed opacity-50 mr-3"
                  >
                    Projects
                  </button>
                  <button
                    disabled
                    className="inline-flex items-center px-4 py-2 bg-transparent border border-zinc-700 text-zinc-500 text-sm font-medium rounded-full cursor-not-allowed opacity-50 mr-3"
                  >
                    Business
                  </button>
                  <button
                    disabled
                    className="inline-flex items-center px-4 py-2 bg-transparent border border-zinc-700 text-zinc-500 text-sm font-medium rounded-full cursor-not-allowed opacity-50"
                  >
                    Media
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSePUgTtRjg6Wz-8k5EG3nefAfJJvrnsLpF_5PaIzjB5CmSYqw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-transparent border border-zinc-300 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors mr-3"
                  >
                    Projects
                  </Link>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLScOt_N1JUlu_-PBkLP2bwR11N4zzsq6iXDNlLeBxYXXgY_dtw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-transparent border border-zinc-300 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors mr-3"
                  >
                    Business
                  </Link>
                  <Link
                    href="https://forms.gle/WkgeY3gC9qRLVR1S7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-transparent border border-zinc-300 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
                  >
                    Media
                  </Link>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <section className="py-12 px-12">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-xl font-semibold text-zinc-200 mb-6 text-center">Apply before it's too late.</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 border border-white/10 overflow-hidden"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="px-8 py-12 border-r border-white/10 hover:bg-white/[0.03] transition-colors text-center">
              <div className="mb-2">
                <div className="text-4xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-sm text-zinc-400 mt-1">Days</div>
              </div>
            </div>
            <div className="px-8 py-12 border-r border-white/10 hover:bg-white/[0.03] transition-colors text-center">
              <div className="mb-2">
                <div className="text-4xl font-bold text-white">{timeLeft.hours}</div>
                <div className="text-sm text-zinc-400 mt-1">Hours</div>
              </div>
            </div>
            <div className="px-8 py-12 border-r border-white/10 hover:bg-white/[0.03] transition-colors text-center">
              <div className="mb-2">
                <div className="text-4xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-sm text-zinc-400 mt-1">Minutes</div>
              </div>
            </div>
            <div className="px-8 py-12 hover:bg-white/[0.03] transition-colors text-center">
              <div className="mb-2">
                <div className="text-4xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-sm text-zinc-400 mt-1">Seconds</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      <section className="py-16 px-12">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-zinc-100">Frequently Asked Questions</h2>
              <p className="mt-6 text-zinc-300 text-xs">
                Not here? Feel free to{" "}
                <Link href="https://instagram.com/aggiesportsanalytics" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  message
                </Link>
                {" "}or{" "}
                <Link href="mailto:aggiesportsanalytics@gmail.com" className="hover:text-white transition-colors">
                  email
                </Link>
                {" "}us.
              </p>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              <FAQItem
                question="What is the time commitment?"
                answer="6-10 hours per week, including team meetings, events, and project work. Active participation is expected."
              />
              <FAQItem
                question="What is the duration of a position?"
                answer="Full academic year (2025-2026). Recruitment only occurs in Fall quarter."
              />
              <FAQItem
                question="Do I need prior experience?"
                answer="No prior experience required. We welcome all backgrounds and provide comprehensive training and mentorship."
              />
              <FAQItem
                question="Can I join multiple teams?"
                answer="While you can apply to multiple branches, you'll interview with and join only one team."
              />
              <FAQItem
                question="What is the interview process?"
                answer="Resume screening followed by 20-minute in-person interviews during the week of October 13th. Decisions will be announced shortly after."
              />
              <FAQItem
                question="What will I gain from ASA?"
                answer="A tight-knit community, professional development, industry connections, and mentorship from experiences members and alumni."
              />
              <FAQItem
                question="Does ASA have member dues?"
                answer="$20 per quarter to support club operations and events."
            />
            </div>
          </div>
        </motion.div>
      </section>

      <div className="w-full h-px bg-zinc-800/70" />
      <Footer />
    </div>
  );
}