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
    valueProposition: "A brand-grade home for projects, notes, experiments, and future learning platforms.",
    description:
      "The main ukglab.com experience: portfolio, project showcase, notes library, and learning ecosystem gateway.",
    problem:
      "Personal portfolio sites often flatten work into a resume page. UKG Lab needed to explain Uttam, the engineering focus, and the future learning ecosystem quickly.",
    stack: ["React", "TypeScript", "Tailwind CSS", "GitHub Pages"],
    categories: ["Full Stack", "DevOps", "Experiments"],
    githubUrl: "https://github.com/uttamkumar37/ukglab",
    liveUrl: "https://ukglab.com",
    status: "Live",
    featured: true,
    image: "hub",
    caseStudyUrl: "/projects/ukg-lab-hub",
    details: {
      overview:
        "UKG Lab is a static, production-ready React application that presents Uttam's engineering work, technical notes, and planned learning platforms from one central domain.",
      architecture: ["Static Vite build deployed through GitHub Pages", "Configuration-driven profile, projects, skills, platforms, and notes", "Client-side routes with GitHub Pages fallback support"],
      implementation: ["Built reusable sections and cards around typed data", "Centralized SEO configuration and structured data", "Added sitemap, robots.txt, custom domain CNAME, and official Pages workflow"],
      lessons: ["A personal site can still behave like a product surface", "Static hosting works well when routing, SEO, and deployment constraints are designed upfront"],
    },
  },
  {
    name: "Spring Boot API Starter",
    slug: "spring-boot-api-starter",
    valueProposition: "A reference backend structure for clean Java REST API work.",
    description:
      "A clean starter pattern for Java REST APIs with layered architecture, validation, database access, and practical API documentation.",
    problem:
      "Backend projects need a repeatable structure for controllers, services, validation, persistence, and API contracts without becoming over-engineered.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Maven"],
    categories: ["Java", "Spring Boot", "API Integration"],
    githubUrl: "https://github.com/uttamkumar/spring-boot-api-starter",
    status: "In progress",
    featured: true,
    image: "api",
    caseStudyUrl: "/projects/spring-boot-api-starter",
    details: {
      overview:
        "A backend starter concept for building maintainable Spring Boot APIs with clear layers and production-minded conventions.",
      architecture: ["Controller, service, repository layering", "Relational persistence with PostgreSQL", "Maven-based build and dependency management"],
      implementation: ["Request validation near the API boundary", "Stable response shapes for client integrations", "Environment-safe configuration approach"],
      lessons: ["The best starter projects document choices as much as code", "Clean API contracts make integration work easier to maintain"],
    },
  },
  {
    name: "Developer Notes Engine",
    slug: "developer-notes-engine",
    valueProposition: "A Markdown-first knowledge system with readable technical URLs.",
    description:
      "A local Markdown-driven notes system with readable URLs, category filters, tag filters, and fast static rendering.",
    problem:
      "Technical notes should be easy to publish and easy to browse without introducing a backend or database too early.",
    stack: ["React", "Markdown", "TypeScript", "Vite"],
    categories: ["Full Stack", "Experiments"],
    githubUrl: "https://github.com/uttamkumar/developer-notes-engine",
    status: "Maintained",
    featured: true,
    image: "notes",
    caseStudyUrl: "/projects/developer-notes-engine",
    details: {
      overview:
        "A lightweight notes architecture that imports local Markdown and exposes searchable, categorized article previews with stable URLs.",
      architecture: ["Local Markdown under src/content/notes", "Typed note metadata in src/data/notes.ts", "Readable routes such as /notes/java/spring-boot-rest-api"],
      implementation: ["Raw Markdown imports through Vite", "Small renderer for common note formatting", "Search, category filtering, and tag filtering on the listing page"],
      lessons: ["A content workflow can start simple and still be structured", "Readable URLs are part of the learning experience"],
    },
  },
  {
    name: "Deployment Workflow Lab",
    slug: "deployment-workflow-lab",
    valueProposition: "Reusable deployment patterns for static apps and backend services.",
    description:
      "Reusable GitHub Actions and Docker workflow experiments for static apps and backend services.",
    problem:
      "Deployment workflows become easier to reuse when linting, type checks, builds, artifacts, and hosting targets are documented together.",
    stack: ["Docker", "GitHub Actions", "Vite", "Cloud"],
    categories: ["DevOps", "Experiments"],
    githubUrl: "https://github.com/uttamkumar/deployment-workflow-lab",
    status: "Concept",
    featured: false,
    image: "deploy",
    caseStudyUrl: "/projects/deployment-workflow-lab",
    details: {
      overview:
        "An evolving collection of workflow experiments around GitHub Actions, Docker, and deployment fundamentals.",
      architecture: ["GitHub Actions for repeatable automation", "Docker patterns for service packaging", "Static hosting paths for frontend delivery"],
      implementation: ["Lint and build gates before deployment", "Pages artifact upload flow", "Custom domain and HTTPS considerations"],
      lessons: ["Deployment is part of the product experience", "Simple automation removes avoidable release friction"],
    },
  },
];
