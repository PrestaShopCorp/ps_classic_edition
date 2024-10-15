<template>
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-row items-center gap-2">
      <puik-icon
        class="flex justify-center items-center p-2 rounded-full bg-ocean-blue-50"
        icon="playlist_add_check"
        :font-size="24"
      />
      <h3 class="puik-h4 font-bold md:custom-puik-h3" v-if="remainingSteps > 0">
        {{ $t("onb.homepage.setupGuide.title", { remainingSteps }, remainingSteps) }}
      </h3>
      <h3 class="puik-h4 font-bold md:custom-puik-h3" v-else>
        {{ $t("onb.homepage.setupGuide.title_done") }}
      </h3>
    </div>
    <button
      type="button"
      class="flex justify-center items-center w-6 h-6 puik-button--text focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-blue"
      @click="$emit('openModal')"
    >
      <span class="puik-icon text-xl font-normal">close</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useSetupGuideStore } from "@/modules/Onboarding/stores/useSetupGuideStore";

const setupGuideStore = useSetupGuideStore();
const remainingSteps = computed(() => setupGuideStore.remainingSteps);
</script>
