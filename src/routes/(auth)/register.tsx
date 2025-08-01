import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/(auth)/register")({
  component: SignupForm,
});

function SignupForm() {
  return <div>Signup</div>;
}
