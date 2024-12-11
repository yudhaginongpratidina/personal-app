import { z } from "zod";

export const editPortfolioFormSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .max(100, "Name must be less than 100 characters"),
    description: z
        .string()
        .min(1, "Description is required")
        .max(300, "Description must be less than 300 characters"),
    repository: z
        .string()
        .min(1, "Repository is required")
        .max(100, "Repository must be less than 100 characters"),
    demo: z
        .string()
        .max(100, "Demo must be less than 100 characters")
        .optional(),
})

export type EditPortfolioFormSchema = z.infer<typeof editPortfolioFormSchema>;