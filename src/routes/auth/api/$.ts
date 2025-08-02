import { createServerFileRoute } from "@tanstack/react-start/server";
import { auth } from "@/lib/auth";

export const ServerRoute = createServerFileRoute("/auth/api/$").methods({
  GET: ({ request }) => {
    return auth.handler(request);
  },
  POST: ({ request }) => {
    return auth.handler(request);
  },
});
