import { z } from "zod";

export const learningPathFormSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .max(50, "Name must be less than 50 characters"),
    category_learning_path_id: z
        .string()
        .min(1, "Category Learning Path is required"),
    level_learning_path_id: z
        .string()
        .min(1, "Level Learning Path is required"),
})

export type LearningPathFormSchema = z.infer<typeof learningPathFormSchema>;