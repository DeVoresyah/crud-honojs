import { Hono } from "hono";
import { env } from "hono/adapter";

// Routes
import { publicRoutesV1 } from "./routes/public";

import "dotenv/config";

const app = new Hono();

app.get("/", (ctx) => {
  const { DB_HOST } = env<EnvSchema>(ctx);

  return ctx.text(DB_HOST);
});

app.route("/public", publicRoutesV1);

export default app;
