import { z } from "@hono/zod-openapi";

export const formatZodErrors = (
  zodError: z.ZodError,
): Record<string, string> => {
  const formattedErrors: Record<string, string> = {};

  zodError.issues.forEach((issue) => {
    // Join the path array into a string, using dots to denote nesting.
    // This will be useful for nested objects.
    // For simplicity, we're assuming the path will always have at least one element.
    const path = issue.path.join(".");

    // Assign the error message to the corresponding path in the formattedErrors object.
    // If there are multiple errors for the same path, they will be concatenated.
    if (formattedErrors[path]) {
      formattedErrors[path] += `; ${issue.message}`;
    } else {
      formattedErrors[path] = issue.message;
    }
  });

  return formattedErrors;
};
