import { seoConfig, siteConfig } from "../config/site";

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
};

function setMeta(selector: string, value: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = value;
}

export function updateSeo({ title, description, path = "/", type = "website" }: SeoInput) {
  const resolvedTitle = title ? seoConfig.titleTemplate.replace("%s", title) : seoConfig.defaultTitle;
  const resolvedDescription = description ?? seoConfig.defaultDescription;
  const url = new URL(path, siteConfig.url).toString();
  document.title = resolvedTitle;

  setMeta('meta[name="description"]', resolvedDescription);
  setMeta('meta[property="og:title"]', resolvedTitle);
  setMeta('meta[property="og:description"]', resolvedDescription);
  setMeta('meta[property="og:url"]', url);
  setMeta('meta[property="og:type"]', type);
  setMeta('meta[name="twitter:title"]', resolvedTitle);
  setMeta('meta[name="twitter:description"]', resolvedDescription);

  const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (canonical) canonical.href = url;
}
