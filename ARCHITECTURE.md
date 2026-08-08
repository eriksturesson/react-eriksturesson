# Arkitektur — hosting & failover

eriksturesson.se är inte hostat på en enda server. En Cloudflare
Worker (`eriksturesson-se`, se `workers/eriksturesson-se/` i
home-infra-repot) tar emot all trafik till `eriksturesson.se` och
`www.eriksturesson.se`, health-checkar alla noder på **varje request**,
och proxar till den första som svarar.

## Prioritetsordning (failover)

1. **M70Q** (primär nod)
2. **Pi4**
3. **Pi3**
4. **Firebase Hosting** (sista utväg, alltid uppe)

Health-check: `GET https://<host>/health`, 5 sekunders timeout, körs
parallellt mot alla noder. Kräver HTTP 200 för att räknas som frisk.

## URL:er per nod (interna — Cloudflare Tunnel, ej tänkta att besökas direkt)

| Nod  | Frontend                          |
|------|-------------------------------------|
| M70Q | `frontend-m70q.eriksturesson.se`    |
| Pi4  | `frontend-pi4.eriksturesson.se`     |
| Pi3  | `frontend-pi3.eriksturesson.se`     |
| Firebase | `firebase.eriksturesson.se`     |

Publik URL (det enda som faktiskt exponeras):
- `https://eriksturesson.se` / `https://www.eriksturesson.se`

Ingen separat backend/CORS-hantering behövs här — bara en
frontend-router, inga API-anrop att proxa (till skillnad från
sirtassalot.se, som har både frontend och backend bakom samma Worker).

## Deploy — DockerHub push/pull, frikopplat

- CI (i det här repot) bygger och pushar den senaste imagen till
  DockerHub vid varje merge.
- Varje nod (M70Q, Pi4) drar hem det oberoende — ett cron-jobb kör
  `docker compose pull && docker compose up -d` var 5:e minut
  (Ansible-hanterat, `auto_update_services` i home-infra-repot). Ingen
  push-baserad deploy — noderna hämtar bara vad som råkar vara
  `:latest` när de kollar nästa gång.
- Pi3 auto-uppdaterar inte just nu (avstängd/ombyggnad).
