import { siteConfig } from "../config/site";

export function SeoJsonLd() {
  const schema = [
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

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}
