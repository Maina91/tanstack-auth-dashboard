import postgres from "postgres";
import { env } from "@/env/server";

let cached: ReturnType<typeof postgres> | null = null;

export const getPostgresClient = () => {
  if (!cached) {
    cached = postgres(env.DATABASE_URL, { max: 10 });
  }
  return cached;
};
