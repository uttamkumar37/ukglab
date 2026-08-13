import { Github, Linkedin, Mail } from "lucide-react";
import type { NavItem, SocialLink } from "../types/content";

export const siteConfig = {
  name: "UKG Lab",
  owner: "Uttam",
  role: "Software Engineer",
  domain: "ukglab.com",
  url: "https://ukglab.com",
  tagline: "Learn. Build. Share.",
  description:
    "UKG Lab is Uttam's home for Java, backend engineering, APIs, integrations, software projects, and technical learning.",
  email: "hello@ukglab.com",
  resumePath: "/resume/uttam-resume.pdf",
  githubUrl: "https://github.com/uttamkumar37",
  linkedinUrl: "https://www.linkedin.com/in/uttamkumar",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Learn", href: "/learn" },
  { label: "Notes", href: "/notes" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.githubUrl, icon: Github },
  { label: "LinkedIn", href: siteConfig.linkedinUrl, icon: Linkedin },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export const seoConfig = {
  defaultTitle: "UKG Lab - Uttam | Software Engineer",
  titleTemplate: "%s | UKG Lab",
  defaultDescription: siteConfig.description,
  canonical: siteConfig.url,
  image: `${siteConfig.url}/og-image.svg`,
};
