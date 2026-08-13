import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { siteConfig } from "../config/site";

export function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading kicker="Education & Continuous Learning" title="Strong fundamentals, kept in perspective." />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <article className="surface-card rounded-brand p-6 lg:col-span-1">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-signal-700 dark:text-signal-400">{siteConfig.education.year}</p>
            <h3 className="mt-4 text-xl font-semibold text-ink-950 dark:text-white">{siteConfig.education.institution}</h3>
            <p className="mt-3 text-sm leading-6 text-ink-600 dark:text-ink-300">{siteConfig.education.degree}</p>
            <p className="mt-4 text-sm leading-6 text-ink-600 dark:text-ink-300">Foundations in mathematics, systems, problem solving, data structures, computer networks, and artificial intelligence.</p>
          </article>
          <article className="surface-card rounded-brand p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-signal-700 dark:text-signal-400">Professional learning</p>
            <h3 className="mt-4 text-xl font-semibold text-ink-950 dark:text-white">Scaler Academy</h3>
            <p className="mt-3 text-sm leading-6 text-ink-600 dark:text-ink-300">Advanced DSA, LLD, HLD/System Design, backend engineering, DevOps, and data engineering coursework.</p>
            <a className="focus-ring mt-5 inline-flex items-center gap-2 rounded text-sm font-semibold text-ink-800 hover:text-signal-700 dark:text-ink-100 dark:hover:text-signal-400" href={siteConfig.proof.scalerUrl} target="_blank" rel="noreferrer">View profile <ArrowUpRight size={16} aria-hidden="true" /></a>
          </article>
          <article className="surface-card rounded-brand p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-signal-700 dark:text-signal-400">Problem solving</p>
            <h3 className="mt-4 text-xl font-semibold text-ink-950 dark:text-white">Competitive Programming</h3>
            <p className="mt-3 text-lg font-semibold text-ink-950 dark:text-white">{siteConfig.proof.codechefSolved} problems solved</p>
            <p className="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-300">Highest CodeChef rating: {siteConfig.proof.codechefRating}</p>
            <a className="focus-ring mt-5 inline-flex items-center gap-2 rounded text-sm font-semibold text-ink-800 hover:text-signal-700 dark:text-ink-100 dark:hover:text-signal-400" href={siteConfig.proof.codechefUrl} target="_blank" rel="noreferrer">View CodeChef <ArrowUpRight size={16} aria-hidden="true" /></a>
          </article>
        </div>
      </div>
    </section>
  );
}
