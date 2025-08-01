import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/components/RegistrationForm')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(auth)/components/RegistrationForm"!</div>
}
