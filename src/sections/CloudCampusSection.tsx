import { ArrowRight, Github } from "lucide-react";
import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";

const cloudCampus = projects.find((project) => project.slug === "cloudcampus");

export function CloudCampusSection() {
  if (!cloudCampus) return null;

  return (
    <section className="border-y border-ink-200 bg-ink-950 py-20 dark:border-white/10 sm:py-24">
      <div className="section-shell">
        <SectionHeading kicker="Featured Case Study" title="CloudCampus" copy="A multi-tenant School ERP SaaS platform for schools, trusts, and multi-campus organizations." inverse />
        <div className="mt-10 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">Designing the boundaries behind a complex product.</h3>
            <p className="mt-4 max-w-xl text-base leading-8 text-ink-200">CloudCampus brings tenant onboarding, role-based access, school isolation, academic operations, attendance, homework, exams, fees, and audit-aware workflows into one product direction.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {cloudCampus.stack.map((tech) => <span key={tech} className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-ink-100">{tech}</span>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={cloudCampus.caseStudyUrl} variant="secondary" icon={ArrowRight}>View Case Study</Button>
              <Button href={cloudCampus.githubUrl} external variant="ghost" icon={Github} className="text-ink-100 hover:bg-white/10 hover:text-white">GitHub</Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-2 shadow-lift">
            <img className="aspect-[16/10] w-full rounded-lg object-cover object-top" src={cloudCampus.imagePath} alt="CloudCampus school admin dashboard" loading="lazy" width="1440" height="1050" />
          </div>
        </div>
      </div>
    </section>
  );
}
