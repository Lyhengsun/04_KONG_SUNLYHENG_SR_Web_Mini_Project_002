import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .regex(
      RegExp("^[a-zA-Z0-9_\\s]+$"),
      "Username can only contain letters, numbers, space and underscore"
    )
    .min(3, "Username can't be lower than 3 characters")
    .max(20, "Username can't be higher than 20 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid Format for Email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password needed to be more than 8 characters")
    .max(20, "Password can't be over 20 characters"),
});
