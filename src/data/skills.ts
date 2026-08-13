import type { SkillGroup } from "../types/content";

export const skills: SkillGroup[] = [
  {
    category: "Backend Engineering",
    description: "Server-side foundations for APIs, services, and business workflows.",
    skills: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "JPA / Hibernate"],
  },
  {
    category: "API & Integration",
    description: "Clear contracts and dependable connections across systems.",
    skills: ["REST APIs", "OAuth", "JWT", "Webhooks", "Enterprise Integrations", "API Reliability"],
  },
  {
    category: "Architecture",
    description: "Reasoning about boundaries, ownership, and system evolution.",
    skills: ["Microservices", "Multi-Tenant SaaS", "System Design", "LLD", "HLD", "Modular Architecture"],
  },
  {
    category: "Data",
    description: "Relational data modeling, querying, and persistence layers.",
    skills: ["PostgreSQL", "MySQL", "SQL", "Transactions", "Indexing", "Query Optimization"],
  },
  {
    category: "Engineering Platform",
    description: "Deployment basics, containers, automation, and hosting pipelines.",
    skills: ["Docker", "GitHub Actions", "CI/CD", "Maven", "AWS Fundamentals", "Git"],
  },
];
