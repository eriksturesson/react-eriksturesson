import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import path from "path";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minuter
  max: 100, // Max 100 requests per IP per 15 min
  message: "För många requests – försök igen senare.",
});
const app = express();
const port = process.env.PORT || 3009;
const distPath = path.join(__dirname, "..", "dist");
app.use(helmet());
app.use(limiter);
app.use(express.json({ limit: "1mb" })); // Max 1MB JSON-payload

app.use(express.static(distPath));

app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
