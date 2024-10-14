<template>
  <a
    :href="href"
    :data-test="'subtab-' + class_name"
    class="p-2 hover:no-underline hover:bg-[#EEEEEE] text-[14px]"
    :class="{ 'text-[#2942CC]': selected, 'text-[#1D1D1B] font-normal': !selected }"
  >
    {{ label }}
  </a>
</template>

<script lang="ts" setup>
export interface Link {
  class_name?: string;
  label: string;
  href: string;
  selected: boolean;
}

defineProps<Link>();
</script>
