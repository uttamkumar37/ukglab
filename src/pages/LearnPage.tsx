import { useEffect } from "react";
import { LearningSection } from "../sections/LearningSection";
import { updateSeo } from "../utils/seo";

export function LearnPage() {
  useEffect(() => updateSeo({ title: "Learn", description: "Explore the UKG Lab learning ecosystem for code, Java, DSA, AI, cloud, and maths.", path: "/learn" }), []);

  return <LearningSection />;
}
