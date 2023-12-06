import { notFound } from "next/navigation";
import { allArticles } from "contentlayer/generated";
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
	return allArticles

		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const article = allArticles.find((article) => article.slug === slug);

	if (!article) {
		notFound();
	}

	const views =
		(await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

	return (
		<div className="bg-zinc-50 min-h-screen ">
			<HeadSEO title="some title or a variable here will work"/>
			<Header article={article} views={views} />
			<ReportView slug={article.slug} />

			<article className=" px-4 pt-8 pb-4  mx-auto prose prose-zinc prose-quoteless max-w-screen-lg">
				<Mdx code={article.body.code} />
			</article>


		</div>
	);
}