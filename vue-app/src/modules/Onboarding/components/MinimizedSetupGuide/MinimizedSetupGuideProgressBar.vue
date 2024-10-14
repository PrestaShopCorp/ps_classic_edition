<template>
  <div
    class="flex gap-2"
    :class="{
      'flex-row items-center': orientation === 'row',
      'flex-col': orientation === 'col',
    }"
  >
    <puik-progress-bar :percentage="completedStepsPercentage" style="width: 62px" />
    <p class="puik-body-small">
      {{
        $t("onb.homepage.minimizedSetupGuide.progression", {
          completedSteps,
          totalSteps,
        })
      }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed, type PropType } from "vue";
import { useSetupGuideStore } from "@/modules/Onboarding/stores/useSetupGuideStore";

const { orientation } = defineProps({
  orientation: {
    type: String as PropType<"row" | "col">,
    default: "col",
  },
});

const setupGuideStore = useSetupGuideStore();

const completedSteps = computed(() => setupGuideStore.completedSteps);
const totalSteps = computed(() => setupGuideStore.totalSteps);
const completedStepsPercentage = computed(() => setupGuideStore.completedStepsPercentage);
</script>
