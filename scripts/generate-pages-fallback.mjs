import { cp, mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("dist");
const routes = [
  "about",
  "projects",
  "projects/cloudcampus",
  "projects/bloghub-rest-api",
  "projects/parksmart",
  "projects/realtime-tic-tac-toe",
  "projects/ukg-lab",
  "learn",
  "notes",
  "notes/java/spring-boot-rest-api",
  "notes/docker/static-site-github-pages",
  "notes/system-design/api-integration-checklist",
  "resume",
  "contact",
];

for (const route of routes) {
  const destination = path.join(root, route, "index.html");
  await mkdir(path.dirname(destination), { recursive: true });
  await cp(path.join(root, "index.html"), destination);
}
