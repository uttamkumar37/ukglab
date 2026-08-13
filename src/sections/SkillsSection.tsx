import { Code2 } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { skills } from "../data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="border-y border-ink-200 bg-white py-20 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="section-shell">
        <SectionHeading kicker="Skills" title="Technology grouped by how it is used." copy="No vanity percentages, just the tools and practices that support real project work." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <article key={group.category} className="rounded-lg border border-ink-200 bg-ink-50 p-6 transition hover:border-signal-500 dark:border-white/10 dark:bg-ink-950/70">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-signal-500/10 text-signal-700 dark:text-signal-400">
                  <Code2 aria-hidden="true" size={20} />
                </span>
                <h3 className="text-lg font-semibold text-ink-950 dark:text-white">{group.category}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-ink-600 dark:text-ink-300">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-md border border-ink-200 bg-white px-3 py-1.5 text-sm font-medium text-ink-700 dark:border-white/10 dark:bg-white/5 dark:text-ink-200">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
