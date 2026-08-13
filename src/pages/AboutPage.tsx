import { useEffect } from "react";
import { AboutSection } from "../sections/AboutSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { EducationSection } from "../sections/EducationSection";
import { SkillsSection } from "../sections/SkillsSection";
import { updateSeo } from "../utils/seo";

export function AboutPage() {
  useEffect(() => updateSeo({ title: "About Uttam", description: "Learn about Uttam, the software engineer behind UKG Lab and its backend, API, integration, and learning work.", path: "/about" }), []);

  return (
    <>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </>
  );
}
