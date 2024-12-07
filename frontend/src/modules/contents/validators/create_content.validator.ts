import { z } from "zod";

export const createContentFormSchema = z.object({
    title: z
        .string()
        .min(1, "Title is required")
        .min(6, "Title must be at least 6 characters"),
    content: z
        .string()
        .min(1, "Content is required")
        .min(6, "Content must be at least 6 characters")
})

export type CreateContentFormSchema = z.infer<typeof createContentFormSchema>;