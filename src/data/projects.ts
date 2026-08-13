import type { Project } from "../types/content";

export const projectCategories = [
  "All",
  "Java",
  "Spring Boot",
  "Full Stack",
  "API Integration",
  "SaaS",
  "DevOps",
  "Experiments",
];

export const projects: Project[] = [
  {
    name: "UKG Lab Hub",
    slug: "ukg-lab-hub",
    description:
      "The main ukglab.com experience: portfolio, project showcase, notes library, and learning ecosystem gateway.",
    stack: ["React", "TypeScript", "Tailwind CSS", "GitHub Pages"],
    categories: ["Full Stack", "DevOps", "Experiments"],
    githubUrl: "https://github.com/uttamkumar/ukglab",
    liveUrl: "https://ukglab.com",
    status: "Live",
    featured: true,
    image: "hub",
    caseStudyUrl: "/projects#ukg-lab-hub",
  },
  {
    name: "Spring Boot API Starter",
    slug: "spring-boot-api-starter",
    description:
      "A clean starter pattern for Java REST APIs with layered architecture, validation, database access, and practical API documentation.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Maven"],
    categories: ["Java", "Spring Boot", "API Integration"],
    githubUrl: "https://github.com/uttamkumar/spring-boot-api-starter",
    status: "In progress",
    featured: true,
    image: "api",
    caseStudyUrl: "/projects#spring-boot-api-starter",
  },
  {
    name: "Developer Notes Engine",
    slug: "developer-notes-engine",
    description:
      "A local Markdown-driven notes system with readable URLs, category filters, tag filters, and fast static rendering.",
    stack: ["React", "Markdown", "TypeScript", "Vite"],
    categories: ["Full Stack", "Experiments"],
    githubUrl: "https://github.com/uttamkumar/developer-notes-engine",
    status: "Maintained",
    featured: true,
    image: "notes",
    caseStudyUrl: "/notes",
  },
  {
    name: "Deployment Workflow Lab",
    slug: "deployment-workflow-lab",
    description:
      "Reusable GitHub Actions and Docker workflow experiments for static apps and backend services.",
    stack: ["Docker", "GitHub Actions", "Vite", "Cloud"],
    categories: ["DevOps", "Experiments"],
    githubUrl: "https://github.com/uttamkumar/deployment-workflow-lab",
    status: "Concept",
    featured: false,
    image: "deploy",
    caseStudyUrl: "/projects#deployment-workflow-lab",
  },
];
