<template>
  <puik-card class="px-7 py-6">
    <MinimizedSetupGuideHeader />
    <div>
      <SetupGuideAccordion :step="todoStep" :opened="true" :isExpandable="false" :key="todoStep.name" v-if="todoStep" />
      <MinimizedSetupGuideCongratulations v-else />
    </div>
  </puik-card>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useSetupGuideStore } from "@/modules/Onboarding/stores/useSetupGuideStore";
import MinimizedSetupGuideHeader from "@/modules/Onboarding/components/MinimizedSetupGuide/MinimizedSetupGuideHeader.vue";
import MinimizedSetupGuideCongratulations from "@/modules/Onboarding/components/MinimizedSetupGuide/MinimizedSetupGuideCongratulations.vue";
import SetupGuideAccordion from "@/modules/Onboarding/components/SetupGuide/SetupGuideAccordion.vue";

const { getNextTodoStep } = useSetupGuideStore();
const todoStep = computed(() => getNextTodoStep());
</script>
