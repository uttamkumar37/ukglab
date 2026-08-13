import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "../components/Button";
import { siteConfig } from "../config/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-ink-200 bg-ink-50 dark:border-white/10 dark:bg-ink-950">
      <div className="subtle-grid pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <div className="section-shell relative grid min-h-[calc(100svh-4rem)] items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_.95fr]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-ink-600 shadow-soft dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-300">
            <span className="h-2 w-2 rounded-full bg-signal-500" />
            {siteConfig.role} · {siteConfig.specialization}
          </div>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-6xl lg:text-7xl">
            {siteConfig.owner}
          </h1>
          <p className="mt-6 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-ink-900 dark:text-white sm:text-3xl">
            I build reliable backend systems, APIs and enterprise integrations.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-700 dark:text-ink-200">
            I work with Java and Spring Boot across backend engineering, REST APIs, integration platforms, and multi-tenant SaaS products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects" icon={ArrowRight}>View My Work</Button>
            <Button href={siteConfig.resumePath} variant="secondary" external download icon={Download}>Download Resume</Button>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-5 text-sm font-semibold">
            <a className="focus-ring inline-flex items-center gap-2 rounded text-ink-600 hover:text-signal-700 dark:text-ink-300 dark:hover:text-signal-400" href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
              <Github size={17} aria-hidden="true" /> GitHub
            </a>
            <a className="focus-ring inline-flex items-center gap-2 rounded text-ink-600 hover:text-signal-700 dark:text-ink-300 dark:hover:text-signal-400" href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
              <Linkedin size={17} aria-hidden="true" /> LinkedIn
            </a>
            <a className="focus-ring inline-flex items-center gap-2 rounded text-ink-600 hover:text-signal-700 dark:text-ink-300 dark:hover:text-signal-400" href="/contact">
              Contact <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-sm font-semibold text-ink-600 dark:text-ink-300">
            <span className="rounded-md border border-ink-200 bg-white px-3 py-2 shadow-soft dark:border-white/10 dark:bg-white/[0.04]">{siteConfig.career.experience}</span>
            <span className="rounded-md border border-ink-200 bg-white px-3 py-2 shadow-soft dark:border-white/10 dark:bg-white/[0.04]">Java · Spring Boot</span>
            <span className="rounded-md border border-ink-200 bg-white px-3 py-2 shadow-soft dark:border-white/10 dark:bg-white/[0.04]">Enterprise Integrations</span>
            <span className="rounded-md border border-ink-200 bg-white px-3 py-2 shadow-soft dark:border-white/10 dark:bg-white/[0.04]">Multi-Tenant SaaS</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="overflow-hidden rounded-xl border border-ink-200 bg-white p-3 shadow-lift dark:border-white/10 dark:bg-white/[0.04]">
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-ink-100 dark:bg-ink-900">
              <img className="h-full w-full object-cover object-top" src="/profile/uttam-kumar.webp" alt="Uttam Kumar, Software Engineer focused on Java backend systems" width="760" height="950" fetchPriority="high" />
            </div>
            <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-4">
              <div><p className="font-semibold text-ink-950 dark:text-white">Uttam Kumar</p><p className="mt-1 text-sm text-ink-600 dark:text-ink-300">Backend · Integrations · Product</p></div>
              <span className="rounded-md bg-signal-500/10 px-2.5 py-1 text-xs font-bold text-signal-700 dark:text-signal-400">UKG Lab</span>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 max-w-[220px] rounded-lg border border-ink-200 bg-white p-4 shadow-soft dark:border-white/10 dark:bg-ink-900 sm:-left-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-signal-700 dark:text-signal-400">Working style</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-ink-800 dark:text-ink-100">Clear contracts. Explicit boundaries. Useful software.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
