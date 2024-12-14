import { z } from "zod";

export const skillFormSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .max(50, "Name must be less than 50 characters"),
    level: z
        .string()
        .min(1, "Level is required")
        .max(50, "Level must be less than 50 characters"),
})

export type SkillFormSchema = z.infer<typeof skillFormSchema>