import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";


export type Project = {
slug: string;
title: string;
description: string;
tech: string[];
href?: string; // 배포 링크
repo?: string; // GitHub
thumbnail?: string; // public 경로
role?: string; // 본인 역할 / 기여도
highlights?: string[]; // 성과 포인트
};


export function ProjectCard({ project }: { project: Project }) {
const { slug, title, description, tech, href, repo, thumbnail, role, highlights } = project;


return (
<article className="group rounded-2xl border border-neutral-200 p-4 shadow-sm transition hover:shadow-md dark:border-neutral-800">
{thumbnail && (
<div className="relative mb-3 h-40 w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
<Image src={thumbnail} alt={title} fill className="object-cover transition-transform group-hover:scale-105" />
</div>
)}
<h3 className="text-lg font-semibold">{title}</h3>
<p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>


{role && <p className="mt-2 text-sm"><span className="font-medium">Role:</span> {role}</p>}


{highlights && (
<ul className="mt-2 list-disc pl-5 text-sm">
{highlights.map((h, i) => <li key={i}>{h}</li>)}
</ul>
)}


<div className="mt-3 flex flex-wrap items-center gap-2">
{tech.map((t) => (
<span key={t} className="rounded-full border px-2 py-1 text-xs text-neutral-700 dark:text-neutral-200 dark:border-neutral-700">{t}</span>
))}
</div>


<div className="mt-4 flex gap-3 text-sm">
{href && (
<Link href={href} target="_blank" className="inline-flex items-center gap-1 underline">
Demo <ExternalLink size={14} />
</Link>
)}
{repo && (
<Link href={repo} target="_blank" className="inline-flex items-center gap-1 underline">
Repo <ExternalLink size={14} />
</Link>
)}
<Link href={`/projects#${slug}`} className="underline">자세히</Link>
</div>
</article>
);
}