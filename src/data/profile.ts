import { siteConfig } from "../config/site";

export const profile = {
  name: siteConfig.owner,
  role: siteConfig.role,
  intro:
    "I build backend systems, APIs, integrations, and practical software with Java, Spring Boot, SQL, Docker, and GitHub-first delivery workflows.",
  pillars: [
    {
      title: "Who I am",
      body: "Uttam — a software engineer focused on disciplined backend development and reliable integration work.",
    },
    {
      title: "What I work on",
      body: "Backend services, REST APIs, third-party integrations, OAuth/API authentication, webhooks, database-backed applications, and deployment workflows.",
    },
    {
      title: "Engineering interests",
      body: "Java, Spring Boot, distributed systems, API design, system design, developer tooling, cloud fundamentals, automation, and AI-assisted engineering.",
    },
    {
      title: "Why UKG Lab exists",
      body: "A public place to build, experiment, document, teach, and share useful engineering knowledge over time.",
    },
  ],
  highlights: ["Java backend engineering", "API integrations", "Technical learning", "Project shipping"],
  trustStrip: ["Java", "Spring Boot", "REST APIs", "OAuth", "Webhooks", "SQL", "Docker", "GitHub Actions"],
};
