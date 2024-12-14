import { z } from "zod";

export const portfolioFormSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .max(50, "Name must be less than 50 characters"),
    repository: z
        .string()
        .min(1, "Repository is required")
        .max(100, "Repository must be less than 100 characters"),
    demo: z
        .string()
        .min(1, "Demo is required")
        .max(100, "Demo must be less than 100 characters"),
})

export type PortfolioFormSchema = z.infer<typeof portfolioFormSchema>