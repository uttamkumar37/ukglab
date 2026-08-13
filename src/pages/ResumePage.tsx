import { Download, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import { siteConfig } from "../config/site";
import { updateSeo } from "../utils/seo";

export function ResumePage() {
  useEffect(() => updateSeo({ title: "Resume", description: "View Uttam Kumar's Software Engineer resume focused on Java backend systems, APIs, enterprise integrations, and SaaS.", path: "/resume" }), []);

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading kicker="Resume" title="Uttam Kumar" copy="Software Engineer — Java Backend & Integrations" />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="surface-card rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-ink-950 dark:text-white">A focused engineering profile.</h2>
            <p className="mt-4 max-w-2xl leading-8 text-ink-600 dark:text-ink-300">The resume covers Java, Spring Boot, REST APIs, enterprise integrations, backend architecture, and CloudCampus product work.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Java", "Spring Boot", "REST APIs", "Microservices", "Integrations", "Multi-tenant SaaS", "Docker", "System Design"].map((item) => <span key={item} className="rounded-md border border-ink-200 bg-ink-50 px-3 py-1.5 text-sm font-semibold text-ink-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200">{item}</span>)}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 lg:flex-col">
            <Button href={siteConfig.resumePath} external download icon={Download}>Download PDF</Button>
            <Button href={siteConfig.resumePath} external variant="secondary" icon={ExternalLink}>Open PDF</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
