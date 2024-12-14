// pages/projects.tsx
import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card"; // Updated Card with fade-in animation
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import Head from "next/head";
import { Footer } from "../components/footer";
import FadeInWrapper from "../components/FadeInWrapper"; // Optional if still needed

const redis = Redis.fromEnv();

export const revalidate = 60;

export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":"))
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allProjects.find((project) => project.slug === "scoreboard")!;
  const top2 = allProjects.find((project) => project.slug === "court-check")!;
  const top3 = allProjects.find((project) => project.slug === "nbadraft")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative">
      <Head>
        <title>Projects | Aggie Sports Analytics at UC Davis</title>
      </Head>

      {/* Navigation Bar */}
      <div className="w-screen bg-[#000000] text-xs">
        <div className="navbar bg-[#000000]">
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
                  <a className="text-lg" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="/projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="/journalism">
                    Journalism
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="/members">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <a href="/" className="btn btn-ghost">
              <img
                src="/bLogo.png"
                alt="Aggie Sports Analytics Logo"
                width={100}
              ></img>
            </a>
          </div>
          <div className="navbar-center">
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-zinc-200 text-xl">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/projects">
                    <b>Projects</b>
                  </a>
                </li>
                <li>
                  <a href="/journalism">Journalism</a>
                </li>
                <li>
                  <a href="/members">Team</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end">
		  <button className="btn mr-4 bg-gradient-to-r from-[#393B7F] to-[#8646B2] hover:from-[#6A1AA2] hover:to-[#3136D3] text-zinc-100 transition duration-300">
              <a href="/apply">Join</a>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Content */}
      <FadeInWrapper>
        <div className="bg-[#070707] px-12">
          <div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-8 lg:pt-12">
            <div className="mx-auto lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mt-2">
                Projects
              </h2>
              <p className="mt-8 text-zinc-300">
                Our project teams build innovative projects in the
                domains of web development, data science, machine learning, and
                hardware. To date, we have completed over 25 projects targeting
                a wide range of sports, including but not limited to basketball,
                fencing, soccer, and football.
              </p>
            </div>
			

            {/* Featured and Top Projects */}
            <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
              {/* Featured Project */}
              <Card>
                <Link href={`/projects/${featured.slug}`}>
                  <article className="relative w-full h-full p-4 md:p-8">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-zinc-100">
                        {featured.date ? (
                          <time dateTime={new Date(featured.date).toISOString()}>
                            {Intl.DateTimeFormat(undefined, {
                              dateStyle: "medium",
                            }).format(new Date(featured.date))}
                          </time>
                        ) : (
                          <span>SOON</span>
                        )}
                      </div>
                      <span className="flex items-center gap-1 text-xs text-zinc-500">
                        {/*<Eye className="w-4 h-4" />{" "}
                        {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                          views[featured.slug] ?? 0,
                        )}*/}
                      </span>
                    </div>

                    <h2
                      id="featured-post"
                      className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                    >
                      {featured.title}
                    </h2>
                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      {featured.description}
                    </p>
                    <div className="absolute bottom-4 md:bottom-8">
                      <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                        Read more <span aria-hidden="true">&rarr;</span>
                      </p>
                    </div>
                  </article>
                </Link>
              </Card>

              {/* Top 2 Projects */}
              <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
                <Card>
                  <Article project={top2} views={views[top2.slug] ?? 0} />
                </Card>
                <Card>
                  <Article project={top3} views={views[top3.slug] ?? 0} />
                </Card>
              </div>
            </div>
            <div className="hidden w-full h-px md:block bg-zinc-600" />

            {/* Sorted Projects */}
            <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
              <div className="grid grid-cols-1 gap-4">
                {sorted
                  .filter((_, i) => i % 3 === 0)
                  .map((project) => (
                    <Card key={project.slug}>
                      <Article project={project} views={views[project.slug] ?? 0} />
                    </Card>
                  ))}
              </div>
              <div className="grid grid-cols-1 gap-4">
                {sorted
                  .filter((_, i) => i % 3 === 1)
                  .map((project) => (
                    <Card key={project.slug}>
                      <Article project={project} views={views[project.slug] ?? 0} />
                    </Card>
                  ))}
              </div>
              <div className="grid grid-cols-1 gap-4">
                {sorted
                  .filter((_, i) => i % 3 === 2)
                  .map((project) => (
                    <Card key={project.slug}>
                      <Article project={project} views={views[project.slug] ?? 0} />
                    </Card>
                  ))}
              </div>
            </div>
          </div>
          <div className="pt-10"></div>
          <br />
        </div>
      </FadeInWrapper>
	  <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
