<template>
  <div class="overflow-hidden" :class="{ 'max-h-0': !opened, 'max-h-96': opened }">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ opened: boolean }>();
</script>
