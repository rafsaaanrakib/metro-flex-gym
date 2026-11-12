# Metro Flex GYM — preview deploy handoff

## Status: BUILT & VERIFIED — NOT YET DEPLOYED TO ANY URL

## What was built
- Stack: Next.js 14.2.35 + Tailwind 3.4 + Framer Motion 11, static export (`output: "export"`).
- Source: `~/workspace/goals/metro-flex-gym-website/site/`
- Static export (ready to serve): `~/workspace/goals/metro-flex-gym-website/site/out/`
  - `index.html` (124 KB — under the 500 KB budget) and `membership.html` (60 KB).
- Build: `npm run build` passes clean (`tsc --noEmit` clean). Served locally and
  verified: `/` → 200, `/membership.html` → 200, images → 200.
- Design: Route A — Iron Editorial. Near-black #0A0A0B, bone #ECECE6, gold sampled
  from the client logo (gradient #F6C730 → #C98535). Black + white + gold only.

## Verified content in the build
- Client tagline verbatim; facilities list; full Male/Female schedule with the
  2:30–5:30 PM ladies-only slot highlighted; payment accounts copied exactly
  (BRAC 2025206206001, City 1503024300001, Eastern Bank 0131440134466,
  bKash/Nagad 01715-266172); WhatsApp wa.me/8801715266172; map coords
  22.3293846, 91.8012698; Facebook facebook.com/M.flexgym; JSON-LD ExerciseGym.
- 5 real gym photos (hero + gallery), optimized webp; logo with transparent background.
- No invented trainer names, member counts, testimonials or prices-as-real.

## DEMO vs real (must be replaced before launch)
- DEMO pricing (clearly captioned on-site "Demo pricing — actual rates coming soon"):
  Monthly ৳2,000 / 3 months ৳5,000 / 6 months ৳9,000 / Yearly ৳15,000 / Admission ৳500.
- DEMO trainers: 3 placeholder cards (Strength Coach / Fitness Coach / Female Trainer),
  "Details coming soon" — no real people named.
- Still needed from the gym: actual membership prices, trainer names, whether
  01819-630154 is also WhatsApp.

## Why no preview URL yet (blocker, verified)
The Vercel MCP connector is connected, but its `create_deployment`/`upload_file`
tools take file contents as a single `--arguments-json` shell argument, and this
machine caps a single argument at ~128 KB (tested: 100 KB arg works, 300 KB fails
with "Argument list too long"). The static export is 2.7 MB across 42 files and
even a single page (index.html, 124 KB) exceeds the cap as base64 — so the
file-upload deploy route cannot carry this site from this session.
Other routes checked and unavailable from this session:
- `gh` CLI: not logged in; GitHub MCP repo creation/push not available
  (no push auth for a new repo — deploy key is scoped to rakibwebstudio only).
- Wrangler/Cloudflare Pages: no token or config on this machine (`~/.wrangler`
  absent, no env token); would need new auth.
- `vercel` CLI: only the MCP wrapper binary exists here, no standalone CLI auth.

## Next step for the parent agent (pick one)
1. Deploy `site/out/` from a session with working Vercel CLI auth:
   `cd site && vercel deploy --prebuilt --prod=false` (creates a preview URL;
   do NOT attach metroflexgym.com.bd — domain not active yet).
2. Or publish the preview via the parent's artifact/remote-storage route.
3. Or wire the `site/` source into a git repo and deploy via Vercel git integration.

## Rebuild after content changes
`cd ~/workspace/goals/metro-flex-gym-website/site && npm run build`
(after editing, re-verify with the checks in hidden_files/BUILD_LOG.md).
