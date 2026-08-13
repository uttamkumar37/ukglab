import { useEffect } from "react";
import { AboutSection } from "../sections/AboutSection";
import { CloudCampusSection } from "../sections/CloudCampusSection";
import { ContactSection } from "../sections/ContactSection";
import { EducationSection } from "../sections/EducationSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { HeroSection } from "../sections/HeroSection";
import { LearningSection } from "../sections/LearningSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";
import { TrustStripSection } from "../sections/TrustStripSection";
import { NotesPreviewSection } from "../sections/NotesPreviewSection";
import { SnapshotSection } from "../sections/SnapshotSection";
import { updateSeo } from "../utils/seo";

export function HomePage() {
  useEffect(() => updateSeo({ title: "Uttam Kumar | Java Backend & Software Engineer", description: "Uttam Kumar builds reliable Java backend systems, APIs, enterprise integrations, and multi-tenant SaaS products from UKG Lab.", path: "/" }), []);

  return (
    <>
      <HeroSection />
      <TrustStripSection />
      <SnapshotSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection featuredOnly />
      <SkillsSection />
      <CloudCampusSection />
      <NotesPreviewSection />
      <LearningSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
