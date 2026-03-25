# i-believe — Lucy Matchett

Design philosophy microsite. Built with React, TypeScript, and SCSS.

## Stack
- React 18
- TypeScript
- SCSS (global stylesheet)
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
    types.ts              — TypeScript interfaces
    clusters.ts           — All manifesto content, mapped by cluster
    examples/
      cluster-1.ts        — Example content per cluster (own work + outside examples)
      ...
  components/
    ClusterSection.tsx    — Reusable cluster component
    ExampleWindow.tsx     — Draggable retro window (desktop)
    MobileExampleModal.tsx — Full-screen stacked modal (mobile/tablet)
    BelieveSurprise.tsx   — Per-cluster hover/click surprise interactions
    GiveMeMore.tsx        — Expandable third paragraph
    FishDrawing.tsx       — Interactive canvas component (cluster 4)
    Nav.tsx               — Hamburger + sidebar
    Header.tsx
    Footer.tsx
  styles/
    main.scss             — All global styles
  App.tsx                 — Root component
  main.tsx                — Entry point
public/
  my-work/                — Local media assets (images, gifs, videos)
```

## Content

Manifesto copy lives in `src/data/clusters.ts`.
Example content (media, links, descriptions) lives in `src/data/examples/cluster-N.ts`.

To update content, edit the relevant cluster file directly.

## Media and repo size

Media assets (images, GIFs, MP4s) are committed directly to this repo under `public/my-work/`. This is intentional for now — it keeps the project self-contained and avoids the need for a CMS or external media host.

**Current repo size: ~138MB.** This is within GitHub's limits and fine for deployment on Vercel/Netlify.

### Future updates

If content needs updating down the line, the options are:

- **Small updates** (swap an image, add a link): edit the relevant `cluster-N.ts` file and commit. Note that git retains old files in history, so the repo will grow over time.
- **Larger media updates**: start a fresh repo, or move media to an external host (Vimeo for video, Cloudinary/imgix for images) and reference by URL. This would also be the right time to introduce a CMS if content changes become frequent.
- **CMS**: not needed right now. When/if that changes, Sanity or Contentful would integrate cleanly with this stack.

## Deployment
Deploy to Vercel. Add `i-believe.lucymatch.com` as custom domain.
Add CNAME record in DNS pointing to `cname.vercel-dns.com`.
