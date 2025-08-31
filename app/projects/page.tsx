// pages/projects.tsx
import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Card } from "../components/card"; // Updated Card with fade-in animation
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import Head from "next/head";
import Footer from "../components/footer";
import FadeInWrapper from "../components/FadeInWrapper"; // Optional if still needed
import Header from "../components/Header";
import { useState } from "react";

const redis = Redis.fromEnv();

export const revalidate = 60;

export default async function WorkPage() {
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
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative">
      <Head>
        <title>Work | Aggie Sports Analytics at UC Davis</title>
      </Head>

      <Header />

      {/* Animated Content */}
      <FadeInWrapper>
        <div className="bg-[#181818] px-12">
          <div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-8 lg:pt-12">
            <div className="text-left mb-12">
              <h1 className="text-4xl font-bold text-white mb-2">Projects</h1>
              <p className="text-zinc-400 text-lg">What we have built and delivered to our clients.</p>
            </div>
            {/* Projects Content */}
            <div>

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
              <div className="mt-10 " />

              <br></br>
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
