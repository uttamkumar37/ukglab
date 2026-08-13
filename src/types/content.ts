import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type SkillGroup = {
  category: string;
  description: string;
  skills: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  description: string;
  technologies: string[];
  achievements: string[];
};

export type Project = {
  name: string;
  slug: string;
  valueProposition: string;
  description: string;
  problem: string;
  stack: string[];
  categories: string[];
  githubUrl: string;
  liveUrl?: string;
  status: "Live" | "In progress" | "Concept" | "Maintained";
  featured: boolean;
  image: string;
  caseStudyUrl: string;
  details: {
    overview: string;
    architecture: string[];
    implementation: string[];
    lessons: string[];
  };
};

export type LearningPlatform = {
  name: string;
  domain: string;
  description: string;
  status: "Live" | "Building" | "Planned";
  accent: string;
  href?: string;
};

export type Note = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishedDate: string;
  updatedDate: string;
  readingTime: string;
  slug: string;
  content: string;
};
