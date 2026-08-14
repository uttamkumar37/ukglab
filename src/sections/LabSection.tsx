import { ArrowRight, ArrowUpRight, Github, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { labExperiments } from "../data/lab";

const statusStyles = {
  Experiment: "bg-flame-500/10 text-flame-500",
  Building: "bg-signal-500/10 text-signal-700 dark:text-signal-400",
  Stable: "bg-ink-100 text-ink-700 dark:bg-white/10 dark:text-ink-200",
  Archived: "bg-ink-100 text-ink-500 dark:bg-white/10 dark:text-ink-400",
};

type LabSectionProps = {
  preview?: boolean;
};

export function LabSection({ preview = false }: LabSectionProps) {
  const items = preview ? labExperiments.slice(0, 3) : labExperiments;

  return (
    <section id="lab" className="border-y border-ink-200 bg-white py-20 dark:border-white/10 dark:bg-white/[0.02] sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            kicker="The Lab"
            title="Small experiments with useful lessons."
            copy="A working shelf for prototypes, backend concepts, product foundations, and the technical questions worth exploring in public."
          />
          {preview ? (
            <Link className="focus-ring inline-flex w-fit items-center gap-2 rounded-md text-sm font-semibold text-ink-800 hover:text-signal-700 dark:text-ink-100 dark:hover:text-signal-400" to="/lab">
              Open the Lab <ArrowRight size={17} aria-hidden="true" />
            </Link>
          ) : null}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((experiment) => (
            <article key={experiment.title} className="surface-card rounded-brand p-5 transition hover:-translate-y-0.5 hover:border-signal-500 dark:hover:border-signal-400">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-signal-500/10 text-signal-700 dark:text-signal-400">
                  <FlaskConical aria-hidden="true" size={19} />
                </span>
                <span className={`rounded px-2.5 py-1 text-xs font-bold ${statusStyles[experiment.status]}`}>{experiment.status}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink-950 dark:text-white">{experiment.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-600 dark:text-ink-300">{experiment.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {experiment.technology.map((item) => <span key={item} className="rounded-md border border-ink-200 px-2.5 py-1 text-xs font-medium text-ink-600 dark:border-white/10 dark:text-ink-300">{item}</span>)}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink-200 pt-4 dark:border-white/10">
                <time className="text-xs font-semibold text-ink-500 dark:text-ink-400" dateTime={experiment.date}>{experiment.date}</time>
                <div className="flex flex-wrap gap-4 text-sm font-semibold">
                  {experiment.relatedProjectSlug ? <Link className="focus-ring inline-flex items-center gap-2 rounded text-ink-800 hover:text-signal-700 dark:text-ink-100 dark:hover:text-signal-400" to={`/projects/${experiment.relatedProjectSlug}`}>Project <ArrowRight size={15} aria-hidden="true" /></Link> : null}
                  {experiment.githubUrl ? <a className="focus-ring inline-flex items-center gap-2 rounded text-ink-800 hover:text-signal-700 dark:text-ink-100 dark:hover:text-signal-400" href={experiment.githubUrl} target="_blank" rel="noreferrer"><Github size={15} aria-hidden="true" /> GitHub</a> : null}
                  {experiment.demoUrl ? <a className="focus-ring inline-flex items-center gap-2 rounded text-ink-800 hover:text-signal-700 dark:text-ink-100 dark:hover:text-signal-400" href={experiment.demoUrl} target="_blank" rel="noreferrer">Demo <ArrowUpRight size={15} aria-hidden="true" /></a> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
        {!items.length ? <div className="mt-10 rounded-md border border-dashed border-ink-300 p-8 dark:border-white/15"><p className="text-lg font-semibold text-ink-950 dark:text-white">The next experiment is still taking shape.</p><p className="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-300">This space is ready for a verified project, prototype, or developer tool.</p></div> : null}
      </div>
    </section>
  );
}
