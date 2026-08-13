import { ArrowRight, Github, Linkedin, MoveRight, UserRound } from "lucide-react";
import { Button } from "../components/Button";
import { siteConfig } from "../config/site";
import { profile } from "../data/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-ink-200 bg-ink-50 dark:border-white/10 dark:bg-ink-950">
      <div className="subtle-grid pointer-events-none absolute inset-x-0 top-0 h-[620px]" />
      <div className="section-shell relative grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.03fr_.97fr]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-ink-600 shadow-soft dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-300">
            <span className="h-2 w-2 rounded-full bg-signal-500" />
            Software Engineer • Backend • Integrations
          </div>
          <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Building reliable software, integrations and things worth learning from.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700 dark:text-ink-200 sm:text-xl sm:leading-9">
            I’m {siteConfig.owner}, a software engineer working across Java, Spring Boot, backend engineering, REST APIs, platform integrations, and practical software systems.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600 dark:text-ink-300">
            {siteConfig.name} is where I document what I build, learn, ship, and experiment with.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects" icon={ArrowRight}>Explore My Work</Button>
            <Button href="/about" variant="secondary" icon={UserRound}>About Me</Button>
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
          <div className="mt-8 inline-flex flex-wrap items-center gap-2 rounded-brand border border-ink-200 bg-white px-3 py-2 text-sm font-semibold text-ink-600 shadow-soft dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-300">
            <span className="text-signal-700 dark:text-signal-400">Building</span>
            <span aria-hidden="true">•</span>
            <span>Learning</span>
            <span aria-hidden="true">•</span>
            <span>Sharing</span>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl border border-ink-200 bg-ink-950 p-3 shadow-lift dark:border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex gap-1.5"><span className="h-3 w-3 rounded-full bg-flame-400" /><span className="h-3 w-3 rounded-full bg-yellow-300" /><span className="h-3 w-3 rounded-full bg-signal-400" /></div>
              <span className="font-mono text-xs text-ink-200">ukglab.system</span>
            </div>
            <pre className="overflow-hidden px-1 py-6 font-mono text-[13px] leading-7 text-ink-100 sm:text-sm">
              <code>{`export const ukgLab = {
  engineer: "Uttam",
  focus: ["Java", "Spring Boot", "APIs"],
  integrations: ["OAuth", "Webhooks"],
  lab: {
    learn: true,
    build: true,
    ship: true,
    share: true
  }
};`}</code>
            </pre>
            <div className="grid gap-2 border-t border-white/10 pt-3">
              {["API contract verified", "Notes indexed", "Pages deploy live"].map((line) => (
                <div key={line} className="flex items-center gap-2 rounded-md bg-white/[0.04] px-3 py-2 font-mono text-xs text-ink-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-400" />
                  {line}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {profile.highlights.slice(0, 3).map((item) => (
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
