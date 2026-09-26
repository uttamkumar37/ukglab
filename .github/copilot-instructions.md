# Repository Copilot Instructions

## Repository Overview

**ukglab** is the UKG Lab site: Uttam Kumar's recruiter-focused Software Engineer portfolio, developer lab, project showcase and technical-notes library, and a launchpad for learning platforms under `ukglab.com` (custom domain via `CNAME`). It is a static single-page app with no backend and no environment variables.

## Technology Stack

- React 19, TypeScript 5.8, Vite 7
- Tailwind CSS 3 (with PostCSS/Autoprefixer), React Router 7, lucide-react icons
- ESLint 9 with typescript-eslint, react-hooks and react-refresh plugins (`--max-warnings=0`)
- GitHub Actions + GitHub Pages (`.github/workflows/deploy.yml`, official Pages actions)
- No test framework is configured.

## Repository Structure

```
src/
  main.tsx, vite-env.d.ts
  config/site.ts         site-wide config, SEO, navigation
  data/                  profile, skills, experience, projects, lab, learningPlatforms, notes (typed, config-driven content)
  content/notes/         Markdown notes rendered by the notes pages
  pages/                 Home, About, Experience, Projects, ProjectDetail, Lab, Learn, Notes, Note, Resume, Contact, NotFound
  sections/  components/  layouts/AppLayout.tsx  hooks/useTheme.ts  utils/  types/  styles/
public/                  profile photo, projects/cloudcampus captures, resume PDF, og-image.svg, sitemap/robots
scripts/generate-pages-fallback.mjs   creates the SPA fallback for GitHub Pages
index.html, vite.config.ts, tailwind.config.js, eslint.config.js, tsconfig*.json, CNAME
```

## Architecture

Client-rendered SPA with React Router routes (`/projects`, `/projects/:slug`, `/experience`, `/stack`, `/lab`, `/writing`, `/about`, `/learn`, `/resume`, `/contact`). Content is configuration-driven: pages read typed data from `src/data/*` and `src/config/site.ts` rather than hard-coding text. Theme (light/dark/system) persists via `useTheme`. Route-aware SEO (canonical URLs, Open Graph, Twitter, JSON-LD for Person/Website/SoftwareApplication/Article) is generated in components such as `SeoJsonLd.tsx`.

## Development Commands

```bash
npm install            # or npm ci (CI uses npm ci)
npm run dev            # Vite dev server
npm run lint           # eslint . --max-warnings=0
npm run build          # tsc -b && vite build && node scripts/generate-pages-fallback.mjs  (output in dist/)
npm run preview
```

CI (`deploy.yml`) runs `npm ci`, `npm run lint`, `npm run build`, then deploys to GitHub Pages on push to `main`.

## Coding Guidelines

- TypeScript strict typing; avoid `any`; add types in `src/types` and reuse them.
- Change site content by editing `src/data/*`, `src/config/site.ts` or `src/content/notes/` rather than embedding text in components.
- Functional components and hooks; reuse `Button`, `SectionHeading`, `ProjectCard` and layout components before creating new ones.
- Style with Tailwind utilities and the existing design tokens; keep light and dark themes both working.
- Accessibility is a stated requirement: skip link, accessible mobile menu, keyboard focus, sufficient contrast, `prefers-reduced-motion`.
- New routes need a page under `src/pages`, a route entry, navigation/SEO config, and a sitemap entry; keep the GitHub Pages SPA fallback script working.

## Testing

No automated tests exist. Verification is `npm run lint` and `npm run build` (which type-checks). For UI changes, also run `npm run dev` and check the affected routes in light and dark themes and at mobile width. Do not claim visual checks that were not performed.

## Security

Static site with no secrets or environment variables. Do not add analytics keys, tokens or personal contact data beyond what is already published in `src/data/profile.ts`. Contact links are static-safe (mailto/copy-to-clipboard), with no form backend.

## Infrastructure / Deployment

GitHub Pages via `.github/workflows/deploy.yml`; custom domain `ukglab.com` through `CNAME`. Other sites use subdomains of `ukglab.com` (for example the SpeakBetter frontend deploys to `speakbetter.ukglab.com`); do not change `CNAME` casually.

## Change Guidelines

1. Understand the existing implementation first.
2. Make the smallest coherent change.
3. Preserve current architecture unless there is a strong reason to change it.
4. Do not introduce a new library when the existing stack already solves the requirement.
5. Update tests for behavior changes (none exist here, so validate with lint, build and manual route checks).
6. Run relevant tests/build before considering the change complete.
7. Do not leave commented-out code.
8. Do not leave TODO placeholders unless explicitly requested.
9. Do not fabricate implementation status.
10. Do not claim something was tested unless it was actually executed.

## Code Quality Rules

- Prefer readable code over clever code; avoid unnecessary duplication and abstraction.
- Follow existing naming conventions (PascalCase components, camelCase data files).
- Keep components focused; handle edge cases (unknown project slug or note -> the NotFound page, empty search results).
- Preserve URLs; published routes and canonical links should not break.
- Avoid unrelated refactoring during focused changes.

## Git Commit Rules

- Never add a `Co-Authored-By` trailer unless I explicitly request it.
- Never add Claude, Anthropic, GitHub Copilot, OpenAI, ChatGPT, Codex, Cursor, or any AI tool as an author or co-author.
- Use only the configured Git `user.name` and `user.email`.
- Do not mention AI assistance in commit messages.
- Keep commit messages concise and professional.
- Do not commit automatically unless I explicitly ask.
- Do not push automatically unless I explicitly ask.
- Never force-push unless I explicitly request it.
- Never rewrite Git history unless I explicitly request it.

## AI Assistant Working Rules

When working in this repository:

- Inspect existing code before proposing architecture changes.
- Do not assume a feature exists without verifying it.
- Do not create fake implementations to make UI or tests appear complete.
- Do not generate random metrics, scores, or placeholder business data unless explicitly requested as test/demo data.
- Clearly separate verified behavior from assumptions.
- Prefer completing working vertical slices over creating many unfinished placeholders.
- Preserve repository conventions.
- Avoid massive rewrites unless explicitly requested.
- When fixing a bug, identify the underlying cause where practical.
- When adding functionality, consider error handling and tests.
- Never expose secrets, API keys, tokens, or credentials.
- Never hardcode secrets.

## Repository-Specific Rules (portfolio accuracy)

- This site is read by recruiters. Every claim (employers, dates, years of experience, project outcomes, metrics, technologies) must come from the maintainer or from what is already in `src/data/*`. Never invent achievements, employers, numbers, testimonials or "live" projects; mark unfinished work as in progress.
- Project entries must describe verified work only, and stay consistent with the actual state of the linked repositories (for example CloudCampus is under active rebuild).
- Keep `src/data/*`, the resume PDF in `public/resume/`, and the sibling `uttam.dev` and `uttamkumar37` profile content consistent when updating career facts.
- Do not replace the professional profile photo or resume file without being asked.
