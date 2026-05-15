# OneFrame — site-bright

Next.js 14 static site hosted on GitHub Pages.

Live: https://yydds6054-cyber.github.io/OneFrame_website/

## Local development

```bash
npm install
npm run dev    # http://localhost:3001
```

## Contact form

The form posts to [Formspree](https://formspree.io). Configure the endpoint via the `NEXT_PUBLIC_FORMSPREE_ENDPOINT` env var:

- **Local:** copy `.env.example` to `.env.local` and set the value.
- **Production:** in GitHub repo → Settings → Secrets and variables → Actions → Variables tab, add `FORMSPREE_ENDPOINT` with your form URL (e.g. `https://formspree.io/f/abc12345`).

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds a static export (`out/`) and publishes to GitHub Pages. Make sure Pages is enabled with source = "GitHub Actions" under repo Settings → Pages.

`next.config.mjs` sets `basePath` / `assetPrefix` to `/OneFrame_website` in production so URLs resolve correctly under the project-page path. If you switch to a custom domain or user-page repo, drop those.
