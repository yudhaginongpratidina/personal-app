import { z } from "zod";

export const loginAdminFormSchema = z.object({
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
})

export const registerAdminFormSchema = z.object({
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
    confirm_password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(16, "Password must be less than 16 characters"),
    terms_and_conditions: z
        .boolean()
        .refine((value) => value, { message: "You must accept the terms and conditions", path: ["terms_and_conditions"] }),
}).refine((data) => data.password === data.confirm_password, { message: "Passwords do not match", path: ["confirm_password"] })

export type LoginAdminFormSchema = z.infer<typeof loginAdminFormSchema>;
export type RegisterAdminFormSchema = z.infer<typeof registerAdminFormSchema>;