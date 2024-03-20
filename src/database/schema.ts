import {
  serial,
  text,
  timestamp,
  boolean,
  pgTable,
  varchar,
} from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  description: text("description").notNull(),
  due_date: timestamp("due_date", {
    mode: "string",
    withTimezone: true,
  }).notNull(),
  is_complete: boolean("is_complete").notNull().default(false),
  created_at: timestamp("created_at", { mode: "string", withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { mode: "string", withTimezone: true })
    .defaultNow()
    .notNull(),
});
