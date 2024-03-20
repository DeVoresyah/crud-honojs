import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";

// Routes
import { publicRoutesV1 } from "./routes/public";

import "dotenv/config";

const app = new OpenAPIHono();

// Swagger UI
app.get("/swagger", swaggerUI({ url: "/doc" }));

app.doc("/doc", {
  info: {
    title: "CRUD Hono",
    version: "v1",
  },
  openapi: "3.1.0",
});

app.openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        description: "Respond a message",
        content: {
          "application/json": {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
      },
    },
  }),
  (ctx) => {
    return ctx.json({
      message: "hello world!",
    });
  },
);

app.route("/public", publicRoutesV1);

export default app;
