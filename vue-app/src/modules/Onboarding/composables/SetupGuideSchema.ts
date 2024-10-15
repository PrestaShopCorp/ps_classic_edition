import { z } from "zod";

export const SetupGuideButtonSchema = z.object({
  cta: z.string(),
  href: z.string(),
  variant: z.string().optional(),
  skip: z.boolean().optional(),
});

export const SetupGuideDocumentationSchema = z
  .object({
    cta: z.string(),
    href: z.string(),
  })
  .optional();

export const SetupGuideStepSchema = z
  .object({
    name: z.string(),
    title: z.string(),
    content: z
      .array(
        z.object({
          subtitle: z.string().optional(),
          description: z.string(),
          documentation: SetupGuideDocumentationSchema,
          buttons: z.array(SetupGuideButtonSchema),
        }),
      )
      .optional(),
    disabledForUser: z.boolean(),
    isCompleted: z.boolean(),
    isUserCompleted: z.boolean(),
    isAutoCompleted: z.boolean(),
  })
  .required();

export const SetupGuideAPISchema = z
  .object({
    isHidden: z.boolean(),
    steps: z.array(SetupGuideStepSchema),
  })
  .required();
