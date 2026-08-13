import type { SkillGroup } from "../types/content";

export const skills: SkillGroup[] = [
  {
    category: "Backend",
    description: "Server-side foundations for APIs, services, and business workflows.",
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices"],
  },
  {
    category: "Databases",
    description: "Relational data modeling, querying, and persistence layers.",
    skills: ["MySQL", "PostgreSQL", "SQL"],
  },
  {
    category: "Integration",
    description: "Connecting systems cleanly with secure API contracts.",
    skills: ["REST API Integration", "Webhooks", "OAuth", "API Keys"],
  },
  {
    category: "Development",
    description: "Tools and workflows for repeatable, collaborative delivery.",
    skills: ["Git", "GitHub", "Maven", "Postman"],
  },
  {
    category: "DevOps / Cloud",
    description: "Deployment basics, containers, automation, and hosting pipelines.",
    skills: ["Docker", "GitHub Actions", "Cloud fundamentals"],
  },
  {
    category: "Currently Learning",
    description: "Active learning tracks that shape future UKG Lab content.",
    skills: ["System Design", "DSA", "AI Tools", "Cloud Deployments"],
  },
];
