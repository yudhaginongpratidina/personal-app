import { z } from "zod";

export const loginFormSchema = z.object({
    username: z
        .string()
        .min(1, "Username is required")
        .min(4, "Username must be at least 4 characters")
        .max(50, "Username must be less than 50 characters"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(16, "Password must be less than 16 characters"),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>