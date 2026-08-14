import { siteConfig } from "../config/site";
import { notes } from "../data/notes";
import { projects } from "../data/projects";
import { useLocation } from "react-router-dom";

export function SeoJsonLd() {
  const { pathname } = useLocation();
  const project = pathname.startsWith("/projects/") ? projects.find((item) => pathname === item.caseStudyUrl) : undefined;
  const note = pathname.startsWith("/notes/") || pathname.startsWith("/writing/") ? notes.find((item) => pathname.endsWith(item.slug)) : undefined;
  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      publisher: { "@type": "Person", name: siteConfig.owner },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.owner,
      jobTitle: `${siteConfig.role} - ${siteConfig.specialization}`,
      url: siteConfig.url,
      email: `mailto:${siteConfig.email}`,
      sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
      knowsAbout: ["Java", "Spring Boot", "Backend Engineering", "REST APIs", "Enterprise Integrations", "Multi-Tenant SaaS", "PostgreSQL", "Docker", "System Design"],
      alumniOf: { "@type": "CollegeOrUniversity", name: siteConfig.education.institution },
      worksFor: { "@type": "Organization", name: siteConfig.name },
    },
  ];

  if (project) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.name,
      description: project.description,
      url: `${siteConfig.url}${project.caseStudyUrl}`,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      codeRepository: project.githubUrl,
    });
  }

  if (note) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: note.title,
      description: note.description,
      datePublished: note.publishedDate,
      dateModified: note.updatedDate,
      author: { "@type": "Person", name: siteConfig.owner, url: siteConfig.url },
      mainEntityOfPage: `${siteConfig.url}${pathname}`,
    });
  }

  return <script id="ukglab-jsonld" type="application/ld+json">{JSON.stringify(schema)}</script>;
}
