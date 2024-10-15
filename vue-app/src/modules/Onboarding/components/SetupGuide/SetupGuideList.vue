<template>
  <div class="flex flex-col w-full">
    <SetupGuideAccordion v-for="step in steps" :key="step.name" :step="step" />
  </div>
</template>

<script lang="ts" setup>
import { useSetupGuideStore } from "@/modules/Onboarding/stores/useSetupGuideStore";
import SetupGuideAccordion from "@/modules/Onboarding/components/SetupGuide/SetupGuideAccordion.vue";

const { steps } = useSetupGuideStore();
</script>
