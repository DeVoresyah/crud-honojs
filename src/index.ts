import { Hono } from "hono";

// Routes
import { publicRoutesV1 } from "./routes/public";

import "dotenv/config";

const app = new Hono();

app.get("/", (ctx) => {
  return ctx.text(process.env.DB_HOST ?? "");
});

app.route("/public", publicRoutesV1);

export default app;
