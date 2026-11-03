import { createFileRoute, Link } from "@tanstack/react-router";
import { COLLEGE, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Major OP Singh Prakash Wati College of Law, Agra | LL.B. Admissions" },
      { name: "description", content: "3-year LL.B. programme affiliated to Dr. B.R. Ambedkar University, Agra and approved by the Bar Council of India. Kheragarh, Agra." },
      { property: "og:title", content: "Major OP Singh Prakash Wati College of Law" },
      { property: "og:description", content: "3-year LL.B. in Kheragarh, Agra. BCI approved. Admissions open." },
    ],
  }),
  component: Index,
});

const facts = [
  { k: "Course", v: COLLEGE.course },
  { k: "Eligibility", v: "Graduation, min. 45%" },
  { k: "Fee", v: COLLEGE.fee },
  { k: "Established", v: COLLEGE.established },
];

function Index() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 text-[28rem] leading-none text-right pr-8 font-display select-none">⚖</div>
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <p className="uppercase tracking-[0.3em] text-xs text-accent">Admissions Open · Session {COLLEGE.established}</p>
          <h1 className="font-display text-4xl md:text-6xl mt-4 max-w-3xl leading-tight">
            Shaping the Advocates of Tomorrow
          </h1>
          <p className="mt-6 max-w-2xl opacity-85 text-lg">
            {COLLEGE.name} offers a rigorous 3-year LL.B. programme, affiliated to {COLLEGE.affiliation} and approved by the {COLLEGE.approval}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/admissions" className="bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90">Apply for LL.B.</Link>
            <Link to="/about" className="border border-primary-foreground/40 px-6 py-3 rounded-md hover:bg-primary-foreground/10">About the College</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 -mt-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-card border border-border rounded-lg shadow-lg divide-x divide-border">
          {facts.map((f) => (
            <div key={f.k} className="p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{f.k}</div>
              <div className="font-display text-xl text-primary mt-1">{f.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="h-1 w-16 bg-accent mb-4" />
          <h2 className="font-display text-3xl text-primary">A new institution built on timeless principles</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Established in {COLLEGE.established} in Kheragarh, Agra, our college brings quality legal education closer to rural and semi-urban students. We focus on strong foundations in law, courtroom skills, ethics and service to society.
          </p>
          <Link to="/about" className="inline-block mt-6 text-primary font-semibold underline underline-offset-4 decoration-accent">Read more →</Link>
        </div>
        <div className="grid gap-4">
          {[
            ["Affiliated University", COLLEGE.affiliation],
            ["Approved By", COLLEGE.approval],
            ["Campus", COLLEGE.address],
          ].map(([k, v]) => (
            <div key={k} className="border-l-4 border-accent bg-secondary p-5 rounded-r-md">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{k}</div>
              <div className="font-semibold text-primary mt-1">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="font-display text-3xl text-primary">Begin your journey in law</h2>
          <p className="mt-3 text-muted-foreground">Graduates with a minimum of 45% marks are eligible to apply.</p>
          <Link to="/contact" className="inline-block mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold">Contact Admissions Office</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
