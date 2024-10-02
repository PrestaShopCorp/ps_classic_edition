<template>
  <div class="flex flex-col gap-y-0.5" :data-test="className + '-block'">
    <h1 class="puik-h3" data-test="title-block">{{ label }}</h1>
    <span v-if="description" data-test="description-block">{{ description }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  className: string;
  label: string;
  description?: string;
}>();
</script>
