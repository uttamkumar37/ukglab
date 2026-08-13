import { useEffect } from "react";
import { AboutSection } from "../sections/AboutSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { SkillsSection } from "../sections/SkillsSection";
import { updateSeo } from "../utils/seo";

export function AboutPage() {
  useEffect(() => updateSeo({ title: "About Uttam", description: "Learn about Uttam, the developer behind UKG Lab.", path: "/about" }), []);

  return (
    <>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
    </>
  );
}
