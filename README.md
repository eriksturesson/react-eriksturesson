# eriksturesson.se

Source code for my personal website, [eriksturesson.se](https://eriksturesson.se). The site showcases my professional background, skills and projects.

The application is a React + TypeScript/Vite frontend served in production by a small Express wrapper (`server.ts`) that also exposes `/health`.

## Local development

```bash
npm install
npm run dev
```

To exercise the actual production server path locally:

```bash
npm run build
npm run build:server
npm run start:server
```

`src/config.ts` contains Firebase client configuration and is deliberately committed; it is not treated as a secret. The site does not use Firebase as its primary production runtime.

## Production

The canonical production runtime is declared in [`eriksturesson/home-infra`](https://github.com/eriksturesson/home-infra):

```text
eriksturesson.se
    -> Cloudflare routing
    -> M70Q Kubernetes-native tunnel
    -> K3s Service
    -> Helm-managed eriksturesson-se Pods
```

GitHub Actions in this repository publish multi-arch images to **GitHub Container Registry (GHCR)**. `home-infra` pins the production release by immutable `sha-<commit>` tag **and digest** in:

```text
k8s/environments/m70q/eriksturesson-se/values.yaml
```

`latest` can exist as a convenience publishing alias, but it is not canonical production state.

Older documentation and branches that describe M70Q/Pi nodes pulling mutable Docker Hub images with cron are historical. Do not restore that path because those files/branches still exist.

A Firebase Hosting workflow/resource may remain as a fallback path. It is not the primary M70Q runtime; cloud/fallback retirement decisions should be made from current dependency/runtime evidence rather than old docs.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the repository-level architecture and `home-infra/docs/canonical-runtime-map.md` for the cross-system source-of-truth map.
