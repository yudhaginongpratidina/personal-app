import { z } from "zod";

export const registerFormSchema = z.object({
    firstName: z
        .string()
        .min(1, "First Name is required")
        .min(6, "First Name must be at least 6 characters")
        .max(28, "First Name must be less than 28 characters"),
    lastName: z
        .string()
        .min(1, "Last Name is required")
        .min(6, "Last Name must be at least 6 characters")
        .max(28, "Last Name must be less than 28 characters"),
    phone: z
        .string()
        .min(1, "Phone is required")
        .min(6, "Phone must be at least 6 characters")
        .max(28, "Phone must be less than 28 characters"),
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
        .min(1, "Confirm Password is required")
        .min(6, "Confirm Password must be at least 6 characters")
        .max(16, "Confirm Password must be less than 16 characters"),
    terms: z
        .boolean()
        .refine(value => value, { 
            message: "You must accept the terms and conditions"
        }),
    newsletter: z
        .boolean()
        .optional(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>