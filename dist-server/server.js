"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minuter
    max: 100, // Max 100 requests per IP per 15 min
    message: "För många requests – försök igen senare.",
});
const app = (0, express_1.default)();
const port = process.env.PORT || 3009;
const distPath = path_1.default.join(__dirname, "..", "dist");
app.use((0, helmet_1.default)());
app.use(limiter);
app.use(express_1.default.json({ limit: "1mb" })); // Max 1MB JSON-payload
app.use(express_1.default.static(distPath));
app.get("*", (_req, res) => {
    res.sendFile(path_1.default.join(distPath, "index.html"));
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
