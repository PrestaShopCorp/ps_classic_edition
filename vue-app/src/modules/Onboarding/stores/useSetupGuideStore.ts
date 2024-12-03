import { SetupGuideAPISchema } from "@/modules/Onboarding/composables/SetupGuideSchema";
import type { SetupGuideState } from "@/modules/Onboarding/types/setup-guide";
import { useContext } from "@/common/composables/use-context";
import { defineStore } from "pinia";

const { context } = useContext();

export const useSetupGuideStore = defineStore({
  id: "onb.setupGuide",

  state: (): SetupGuideState => ({
    dataIsAlreadyFetched: false,
    isHidden: false,
    steps: [],
    expandedStep: null,
  }),

  actions: {
    async fetchInitialDatas() {
      try {
        const initialDatas = SetupGuideAPISchema.parse(
          await fetch(context.value.SETUP_GUIDE_API_URL).then((response) => response.json()),
        );
        this.$patch({
          dataIsAlreadyFetched: true,
          isHidden: initialDatas.isHidden,
          steps: initialDatas.steps,
        });
      } catch (err) {
        console.error("API Schema is not valid: " + err);
      }
    },
    markStepAsCompleted(stepName: string, completedStatus?: boolean) {
      this.steps = [...this.steps].map((step) => {
        if (step.name === stepName) {
          if (completedStatus === undefined) {
            completedStatus = !step.isUserCompleted;
          }
          step.isCompleted = !completedStatus;
          step.isUserCompleted = !completedStatus;
        }

        return step;
      });
      fetch(`${context.value.SETUP_GUIDE_API_URL_EDIT}`, {
        method: "PATCH",
        body: JSON.stringify({
          step: this.getStepByName(stepName),
        }),
      });
    },
    setExpandStep(stepId: string | null) {
      this.expandedStep = stepId;
    },
    removeModal() {
      this.isHidden = true;

      fetch(`${context.value.SETUP_GUIDE_API_URL_MODAL_HIDDEN}`, {
        method: "POST",
        body: JSON.stringify({
          modalIsHidden: this.isHidden,
        }),
      });
    },
  },
  getters: {
    getStepByName: (state) => (name: string) => {
      return state.steps.find((step) => step.name === name);
    },
    getNextTodoStep: (state) => () => {
      const nextTodoStep = state.steps.find((step) => !step.isCompleted);
      if (nextTodoStep) {
        return nextTodoStep;
      }
      return null;
    },
    remainingSteps: ({ steps }) => steps.filter((step) => !step.isCompleted).length,
    totalSteps: ({ steps }) => steps.length,
    completedSteps: ({ steps }) => steps.filter((step) => step.isCompleted).length,
    completedStepsPercentage() {
      return (+this.completedSteps * 100) / +this.totalSteps;
    },
  },
});
