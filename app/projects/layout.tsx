export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-br  from-zinc-950 from-20% via-indigo-950 via-30% to-zinc-950 to-50%">
			{children}
		</div>
	);
}
