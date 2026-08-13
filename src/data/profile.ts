import { siteConfig } from "../config/site";

export const profile = {
  name: siteConfig.owner,
  role: siteConfig.role,
  specialization: siteConfig.specialization,
  intro:
    "I build reliable backend systems, APIs, and enterprise integrations with Java and Spring Boot. UKG Lab is the single home for my professional work, CloudCampus product building, technical notes, and ongoing learning.",
  pillars: [
    {
      title: "Who I am",
      body: "A Software Engineer focused on Java backend systems, APIs, integration platforms, and product-minded delivery.",
    },
    {
      title: "What I work on",
      body: "Spring Boot services, REST APIs, enterprise integrations, OAuth, webhooks, relational data, and multi-tenant SaaS workflows.",
    },
    {
      title: "Engineering philosophy",
      body: "Make boundaries explicit, keep contracts stable, and make complex workflows easier to test, operate, and extend.",
    },
    {
      title: "What UKG Lab is",
      body: "One public home for my portfolio, projects, notes, experiments, and future learning platforms.",
    },
  ],
  highlights: ["Java backend engineering", "Enterprise integrations", "Multi-tenant SaaS", "Product shipping"],
  trustStrip: ["Java", "Spring Boot", "REST APIs", "Integrations", "PostgreSQL / SQL", "SaaS", "Docker", "System Design"],
};
