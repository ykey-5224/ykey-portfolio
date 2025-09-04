import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";


export default function ProjectsPage() {
return (
<Section title="프로젝트">
<div className="grid gap-6 sm:grid-cols-2">
{projects.map((p) => (
<ProjectCard key={p.slug} project={p} />
))}
</div>
</Section>
);
}