import { z } from "zod";

export default class UsersValidation {
    static UPDATE = z
        .object({
            type: z.enum(['update_role', 'update_full_name'], {
                errorMap: () => ({
                    message: 'Type must be update_role or update_full_name',
                }),
            }),

            role: z
                .enum(['user', 'contributor', 'admin'], {
                    errorMap: () => ({
                        message: 'Role must be user, contributor, or admin',
                    }),
                })
                .optional(),

            full_name: z
                .string()
                .min(3, 'Full name must be at least 3 characters long')
                .max(50, 'Full name must be at most 50 characters long')
                .optional(),
        })
        .superRefine((data, ctx) => {
            switch (data.type) {
                case 'update_role':
                    if (!data.role) {
                        ctx.addIssue({
                            path: ['role'],
                            message: 'Role is required when using update_role',
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
}
