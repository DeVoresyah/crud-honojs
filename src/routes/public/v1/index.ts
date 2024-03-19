import { Hono } from "hono";
import { tasks } from "./tasks";

const publicRoutesV1 = new Hono();

publicRoutesV1.route("/v1", tasks);

export { publicRoutesV1 };
