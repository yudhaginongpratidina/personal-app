import { z } from "zod";

export const userFormSchema = z.object({
    fullName: z
        .string()
        .min(1, "Full name is required")
        .min(4, "Full name must be at least 4 characters")
        .max(50, "Full name must be less than 50 characters"),
    email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(16, "Password must be less than 16 characters"),
    confirmPassword: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(16, "Password must be less than 16 characters"),
}).refine((data) => data.password === data.confirmPassword, { message: "Passwords do not match", path: ["confirmPassword"] })

export type UserFormSchema = z.infer<typeof userFormSchema>