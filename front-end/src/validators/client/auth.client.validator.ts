import { z } from "zod";

export const loginClientFormSchema = z.object({
    email: z
        .string()
        .min(1, "E-Mail is required")
        .email("E-Mail is invalid"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(16, "Password must be less than 16 characters"),
})

export const registerClientFormSchema = z.object({
    first_name: z
        .string()
        .min(1, "First name is required")
        .min(4, "First name must be at least 4 characters")
        .max(50, "First name must be less than 50 characters"),
    last_name: z
        .string()
        .max(50, "Last name must be less than 50 characters")
        .optional(),
    email: z
        .string()
        .min(1, "E-Mail is required")
        .email("E-Mail is invalid"),
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

export type LoginClientFormSchema = z.infer<typeof loginClientFormSchema>
export type RegisterClientFormSchema = z.infer<typeof registerClientFormSchema>