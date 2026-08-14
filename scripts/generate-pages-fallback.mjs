import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("dist");
const routeMetadata = {
  "/about": {
    title: "About Uttam | UKG Lab",
    description: "Meet Uttam Kumar, the software engineer behind UKG Lab and its backend, integration, product, and learning work.",
  },
  "/projects": {
    title: "Projects | UKG Lab",
    description: "Explore Uttam Kumar's verified software projects, APIs, SaaS products, backend systems, and deployment work.",
  },
  "/projects/cloudcampus": {
    title: "CloudCampus | UKG Lab",
    description: "A multi-tenant School ERP SaaS platform exploring tenant boundaries, role-aware workflows, and product delivery.",
    image: "/projects/cloudcampus/school-admin-dashboard.png",
  },
  "/projects/bloghub-rest-api": {
    title: "BlogHub REST API | UKG Lab",
    description: "A production-style Java REST API exploring secure access, content workflows, persistence, and operational visibility.",
  },
  "/projects/parksmart": {
    title: "ParkSmart | UKG Lab",
    description: "A parking management platform exploring availability, booking, billing, events, cache, and payment workflows.",
  },
  "/projects/realtime-tic-tac-toe": {
    title: "Realtime Tic-Tac-Toe | UKG Lab",
    description: "A full-stack realtime game project exploring shared state, WebSocket updates, protected APIs, and backend workflows.",
  },
  "/projects/ukg-lab": {
    title: "UKG Lab Platform | UKG Lab",
    description: "The static-first React platform bringing Uttam Kumar's engineering work, projects, writing, and learning into one domain.",
  },
  "/experience": {
    title: "Experience | UKG Lab",
    description: "Uttam Kumar's software engineering journey across Java backend development, API integrations, and product building.",
  },
  "/stack": {
    title: "Technology Stack | UKG Lab",
    description: "The backend, integration, data, architecture, and delivery technologies Uttam uses and explores through UKG Lab.",
  },
  "/lab": {
    title: "Lab | UKG Lab",
    description: "UKG Lab experiments, prototypes, backend concepts, product foundations, and practical software explorations.",
  },
  "/learn": {
    title: "Learn | UKG Lab",
    description: "Learning tracks for Java, backend engineering, DSA, AI, cloud, deployment, and practical software development.",
  },
  "/notes": {
    title: "Notes | UKG Lab",
    description: "Technical notes from UKG Lab on Java, APIs, Docker, integrations, and system design.",
  },
  "/writing": {
    title: "Writing | UKG Lab",
    description: "Technical writing from UKG Lab on Java, APIs, Docker, integrations, and system design.",
  },
  "/notes/java/spring-boot-rest-api": {
    title: "Building a Clean Spring Boot REST API | UKG Lab",
    description: "A practical checklist for designing Spring Boot REST APIs with clean layers, validation, and stable contracts.",
    type: "article",
  },
  "/writing/java/spring-boot-rest-api": {
    title: "Building a Clean Spring Boot REST API | UKG Lab",
    description: "A practical checklist for designing Spring Boot REST APIs with clean layers, validation, and stable contracts.",
    type: "article",
  },
  "/notes/docker/static-site-github-pages": {
    title: "Static Site Deployment Notes | UKG Lab",
    description: "The core moving parts for deploying a Vite React app to GitHub Pages with a custom domain.",
    type: "article",
  },
  "/writing/docker/static-site-github-pages": {
    title: "Static Site Deployment Notes | UKG Lab",
    description: "The core moving parts for deploying a Vite React app to GitHub Pages with a custom domain.",
    type: "article",
  },
  "/notes/system-design/api-integration-checklist": {
    title: "API Integration Checklist | UKG Lab",
    description: "Questions to answer before connecting to external APIs, webhooks, OAuth providers, or vendor services.",
    type: "article",
  },
  "/writing/system-design/api-integration-checklist": {
    title: "API Integration Checklist | UKG Lab",
    description: "Questions to answer before connecting to external APIs, webhooks, OAuth providers, or vendor services.",
    type: "article",
  },
  "/resume": {
    title: "Resume | Uttam Kumar | UKG Lab",
    description: "Download Uttam Kumar's Software Engineer resume covering Java backend engineering, APIs, integrations, and product work.",
  },
  "/contact": {
    title: "Contact | UKG Lab",
    description: "Contact Uttam Kumar about backend engineering, API integrations, product work, and practical software projects.",
  },
};

const routes = Object.keys(routeMetadata);

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function applyMetadata(html, route, metadata) {
  const origin = "https://ukglab.com";
  const url = `${origin}${route}`;
  const image = `${origin}${metadata.image ?? "/og-image.svg"}`;
  const title = escapeHtml(metadata.title);
  const description = escapeHtml(metadata.description);
  let result = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  result = result.replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`);
  result = result.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  result = result.replace(/(<meta property="og:type" content=")[^"]*(")/, `$1${metadata.type ?? "website"}$2`);
  result = result.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`);
  result = result.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`);
  result = result.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  result = result.replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${image}$2`);
  result = result.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`);
  result = result.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`);
  result = result.replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${image}$2`);
  return result;
}

for (const route of routes) {
  const destination = path.join(root, route, "index.html");
  await mkdir(path.dirname(destination), { recursive: true });
  const html = await readFile(path.join(root, "index.html"), "utf8");
  await cp(path.join(root, "index.html"), destination);
  await writeFile(destination, applyMetadata(html, route, routeMetadata[route]));
}
