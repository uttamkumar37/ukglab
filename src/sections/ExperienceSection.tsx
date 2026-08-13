import { SectionHeading } from "../components/SectionHeading";
import { experience } from "../data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-y border-ink-200 bg-white py-20 dark:border-white/10 dark:bg-white/[0.02] sm:py-24">
      <div className="section-shell">
        <SectionHeading kicker="Experience" title="Building systems where reliability is part of the feature." copy="A concise view of the engineering work behind the portfolio, with the strongest outcomes and technologies kept visible." />
        <div className="mt-12 grid gap-0">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="grid gap-5 border-t border-ink-200 py-8 first:border-t-0 dark:border-white/10 lg:grid-cols-[280px_1fr]">
              <div>
                <p className="text-sm font-semibold text-signal-700 dark:text-signal-400">{item.dates}</p>
                <p className="mt-2 text-lg font-semibold text-ink-950 dark:text-white">{item.company}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-ink-950 dark:text-white">{item.role}</h3>
                <p className="mt-4 max-w-3xl leading-7 text-ink-600 dark:text-ink-300">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => <span key={tech} className="rounded-md border border-ink-200 bg-ink-50 px-2.5 py-1 text-xs font-semibold text-ink-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200">{tech}</span>)}
                </div>
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-ink-700 dark:text-ink-200">
                  {item.achievements.map((achievement) => <li key={achievement} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-500" />{achievement}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
