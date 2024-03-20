import { OpenAPIHono } from "@hono/zod-openapi";
import { formatZodErrors } from "#helpers/error-helpers";
import { db } from "#database";
import { eq } from "drizzle-orm";

// Schemas
import { tasks as tasksSchema } from "#database/schema";

// OpenAPI
import {
  getTaskList,
  createTask,
  showTask,
  updateTask,
  deleteTask,
} from "#handlers/public/v1";

const tasks = new OpenAPIHono({
  defaultHook: (result, ctx) => {
    if (!result.success) {
      return ctx.json(
        {
          ok: false,
          errors: formatZodErrors(result.error),
        },
        400,
      );
    }
  },
});

tasks.openapi(getTaskList, async (ctx) => {
  const tasks = await db.query.tasks.findMany();

  return ctx.json({
    ok: true,
    data: tasks,
  });
});

tasks.openapi(createTask, async (ctx) => {
  const payload = ctx.req.valid("json");

  const task = await db
    .insert(tasksSchema)
    .values({
      name: payload.name,
      description: payload.description,
      due_date: payload.due_date,
      is_complete: payload.is_complete,
    })
    .returning();

  return ctx.json(
    {
      ok: true,
      data: task[0],
    },
    201,
  );
});

tasks.openapi(showTask, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const task = await db.query.tasks.findFirst({
    where: eq(tasksSchema.id, Number(id)),
  });

  if (!task) {
    return ctx.json(
      {
        ok: false,
        message: "Task not found",
      },
      404,
    );
  }

  return ctx.json({
    ok: true,
    data: task,
  });
});

tasks.openapi(updateTask, async (ctx) => {
  const { id } = ctx.req.valid("param");
  const payload = ctx.req.valid("json");

  const updateTask = await db
    .update(tasksSchema)
    .set(payload)
    .where(eq(tasksSchema.id, Number(id)))
    .returning();

  if (updateTask.length === 0) {
    return ctx.json(
      {
        ok: false,
        message: "Task not found",
      },
      404,
    );
  }

  return ctx.json({
    ok: true,
    data: updateTask[0],
  });
});

tasks.openapi(deleteTask, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const deleteTask = await db
    .delete(tasksSchema)
    .where(eq(tasksSchema.id, Number(id)))
    .returning();

  if (deleteTask.length === 0) {
    return ctx.json(
      {
        ok: false,
        message: "Task not found",
      },
      404,
    );
  }

  return ctx.json(
    {
      ok: true,
      message: "Task deleted",
    },
    204,
  );
});

export { tasks };
