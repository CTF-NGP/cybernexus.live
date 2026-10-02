# cybernexus.live — Cybernexus Association

Vite + React + TypeScript + Tailwind CSS v4 multi-page site for the
**Cybernexus Association**, Department of CSE (Cyber Security),
Dr. N.G.P. Institute of Technology, Coimbatore – 641048.

Design language mirrors the V3CT0R arena (`vector.cybernexus.live`):
dark void `#0d0c10`, violet `#cb93ff` + cyan `#80e0df`, Space Grotesk
display + DM Mono labels, hairline grids, announce bar, info-band footer.

## Routes

| Route      | Page    | Content                                                        |
| ---------- | ------- | -------------------------------------------------------------- |
| `/`        | Home    | Hero, stats, featured V3CT0R + past CTFs, about teaser, join CTA |
| `/about`   | About   | Mission, at-a-glance, timeline July 2025 → V3CT0R              |
| `/events`  | Events  | Cyber Heist, Cyber Quest (CTFtime), V3CT0R (upcoming)          |
| `/team`    | Team    | Founding committee 2025–26 + handover placeholder              |
| `/contact` | Contact | Dept address, CTF links, mailto form                           |

## Develop

```bash
npm ci
npm run dev
npm run build
npm run preview
npm run lint
```

## Deploy on Render.com (Static Site)

1. Push to GitHub (`main` branch).
2. Render Dashboard → **New → Static Site** → select this repo.
3. Settings:
   - **Build Command:** `npm ci && npm run build`
   - **Publish Directory:** `dist`
   - Add rewrite rule `/* → /index.html (200)` for react-router SPA fallback
     (`render.yaml` in this repo already declares it).
4. Add custom domain `cybernexus.live` under **Settings → Custom Domains**
   and point DNS as Render instructs. Keep `vector.cybernexus.live`
   on its own service for the V3CT0R arena.

## Content sources

- Founding committee, event names/dates, and links come from the
  association brief (Cyber Heist Oct 13 2025, Cyber Quest @ Kanam 26 —
  https://ctftime.org/event/3080, V3CT0R — https://vector.cybernexus.live).
- New-committee names and contact email/socials are placeholders —
  update `src/data/team.ts` and `src/pages/Contact.tsx` when confirmed.
