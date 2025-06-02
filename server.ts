import express, { Request, Response } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import path from "path";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minuter
  max: 100, // Max 100 requests per IP per 15 min
  message: "För många requests – försök igen senare.",
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
app.use(helmet());
app.use(limiter);
app.use(express.json({ limit: "1mb" }));

app.use(express.static(distPath));

app.get("*", (_req: Request, res: Response) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
