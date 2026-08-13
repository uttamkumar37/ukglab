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
      url: siteConfig.url,
      sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
      worksFor: { "@type": "Organization", name: siteConfig.name },
    },
  ];

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}
