import { useMemo, useState } from "react";
import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard, ProjectVisual } from "../components/ProjectCard";
import { SectionHeading } from "../components/SectionHeading";
import { projectCategories, projects } from "../data/projects";

type ProjectsSectionProps = {
  featuredOnly?: boolean;
};

export function ProjectsSection({ featuredOnly = false }: ProjectsSectionProps) {
  const [category, setCategory] = useState("All");
  const visibleProjects = useMemo(() => {
    const source = featuredOnly ? projects.filter((project) => project.featured) : projects;
    if (category === "All") return source;
    return source.filter((project) => project.categories.includes(category) || project.stack.includes(category));
  }, [category, featuredOnly]);
  const selectedWork = projects.filter((project) => project.featured).slice(0, 2);
  const remainingFeatured = projects.filter((project) => project.featured).slice(2);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Projects"
            title={featuredOnly ? "Selected Work" : "Project showcase and experiments."}
            copy={featuredOnly ? "Larger project stories first, with enough context to understand the problem, implementation direction, and technology choices." : "Filter software projects, experiments, backend work, and deployment patterns by technology."}
          />
          {!featuredOnly ? (
            <div className="flex max-w-full gap-2 overflow-x-auto pb-2" aria-label="Filter projects">
              {projectCategories.map((item) => (
                <button key={item} className={`focus-ring whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold transition ${category === item ? "bg-ink-950 text-white dark:bg-white dark:text-ink-950" : "border border-ink-200 bg-white text-ink-700 hover:border-signal-500 dark:border-white/10 dark:bg-white/5 dark:text-ink-200"}`} type="button" onClick={() => setCategory(item)}>
                  {item}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        {featuredOnly ? (
          <>
            <div className="mt-10 grid gap-8">
              {selectedWork.map((project, index) => (
                <article key={project.slug} id={project.slug} className="surface-card grid gap-6 rounded-xl p-4 md:p-6 lg:grid-cols-2 lg:items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <ProjectVisual name={project.name} image={project.image} imagePath={project.imagePath} />
                  </div>
                  <div className="p-1 md:p-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded bg-signal-500/10 px-2.5 py-1 text-xs font-semibold text-signal-700 dark:text-signal-400">{project.status}</span>
                      <span className="rounded bg-ink-100 px-2.5 py-1 text-xs font-semibold text-ink-700 dark:bg-white/10 dark:text-ink-200">Featured</span>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-ink-950 dark:text-white sm:text-3xl">{project.name}</h3>
                    <p className="mt-3 text-base font-semibold leading-7 text-ink-800 dark:text-ink-100">{project.valueProposition}</p>
                    <p className="mt-3 text-sm leading-7 text-ink-600 dark:text-ink-300">{project.problem}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-md border border-ink-200 px-2.5 py-1 text-xs font-medium text-ink-600 dark:border-white/10 dark:text-ink-300">{tech}</span>
                      ))}
                    </div>
                    <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold">
                      <Link className="focus-ring inline-flex items-center gap-2 rounded text-ink-800 hover:text-signal-700 dark:text-ink-100 dark:hover:text-signal-400" to={project.caseStudyUrl}>
                        Project details <ArrowRight size={17} aria-hidden="true" />
                      </Link>
                      <a className="focus-ring inline-flex items-center gap-2 rounded text-ink-800 hover:text-signal-700 dark:text-ink-100 dark:hover:text-signal-400" href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Github size={17} aria-hidden="true" /> GitHub
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {remainingFeatured.length ? (
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {remainingFeatured.map((project) => <ProjectCard key={project.slug} project={project} />)}
              </div>
            ) : null}
          </>
        ) : (
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        )}
        {!visibleProjects.length ? <p className="mt-10 rounded-md border border-ink-200 bg-white p-6 text-ink-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-ink-300">No projects match this filter yet.</p> : null}
      </div>
    </section>
  );
}
