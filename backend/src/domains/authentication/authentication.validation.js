import { z } from "zod";

export default class AuthenticationValidation {

    static REGISTER = z.object({
        full_name: z
            .string()
            .nonempty('Full name is required')
            .min(3, 'Full name must be at least 3 characters long')
            .max(50, 'Full name must be at most 50 characters long'),
        email: z
            .string()
            .email(),
        username: z
            .string()
            .nonempty('Username is required')
            .min(3, 'Username must be at least 3 characters long')
            .max(20, 'Username must be at most 20 characters long'),
        password: z
            .string()
            .nonempty('Password is required')
            .min(6, 'Password must be at least 6 characters long')
            .max(20, 'Password must be at most 20 characters long'),
        confirm_password: z
            .string()
            .nonempty('Password is required')
            .min(6, 'Password must be at least 6 characters long')
            .max(20, 'Password must be at most 20 characters long'),
    }).refine((data) => data.password === data.confirm_password, {
        message: 'Passwords do not match',
        path: ['confirm_password'],
    });

}
