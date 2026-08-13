import type { Note } from "../types/content";
import apiIntegrationChecklist from "../content/notes/system-design/api-integration-checklist.md?raw";
import springBootRestApi from "../content/notes/java/spring-boot-rest-api.md?raw";
import githubPagesStaticSite from "../content/notes/docker/static-site-github-pages.md?raw";

export const notes: Note[] = [
  {
    title: "Building a Clean Spring Boot REST API",
    description:
      "A practical checklist for designing Spring Boot REST APIs with clean layers, validation, and stable contracts.",
    category: "Java",
    tags: ["Spring Boot", "REST APIs", "Backend"],
    publishedDate: "2026-08-01",
    updatedDate: "2026-08-08",
    readingTime: "4 min read",
    slug: "java/spring-boot-rest-api",
    content: springBootRestApi,
  },
  {
    title: "Static Site Deployment Notes",
    description:
      "The core moving parts for deploying a Vite React app to GitHub Pages with a custom domain.",
    category: "Docker",
    tags: ["GitHub Pages", "Deployment", "DevOps"],
    publishedDate: "2026-08-03",
    updatedDate: "2026-08-09",
    readingTime: "3 min read",
    slug: "docker/static-site-github-pages",
    content: githubPagesStaticSite,
  },
  {
    title: "API Integration Checklist",
    description:
      "Questions to answer before connecting to external APIs, webhooks, OAuth providers, or vendor services.",
    category: "System Design",
    tags: ["API Integration", "Webhooks", "OAuth"],
    publishedDate: "2026-08-05",
    updatedDate: "2026-08-10",
    readingTime: "5 min read",
    slug: "system-design/api-integration-checklist",
    content: apiIntegrationChecklist,
  },
];
