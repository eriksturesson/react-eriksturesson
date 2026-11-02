import { Box, Button, Container, Link, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";

declare global {
  interface Window {
    Cookiebot?: { renew?: () => void };
  }
}

const COOKIEBOT_DOMAIN_GROUP_ID = "bced9173-73ea-4c1d-9669-1227618b8c21";

function openCookieSettings() {
  if (typeof window.Cookiebot?.renew === "function") {
    window.Cookiebot.renew();
    return;
  }
  // Banner may still be loading via GTM; retry briefly.
  window.setTimeout(() => {
    window.Cookiebot?.renew?.();
  }, 500);
}

/**
 * ES-3: cookie policy page. Cookie list comes from Cookiebot's Cookie
 * Declaration (same Domain Group ID as the GTM CMP). No local preference
 * store — renew() reopens Cookiebot's own UI.
 */
export default function CookiesPage() {
  useEffect(() => {
    const host = document.getElementById("cookie-declaration-host");
    if (!host) return;
    const existing = document.getElementById("CookieDeclaration");
    if (existing) return;
    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.src = `https://consent.cookiebot.com/${COOKIEBOT_DOMAIN_GROUP_ID}/cd.js`;
    script.type = "text/javascript";
    script.async = true;
    host.appendChild(script);
    return () => {
      script.remove();
      // Cookiebot injects a declaration table; clear host on leave so a
      // revisit reloads a fresh scan rather than a stale DOM fragment.
      host.replaceChildren();
    };
  }, []);

  return (
    <Box component="main" sx={{ py: 6, minHeight: "70vh" }}>
      <Helmet>
        <title>Kakor (cookies) | Erik Sturesson</title>
        <meta
          name="description"
          content="Information om kakor på eriksturesson.se och hur du ändrar eller återkallar ditt samtycke via Cookiebot."
        />
        <link rel="canonical" href="https://eriksturesson.se/cookies" />
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          Kakor (cookies)
        </Typography>
        <Typography paragraph>
          Den här webbplatsen använder kakor. Nödvändiga kakor krävs för att
          sajten ska fungera. Statistik- och marknadsföringskakor används bara
          om du ger samtycke. Standardläget är att analys och marknadsföring är
          avstängda tills du godkänner dem (Google Consent Mode v2).
        </Typography>
        <Typography paragraph>
          Du kan när som helst ändra eller återkalla ditt val. Samtycket
          hanteras av Cookiebot — vi lagrar inga egna cookiepreferenser i
          appen.
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
          <Button variant="contained" onClick={openCookieSettings}>
            Öppna cookieinställningar
          </Button>
          <Button component={RouterLink} to="/" variant="outlined">
            Till startsidan
          </Button>
        </Box>
        <Typography variant="h5" component="h2" gutterBottom>
          Cookie Declaration
        </Typography>
        <Typography paragraph color="text.secondary">
          Listan nedan kommer från Cookiebots scan av den här domänen (namn,
          leverantör, ändamål och varaktighet). Mer om kakor finns hos{" "}
          <Link
            href="https://pts.se/internet-och-telefoni/kakor-cookies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PTS
          </Link>
          .
        </Typography>
        <Box id="cookie-declaration-host" sx={{ mt: 2 }} />
      </Container>
    </Box>
  );
}
