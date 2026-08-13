import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { learningPlatforms } from "../data/learningPlatforms";

export function LearningSection() {
  return (
    <section id="learn" className="border-y border-ink-200 bg-white py-20 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="section-shell">
        <SectionHeading kicker="Explore UKG Lab" title="Future learning platforms, connected from one central hub." copy="These subdomains may launch as separate platforms over time. For now, the main site introduces the ecosystem and handles future links gracefully." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {learningPlatforms.map((platform) => (
            <a key={platform.domain} className="focus-ring group rounded-lg border border-ink-200 bg-ink-50 p-6 transition hover:-translate-y-1 hover:border-signal-500 dark:border-white/10 dark:bg-ink-950/70" href={`https://${platform.domain}`} target="_blank" rel="noreferrer" aria-label={`${platform.name} learning platform`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xl font-semibold text-ink-950 dark:text-white">{platform.name}</p>
                  <p className="mt-1 font-mono text-sm text-signal-700 dark:text-signal-400">{platform.domain}</p>
                </div>
                <ArrowUpRight className="text-ink-400 transition group-hover:text-signal-600 dark:group-hover:text-signal-400" size={20} aria-hidden="true" />
              </div>
              <p className="mt-5 min-h-12 text-sm leading-6 text-ink-600 dark:text-ink-300">{platform.description}</p>
              <span className="mt-6 inline-flex rounded bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-700 dark:bg-white/10 dark:text-ink-200">{platform.status}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
