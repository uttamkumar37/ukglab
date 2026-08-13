import { useEffect } from "react";
import { ProjectsSection } from "../sections/ProjectsSection";
import { updateSeo } from "../utils/seo";

export function ProjectsPage() {
  useEffect(() => updateSeo({ title: "Projects", description: "Explore Uttam's software projects, experiments, APIs, and DevOps work.", path: "/projects" }), []);

  return <ProjectsSection />;
}
