import { profile } from "../data/profile";

export function TrustStripSection() {
  return (
    <section className="border-b border-ink-200 bg-white py-5 dark:border-white/10 dark:bg-white/[0.02]" aria-label="Technology focus">
      <div className="section-shell">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm font-semibold text-ink-500 dark:text-ink-400">Working across backend systems, integrations, and delivery workflows</p>
          <div className="flex flex-wrap gap-2">
            {profile.trustStrip.map((item) => (
              <span key={item} className="rounded-md border border-ink-200 bg-ink-50 px-3 py-1.5 text-sm font-semibold text-ink-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
