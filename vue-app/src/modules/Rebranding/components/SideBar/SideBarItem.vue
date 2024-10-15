<template>
  <section
    class="cursor-pointer"
    :class="{ 'text-[#2942CC] font-bold bg-[#F7F7F7]': selected, 'text-[#1D1D1B]': !selected }"
  >
    <a :href="href">
      <div
        class="flex items-center p-2 hover:bg-[#EEEEEE]"
        :data-test="'tab-' + class_name"
        :class="{ 'justify-center': !label, 'justify-between': label }"
        @click="$emit('label-click')"
      >
        <puik-icon :icon="icon" class="text-xl" node-type="span" />
        <span v-if="label" class="flex-1 ml-2 text-[14px]">
          {{ label }}
        </span>
        <slot name="icon" />
      </div>
      <slot />
    </a>
  </section>
</template>

<script lang="ts" setup>
export interface SideBarItemProps {
  class_name?: string;
  icon: string;
  selected: boolean;
  label?: string;
  href?: string;
}

defineProps<SideBarItemProps>();
defineEmits<{ (e: "label-click"): void }>();
</script>
