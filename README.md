# i-believe — Lucy Matchett

Design philosophy microsite. Built with React, TypeScript, SASS, and Framer Motion.

## Stack
- React 18
- TypeScript (strict)
- SASS (CSS modules per component)
- Framer Motion (scroll-triggered animations)
- Vite

## Getting started

```bash
npm install
npm run dev
```

## Structure

```
src/
  data/
    types.ts        — TypeScript interfaces for cluster data
    clusters.ts     — All manifesto content, typed and organised by cluster
  components/
    Header.tsx / .module.scss
    ClusterSection.tsx / .module.scss   — Reusable cluster component
    Footer.tsx / .module.scss
  styles/
    _variables.scss  — All design tokens (colours, spacing, typography)
    _reset.scss      — CSS reset
    main.scss        — Global styles, imports variables and reset
  App.tsx            — Root — maps clusters data into ClusterSection components
  main.tsx           — Entry point
```

## Content

All manifesto content lives in `src/data/clusters.ts` as a typed array.
Each cluster has: id, slug, title, belief, handlebar, provocation, definition, practical, ownWork[], outsideExamples[], color.

To edit content — edit `clusters.ts`.
To change design tokens — edit `_variables.scss`.
To change component layout — edit the relevant `.module.scss` file.

## Deployment
Deploy to Vercel. Add `i-believe.lucymatch.com` as custom domain.
Add CNAME record in GoDaddy pointing to `cname.vercel-dns.com`.
