# Arkitektur — eriksturesson.se

Senast reconcilerad mot production: 2026-09-13 (HOME-247).

## Canonical production

`eriksturesson.se` är self-hostad, men den primära production-originen är **inte längre en Docker Compose-container på M70Q/Pi med Docker Hub pull-cron**.

Dagens primära väg är:

```text
eriksturesson.se / www.eriksturesson.se
        |
Cloudflare routing
        |
M70Q Kubernetes-native tunnel
        |
K3s Service
        |
Helm-managed eriksturesson-se Pods
```

Applikationskoden finns i detta repo. Production desired state finns i `eriksturesson/home-infra`.

## Release identity

`.github/workflows/docker-publish.yml` bygger multi-arch container-images och publicerar dem till GitHub Container Registry:

```text
ghcr.io/eriksturesson/eriksturesson:sha-<commit>
```

`home-infra/k8s/environments/m70q/eriksturesson-se/values.yaml` är canonical production release state och pinnar både SHA-tag och immutable digest.

`latest` kan publiceras som convenience alias, men ska inte användas som enda production- eller rollback-identitet.

## Deploy-ägarskap

Detta repo äger:

- React/Vite-koden,
- Express production server + `/health`,
- containerbygget,
- GHCR-publiceringen.

`home-infra` äger:

- K3s/Helm desired state,
- production image-pin,
- Cloudflare/runtime-routing,
- recovery/reconcile.

En merge här betyder därför inte att någon host ska köra `docker compose pull` mot `latest`. En ny artifact blir production först när den avsedda release-identiteten är declarerad/applierad via den canonical infra-vägen.

## Health

Productionservern i `server.ts` exponerar `GET /health`. Den används för runtime-verifiering och ska fortsätta vara billig, deterministisk och utan externa beroenden.

## Firebase

Firebase Hosting-resurser/workflow kan fortfarande finnas som fallback/legacy-resurs. De är inte canonical primary hosting för M70Q.

Radera eller återaktivera inte fallback/cloud-resurser enbart för att äldre docs nämner dem. Reconciliation och eventuell retirement ska göras från aktuell dependency/runtime-evidence.

## Historisk topologi

Tidigare dokumenterade den här filen följande modell:

```text
M70Q host Docker -> Pi4 -> Pi3 -> Firebase
Docker Hub :latest + periodisk docker compose pull
```

Den modellen är **historisk**. Pi3 är inte en required production-node och M70Q:s canonical site-runtime är nu K3s/Helm med GHCR immutable identity.

Historiken finns kvar i Git om den behövs för incidentanalys; den ska inte användas som recovery-runbook.

## Källor till sanning

- app/CI: detta repo
- production runtime/release: `eriksturesson/home-infra`
- cross-system map: `home-infra/docs/canonical-runtime-map.md`
- återstående explicita Helm rollback-proof: Jira HOME-203
