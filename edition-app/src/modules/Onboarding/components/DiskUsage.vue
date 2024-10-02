<template>
  <puik-card
    class="flex flex-row items-center shrink-0 px-4 py-6 gap-6 bg-purple-200 sm:shrink sm:p-8 xl:py-[34px] 2xl:py-[38px]"
    :class="{ 'bg-red-200': variant != 'default' }"
  >
    <div class="w-1/3">
      <img v-if="variant === 'danger'" class="mx-auto" src="@/modules/Onboarding/assets/img/storage-danger.svg" />
      <img
        v-else-if="variant === 'warning'"
        class="mx-auto"
        src="@/modules/Onboarding/assets/img/storage-warning.svg"
      />
      <img v-else class="mx-auto" src="@/modules/Onboarding/assets/img/storage.svg" />
    </div>
    <div class="w-2/3">
      <h3 class="puik-h4 font-bold md:custom-puik-h3">{{ $t(`onb.homepage.disk-usage.${variant}.title`) }}</h3>
      <div class="my-4 text-xs md:text-sm">
        {{ $t(`onb.homepage.disk-usage.${variant}.usageTitle`) }}
        <puik-progress-bar :percentage="(disk.used / disk.total) * 100" :class="variant" />

        <span class="text-xs">
          {{
            $t(`onb.homepage.disk-usage.${variant}.usage`, {
              used: (disk.used / 1024 / 1024 / 1024).toFixed(1),
              total: (disk.total / 1024 / 1024 / 1024).toFixed(0),
            })
          }}
        </span>
      </div>

      <div class="my-4 text-xs md:text-sm">
        {{ $t(`onb.homepage.disk-usage.${variant}.description`) }}
      </div>

      <puik-button
        variant="primary"
        size="md"
        class="h-auto"
        target="_blank"
        left-icon="assignment_turned_in"
        :href="`https://help-center.prestashop.com/${context.locale}/contact`"
      >
        {{ $t(`onb.homepage.disk-usage.buttonSupport`) }}
      </puik-button>
    </div>
  </puik-card>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useContext } from "@/common/composables/use-context";

const props = defineProps<{ disk: { used: number; total: number } }>();
const { context } = useContext();

const spaceleft = computed(() => {
  return (props.disk.total - props.disk.used) / 1024 / 1024 / 1024;
});

const variant = computed(() => {
  if (spaceleft.value <= 5) {
    return "danger";
  } else if (spaceleft.value < 15) {
    return "warning";
  }
  return "default";
});
</script>
<style lang="scss" scoped>
* ::v-deep(.progress-bar__container) {
  background-color: white;

  &.danger .progress-bar__content {
    background-color: #ba151a;
  }
}
</style>
