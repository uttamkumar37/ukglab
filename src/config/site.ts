import { Github, Linkedin, Mail } from "lucide-react";
import type { NavItem, SocialLink } from "../types/content";

export const siteConfig = {
  name: "UKG Lab",
  owner: "Uttam",
  domain: "ukglab.com",
  url: "https://ukglab.com",
  tagline: "Learn. Build. Share.",
  description:
    "UKG Lab is Uttam's central hub for software projects, technical notes, experiments, and future learning platforms.",
  email: "hello@ukglab.com",
  resumePath: "/resume/uttam-resume.pdf",
  githubUrl: "https://github.com/uttamkumar",
  linkedinUrl: "https://www.linkedin.com/in/uttamkumar",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Learn", href: "/learn" },
  { label: "Notes", href: "/notes" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.githubUrl, icon: Github },
  { label: "LinkedIn", href: siteConfig.linkedinUrl, icon: Linkedin },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export const seoConfig = {
  defaultTitle: "UKG Lab | Uttam's Developer Lab",
  titleTemplate: "%s | UKG Lab",
  defaultDescription: siteConfig.description,
  canonical: siteConfig.url,
  image: `${siteConfig.url}/og-image.svg`,
};
