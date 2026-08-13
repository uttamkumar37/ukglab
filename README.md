# UKG Lab

UKG Lab is Uttam's central identity on the internet: a personal portfolio, developer lab, project showcase, technical notes library, and launchpad for future learning platforms under `ukglab.com`.

![UKG Lab screenshot placeholder](public/og-image.svg)

## Features

- Premium responsive React + TypeScript interface
- Light, dark, and system theme modes with persistent preference
- Sticky desktop and mobile navigation
- Configuration-driven profile, skills, experience, projects, learning platforms, SEO, and navigation
- Featured and filtered project showcase
- Local Markdown-powered notes with search, category filtering, tag filtering, and readable URLs
- Static-safe contact links with copy-to-clipboard email
- SEO metadata, canonical URL, Open Graph, Twitter metadata, sitemap, robots.txt, Person schema, and Website schema
- GitHub Pages workflow using official Pages Actions
- Custom domain support for `ukglab.com`

## Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide icons
- GitHub Actions
- GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Quality Checks

```bash
npm run lint
npm run build
```

The build command runs TypeScript checks and creates the production site in `dist/`.

## Project Structure

```text
src/
  assets/
  components/
  config/
  content/
  data/
  hooks/
  layouts/
  pages/
  sections/
  styles/
  types/
  utils/
```

Key editable files:

- `src/config/site.ts`
- `src/data/profile.ts`
- `src/data/skills.ts`
- `src/data/experience.ts`
- `src/data/projects.ts`
- `src/data/learningPlatforms.ts`
- `src/data/notes.ts`
- `src/content/notes/`

## GitHub Pages Deployment

The workflow at `.github/workflows/deploy.yml` deploys automatically when code is pushed to `main`.

Repository settings:

1. Go to GitHub repository `ukglab`.
2. Open Settings -> Pages.
3. Under Build and deployment, set Source to GitHub Actions.
4. Push to `main`.
5. Wait for the Deploy to GitHub Pages workflow to complete.

## Custom Domain

This repository includes both root `CNAME` and `public/CNAME` containing:

```text
ukglab.com
```

In GitHub:

1. Go to Settings -> Pages.
2. Add `ukglab.com` as the custom domain.
3. Save.
4. After DNS verifies, enable Enforce HTTPS.

## GoDaddy DNS for GitHub Pages

At GoDaddy, configure the apex domain `ukglab.com` with GitHub Pages A records:

```text
Type  Name  Value
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

For `www.ukglab.com`, add:

```text
Type   Name  Value
CNAME  www   uttamkumar.github.io
```

Replace `uttamkumar` if your GitHub username is different.

## Push to GitHub

```bash
git init
git branch -M main
git add -A
git commit -m "Build UKG Lab portfolio hub"
git remote add origin https://github.com/uttamkumar/ukglab.git
git push -u origin main
```

## Values to Replace

- `src/config/site.ts`: GitHub, LinkedIn, email, owner details if needed
- `public/resume/`: add `uttam-resume.pdf`
- `src/data/experience.ts`: real company history and achievements
- `src/data/projects.ts`: real project links, live demos, screenshots, and case studies
- `src/content/notes/`: expand with real articles
- `public/sitemap.xml`: add new note/project URLs as content grows

## Contribution

This is a personal website, but issues and improvements can be tracked through GitHub once the repository is published.
