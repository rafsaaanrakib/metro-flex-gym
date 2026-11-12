# Metro Flex Gym — Website

Website for Metro Flex Gym, a gents & ladies gym in Agrabad, Chattogram.
Built with Next.js 14 (static export), Tailwind CSS and Framer Motion.

## Deploy on Cloudflare (Git integration, Worker with static assets)

Cloudflare's "Create application" flow connects this repo as a Worker
project — that is the flow to use (the site needs no server code, so the
Worker just serves the built files). The repo's `wrangler.toml` tells it
to serve `./out`.

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Root directory:** `/` (repo root)
- **Node.js version:** 20

After the custom domain `metroflexgym.com.bd` is approved, add it as a custom
domain on the Worker project.

## Local development

```bash
npm install
npm run dev     # dev server
npm run build   # static export in out/
```

## Content

- 4 pages: Home, Membership & Payment, Ladies, FAQ
- Real membership prices from the gym's rate card (9 packages, with/without
  steam bath), no admission fee, 15% VAT applies.
- Payment details: BRAC Bank, City Bank, Eastern Bank, bKash / Nagad.
- Ladies-only hours 2:30–5:30 PM daily; open 8:30 AM–11:00 PM, 7 days.
