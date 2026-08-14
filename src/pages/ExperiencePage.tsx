import { useEffect } from "react";
import { EducationSection } from "../sections/EducationSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { SnapshotSection } from "../sections/SnapshotSection";
import { updateSeo } from "../utils/seo";

export function ExperiencePage() {
  useEffect(() => updateSeo({ title: "Experience", description: "Uttam Kumar's software engineering journey across Java backend development, API integrations, and product building.", path: "/experience" }), []);

  return (
    <>
      <SnapshotSection />
      <ExperienceSection />
      <EducationSection />
    </>
  );
}
