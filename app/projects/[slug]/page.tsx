import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import HeadSEO from "@/app/components/headseo";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	const views =
		(await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

	return (
		<div className="bg-zinc-50 min-h-screen ">
			<HeadSEO title="some title or a variable here will work"/>
			<Header project={project} views={views} />
			<ReportView slug={project.slug} />

			<article className=" px-4 pt-8 pb-4  mx-auto prose prose-zinc prose-quoteless max-w-screen-lg">
				<Mdx code={project.body.code} />
			</article>
			
			{project.youtube != null &&
				<div className="items-center justify-center flex pb-8">
					<iframe width="1024" height="576" src={project.youtube} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
				</div>
			}

		</div>
	);
}