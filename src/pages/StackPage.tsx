import { Code2, Compass } from "lucide-react";
import { useEffect } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { skills } from "../data/skills";
import { updateSeo } from "../utils/seo";

export function StackPage() {
  useEffect(() => updateSeo({ title: "Technology Stack", description: "The backend, integration, data, architecture, and delivery technologies Uttam uses and explores through UKG Lab.", path: "/stack" }), []);

  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading kicker="Stack" title="A practical toolkit, with context." copy="The stack reflects how I build backend systems and product foundations. Core technologies are separated from ideas I am actively exploring." />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {skills.map((group) => {
            const exploring = group.kind === "exploring";
            return (
              <article key={group.category} className={`surface-card rounded-brand p-6 ${exploring ? "border-flame-500/40 dark:border-flame-400/30" : ""}`}>
                <div className="flex items-start gap-4">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-md ${exploring ? "bg-flame-500/10 text-flame-500" : "bg-signal-500/10 text-signal-700 dark:text-signal-400"}`}>
                    {exploring ? <Compass aria-hidden="true" size={21} /> : <Code2 aria-hidden="true" size={21} />}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-xl font-semibold text-ink-950 dark:text-white">{group.category}</h2>
                      <span className="rounded bg-ink-100 px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-ink-600 dark:bg-white/10 dark:text-ink-300">{exploring ? "Exploring" : "Core"}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-300">{group.description}</p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2" aria-label={`${group.category} technologies`}>
                  {group.skills.map((skill) => <li key={skill} className="rounded-md border border-ink-200 bg-ink-50 px-3 py-2.5 text-sm font-medium text-ink-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200">{skill}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
