import { OpenAPIHono } from "@hono/zod-openapi";
import { tasks } from "./tasks";

const publicRoutesV1 = new OpenAPIHono();

publicRoutesV1.route("/v1", tasks);

export { publicRoutesV1 };
