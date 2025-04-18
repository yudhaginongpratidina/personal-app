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
            .enum(["MALE", "FEMALE", "NEUTRAL", "CUSTOM"], {
                required_error: "Gender is required"
            }),
        custome_gender: z
            .string()
            .optional(),
        greeting_prefrence: z
            .enum(["MALE", "FEMALE", "NEUTRAL", "CUSTOM"], {
                required_error: "Greeting prefrence is required"
            }),
        custom_greeting_prefrence: z
            .string()
            .optional(),
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
        if (data.gender === "CUSTOM") {
            if (!data.custome_gender || data.custome_gender.trim().length < 3) {
                ctx.addIssue({
                    path: ["custome_gender"],
                    message: "Custom gender must be at least 3 characters long",
                    code: z.ZodIssueCode.custom,
                });
            }
        }

        if (data.greeting_prefrence === "CUSTOM") {
            if (!data.custom_greeting_prefrence || data.custom_greeting_prefrence.trim().length < 3) {
                ctx.addIssue({
                    path: ["custom_greeting_prefrence"],
                    message: "Custom greeting prefrence must be at least 3 characters long",
                    code: z.ZodIssueCode.custom,
                });
            }
        }

        if (data.password !== data.confirm_password) {
            ctx.addIssue({
                path: ["confirm_password"],
                message: "Passwords do not match",
                code: z.ZodIssueCode.custom,
            });
        }
    });
}
