<template>
  <puik-skeleton-loader-group class="max-w-[1134px] mx-auto">
    <puik-skeleton-loader class="h-20"></puik-skeleton-loader>
    <div class="grid gap-4 mt-4 md:grid-cols-2">
      <puik-skeleton-loader class="h-[450px]"></puik-skeleton-loader>
      <div class="only:grid only:col-span-full only:md:grid-cols-2 row-span-2 flex flex-col gap-4">
        <puik-skeleton-loader class="h-[217px]"></puik-skeleton-loader>
        <puik-skeleton-loader class="h-[217px]"></puik-skeleton-loader>
      </div>
    </div>
  </puik-skeleton-loader-group>
</template>

<script setup lang="ts"></script>
