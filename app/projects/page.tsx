import React from "react";
import { allProjects } from "contentlayer/generated";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import Head from "next/head";
import Footer from "../components/footer";
import FadeInWrapper from "../components/FadeInWrapper";
import Header from "../components/Header";

const redis = Redis.fromEnv();

export const revalidate = 60;

const CYCLES = ["2025-2026", "2024-2025", "2023-2024", "2022-2023"];

export default async function WorkPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":"))
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const published = allProjects.filter((p) => p.published);

  const byCycle = CYCLES.map((cycle) => ({
    cycle,
    projects: published
      .filter((project) => project.cycles?.includes(cycle))
      .sort(
        (a, b) =>
          new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
          new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
      ),
  })).filter((group) => group.projects.length > 0);

  return (
    <div className="relative">
      <Head>
        <title>Work | Aggie Sports Analytics at UC Davis</title>
      </Head>
      <Header />

      <FadeInWrapper>
        <div className="bg-[#181818] px-12">
          <div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-8 lg:pt-12">
            <div className="text-left mb-12">
              <h1 className="text-4xl font-bold text-white mb-2">Projects</h1>
              <p className="text-zinc-400 text-lg">Products built to empower the best sports teams.</p>
            </div>
            <div className="space-y-16">
              {byCycle.map(({ cycle, projects }) => (
                <div key={cycle}>
                  <h2 className="text-2xl font-bold text-white mb-6 font-display">
                    {cycle} Project Cycle
                  </h2>
                  <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
                    {[0, 1, 2].map((col) => (
                      <div key={col} className="grid grid-cols-1 gap-4">
                        {projects
                          .filter((_, i) => i % 3 === col)
                          .map((project) => {
                            const latestCycle = project.cycles
                              ?.slice()
                              .sort()
                              .at(-1);
                            return (
                              <Card key={project.slug}>
                                <Article
                                  project={project}
                                  views={views[project.slug] ?? 0}
                                  continued={latestCycle !== cycle}
                                />
                              </Card>
                            );
                          })}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
