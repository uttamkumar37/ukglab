import { useEffect } from "react";
import { AboutSection } from "../sections/AboutSection";
import { CloudCampusSection } from "../sections/CloudCampusSection";
import { ContactSection } from "../sections/ContactSection";
import { EducationSection } from "../sections/EducationSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { HeroSection } from "../sections/HeroSection";
import { LearningSection } from "../sections/LearningSection";
import { LabSection } from "../sections/LabSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";
import { TrustStripSection } from "../sections/TrustStripSection";
import { NotesPreviewSection } from "../sections/NotesPreviewSection";
import { SnapshotSection } from "../sections/SnapshotSection";
import { updateSeo } from "../utils/seo";

export function HomePage() {
  useEffect(() => updateSeo({ title: "Uttam Kumar | Software Engineer & Backend Developer", description: "UKG Lab is Uttam Kumar's engineering lab for building backend systems, APIs, integrations, SaaS products, and practical software experiments.", path: "/" }), []);

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
      <LabSection preview />
      <LearningSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
