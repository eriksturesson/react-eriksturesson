# TODO

## Länka till sirtassalot.se och northbeacon.se (synlig komponent) - beslut ej taget

Stripe (betalningar för båda sajterna) vill att organisationen har en huvudsida - eriksturesson.se är tänkt att fylla den rollen.

- Eventuellt: enkel komponent (topp eller botten av sidan, ej bestämt) som visar att Erik driver/äger **sirtassalot.se** (webshop) och **northbeacon.se** (AI news + subscription). Bara namn + direktlänk, ingen pitch.
- **Öppen fråga:** krävs den här synliga länken alls för Stripe, eller räcker det juridiska (se nedan)? Kolla exakt vad Stripes onboarding faktiskt kräver (ofta bara ett URL-fält för "business website") innan detta byggs.
- Väger mot att hålla låg profil kring sidoprojekt/holdingbolag (se minne: new job & holding positioning).
- **Inte klart för implementation än:** ingen av sajterna är live i produktion.

## Integritetspolicy för Sturesson Holding AB (gemensam, hostad på eriksturesson.se)

Sturesson Holding AB är juridisk part bakom både sirtassalot.se och northbeacon.se (olika varumärken, samma bolag) - och de äger inte sturesson.se att hosta den på istället.

- En **gemensam** policysida på eriksturesson.se (t.ex. `/integritetspolicy`) med tydligt avgränsade avsnitt per varumärke är GDPR-mässigt fullt okej - kräver inte separata dokument, bara att processandet per tjänst beskrivs transparent.
- Tänkt som en tyst, footer-länkad juridisk sida (länkas FRÅN kassaflödet på sirtassalot.se/northbeacon.se), inte en synlig sektion på startsidan - skiljer sig från den synliga länk-komponenten ovan och krockar troligen inte med "låg profil"-linjen.
- Kräver riktig routing (React Router är installerat men oanvänt - appen är just nu bara en scroll-sida utan `/sidor`), så det är ett större jobb än länk-komponenten.
- **Inte klart för implementation än:** samma skäl - sajterna är inte live, och innehållet (vilken data som faktiskt samlas in per varumärke) är inte definierat än.
