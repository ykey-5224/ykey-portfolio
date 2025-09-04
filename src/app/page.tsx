import { Section } from "@/components/section";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";


export default function HomePage() {
return (
<>
<Section title="안녕하세요, Your Name 입니다 👋">
<div className="flex flex-col gap-6 md:flex-row md:items-center">
{/* <Image src="/avatar.png" alt="avatar" width={96} height={96} className="rounded-full border" /> */}
<div className="space-y-2">
<p className="text-lg leading-relaxed">
Frontend Developer · React / Next.js / TypeScript · UI Engineering & DX 개선에 관심이 많습니다.
</p>
<div className="flex flex-wrap gap-3 text-sm text-neutral-600 dark:text-neutral-300">
<Link href="https://github.com/yourname" className="underline">GitHub</Link>
<Link href="https://www.linkedin.com/in/yourname" className="underline">LinkedIn</Link>
<Link href="mailto:you@domain.com" className="underline">you@domain.com</Link>
</div>
</div>
</div>
</Section>


<Section title="주요 프로젝트">
<div className="grid gap-6 sm:grid-cols-2">
{projects.slice(0, 4).map((p) => (
<ProjectCard key={p.slug} project={p} />
))}
</div>
<div className="mt-6 text-right">
<Link href="/projects" className="text-sm underline">프로젝트 전체 보기 →</Link>
</div>
</Section>


<Section title="역량 요약">
<ul className="grid gap-2 list-disc pl-5">
<li>복잡한 테이블/폼 UI를 컴포넌트화하고 재사용성/성능 최적화</li>
<li>Next.js App Router 기반 SSR/SSG, SEO, 이미지 최적화 적용</li>
<li>CI/CD (Vercel·Jenkins), 모듈 번들 최적화, 번들링 분석 경험</li>
</ul>
</Section>
</>
);
}