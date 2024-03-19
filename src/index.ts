import { Hono } from "hono";

// Routes
import { publicRoutesV1 } from "./routes/public";

const app = new Hono();

app.get("/", (ctx) => {
  return ctx.json({
    ok: true,
    message: "Hello, World!",
  });
});

app.route("/public", publicRoutesV1);

export default app;
