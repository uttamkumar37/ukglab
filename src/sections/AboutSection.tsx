import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { profile } from "../data/profile";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <SectionHeading kicker="About" title="Backend thinking with product context." copy={profile.intro} />
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.pillars.map((pillar) => (
            <article key={pillar.title} className="surface-card rounded-brand p-5 transition hover:-translate-y-0.5 hover:border-signal-500 dark:hover:border-signal-400">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="shrink-0 text-signal-600 dark:text-signal-400" size={19} aria-hidden="true" />
                <h3 className="font-semibold text-ink-950 dark:text-white">{pillar.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-ink-600 dark:text-ink-300">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
