"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minuter
    max: 100, // Max 100 requests per IP per 15 min
    message: "För många requests – försök igen senare.",
});
const app = (0, express_1.default)();
const port = process.env.PORT || 3009; // fallback till 3009 om env variabel saknas
const distPath = path_1.default.join(__dirname, "..", "dist");
app.set("trust proxy", 1);
// Check x-forwarded-for
app.use((req, res, next) => {
    const xff = req.headers["x-forwarded-for"];
    if (typeof xff === "string") {
        if (xff.includes(",")) {
            console.log("X-Forwarded-For (multiple IPs):", xff);
        }
        else {
            console.log("X-Forwarded-For (single IP):", xff);
        }
    }
    else {
        console.log("X-Forwarded-For header missing or not a string");
    }
    console.log("Express req.ip:", req.ip); // Den IP Express använder
    next();
});
app.use(helmet_1.default.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
            "'self'",
            "https://static.cloudflareinsights.com", // Cloudflare Insights
            "https://img.shields.io", // Shields.io
            "https://shields.io", // ibland shields.io kan behövas
        ],
        // Lägg till andra directives som styleSrc, imgSrc, connectSrc, etc om du behöver
        styleSrc: ["'self'", "'unsafe-inline'", "https://img.shields.io"],
        imgSrc: ["'self'", "https://img.shields.io", "data:"],
    },
}));
app.use(limiter);
app.use(express_1.default.json({ limit: "1mb" }));
app.use(express_1.default.static(distPath));
app.get("*", (req, res) => {
    const requestedPath = path_1.default.join(distPath, req.path);
    // Kontrollera om filen existerar i distPath (t.ex. /main.js eller /styles.css)
    if (req.path.includes(".") && !fs_1.default.existsSync(requestedPath)) {
        // Om det är en fil men den finns inte -> skicka 404
        return res.status(404).send("Not found");
    }
    // Annars servera index.html (för SPA-routes)
    res.sendFile(path_1.default.join(distPath, "index.html"));
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
