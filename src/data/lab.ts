import type { LabExperiment } from "../types/content";

export const labExperiments: LabExperiment[] = [
  {
    title: "CloudCampus product foundation",
    description: "A continuing product build for tenant-aware school workflows, role boundaries, and modular SaaS delivery.",
    status: "Building",
    technology: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
    date: "2026",
    githubUrl: "https://github.com/uttamkumar37/CloudCampus",
    relatedProjectSlug: "cloudcampus",
  },
  {
    title: "UKG Lab static-first platform",
    description: "A public engineering home designed around typed content, readable routes, and low-maintenance deployment.",
    status: "Stable",
    technology: ["React", "TypeScript", "Vite", "GitHub Pages"],
    date: "2026",
    githubUrl: "https://github.com/uttamkumar37/ukglab",
    demoUrl: "https://ukglab.com",
    relatedProjectSlug: "ukg-lab",
  },
  {
    title: "Integration reliability patterns",
    description: "A focused study of authentication, retries, webhooks, validation, and operational boundaries around third-party APIs.",
    status: "Experiment",
    technology: ["REST APIs", "OAuth", "Webhooks", "Java"],
    date: "2026",
  },
  {
    title: "Realtime state playground",
    description: "A practical exploration of shared state, WebSocket updates, authorization, and cache-aware backend workflows.",
    status: "Stable",
    technology: ["Spring Boot", "WebSocket", "React", "Redis"],
    date: "2025",
    githubUrl: "https://github.com/uttamkumar37/tic-tac-toe",
    relatedProjectSlug: "realtime-tic-tac-toe",
  },
];
