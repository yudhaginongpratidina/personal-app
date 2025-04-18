import { z } from "zod";

export default class WellcomeValidation {
    static CREATE = z.object({
        // username: z.string().min(3),
    });
}
