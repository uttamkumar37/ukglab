import { useEffect } from "react";
import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { HeroSection } from "../sections/HeroSection";
import { LearningSection } from "../sections/LearningSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";
import { TrustStripSection } from "../sections/TrustStripSection";
import { GitHubSection } from "../sections/GitHubSection";
import { NotesPreviewSection } from "../sections/NotesPreviewSection";
import { updateSeo } from "../utils/seo";

export function HomePage() {
  useEffect(() => updateSeo({ title: "Uttam | Software Engineer", description: "UKG Lab is Uttam's home for Java, backend engineering, APIs, integrations, projects, experiments, and technical learning.", path: "/" }), []);

  return (
    <>
      <HeroSection />
      <TrustStripSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection featuredOnly />
      <SkillsSection />
      <LearningSection />
      <NotesPreviewSection />
      <GitHubSection />
      <ContactSection />
    </>
  );
}
