import type { SkillGroup } from "../types/content";

export const skills: SkillGroup[] = [
  {
    category: "Backend Engineering",
    description: "Server-side foundations for APIs, services, and business workflows.",
    skills: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "JPA / Hibernate"],
    kind: "core",
  },
  {
    category: "API & Integration",
    description: "Clear contracts and dependable connections across systems.",
    skills: ["REST APIs", "OAuth", "JWT", "Webhooks", "Enterprise Integrations", "API Reliability"],
    kind: "core",
  },
  {
    category: "Architecture",
    description: "Reasoning about boundaries, ownership, and system evolution.",
    skills: ["Microservices", "Multi-Tenant SaaS", "System Design", "LLD", "HLD", "Modular Architecture"],
    kind: "core",
  },
  {
    category: "Data",
    description: "Relational data modeling, querying, and persistence layers.",
    skills: ["PostgreSQL", "MySQL", "SQL", "Transactions", "Indexing", "Query Optimization"],
    kind: "core",
  },
  {
    category: "Engineering Platform",
    description: "Deployment basics, containers, automation, and hosting pipelines.",
    skills: ["Docker", "GitHub Actions", "CI/CD", "Maven", "AWS Fundamentals", "Git"],
    kind: "core",
  },
  {
    category: "Exploring",
    description: "Tools and ideas being explored through deliberate projects and experiments.",
    skills: ["AI-assisted Development", "Cloud Architecture", "Event-driven Workflows", "Observability"],
    kind: "exploring",
  },
];
