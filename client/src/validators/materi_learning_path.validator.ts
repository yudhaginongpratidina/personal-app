import { z } from "zod";

export const materiLearningPathFormSchema = z.object({
    learning_Path_id: z
        .string()
        .min(1, "Learning Path is required"),
    name: z
        .string()
        .min(1, "Name is required")
        .max(50, "Name must be less than 50 characters"),
    materi: z
        .string()
        .min(1, "Materi is required")
})

export type MateriLearningPathFormSchema = z.infer<typeof materiLearningPathFormSchema>