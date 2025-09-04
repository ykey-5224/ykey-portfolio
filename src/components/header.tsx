import Link from "next/link";


export function Header() {
return (
<header className="sticky top-0 z-40 bg-white/70 backdrop-blur dark:bg-neutral-950/70">
<nav className="mx-auto max-w-5xl px-5 py-4 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800">
<Link href="/" className="font-semibold">Your Name</Link>
<div className="flex gap-5 text-sm">
<Link href="/" className="hover:underline">Home</Link>
<Link href="/projects" className="hover:underline">Projects</Link>
</div>
</nav>
</header>
);
}