import type { ExperienceItem } from "../types/content";

export const experience: ExperienceItem[] = [
  {
    company: "UKG Lab",
    role: "Founder and Developer",
    dates: "2026 - Present",
    description:
      "Building the central portfolio and learning ecosystem for technical projects, notes, experiments, and future focused learning platforms.",
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "GitHub Pages"],
    achievements: [
      "Designed a scalable content architecture for notes, projects, and learning platforms.",
      "Created a static-first deployment approach suitable for GitHub Pages and custom domains.",
      "Established UKG Lab as the central identity for future learning products.",
    ],
  },
  {
    company: "Independent Projects",
    role: "Software Developer",
    dates: "Ongoing",
    description:
      "Developing backend-focused applications, API integrations, and practical software experiments while documenting reusable lessons.",
    technologies: ["Java", "Spring Boot", "MySQL", "Docker", "Git"],
    achievements: [
      "Built project patterns around REST APIs, authentication, database access, and deployment automation.",
      "Documented reusable implementation notes for faster future development.",
      "Practiced clean repository setup, automation, and production-minded delivery.",
    ],
  },
];
