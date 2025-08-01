import { serverOnly } from "@tanstack/react-start";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { getPostgresClient } from "./client";

export const db = serverOnly(() =>
  drizzle(getPostgresClient(), {
    schema,
    casing: "snake_case",
    logger: process.env.NODE_ENV === "development",
  })
)();
