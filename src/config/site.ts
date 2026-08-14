import { Github, Linkedin, Mail } from "lucide-react";
import type { NavItem, SocialLink } from "../types/content";

export const siteConfig = {
  name: "UKG Lab",
  owner: "Uttam Kumar",
  role: "Software Engineer",
  specialization: "Java Backend & Integrations",
  domain: "ukglab.com",
  url: "https://ukglab.com",
  tagline: "Engineering. Learning. Building.",
  description:
    "UKG Lab is a growing collection of learning platforms, software projects, and engineering experiments by Uttam Kumar.",
  email: "uttamkumar3797@gmail.com",
  resumePath: "/resume/Uttam-Kumar-Software-Engineer-Resume.pdf",
  githubUrl: "https://github.com/uttamkumar37",
  linkedinUrl: "https://www.linkedin.com/in/uttamkumar37",
  career: {
    targetRole: "Software Engineer / Backend Engineer",
    experience: "4.5+ years",
    location: "Bengaluru / Remote",
    noticePeriod: "30 days",
  },
  education: {
    institution: "Indian Institute of Technology, Guwahati",
    degree: "B.Tech, Electronics and Communication Engineering",
    year: "2020",
  },
  proof: {
    codechefSolved: "810+",
    codechefRating: "1569",
    codechefUrl: "https://www.codechef.com/users/uttam_iitg",
    scalerUrl: "https://www.scaler.com/academy/profile/8a2951f7f6c5/",
  },
};

export const navigation: NavItem[] = [
  { label: "Products", href: "/#products" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.githubUrl, icon: Github },
  { label: "LinkedIn", href: siteConfig.linkedinUrl, icon: Linkedin },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export const seoConfig = {
  defaultTitle: "Uttam Kumar | Software Engineer & Backend Developer | UKG Lab",
  titleTemplate: "%s | UKG Lab",
  defaultDescription: siteConfig.description,
  canonical: siteConfig.url,
  image: `${siteConfig.url}/og-image.svg`,
};
