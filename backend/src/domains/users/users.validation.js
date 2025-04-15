import { z } from "zod";

export default class UsersValidation {
    static CREATE = z.object({
        // username: z.string().min(3),
    });
}
