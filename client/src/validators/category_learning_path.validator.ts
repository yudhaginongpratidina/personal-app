import { z } from "zod";

export const categoryLearningPathFormSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .max(50, "Name must be less than 50 characters"),
})

export type CategoryLearningPathFormSchema = z.infer<typeof categoryLearningPathFormSchema>