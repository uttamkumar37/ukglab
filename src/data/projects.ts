import type { Project } from "../types/content";

export const projectCategories = ["All", "Backend", "Full Stack", "SaaS", "APIs", "DevOps"];

export const projects: Project[] = [
  {
    name: "CloudCampus",
    slug: "cloudcampus",
    valueProposition: "A multi-tenant School ERP SaaS platform for schools, trusts, and multi-campus organizations.",
    description:
      "CloudCampus brings tenant onboarding, role-based access, school isolation, academic operations, attendance, homework, exams, fees, and audit-aware workflows into one product direction.",
    problem:
      "Schools and multi-campus organizations need shared digital workflows without losing boundaries between organizations, schools, roles, and data.",
    stack: ["Java", "Spring Boot", "React", "PostgreSQL", "Flyway", "Docker"],
    categories: ["Full Stack", "SaaS", "APIs", "DevOps"],
    githubUrl: "https://github.com/uttamkumar37/CloudCampus",
    status: "In progress",
    featured: true,
    image: "cloudcampus",
    imagePath: "/projects/cloudcampus/school-admin-dashboard.png",
    caseStudyUrl: "/projects/cloudcampus",
    gallery: [
      { src: "/projects/cloudcampus/tenant-onboarding.png", alt: "CloudCampus tenant onboarding screen", caption: "Tenant onboarding and school setup" },
      { src: "/projects/cloudcampus/school-admin-dashboard.png", alt: "CloudCampus school admin dashboard", caption: "School admin dashboard" },
      { src: "/projects/cloudcampus/teacher-workflow.png", alt: "CloudCampus teacher workflow", caption: "Teacher workflow" },
      { src: "/projects/cloudcampus/parent-student-portal.png", alt: "CloudCampus parent and student portal", caption: "Parent and student portal" },
    ],
    details: {
      overview:
        "CloudCampus is shaped around a simple architectural question: which tenant, school, role, and workflow is an authenticated user allowed to touch?",
      architecture: ["Java and Spring Boot modular backend", "Tenant and school hierarchy with server-owned access context", "React portal with PostgreSQL-oriented persistence and Flyway migrations"],
      implementation: ["JWT authentication and RBAC", "Tenant onboarding and school access guards", "Student, staff, academic, audit, and operational workflow foundations", "Docker, Nginx, and GitHub Actions delivery path"],
      lessons: ["Tenant context should be a backend-owned decision", "Role checks become safer when combined with tenant, school, and ownership checks", "Product scope and operational readiness need to be considered together"],
    },
  },
  {
    name: "BlogHub REST API",
    slug: "bloghub-rest-api",
    valueProposition: "A production-style blogging backend designed around secure access and operational visibility.",
    description:
      "A backend API for publishing content, managing comments, and exploring the security and operational concerns around a modern REST service.",
    problem:
      "Backend systems need clear authentication, content, persistence, and operational boundaries that remain easy to extend.",
    stack: ["Java 17", "Spring Boot", "Spring Security", "JWT", "MySQL", "Redis", "Docker"],
    categories: ["Backend", "APIs", "DevOps"],
    githubUrl: "https://github.com/uttamkumar37/bloghub-rest-api",
    status: "Maintained",
    featured: true,
    image: "bloghub",
    caseStudyUrl: "/projects/bloghub-rest-api",
    details: {
      overview: "BlogHub explores the security, content, persistence, and operational boundaries around a modern REST API.",
      architecture: ["Spring Security with JWT authentication and refresh-token lifecycle", "MySQL persistence with Flyway migrations", "Redis-backed token invalidation and cache-oriented workflows"],
      implementation: ["Role-based access and protected workflows", "Keyset pagination and nested comments", "OpenAPI documentation, Actuator, Docker Compose, and CI"],
      lessons: ["Stable contracts are as important as endpoint count", "Token lifecycle and invalidation deserve explicit design", "Operational visibility is part of backend quality"],
    },
  },
  {
    name: "ParkSmart",
    slug: "parksmart",
    valueProposition: "A parking management platform covering availability, booking, billing, and event-driven workflows.",
    description:
      "A full-stack application for slot selection, reservations, exit processing, billing, payment checkout, and administrator controls.",
    problem:
      "A simple booking surface touches state, concurrency, external payments, cache invalidation, events, and the frontend experience.",
    stack: ["Java 21", "Spring Boot", "React", "PostgreSQL", "Redis", "Kafka", "Stripe"],
    categories: ["Backend", "Full Stack", "APIs"],
    githubUrl: "https://github.com/uttamkumar37/parking-lot",
    status: "Maintained",
    featured: true,
    image: "parksmart",
    caseStudyUrl: "/projects/parksmart",
    details: {
      overview: "ParkSmart is a full-stack parking lot management application focused on availability, booking, exit, billing, and administration.",
      architecture: ["Spring Boot backend with React client", "PostgreSQL and Flyway persistence", "Redis cache and Kafka booking events"],
      implementation: ["JWT authentication and role-aware administrator APIs", "Slot availability and visual slot selection", "Stripe checkout session creation and Docker Compose infrastructure"],
      lessons: ["State transitions need to remain clear across UI and backend", "External payments and asynchronous events require explicit boundaries", "Cache consistency belongs in the workflow design"],
    },
  },
  {
    name: "Realtime Tic-Tac-Toe",
    slug: "realtime-tic-tac-toe",
    valueProposition: "A full-stack game platform exploring realtime state, protected APIs, and backend workflows.",
    description: "React and Spring Boot project with multiplayer rooms, WebSocket updates, bot mode, match history, and player stats.",
    problem: "Realtime products require the client, connection layer, cache, persistence, and authorization model to agree on state.",
    stack: ["Spring Boot", "WebSocket/STOMP", "React", "TypeScript", "Redis", "MySQL"],
    categories: ["Backend", "Full Stack", "APIs"],
    githubUrl: "https://github.com/uttamkumar37/tic-tac-toe",
    status: "Maintained",
    featured: false,
    image: "realtime",
    caseStudyUrl: "/projects/realtime-tic-tac-toe",
    details: {
      overview: "A realtime game project for exploring multiplayer state, protected APIs, and event-driven client updates.",
      architecture: ["React/TypeScript client with Spring Boot backend", "WebSocket/STOMP game updates", "Redis board cache and MySQL persistence"],
      implementation: ["JWT authentication", "Bot mode with minimax", "Match history and player statistics"],
      lessons: ["Realtime state needs a clear source of truth", "Connection lifecycle and authorization are linked", "Small products still benefit from explicit contracts"],
    },
  },
  {
    name: "UKG Lab",
    slug: "ukg-lab",
    valueProposition: "The unified portfolio, projects, notes, and learning platform behind ukglab.com.",
    description: "A configuration-driven React application that brings Uttam's professional identity and learning ecosystem into one domain.",
    problem: "A personal engineering ecosystem needs to explain the person, the work, and the learning path without scattering the story across disconnected sites.",
    stack: ["React", "TypeScript", "Tailwind CSS", "GitHub Pages"],
    categories: ["Full Stack", "DevOps"],
    githubUrl: "https://github.com/uttamkumar37/ukglab",
    liveUrl: "https://ukglab.com",
    status: "Live",
    featured: false,
    image: "ukglab",
    caseStudyUrl: "/projects/ukg-lab",
    details: {
      overview: "UKG Lab is a static-first React application for a unified professional portfolio, project showcase, notes library, and learning ecosystem.",
      architecture: ["Vite build deployed through GitHub Pages", "Typed, configuration-driven profile and content data", "Client-side routes with custom domain fallback support"],
      implementation: ["Reusable sections, cards, notes, and project detail pages", "SEO metadata, structured data, sitemap, robots.txt, and custom domain", "Light/dark theme with accessible responsive navigation"],
      lessons: ["A personal site can still be designed like a product surface", "A single domain can connect professional evidence with ongoing learning"],
    },
  },
];
