<template>
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-row items-center gap-2">
      <puik-icon
        class="flex justify-center items-center p-2 rounded-full bg-ocean-blue-50"
        icon="playlist_add_check"
        :font-size="24"
      />
      <h3 class="puik-h6 md:custom-puik-h3">
        {{ $t("onb.homepage.minimizedSetupGuide.title", { remainingSteps }, remainingSteps) }}
      </h3>
    </div>
    <SetupGuideProgressBar orientation="row" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import SetupGuideProgressBar from "@/modules/Onboarding/components/MinimizedSetupGuide/MinimizedSetupGuideProgressBar.vue";
import { useSetupGuideStore } from "@/modules/Onboarding/stores/useSetupGuideStore";

const setupGuideStore = useSetupGuideStore();
const remainingSteps = computed(() => setupGuideStore.remainingSteps);
</script>
