import { z } from "zod";

export const createUserFormSchema = z.object({
    username: z
        .string()
        .min(1, "Username is required")
        .min(6, "Username must be at least 6 characters")
        .max(50, "Username must be less than 50 characters"),
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

export type CreateUserFormSchema = z.infer<typeof createUserFormSchema>

export const updateUserFormSchema = z.object({
    username: z
        .string()
        .min(1, "Username is required")
        .min(6, "Username must be at least 6 characters")
        .max(50, "Username must be less than 50 characters"),
})

export type UpdateUserFormSchema = z.infer<typeof updateUserFormSchema>