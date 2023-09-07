export default function EventsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-bl  from-zinc-950 from-20% via-violet-950 via-30% to-zinc-950 to-50%">
			{children}
		</div>
	);
}
