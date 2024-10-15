<template>
  <div class="vue-edition-homepage relative mr-3 h-[50px] flex items-center">
    <button
      type="button"
      id="minimized-setup-guide-button"
      class="rounded-full flex justify-center items-center w-8 h-8 p-2 text-[#bbbbbb] hover:text-white;"
      :class="{ 'bg-primary-600': isOpen }"
      ref="button"
      @click="toggleIsOpen"
    >
      <puik-icon icon="playlist_add_check" nodeType="span" :fontSize="22" />
    </button>
    <div
      id="minimized-setup-guide-container"
      class="absolute top-full right-[-28px] block w-[555px] overflow-auto"
      ref="container"
      v-if="isOpen"
    >
      <MinimizedSetupGuide />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import MinimizedSetupGuide from "@/modules/Onboarding/components/MinimizedSetupGuide/MinimizedSetupGuide.vue";
import { useClickOutside } from "@/common/composables/use-click-outside";

const isOpen = ref(false);
const button = ref<HTMLElement | null>(null);
const container = ref<HTMLElement | null>(null);

useClickOutside([button, container], () => {
  isOpen.value = false;
});

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
#minimized-setup-guide-container {
  max-height: calc(100vh - 50px);
}
</style>
