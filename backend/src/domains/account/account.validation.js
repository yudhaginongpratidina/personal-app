import { z } from "zod";

export default class AccountValidation {

    static UPDATE = z
        .object({
            type: z.enum([
                'update_bio',
                'update_password',
                'update_image',
                'update_full_name'
            ], {
                errorMap: () => ({
                    message: 'Type must be update_bio, update_password, update_image, or update_full_name'
                }),
            }),
            full_name: z
                .string()
                .min(3, 'Full name must be at least 3 characters long')
                .max(50, 'Full name must be at most 50 characters long')
                .optional(),

            bio: z
                .string()
                .max(500, 'Bio must be at most 500 characters long')
                .optional(),

            old_password: z
                .string()
                .min(6, 'Password must be at least 6 characters long')
                .max(20, 'Password must be at most 20 characters long')
                .optional(),

            new_password: z
                .string()
                .min(6, 'Password must be at least 6 characters long')
                .max(20, 'Password must be at most 20 characters long')
                .optional(),

            confirm_password: z
                .string()
                .min(6, 'Password must be at least 6 characters long')
                .max(20, 'Password must be at most 20 characters long')
                .optional(),

            image: z.string().optional()
        })
        .superRefine((data, ctx) => {
            switch (data.type) {
                case 'update_bio':
                    if (!data.bio) {
                        ctx.addIssue({
                            path: ['bio'],
                            message: 'Bio is required when using update_bio',
                            code: z.ZodIssueCode.custom,
                        });
                    }
                    break;

                case 'update_password':
                    if (!data.old_password) {
                        ctx.addIssue({
                            path: ['old_password'],
                            message: 'Old password is required when using update_password',
                            code: z.ZodIssueCode.custom,
                        });
                    }
                    if (!data.new_password) {
                        ctx.addIssue({
                            path: ['new_password'],
                            message: 'New password is required when using update_password',
                            code: z.ZodIssueCode.custom,
                        });
                    }
                    if (!data.confirm_password) {
                        ctx.addIssue({
                            path: ['confirm_password'],
                            message: 'Confirm password is required when using update_password',
                            code: z.ZodIssueCode.custom,
                        });
                    }
                    if (data.new_password && data.confirm_password && data.new_password !== data.confirm_password) {
                        ctx.addIssue({
                            path: ['confirm_password'],
                            message: 'Passwords do not match',
                            code: z.ZodIssueCode.custom,
                        });
                    }
                    break;

                case 'update_image':
                    if (!data.image) {
                        ctx.addIssue({
                            path: ['image'],
                            message: 'Image is required when using update_image',
                            code: z.ZodIssueCode.custom,
                        });
                    }
                    break;

                case 'update_full_name':
                    if (!data.full_name) {
                        ctx.addIssue({
                            path: ['full_name'],
                            message: 'Full name is required when using update_full_name',
                            code: z.ZodIssueCode.custom,
                        });
                    }
                    break;

                default:
                    break;
            }
        });

    static SOFT_DELETE = z.object({
        confirm_delete: z
            .string()
            .nonempty('Confirm delete is required')
            .refine((val) => val === 'DELETE ACCOUNT', {
                message: 'You must type "DELETE ACCOUNT" to confirm',
            }),
    });
}
