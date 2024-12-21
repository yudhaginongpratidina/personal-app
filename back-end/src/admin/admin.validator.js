import { z } from "zod";

export const createAdminSchema = z.object({
    username: z
        .string()
        .min(1, "username is required")
        .min(4, "username must be at least 4 characters")
        .max(50, "username must be less than 50 characters"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(16, "Password must be less than 16 characters"),
    confirm_password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(16, "Password must be less than 16 characters"),
    terms_and_conditions: z
        .boolean()
        .refine((value) => value, { message: "You must accept the terms and conditions", path: ["terms_and_conditions"] }),
}).refine((data) => data.password === data.confirm_password, { message: "Passwords do not match", path: ["confirm_password"] })

export const updatePasswordAdminSchema = z.object({
    password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(16, "Password must be less than 16 characters"),
    confirm_password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(16, "Password must be less than 16 characters"),
}).refine((data) => data.password === data.confirm_password, { message: "Passwords do not match", path: ["confirm_password"] })