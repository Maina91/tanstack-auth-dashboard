import { z } from "zod";
import { commonMessages } from "./validation-messages";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: commonMessages.required_error("Email") })
    .email({ message: commonMessages.invalid_email }),

  password: z
    .string()
    .nonempty({ message: commonMessages.required_error("Password") })
    .min(6, { message: commonMessages.min_length("Password", 6) }),
});
export type LoginSchema = z.infer<typeof loginSchema>;



export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty({ message: commonMessages.required_error("Name") })
      .min(2, { message: commonMessages.min_length("Name", 2) }),

    email: z
      .string()
      .nonempty({ message: commonMessages.required_error("Email") })
      .email({ message: commonMessages.invalid_email }),

    password: z
      .string()
      .nonempty({ message: commonMessages.required_error("Password") })
      .min(6, { message: commonMessages.min_length("Password", 6) }),

    confirmPassword: z
      .string()
      .nonempty({ message: commonMessages.required_error("Confirm Password") }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: commonMessages.passwords_do_not_match,
    path: ["confirmPassword"],
  });
export type RegisterSchema = z.infer<typeof registerSchema>;
