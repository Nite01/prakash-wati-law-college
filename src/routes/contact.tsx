import { createFileRoute } from "@tanstack/react-router";
import { COLLEGE, PageHeader, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Major OP Singh Prakash Wati College of Law, Agra" },
      { name: "description", content: "Visit us at Barwar, Post Kagrol, Tehsil Kheragarh, Agra." },
      { property: "og:title", content: "Contact the College of Law, Kheragarh" },
      { property: "og:description", content: "Address and location of the college." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const q = encodeURIComponent("Barwar Kagrol Kheragarh Agra");
  return (
    <SiteLayout>
      <PageHeader title="Contact Us" subtitle="Visit the campus or reach the admissions office." />
      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="border-l-4 border-accent bg-secondary p-6 rounded-r-md">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Address</div>
            <p className="font-semibold text-primary mt-1 text-lg">{COLLEGE.name}</p>
            <p className="mt-1">{COLLEGE.address}</p>
          </div>
          <div className="border-l-4 border-accent bg-secondary p-6 rounded-r-md space-y-1">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Admissions Contact</div>
            <p className="font-semibold text-primary text-lg">{COLLEGE.contactPerson}</p>
            <p>Mobile: <a className="text-primary font-semibold" href={`tel:+91${COLLEGE.phone}`}>+91 {COLLEGE.phone}</a></p>
            <p>Email: <a className="text-primary font-semibold break-all" href={`mailto:${COLLEGE.email}`}>{COLLEGE.email}</a></p>
          </div>
          <p className="text-muted-foreground">Office hours: Monday – Saturday, 10:00 AM – 4:00 PM</p>
        </div>
        <iframe
          title="Map"
          className="w-full h-80 rounded-lg border border-border"
          src={`https://maps.google.com/maps?q=${q}&output=embed`}
          loading="lazy"
        />
      </section>
    </SiteLayout>
  );
}
