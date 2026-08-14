import { useEffect } from "react";
import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";
import { HeroSection } from "../sections/HeroSection";
import { LearningSection } from "../sections/LearningSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { updateSeo } from "../utils/seo";

export function HomePage() {
  useEffect(() => updateSeo({ title: "UKG Lab | Engineering. Learning. Building.", description: "UKG Lab is a growing collection of learning platforms, software projects, and engineering experiments by Uttam Kumar.", path: "/" }), []);

  return (
    <>
      <HeroSection />
      <LearningSection />
      <ProjectsSection featuredOnly />
      <AboutSection />
      <ContactSection />
    </>
  );
}
