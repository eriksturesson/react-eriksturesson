import express, { Request, Response } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import path from "path";
import fs from "fs";

// Statiska filer (JS-chunks, bilder, PDF:er, fonter m.m.) ska inte räknas mot
// limiten - en enda sidladdning kan göra 20-40 sådana requests, vilket annars
// gjorde att man fick 429 efter bara ett par sidbesök. /health undantas också
// eftersom övervakningstjänster (t.ex. Uptime Kuma) pollar den regelbundet.
const STATIC_FILE_PATTERN = /\.(js|css|map|png|jpe?g|gif|svg|ico|webp|avif|pdf|woff2?|ttf|eot|json|xml|txt)$/i;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minuter
  max: 300, // Max 300 dokument-/navigeringsrequests per IP per 15 min
  message: "För många requests – försök igen senare.",
  skip: (req) => req.path === "/health" || STATIC_FILE_PATTERN.test(req.path),
});

const app = express();
const port = process.env.PORT || 3009; // fallback till 3009 om env variabel saknas
const distPath = path.join(__dirname, "..", "dist");
app.set("trust proxy", 1);
// Check x-forwarded-for
app.use((req: Request, res: Response, next) => {
  const xff = req.headers["x-forwarded-for"];

  if (typeof xff === "string") {
    if (xff.includes(",")) {
      console.log("X-Forwarded-For (multiple IPs):", xff);
    } else {
      console.log("X-Forwarded-For (single IP):", xff);
    }
  } else {
    console.log("X-Forwarded-For header missing or not a string");
  }
  console.log("Express req.ip:", req.ip); // Den IP Express använder
  next();
});
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        "https://static.cloudflareinsights.com", // Cloudflare Insights
        "https://img.shields.io", // Shields.io
        "https://shields.io", // ibland shields.io kan behövas
        "https://www.googletagmanager.com", // GTM laddar in ytterligare scripts (GA4 m.m.)
        // Cookiebot (CMP, taggad via GTM) - officiell CSP-rekommendation från Cookiebot.
        // BÅDA domänerna behövs. consent.cookiebot.com levererar scripten, men
        // consentcdn.cookiebot.eu levererar bannerns konfiguration och styling för
        // EU-kunder, och *.cookiebot.com matchar inte .eu. Utan .eu laddar Cookiebot,
        // dialogen byggs i DOM:en - och kollapsar till height:0 utan sin CSS, alltså
        // osynlig för besökaren fast allt "ser rätt ut" i koden (ES-6).
        "https://*.cookiebot.com",
        "https://*.cookiebot.eu",
        // De två inline-scripten i index.html (Consent Mode default + GTM-bootstrap).
        // Hash istället för 'unsafe-inline' - måste uppdateras om scriptens
        // innehåll ändras (se index.html:s <head>).
        "'sha256-dSnkGkMGlYXxDN8GEc0fSJVZzgkTLU91LHpMw3z4w+M='",
        "'sha256-gnVyfFP8juV6nBVgFjcPSSIdKjCg+hJZzFFyf/YqHyU='",
      ],
      // Lägg till andra directives som styleSrc, imgSrc, connectSrc, etc om du behöver
      styleSrc: [
        "'self'",
        "'unsafe-inline'",
        "https://img.shields.io",
        "https://*.cookiebot.com",
        "https://*.cookiebot.eu",
      ],
      imgSrc: [
        "'self'",
        "https://img.shields.io",
        "data:",
        "https://*.cookiebot.com",
        "https://*.cookiebot.eu",
        // GTM skickar sin telemetri som en bild mot /td?id=... - utan den här
        // raden blockeras varje sidvisning med ett CSP-fel i konsolen.
        "https://www.googletagmanager.com",
      ],
      connectSrc: [
        "'self'",
        "https://www.googletagmanager.com",
        "https://static.cloudflareinsights.com",
        "https://*.cookiebot.com",
        "https://*.cookiebot.eu",
        "https://*.google-analytics.com", // GA4 mätpunkter (skickas även med nekat samtycke - modelling, inte cookies, det är hela poängen med Consent Mode v2)
        "https://*.analytics.google.com",
      ],
      // Cookiebots banner renderas i en iframe från consentcdn.cookiebot.com/.eu
      frameSrc: ["'self'", "https://*.cookiebot.com", "https://*.cookiebot.eu"],
    },
  }),
);
app.use(limiter);
app.use(express.json({ limit: "1mb" }));

app.use(express.static(distPath));

app.get("/health", (req: any, res: any) => {
  res.status(200).json({ ok: true });
});

app.get("*", (req: any, res: any) => {
  const requestedPath = path.join(distPath, req.path);

  // Kontrollera om filen existerar i distPath (t.ex. /main.js eller /styles.css)
  if (req.path.includes(".") && !fs.existsSync(requestedPath)) {
    // Om det är en fil men den finns inte -> skicka 404
    return res.status(404).send("Not found");
  }

  // Annars servera index.html (för SPA-routes)
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
