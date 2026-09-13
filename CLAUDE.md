# react-eriksturesson — operating manual for agents

Source for `eriksturesson.se`, Erik's personal portfolio/CV site.

## Source-of-truth rule

Application code and image publishing live in this repo. **Production runtime/release state lives in `eriksturesson/home-infra`.**

Do not infer production from old branches or restore the historical Docker Hub + host-Compose pull-cron model. Current primary production is M70Q K3s/Helm behind Cloudflare, with an immutable GHCR SHA+digest pinned in `home-infra`.

See:
- `README.md` — concise current overview
- `ARCHITECTURE.md` — repository-level runtime/release model
- `home-infra/docs/canonical-runtime-map.md` — cross-system canonical map

## What this app does

Single-page portfolio site with hero/About, portfolio/project cards, StudentNode material, CV download and footer. Most content is data-driven from `src/data/`.

## Architecture

- **Frontend:** Vite + React 18 + TypeScript.
- **Production server:** `server.ts`, compiled by `tsconfig.server.json` to `dist-server/server.js`. It serves `dist/`, exposes `/health`, applies Helmet CSP and navigation rate limiting. It is not SSR.
- **Container publishing:** `.github/workflows/docker-publish.yml` builds multi-arch images and publishes GHCR tags including `sha-<commit>`.
- **Production release:** `home-infra/k8s/environments/m70q/eriksturesson-se/values.yaml` pins the exact GHCR SHA tag + digest used by Helm on M70Q.
- **Firebase:** client configuration remains in the repo and a Firebase Hosting workflow/resource may remain as fallback/legacy. Firebase is not the primary M70Q runtime.

## Commands

```bash
npm install
npm run dev
npm run build
npm run build:server
npm run start:server
npx tsc --noEmit
```

`npm run dev` and `npm run preview` do **not** exercise the Express production server, CSP, rate limiting or `/health`. For server/runtime changes use:

```bash
npm run build
npm run build:server
node dist-server/server.js
```

Default server port is 3009 unless `PORT` is provided by the actual process environment.

## Layout

```text
src/
  components/     UI sections/components
  data/           typed content arrays
  types/          shared interfaces/types
  helpers/        feature-specific helpers
  utils/          generic helpers/theme utilities
  assets/         committed images/PDF/video
  config.ts       Firebase client config; not treated as a secret
public/           static passthrough files
server.ts         production Express server source
dist/             generated Vite output
dist-server/      generated server output
.github/workflows/ CI/image/fallback-hosting workflows
```

## Important implementation traps

### CSP hashes

`index.html` contains inline scripts whose exact contents are allowed by SHA-256 hashes in `server.ts`. If an inline script changes, regenerate/update the matching CSP hash or production can break while Vite dev still looks fine.

### Production server versus preview

`vite preview` bypasses `server.ts`; it cannot validate production headers, rate limits or `/health`.

### CommonJS server output

`package.json`'s `"type": "commonjs"` matters for the compiled Express server (`dist-server/server.js`). Do not casually change the module model without testing the real server path.

### Shared/generated state

`dist/` and `dist-server/` are generated and ignored. Edit sources, not generated output.

### Firebase config

The committed web client config is not a credential. Do not confuse it with service-account/private credentials. Current database/storage rules deny access; do not create or remove cloud resources based only on historical hosting docs.

## Code conventions

- Functional React components, usually default exports.
- UI copy is primarily Swedish; identifiers/comments are mainly English.
- Match the existing file's styling convention (MUI `sx` or existing inline style objects) rather than introducing a third pattern.
- Content changes usually belong in `src/data/*.ts` rather than component structure.
- Do not extend existing `any` usage without need.

## Verification

For ordinary app changes:

1. `npx tsc --noEmit`
2. `npm run build`
3. if `server.ts`, CSP, headers, rate limiting or health changed: `npm run build:server && node dist-server/server.js`, then verify `/` and `/health`

There is no canonical comprehensive test suite in this repo, so build/typecheck and targeted runtime checks matter.

## Production/release guardrails

- GHCR is the current publisher of record.
- A mutable `latest` tag is convenience only; production identity is the SHA+digest pinned in `home-infra`.
- Do not change M70Q/Pi runtime topology from this repo; change canonical infra state in `home-infra`.
- Do not revive Pi3/Docker Hub/host-Compose deployment because old Git history references it.
- HOME-203 owns the remaining explicit real A -> B -> Helm rollback proof between two distinct immutable production artifacts.
