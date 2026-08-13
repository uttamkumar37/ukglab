import { useEffect } from "react";
import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { HeroSection } from "../sections/HeroSection";
import { LearningSection } from "../sections/LearningSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";
import { updateSeo } from "../utils/seo";

export function HomePage() {
  useEffect(() => updateSeo({ path: "/" }), []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection featuredOnly />
      <LearningSection />
      <ContactSection />
    </>
  );
}
