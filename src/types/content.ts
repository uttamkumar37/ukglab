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
  description: string;
  stack: string[];
  categories: string[];
  githubUrl: string;
  liveUrl?: string;
  status: "Live" | "In progress" | "Concept" | "Maintained";
  featured: boolean;
  image: string;
  caseStudyUrl: string;
};

export type LearningPlatform = {
  name: string;
  domain: string;
  description: string;
  status: "Planned" | "Coming soon" | "Active";
  accent: string;
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
