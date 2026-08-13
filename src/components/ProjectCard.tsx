import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../types/content";

export function ProjectVisual({ name, image }: { name: string; image: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-ink-200 bg-ink-950 dark:border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,.38),transparent_28%),radial-gradient(circle_at_82%_34%,rgba(249,115,22,.24),transparent_27%)]" />
      <div className="absolute inset-x-5 top-5 rounded border border-white/10 bg-white/10 p-3 font-mono text-xs text-ink-100 backdrop-blur">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-flame-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-400" />
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-signal-400">const project = "{image}"</p>
          <p className="text-ink-200">deploy({`{ route: "/${image}", status: "ready" }`})</p>
        </div>
      </div>
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
        <span className="text-sm font-semibold text-white">{name}</span>
        <span className="rounded bg-white px-2 py-1 text-xs font-semibold text-ink-950">UKG</span>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article id={project.slug} className="group surface-card rounded-brand p-4 transition hover:-translate-y-1 hover:border-signal-500 dark:hover:border-signal-400">
      <ProjectVisual name={project.name} image={project.image} />
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="rounded bg-ink-100 px-2.5 py-1 text-xs font-semibold text-ink-700 dark:bg-white/10 dark:text-ink-200">{project.status}</span>
        {project.featured ? <span className="rounded bg-signal-500/10 px-2.5 py-1 text-xs font-semibold text-signal-700 dark:text-signal-400">Featured</span> : null}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-ink-950 dark:text-white">{project.name}</h3>
      <p className="mt-2 text-sm font-semibold text-ink-700 dark:text-ink-200">{project.valueProposition}</p>
      <p className="mt-3 text-sm leading-6 text-ink-600 dark:text-ink-300">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-md border border-ink-200 px-2.5 py-1 text-xs font-medium text-ink-600 dark:border-white/10 dark:text-ink-300">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <a className="focus-ring inline-flex items-center gap-2 rounded text-sm font-semibold text-ink-800 hover:text-signal-700 dark:text-ink-100 dark:hover:text-signal-400" href={project.githubUrl} target="_blank" rel="noreferrer">
          <Github aria-hidden="true" size={17} /> GitHub
        </a>
        {project.liveUrl ? (
          <a className="focus-ring inline-flex items-center gap-2 rounded text-sm font-semibold text-ink-800 hover:text-signal-700 dark:text-ink-100 dark:hover:text-signal-400" href={project.liveUrl} target="_blank" rel="noreferrer">
            <ArrowUpRight aria-hidden="true" size={17} /> Live
          </a>
        ) : null}
        <Link className="focus-ring inline-flex items-center gap-2 rounded text-sm font-semibold text-ink-800 hover:text-signal-700 dark:text-ink-100 dark:hover:text-signal-400" to={project.caseStudyUrl}>
          Case study
        </Link>
      </div>
    </article>
  );
}
