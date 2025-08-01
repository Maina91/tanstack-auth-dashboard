import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="flex flex-col gap-1">
      Dashboard index page
      <pre className="rounded-md border bg-card p-1 text-card-foreground">
        routes/dashboard/index.tsx
      </pre>
    </div>
  );
}
