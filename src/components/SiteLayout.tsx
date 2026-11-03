import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const COLLEGE = {
  name: "Major OP Singh Prakash Wati College of Law",
  address: "Barwar, Post Kagrol, Tehsil Kheragarh, Agra, Uttar Pradesh",
  course: "LL.B. (3 Years)",
  eligibility: "Graduation with minimum 45% marks",
  fee: "₹16,000 per semester",
  affiliation: "Dr. B.R. Ambedkar University, Agra",
  approval: "Bar Council of India, New Delhi",
  established: "2026",
};

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="mx-auto max-w-6xl px-4 py-2 flex flex-wrap justify-between gap-2">
          <span>Affiliated to {COLLEGE.affiliation}</span>
          <span>Approved by {COLLEGE.approval}</span>
        </div>
      </div>
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-primary text-accent flex items-center justify-center font-display text-xl border-2 border-accent">
              ⚖
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg md:text-xl text-primary">Major OP Singh Prakash Wati</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">College of Law · Est. {COLLEGE.established}</div>
            </div>
          </Link>
          <nav className="flex gap-1 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-2 rounded-md hover:bg-secondary"
                activeProps={{ className: "px-3 py-2 rounded-md bg-secondary text-primary font-semibold" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3 text-sm">
          <div>
            <div className="font-display text-lg text-accent">{COLLEGE.name}</div>
            <p className="mt-2 opacity-80">Established {COLLEGE.established}</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Address</div>
            <p className="opacity-80">{COLLEGE.address}</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Recognition</div>
            <p className="opacity-80">Affiliated: {COLLEGE.affiliation}</p>
            <p className="opacity-80">Approved: {COLLEGE.approval}</p>
          </div>
        </div>
        <div className="text-center text-xs opacity-60 pb-6">© {COLLEGE.established} {COLLEGE.name}. All rights reserved.</div>
      </footer>
    </div>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-secondary border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="h-1 w-16 bg-accent mb-4" />
        <h1 className="font-display text-4xl md:text-5xl text-primary">{title}</h1>
        {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
