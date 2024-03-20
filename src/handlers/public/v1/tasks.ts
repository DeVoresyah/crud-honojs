import { createRoute, z } from "@hono/zod-openapi";

const TaskSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  is_complete: z.boolean(),
  due_date: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const getTaskList = createRoute({
  tags: ["Tasks"],
  method: "get",
  path: "/public/v1/tasks",
  responses: {
    200: {
      description: "Task list",
      content: {
        "application/json": {
          schema: z
            .object({
              ok: z.boolean(),
              data: z.array(TaskSchema),
            })
            .openapi("TaskList"),
        },
      },
    },
  },
});

export const createTask = createRoute({
  tags: ["Tasks"],
  method: "post",
  path: "/public/v1/tasks",
  request: {
    body: {
      content: {
        "application/json": {
          schema: z.object({
            name: z.string(),
            description: z.string(),
            due_date: z.string().openapi({ example: "2024-03-01 " }),
            is_complete: z.boolean(),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Task created",
      content: {
        "application/json": {
          schema: z.object({
            ok: z.boolean(),
            data: TaskSchema,
          }),
        },
      },
    },
  },
});

export const showTask = createRoute({
  tags: ["Tasks"],
  method: "get",
  path: "/public/v1/tasks/{id}",
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      description: "Task details",
      content: {
        "application/json": {
          schema: z.object({
            ok: z.boolean(),
            data: TaskSchema,
          }),
        },
      },
    },
    404: {
      description: "Task not found",
      content: {
        "application/json": {
          schema: z.object({
            ok: z.boolean(),
            message: z.string(),
          }),
        },
      },
    },
  },
});

export const updateTask = createRoute({
  tags: ["Tasks"],
  method: "patch",
  path: "/public/v1/tasks/{id}",
  request: {
    params: z.object({
      id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: z.object({
            name: z.string(),
            description: z.string(),
            due_date: z.string().openapi({ example: "2024-03-01 " }),
            is_complete: z.boolean(),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Task updated",
      content: {
        "application/json": {
          schema: z.object({
            ok: z.boolean(),
            data: TaskSchema,
          }),
        },
      },
    },
    404: {
      description: "Task not found",
      content: {
        "application/json": {
          schema: z.object({
            ok: z.boolean(),
            message: z.string(),
          }),
        },
      },
    },
  },
});

export const deleteTask = createRoute({
  tags: ["Tasks"],
  method: "delete",
  path: "/public/v1/tasks/{id}",
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    204: {
      description: "Task deleted",
      content: undefined,
    },
    404: {
      description: "Task not found",
      content: {
        "application/json": {
          schema: z.object({
            ok: z.boolean(),
            message: z.string(),
          }),
        },
      },
    },
  },
});
