import { createFileRoute, Link } from "@tanstack/react-router";
import { COLLEGE, PageHeader, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "LL.B. Admissions, Eligibility & Fees | OP Singh Prakash Wati College of Law" },
      { name: "description", content: "3-year LL.B.: eligibility graduation with 45%, fee ₹16,000 per semester. Apply now." },
      { property: "og:title", content: "LL.B. Admissions Open" },
      { property: "og:description", content: "Eligibility, fee structure and admission details for the 3-year LL.B." },
    ],
  }),
  component: Admissions,
});

function Admissions() {
  return (
    <SiteLayout>
      <PageHeader title="Admissions" subtitle="Course details, eligibility and fee structure for the LL.B. programme." />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="bg-primary text-primary-foreground px-6 py-4 font-display text-2xl">Bachelor of Laws — {COLLEGE.course}</div>
          <table className="w-full text-left">
            <tbody>
              {[
                ["Duration", "3 Years (6 Semesters)"],
                ["Eligibility", COLLEGE.eligibility],
                ["Fee", COLLEGE.fee],
                ["Affiliation", COLLEGE.affiliation],
                ["Approved By", COLLEGE.approval],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-border last:border-0">
                  <th className="px-6 py-4 w-1/3 bg-secondary font-semibold text-primary">{k}</th>
                  <td className="px-6 py-4">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            ["1", "Check Eligibility", "Graduation in any discipline with minimum 45% marks."],
            ["2", "Visit or Contact", "Collect the admission form from the college office."],
            ["3", "Submit Documents", "Submit the form with mark sheets, ID and photographs."],
          ].map(([n, t, d]) => (
            <div key={n} className="p-6 border border-border rounded-lg">
              <div className="h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">{n}</div>
              <h3 className="font-display text-xl text-primary mt-4">{t}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold">Enquire Now</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
