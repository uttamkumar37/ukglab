import { SectionHeading } from "../components/SectionHeading";
import { siteConfig } from "../config/site";

const snapshot = [
  { value: siteConfig.career.experience, label: "Software engineering" },
  { value: "Backend", label: "Java · Spring Boot" },
  { value: "Integrations", label: "REST · OAuth · Webhooks" },
  { value: "Product", label: "Multi-tenant SaaS" },
];

export function SnapshotSection() {
  return (
    <section id="snapshot" className="border-b border-ink-200 bg-white py-16 dark:border-white/10 dark:bg-white/[0.02] sm:py-20">
      <div className="section-shell">
        <SectionHeading kicker="Professional Snapshot" title="A backend-first profile with product context." copy="The short version for recruiters, engineering managers, and collaborators." />
        <div className="mt-9 grid border-y border-ink-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10">
          {snapshot.map((item, index) => (
            <div key={item.label} className={`px-5 py-6 ${index < snapshot.length - 1 ? "border-b border-ink-200 sm:border-r lg:border-b-0" : ""} dark:border-white/10`}>
              <p className="text-xl font-semibold text-ink-950 dark:text-white">{item.value}</p>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
