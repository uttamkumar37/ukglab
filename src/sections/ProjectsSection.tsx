import { useMemo, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
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

  return (
    <section id="projects" className="py-20">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Projects"
            title={featuredOnly ? "Featured project work." : "Project showcase and experiments."}
            copy="Each card supports status, links, screenshots, featured badges, stacks, categories, and case-study routes."
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
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
        {!visibleProjects.length ? <p className="mt-10 rounded-md border border-ink-200 bg-white p-6 text-ink-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-ink-300">No projects match this filter yet.</p> : null}
      </div>
    </section>
  );
}
