import { createFileRoute } from "@tanstack/react-router";
import { COLLEGE, PageHeader, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Major OP Singh Prakash Wati College of Law" },
      { name: "description", content: "Established 2026 in Kheragarh, Agra. Affiliated to Dr. B.R. Ambedkar University and approved by the Bar Council of India." },
      { property: "og:title", content: "About the College of Law, Kheragarh" },
      { property: "og:description", content: "Our mission, affiliation and recognition." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHeader title="About the College" subtitle={`Established in ${COLLEGE.established} to provide accessible, quality legal education.`} />
      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
          <p><strong className="text-primary">{COLLEGE.name}</strong> is located at {COLLEGE.address}. The college offers the {COLLEGE.course} degree programme.</p>
          <p>Our aim is to nurture competent, ethical legal professionals who serve the justice system and the community — as advocates, judicial officers, legal advisors and public servants.</p>
          <h2 className="font-display text-2xl text-primary pt-4">Our Mission</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Deliver rigorous academic training in substantive and procedural law.</li>
            <li>Develop practical skills through moot courts and legal aid activities.</li>
            <li>Instil values of integrity, justice and social responsibility.</li>
          </ul>
        </div>
        <aside className="bg-card border border-border rounded-lg p-6 h-fit space-y-4">
          <h3 className="font-display text-xl text-primary">At a Glance</h3>
          {[
            ["Established", COLLEGE.established],
            ["Affiliation", COLLEGE.affiliation],
            ["Approved By", COLLEGE.approval],
            ["Course", COLLEGE.course],
          ].map(([k, v]) => (
            <div key={k} className="border-b border-border pb-3 last:border-0">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{k}</div>
              <div className="font-semibold">{v}</div>
            </div>
          ))}
        </aside>
      </section>
    </SiteLayout>
  );
}
