# react-eriksturesson — operating manual for agents

Source for eriksturesson.se, Erik's personal site (portfolio, CV, professional
background/"Min Resa", StudentNode project). React + TypeScript SPA built
with Vite, served in production by a small Express wrapper. Deployed via the
self-hosted Cloudflare Worker failover pattern — see `ARCHITECTURE.md`
(Swedish, source of truth for hosting/failover) and `README.md` (shorter
English summary) in this repo for the full picture; both live here, not in
`home-infra`, even though the Worker itself (`eriksturesson-se`) does.

## What this app does

Single-page portfolio site: Header/hero, About, Portfolio (project cards +
modal with copy-link/share), Projects, StudentNode, CV download, Footer.
Content is data-driven — components map over typed arrays in `src/data/`
rather than hardcoding markup, so most content changes are data edits, not
component edits.

## Architecture

- **Frontend**: Vite + React 18 + TypeScript, client-side routed with
  `react-router-dom` (currently one effective route — no nested pages),
  built to static assets in `dist/`.
- **Production server** (`server.ts`, compiled via `tsconfig.server.json` to
  `dist-server/server.js`): a thin Express wrapper, **not** an SSR server —
  it only serves the pre-built `dist/` static files, adds a `/health`
  endpoint (polled by the Cloudflare Worker failover check and Uptime Kuma),
  rate-limits document/navigation requests (300/15min per IP; static assets
  and `/health` are exempt), and sets a Helmet CSP. This is what
  `Dockerfile`'s `CMD` runs in production — running
  `node dist-server/server.js` locally (after `npm run build` +
  `npm run build:server`) is how you test that real path, since
  `npm run dev`/`npm run preview` never touch this code.
- **Deploy**: GitHub Actions builds and pushes a multi-arch Docker image to
  Docker Hub on every push to `master`
  (`.github/workflows/docker-publish.yml`). M70Q and Pi4 each independently
  `docker compose pull && up -d` on a cron (Ansible-managed in `home-infra`)
  — no push-deploy from this repo. A second workflow
  (`firebase-deploy.yml`) deploys the same build to Firebase Hosting, which
  is only the last-resort tier in the Worker's failover chain (M70Q → Pi4 →
  Pi3 → Firebase), not primary hosting.
- **Firebase usage is effectively hosting-only**: `src/config.ts` (client
  config, deliberately committed — not a secret, access is controlled by the
  rules files below, not by hiding this file) initializes the SDK, and
  `src/helpers/firebaseFunctions.ts` wraps the Realtime Database API, but no
  component imports it, and both `database.rules.json` and `storage.rules`
  deny all read/write unconditionally.

## Tech stack

React 18, TypeScript 5 (`strict: true`), Vite 7, MUI 5 (`@mui/material`,
`@mui/icons-material`, `@mui/lab`), `motion` (Framer Motion's successor
package) for animation, `react-router-dom` v7, `react-helmet-async` for
per-section `<head>` tags, Express 4 + Helmet + `express-rate-limit` for the
production server, Firebase JS SDK v12 (hosting only). `styled-components`
and `@emotion/*` are installed but not actually used in current components —
MUI's `sx` prop and inline `React.CSSProperties` objects are the real
styling patterns. Reference Node version is 20 (`Dockerfile`'s
`node:20`, CI's `actions/setup-node@v3`).

Note: `vite` itself isn't a direct `package.json` dependency (only
`@vitejs/plugin-react` is) — it's pulled in as a peer dependency, and
`package-lock.json` exists locally but is `.gitignore`d and not tracked by
git. A fresh `npm install` isn't fully pinned; if a build ever behaves
differently than expected, check the installed `vite` version first.

## Layout

```
src/
  components/     one file per section/UI piece, PascalCase, default export
  data/           typed content arrays (portfolioItems.ts, projectItems.ts, aboutItems.ts, companiesInStudentNode.ts) — edit these for content changes
  types/          shared interfaces (portfolio.d.ts, projects.d.ts, pdf.d.ts) — despite the .d.ts extension these export real types, not just ambient declarations
  helpers/        feature-specific helpers (Firebase RTDB wrapper, share/copy-link, tag-to-category mapping)
  utils/          generic helpers (slugify, MUI theme overrides)
  assets/         img/pdf/video, committed to git (large — see git log for past compression passes on this folder)
  config.ts       Firebase client config (committed, not secret)
public/           static passthrough: favicons, CVs, robots.txt, sitemap.xml, manifest.json
server.ts         production Express server (source of truth; dist-server/ is generated)
dist/             vite build output (gitignored)
dist-server/      compiled server.ts output (gitignored)
reports/          security-reporter scan output, gitignored, not wired into any npm script
.github/workflows/  docker-publish.yml (Docker Hub), firebase-deploy.yml (Firebase Hosting fallback)
```

