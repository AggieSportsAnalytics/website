export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-br from-zinc-950 to-[#160f33]/50">
			{children}
		</div>
	);
}
