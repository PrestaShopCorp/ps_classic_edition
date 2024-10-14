import type { z } from "zod";
import type {
  SetupGuideAPISchema,
  SetupGuideButtonSchema,
  SetupGuideDocumentationSchema,
  SetupGuideStepSchema,
} from "@/modules/Onboarding/composables/SetupGuideSchema";

export type SetupGuideDocumentation = z.infer<typeof SetupGuideDocumentationSchema>;
export type SetupGuideButton = z.infer<typeof SetupGuideButtonSchema>;
export type SetupGuideStep = z.infer<typeof SetupGuideStepSchema>;
export type SetupGuideInitialDatasAPI = z.infer<typeof SetupGuideAPISchema>;

export interface SetupGuideState extends SetupGuideInitialDatasAPI {
  dataIsAlreadyFetched: boolean;
  expandedStep: string | null;
}
