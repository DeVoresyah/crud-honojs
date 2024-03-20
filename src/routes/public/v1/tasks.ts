import { Hono } from "hono";
import { db } from "../../../database";

const tasks = new Hono();

tasks.get("/tasks", async (ctx) => {
  const tasks = await db.query.tasks.findMany();

  return ctx.json({
    ok: true,
    data: tasks,
  });
});

tasks.post("/tasks", (ctx) => {
  return ctx.json({
    ok: true,
    message: "Task created",
  });
});

tasks.get("/tasks/:id", (ctx) => {
  return ctx.json({
    ok: true,
    data: {},
  });
});

tasks.patch("/tasks/:id", (ctx) => {
  return ctx.json({
    ok: true,
    message: "Task updated",
  });
});

tasks.delete("/tasks/:id", (ctx) => {
  return ctx.json({
    ok: true,
    message: "Task deleted",
  });
});

export { tasks };
