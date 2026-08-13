# Static Site Deployment Notes

GitHub Pages works very well for static React applications when the build output is deterministic and the app avoids server-only assumptions.

## Key steps

- Build the app into `dist`.
- Keep secrets out of the frontend.
- Add a `CNAME` file for custom domains.
- Use the official Pages Actions workflow.
- Include a 404 fallback for client-side routes.

## DNS reminder

For an apex domain, configure GitHub Pages A records and a `www` CNAME alias.
