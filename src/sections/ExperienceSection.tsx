import { SectionHeading } from "../components/SectionHeading";
import { experience } from "../data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="section-shell">
        <SectionHeading kicker="Experience" title="A timeline of focused building." copy="Experience data is configuration-driven so roles, dates, technologies, and achievements can be updated in one place." />
        <div className="mt-12 grid gap-8">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="relative border-l-2 border-signal-500/35 pl-6">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-ink-50 bg-signal-500 dark:border-ink-950" />
              <div className="rounded-lg border border-ink-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/[0.03]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-ink-950 dark:text-white">{item.role}</h3>
                    <p className="mt-1 font-medium text-signal-700 dark:text-signal-400">{item.company}</p>
                  </div>
                  <span className="rounded bg-ink-100 px-3 py-1 text-sm font-semibold text-ink-700 dark:bg-white/10 dark:text-ink-200">{item.dates}</span>
                </div>
                <p className="mt-4 leading-7 text-ink-600 dark:text-ink-300">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => <span key={tech} className="rounded-md bg-signal-500/10 px-2.5 py-1 text-xs font-semibold text-signal-700 dark:text-signal-400">{tech}</span>)}
                </div>
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-ink-700 dark:text-ink-200">
                  {item.achievements.map((achievement) => <li key={achievement}>• {achievement}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
