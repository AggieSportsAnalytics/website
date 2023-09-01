export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl  from-slate-900 via-[#160f33]/50 to-slate-900 ">
			{children}
		</div>
	);
}
