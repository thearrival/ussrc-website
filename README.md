# USSRC — Union of Sudanese Students & Researchers in China

Official website of the Union of Sudanese Students and Researchers in China. Live at **https://ussrc.institute**.

## Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) + [Vite 7](https://vite.dev)
- [Tailwind CSS 4](https://tailwindcss.com) with custom design system
- [Wouter](https://github.com/molefrog/wouter) routing
- [Framer Motion](https://motion.dev) + [lucide-react](https://lucide.dev) icons
- Self-hosted fonts: [Manrope](https://fontsource.org/fonts/manrope) + [Space Grotesk](https://fontsource.org/fonts/space-grotesk) (no external font CDN — works in China)
- [pnpm](https://pnpm.io) package manager

## Development

```bash
pnpm install
pnpm run dev       # dev server on :3000
pnpm run check     # TypeScript check
pnpm run build     # production build → dist/public
pnpm run preview   # preview the production build
```

## Deployment

The site is deployed to **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`). Any push to `main` triggers a build and deployment automatically.

- Custom domain: `ussrc.institute` (A records → GitHub Pages IPs)
- HTTPS: automatic via GitHub Pages / Let's Encrypt
- SPA deep links are handled by `client/public/404.html` fallback

## Project structure

```
client/
  index.html          # entry HTML (SEO meta, manifest, JSON-LD)
  public/             # static assets (images, fonts, favicon, manifest, robots, sitemap)
  src/
    pages/Home.tsx    # single-page site
    index.css         # design system (fonts, tokens, layout)
server/               # static file server (used for Node hosting only)
```

## License

MIT