export function Section({ title, children }: { title: string; children: React.ReactNode }) {
return (
<section className="mb-12">
<h2 className="mb-4 text-xl font-semibold">{title}</h2>
<div className="rounded-2xl border border-neutral-200 p-5 shadow-sm dark:border-neutral-800">
{children}
</div>
</section>
);
}