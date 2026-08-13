import type { ExperienceItem } from "../types/content";

export const experience: ExperienceItem[] = [
  {
    company: "Verint",
    role: "Software Engineer - R&D - Development",
    dates: "Sep 2023 - Present",
    description:
      "Building reusable Java and Spring Boot integration components for enterprise CX workflows, with a focus on reliability, extension points, and service-level debugging.",
    technologies: ["Java", "Spring Boot", "REST APIs", "Microservices", "Maven", "Git"],
    achievements: [
      "Built reusable adapter components, reducing manual integration effort by 70%.",
      "Developed generic adapter logic that improved development efficiency by 50% across similar use cases.",
      "Optimized REST API and service-layer logic, reducing response time by 30%.",
    ],
  },
  {
    company: "Digit Insurance",
    role: "Software Engineer (Backend)",
    dates: "Dec 2021 - Sep 2023",
    description:
      "Developed Spring Boot services for insurance policy workflows, document generation, notifications, and customer-facing backend integrations.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "Maven", "Git"],
    achievements: [
      "Developed REST APIs that reduced manual business processes by 90%.",
      "Designed PDF generation and Email/SMS notification modules for policy workflows.",
      "Optimized MySQL schema and backend data access patterns for performance and maintainability.",
    ],
  },
  {
    company: "UKG Lab",
    role: "Founder and Developer",
    dates: "2026 - Present",
    description:
      "Building one public home for professional work, CloudCampus product development, technical notes, experiments, and future learning platforms.",
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "GitHub Pages"],
    achievements: [
      "Designed a configuration-driven portfolio and learning platform with readable routes and static-first deployment.",
      "Created dedicated project, notes, learning, and resume surfaces under one domain.",
    ],
  },
];
