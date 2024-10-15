<template>
  <button
    :aria-expanded="isOpened"
    :aria-controls="step.name"
    type="button"
    class="flex flex-row items-center justify-between px-2"
    :class="{
      'py-6 hover:bg-primary-200 focus:outline-none': isExpandable,
      'pb-6 cursor-default focus:outline-none': !isExpandable,
    }"
    @click.prevent="$emit('open')"
  >
    <span class="flex flex-row items-center gap-2">
      <puik-checkbox
        :modelValue="step.isCompleted"
        :disabled="step.disabledForUser"
        @click.stop=""
        @update:modelValue="$emit('markAsCompleted')"
      />
      <span class="puik-h5 text-left">{{ $t(step.title) }}</span>
    </span>
    <span class="puik-icon text-xl font-normal" v-if="isExpandable">
      {{ isOpened ? "keyboard_arrow_up" : "keyboard_arrow_down" }}
    </span>
  </button>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { SetupGuideStep } from "@/modules/Onboarding/types/setup-guide";

const { isExpandable, isOpened, step } = defineProps({
  step: {
    type: Object as PropType<SetupGuideStep>,
    required: true,
  },
  isOpened: {
    type: Boolean,
    default: false,
  },
  isExpandable: {
    type: Boolean,
    default: false,
  },
});
</script>
