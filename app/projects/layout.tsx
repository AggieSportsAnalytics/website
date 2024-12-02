import { Metadata } from "next";
import type { Project } from "@/.contentlayer/generated";


export const metadata: Metadata = {
	title: {
		default: "Projects | Aggie Sports Analytics",
		template: "%s",
	},
	description: "Revolutioning sports success through data science and machine learning at UC Davis.",
	openGraph: {
		title: "Aggie Sports Analytics",
		description:
			"Revolutioning sports success through data science and machine learning.",
		url: "aggiesportsanalytics.com",
		siteName: "aggiesportsanalytics.com",
		images: [
			{
				url: "/whiteLogo.jpg",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "AggieSportsAnalytics",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};



export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (

		<div className="relative min-h-screen black">

			{children}
		</div>
	);
}
