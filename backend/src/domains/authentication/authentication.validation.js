import { z } from "zod";

export default class AuthenticationValidation {
    static REGISTER = z.object({
        full_name: z
            .string()
            .min(1, "Full name is required")
            .min(3, "Full name must be at least 3 characters long"),
        birth_date: z
            .string()
            .min(1, "Birth date is required")
            .refine((val) => /^\d{4}-\d{2}-\d{2}$/.test(val), {
                message: "Birth date must be in YYYY-MM-DD format",
            })
            .transform((val) => new Date(val))
            .refine((date) => !isNaN(date.getTime()), {
                message: "Birth date must be a valid date",
            }),
        gender: z
            .enum(["MALE", "FEMALE"], {
                required_error: "Gender is required"
            }),
        email: z
            .string()
            .min(1, "Email is required")
            .email("Email is invalid"),
        phone_number: z
            .string()
            .min(1, "Phone number is required"),
        password: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password must be at least 8 characters long"),
        confirm_password: z
            .string()
            .min(1, "Confirm password is required")
            .min(8, "Confirm password must be at least 8 characters long"),
    }).superRefine((data, ctx) => {
        if (data.password !== data.confirm_password) {
            ctx.addIssue({
                path: ["confirm_password"],
                message: "Passwords do not match",
                code: z.ZodIssueCode.custom,
            });
        }
    });
}
