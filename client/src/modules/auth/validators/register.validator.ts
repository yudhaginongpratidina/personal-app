import { z } from "zod";

export const registerFormSchema = z.object({
    firstName: z
        .string()
        .min(1, "First name is required")
        .max(16, "First name must be less than 16 characters"),
    lastName: z
        .string()
        .min(1, "Last name is required")
        .max(16, "Last name must be less than 16 characters"),
    phoneNumber: z
        .string()
        .min(1, "Phone is required")
        .max(16, "Phone must be less than 16 characters"),
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
        .min(1, "Confirm password is required")
        .min(6, "Confirm password must be at least 6 characters")
        .max(16, "Confirm password must be less than 16 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>