import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { profile } from "../data/profile";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="section-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <SectionHeading kicker="About" title="A developer lab built around useful software and durable learning." copy={profile.intro} />
        <div className="grid gap-5">
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-ink-700 dark:text-ink-200">{paragraph}</p>
          ))}
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            {profile.highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md border border-ink-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.03]">
                <CheckCircle2 className="text-signal-600 dark:text-signal-400" size={20} aria-hidden="true" />
                <span className="font-semibold text-ink-800 dark:text-ink-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
