import { serverOnly } from "@tanstack/react-start";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { getPostgresClient } from "./client";
import { env } from "@/env/server";


export const db = serverOnly(() =>
  drizzle(getPostgresClient(), {
    schema,
    casing: "snake_case",
    logger: env.NODE_ENV === "development",
  })
)();
