export const commonMessages = {
  required_error: (field: string) => `${field} is required`,
  invalid_email: "Invalid email address",
  min_length: (field: string, min: number) =>
    `${field} must be at least ${min} characters`,
  passwords_do_not_match: "Passwords do not match",
};