## Commands

- `npm run dev` — Vite dev server, port 5173 (see `.claude/launch.json`)
- `npm run build` — `vite build` → `dist/`
- `npm run build:server` — `tsc -p tsconfig.server.json` → `dist-server/`
- `npm run start` / `npm run start:server` — identical scripts, both
  `node dist-server/server.js`; run after the two build steps above to test
  the real production server (default port 3009)
- `npm run preview` — `vite preview`, serves `dist/` directly — **not** the
  Express server, so no CSP/rate-limit/`/health`; use `start:server` instead
  when testing anything server.ts touches
- `npx tsc --noEmit` — frontend type-check; there is no dedicated `lint` or
  `typecheck` script, this is what stands in for one

There is no test script, no test runner dependency wired up, and no test
files — a leftover CRA test stub (`src/App.test.tsx`, `src/setupTests.ts`)
was deliberately removed (see git log: "Remove dead CRA test stub"). The
`eslintConfig` block in `package.json` (`react-app`, `react-app/jest`) is an
inherited CRA default, not something actually run by a script or CI step.
Don't invent `npm test`/`npm run lint` expectations that don't exist.

## Code conventions actually observed

- Functional components, default-exported, PascalCase filename matching the
  component name (`Header.tsx` → `function Header()`).
- Content lives in `src/data/*.ts` as typed arrays; components map over
  these instead of hardcoding cards/sections inline.
- Styling is a mix: MUI `sx` prop in newer/more complex components
  (`PortfolioCard.tsx`), plain `React.CSSProperties` const objects in older
  ones (`Header.tsx`). Match whichever pattern the file you're editing
  already uses rather than introducing a third approach.
- Top-level sections in `App.tsx` are `React.lazy`-loaded behind one shared
  `<Suspense>`, not eagerly imported.
- UI copy is Swedish; identifiers and most comments are English, with some
  Swedish comments in `server.ts`. Match the surrounding file.
- `any` shows up in a few places (`firebaseFunctions.ts`, `Window.gtag` in
  `index.d.ts`) despite `strict: true` in `tsconfig.json` — pre-existing,
  not a pattern to extend deliberately.
- `index.html` has two inline `<script>` blocks in `<head>` (Consent Mode
  default state, GTM bootstrap). Their CSP allowance in `server.ts` is a
  `sha256-...` hash of the exact script contents, not `'unsafe-inline'` — if
  you edit either script, you must regenerate and update the matching hash
  in `server.ts`'s `scriptSrc`, or it silently gets blocked by CSP in
  production only (Vite dev server doesn't apply this CSP, so the breakage
  won't show up in `npm run dev`).
- The root `.env` (`PORT=3009`) isn't actually loaded by anything — there's
  no `dotenv` dependency and no `--env-file` flag in any script/Dockerfile
  CMD. `server.ts`'s `process.env.PORT || 3009` fallback just happens to
  match it, which is why this has gone unnoticed. Don't assume editing
  `.env` changes runtime behavior.
- `package.json`'s `"type": "commonjs"` matters for `dist-server/server.js`
  specifically (compiled with `module: "CommonJS"`, so it needs Node to
  treat it as CommonJS) — it's not related to how the Vite-built frontend is
  bundled.

## Verifying a change works

1. `npx tsc --noEmit` — must be clean (`strict: true`).
2. `npm run build` — must succeed; skim the tail of the output for new
   chunk-size warnings if you added a heavy import.
3. For anything touching `server.ts`, the CSP, rate limiting, or `/health`:
   `npm run build:server && node dist-server/server.js`, then hit
   `http://localhost:3009/` directly. `npm run dev`/`npm run preview` do not
   exercise this code path.
4. There's no automated test suite — verification is manual: clean build +
   spot-check in a browser (or `curl` against the running server for
   header/status changes).
5. CI (`docker-publish.yml`, `firebase-deploy.yml`) only runs `npm install`
   and the build scripts — it does not typecheck. Run `tsc --noEmit`
   yourself before pushing; CI won't catch a type error for you.
