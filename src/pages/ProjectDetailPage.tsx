import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectVisual } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { updateSeo } from "../utils/seo";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    if (project) {
      updateSeo({
        title: project.name,
        description: project.valueProposition,
        path: `/projects/${project.slug}`,
      });
    }
  }, [project]);

  if (!project) {
    return (
      <section className="py-20">
        <div className="section-shell">
          <p className="section-kicker">Project not found</p>
          <h1 className="section-title">This project case study is not published yet.</h1>
          <Link className="focus-ring mt-8 inline-flex rounded-md bg-ink-950 px-4 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-ink-950" to="/projects">
            Back to projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="py-16 sm:py-20">
      <div className="section-shell">
        <Link className="focus-ring inline-flex items-center gap-2 rounded text-sm font-semibold text-ink-600 hover:text-signal-700 dark:text-ink-300 dark:hover:text-signal-400" to="/projects">
          <ArrowLeft size={17} aria-hidden="true" /> Projects
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">{project.status}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-ink-950 dark:text-white sm:text-5xl">{project.name}</h1>
            <p className="mt-5 text-xl leading-9 text-ink-700 dark:text-ink-200">{project.valueProposition}</p>
            <p className="mt-4 text-base leading-8 text-ink-600 dark:text-ink-300">{project.problem}</p>
            <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold">
              <a className="focus-ring inline-flex items-center gap-2 rounded text-ink-800 hover:text-signal-700 dark:text-ink-100 dark:hover:text-signal-400" href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github size={17} aria-hidden="true" /> Repository
              </a>
              {project.liveUrl ? (
                <a className="focus-ring inline-flex items-center gap-2 rounded text-ink-800 hover:text-signal-700 dark:text-ink-100 dark:hover:text-signal-400" href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ArrowUpRight size={17} aria-hidden="true" /> Live application
                </a>
              ) : null}
            </div>
          </div>
          <ProjectVisual name={project.name} image={project.image} />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            ["Overview", [project.details.overview]],
            ["Architecture", project.details.architecture],
            ["Implementation", project.details.implementation],
            ["Lessons", project.details.lessons],
          ].map(([title, items]) => (
            <section key={title as string} className="surface-card rounded-brand p-6">
              <h2 className="text-lg font-semibold text-ink-950 dark:text-white">{title as string}</h2>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-ink-600 dark:text-ink-300">
                {(items as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
