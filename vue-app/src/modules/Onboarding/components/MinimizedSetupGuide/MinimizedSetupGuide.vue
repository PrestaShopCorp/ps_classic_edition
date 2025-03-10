<template>
  <puik-card class="px-7 py-6">
    <MinimizedSetupGuideHeader />
    <div>
      <SetupGuideAccordion :step="todoStep" :opened="true" :isExpandable="false" :key="todoStep.name" v-if="todoStep" />
      <puik-skeleton-loader v-else-if="isLoading()" class="h-[94px]"></puik-skeleton-loader>
      <MinimizedSetupGuideCongratulations v-else />
    </div>
  </puik-card>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useSetupGuideStore } from "@/modules/Onboarding/stores/useSetupGuideStore";
import { useApplicationStore } from "@/common/stores/useApplicationStore";

import MinimizedSetupGuideHeader from "@/modules/Onboarding/components/MinimizedSetupGuide/MinimizedSetupGuideHeader.vue";
import MinimizedSetupGuideCongratulations from "@/modules/Onboarding/components/MinimizedSetupGuide/MinimizedSetupGuideCongratulations.vue";
import SetupGuideAccordion from "@/modules/Onboarding/components/SetupGuide/SetupGuideAccordion.vue";

const { getNextTodoStep, dataIsAlreadyFetched, fetchInitialDatas } = useSetupGuideStore();
const { isLoading, setLoading } = useApplicationStore();
const todoStep = computed(() => getNextTodoStep());

onMounted(async() => {
  if (!dataIsAlreadyFetched) {
    setLoading(true);
    try {
      await fetchInitialDatas();
    } catch (e) {
      console.error("Setup Guide initial datas aren't valid:" + e);
    }
    setLoading(false);
  }
})
</script>
