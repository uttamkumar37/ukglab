import { Box, Code2, Cpu, Database, Layers, Sigma } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { learningPlatforms } from "../data/learningPlatforms";

const icons = {
  Code: Code2,
  Java: Layers,
  DSA: Database,
  AI: Cpu,
  Cloud: Box,
  Maths: Sigma,
};

export function LearningSection() {
  return (
    <section id="learn" className="border-y border-ink-200 bg-white py-20 dark:border-white/10 dark:bg-white/[0.02] sm:py-24">
      <div className="section-shell">
        <SectionHeading kicker="More from the Lab" title="Learning tracks that grow alongside the work." copy="UKG Lab keeps professional evidence, technical notes, experiments, and future learning products together under one domain." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {learningPlatforms.map((platform) => (
            <article key={platform.domain} className="group rounded-brand border border-ink-200 bg-ink-50 p-5 transition hover:-translate-y-0.5 hover:border-signal-500 dark:border-white/10 dark:bg-ink-950/70">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-brand bg-white text-signal-700 shadow-soft dark:bg-white/8 dark:text-signal-400">
                    {(() => {
                      const Icon = icons[platform.name as keyof typeof icons] ?? Code2;
                      return <Icon aria-hidden="true" size={19} />;
                    })()}
                  </span>
                  <div>
                  <p className="text-xl font-semibold text-ink-950 dark:text-white">{platform.name}</p>
                  <p className="mt-1 font-mono text-sm text-signal-700 dark:text-signal-400">{platform.domain}</p>
                  </div>
                </div>
                <span className="rounded bg-ink-100 px-2.5 py-1 text-xs font-bold text-ink-600 dark:bg-white/10 dark:text-ink-200">{platform.status}</span>
              </div>
              <p className="mt-5 min-h-12 text-sm leading-6 text-ink-600 dark:text-ink-300">{platform.description}</p>
              {platform.href ? (
                <a className="focus-ring mt-6 inline-flex rounded text-sm font-semibold text-signal-700 dark:text-signal-400" href={platform.href} target="_blank" rel="noreferrer">
                  Open platform
                </a>
              ) : (
                <p className="mt-6 text-sm font-semibold text-ink-500 dark:text-ink-400">Previewed here until launch</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
