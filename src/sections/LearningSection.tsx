import { ArrowUpRight, Braces, FunctionSquare, Sigma } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { learningPlatforms } from "../data/learningPlatforms";

export function LearningSection() {
  return (
    <section id="products" className="border-y border-ink-200 bg-white py-20 dark:border-white/10 dark:bg-white/[0.02] sm:py-24">
      <div className="section-shell">
        <SectionHeading
          kicker="Products"
          title="Explore UKG Lab"
          copy="A growing collection of learning platforms, engineering projects, and practical experiments."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_.92fr]">
          {learningPlatforms.map((platform, index) => {
            const isMath = platform.name === "Math";
            const Icon = isMath ? Sigma : Braces;

            return (
              <article
                key={platform.domain}
                className={`group relative overflow-hidden rounded-xl border p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-white/10 sm:p-8 ${
                  isMath
                    ? "min-h-[430px] border-signal-500/40 bg-ink-950 text-white"
                    : "min-h-[390px] border-ink-200 bg-ink-50 text-ink-950 dark:bg-ink-950/70 dark:text-white"
                }`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 ${isMath ? "bg-signal-500" : "bg-flame-500"}`} />
                <div className={`absolute right-0 top-0 h-64 w-64 translate-x-20 -translate-y-16 rounded-full blur-3xl ${isMath ? "bg-signal-500/20" : "bg-flame-500/12 dark:bg-flame-500/18"}`} />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <span className={`font-mono text-sm font-semibold ${isMath ? "text-signal-300" : "text-flame-500"}`}>0{index + 1}</span>
                    <span className={`inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-bold ${isMath ? "bg-white/10 text-white" : "bg-white text-ink-700 shadow-soft dark:bg-white/10 dark:text-ink-100"}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${isMath ? "bg-signal-400" : "bg-flame-500"}`} />
                      {platform.status}
                    </span>
                  </div>

                  <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
                    <div>
                      <p className={`text-sm font-bold uppercase tracking-[0.16em] ${isMath ? "text-signal-300" : "text-flame-500"}`}>
                        {platform.name} by UKG Lab
                      </p>
                      <h3 className="mt-3 text-4xl font-semibold tracking-normal sm:text-5xl">{platform.name}</h3>
                      <p className={`mt-5 max-w-xl text-base leading-7 sm:text-lg ${isMath ? "text-ink-200" : "text-ink-600 dark:text-ink-200"}`}>{platform.description}</p>
                    </div>

                    <div className={`relative grid aspect-square w-32 shrink-0 place-items-center rounded-xl border ${isMath ? "border-white/10 bg-white/[0.06]" : "border-ink-200 bg-white dark:border-white/10 dark:bg-white/[0.05]"}`}>
                      <Icon className={isMath ? "text-signal-300" : "text-flame-500"} size={54} strokeWidth={1.8} aria-hidden="true" />
                      {isMath ? (
                        <FunctionSquare className="absolute bottom-5 right-5 text-white/35" size={24} aria-hidden="true" />
                      ) : (
                        <span className="absolute bottom-5 right-5 font-mono text-xl font-bold text-ink-300 dark:text-white/35">{`</>`}</span>
                      )}
                    </div>
                  </div>

                  {platform.name === "Code" ? (
                    <div className="relative mt-8 flex flex-wrap gap-2">
                      {["Programming", "Java", "Backend", "APIs", "Projects"].map((item) => (
                        <span key={item} className="rounded-md border border-ink-200 bg-white px-2.5 py-1 text-xs font-semibold text-ink-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="relative mt-8 grid max-w-sm grid-cols-3 gap-2 font-mono text-sm text-white/70">
                      {["x + y", "a²", "π", "3/4", "∑n", "√64"].map((item) => (
                        <span key={item} className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-center">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="relative mt-auto pt-10">
                    <a
                      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition group-hover:gap-3 ${
                        isMath
                          ? "bg-white text-ink-950 hover:bg-ink-100"
                          : "bg-ink-950 text-white hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100"
                      }`}
                      href={platform.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explore {platform.name} <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                    <p className={`mt-4 inline-flex items-center gap-2 font-mono text-sm ${isMath ? "text-signal-300" : "text-flame-500"}`}>
                      {platform.domain}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
