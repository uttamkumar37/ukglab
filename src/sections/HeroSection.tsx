import { ArrowRight, BookOpen, Github, Linkedin, MoveRight } from "lucide-react";
import { Button } from "../components/Button";
import { siteConfig } from "../config/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-ink-200 bg-white dark:border-white/10 dark:bg-ink-950">
      <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="section-kicker">{siteConfig.tagline}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-ink-700 dark:text-ink-200">
            A central place where Uttam's technology projects, backend learning, notes, experiments, and future education platforms come together.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects" icon={ArrowRight}>Explore My Work</Button>
            <Button href="/learn" variant="secondary" icon={BookOpen}>Start Learning</Button>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-5 text-sm font-semibold">
            <a className="focus-ring inline-flex items-center gap-2 rounded text-ink-600 hover:text-signal-700 dark:text-ink-300 dark:hover:text-signal-400" href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
              <Github size={17} aria-hidden="true" /> GitHub
            </a>
            <a className="focus-ring inline-flex items-center gap-2 rounded text-ink-600 hover:text-signal-700 dark:text-ink-300 dark:hover:text-signal-400" href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
              <Linkedin size={17} aria-hidden="true" /> LinkedIn
            </a>
            <a className="focus-ring inline-flex items-center gap-2 rounded text-ink-600 hover:text-signal-700 dark:text-ink-300 dark:hover:text-signal-400" href={siteConfig.resumePath} target="_blank" rel="noreferrer">
              Resume <MoveRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg border border-ink-200 bg-ink-950 p-4 shadow-soft dark:border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex gap-1.5"><span className="h-3 w-3 rounded-full bg-flame-400" /><span className="h-3 w-3 rounded-full bg-yellow-300" /><span className="h-3 w-3 rounded-full bg-signal-400" /></div>
              <span className="font-mono text-xs text-ink-200">ukglab.ecosystem.ts</span>
            </div>
            <pre className="overflow-hidden py-6 font-mono text-sm leading-7 text-ink-100">
              <code>{`export const ukgLab = {
  identity: "Uttam",
  focus: ["Java", "APIs", "Cloud"],
  hubs: [
    "code.ukglab.com",
    "java.ukglab.com",
    "dsa.ukglab.com",
    "ai.ukglab.com"
  ],
  mission: "learn-build-share"
};`}</code>
            </pre>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {["Projects", "Notes", "Learning"].map((item) => (
              <div key={item} className="rounded-md border border-ink-200 bg-white p-4 text-center text-sm font-semibold text-ink-700 shadow-soft dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
