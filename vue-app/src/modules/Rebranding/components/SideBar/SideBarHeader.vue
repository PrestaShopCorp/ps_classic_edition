<template>
  <div class="bg-[#F7F7F7] p-1.5 hidden lg:flex" :class="{ 'justify-end': !collapsed, 'justify-center': collapsed }">
    <PuikButton
      class="transition-none p-1 h-7 flex items-center"
      variant="text"
      size="sm"
      @click="handleClick"
      icon="last_page"
      style="box-shadow: none"
    >
      <puik-icon :icon="collapsed ? 'last_page' : 'first_page'" class="text-xl" node-type="span" />
    </PuikButton>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ collapsed: boolean }>();

const emit = defineEmits<{
  (e: "on-collapse-click"): void;
}>();

const handleClick = () => {
  emit("on-collapse-click");
};
</script>
