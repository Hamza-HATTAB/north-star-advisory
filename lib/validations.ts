import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid corporate email address")
    .max(200, "Email must be less than 200 characters")
    .trim()
    .toLowerCase(),
  company: z
    .string()
    .min(1, "Please enter your company name")
    .max(200, "Company name must be less than 200 characters")
    .trim(),
  role: z
    .string()
    .max(100, "Role title must be less than 100 characters")
    .trim()
    .optional(),
  market: z
    .string()
    .max(100)
    .optional(),
  industry: z
    .string()
    .min(1, "Please select your industry")
    .max(100),
  companySize: z
    .string()
    .min(1, "Please select your company size")
    .max(50),
  primaryBottleneck: z
    .string()
    .min(1, "Please select your primary bottleneck")
    .max(100),
  website: z
    .string()
    .max(200, "Website URL is too long")
    .trim()
    .optional()
    .or(z.literal("")),
  additionalContext: z
    .string()
    .max(1000, "Context must be less than 1000 characters")
    .trim()
    .optional(),
  turnstileToken: z.string().optional(),
  gfiScore: z.number().optional(),
  gfiSeverity: z.string().optional(),
  gfiAnswers: z.record(z.string(), z.string()).optional(),
});

export type ContactFormInput = z.infer<typeof contactSchema>;
