import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Events | Aggie Sports Analytics at UC Davis",
		template: "%s | Aggie Sports Analytics",
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


export default function EventsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-bl  from-zinc-950 from-20% via-indigo-950 via-30% to-zinc-950 to-50%">
			{children}
		</div>
	);
}
