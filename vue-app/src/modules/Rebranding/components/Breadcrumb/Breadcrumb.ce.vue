<template>
  <div class="puik-style">
    <div class="flex items-center">
      <div class="flex items-center" v-for="(item, index) in breadcrumbItems" :key="item.name">
        <template v-if="item?.name">
          <PuikLink class="flex items-center mx-0" :href="item.href">
            {{ item.name }}
          </PuikLink>
          <span v-if="index < breadcrumbItems.length - 1" class="mx-1"> > </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { PuikLink } from "@prestashopcorp/puik";
import type IBreadcrumb from "@/modules/Rebranding/models/BreadcrumbItem";
interface BreadcrumbProps {
  breadcrumb: string;
}
const props = defineProps<BreadcrumbProps>();
const breadcrumbItems = computed(() => {
  let result = JSON.parse(props.breadcrumb);
  if (typeof result.action !== undefined) delete result.action;
  result = Object.values(result);

  // remove item if precedent item has the same name
  for (let i = 0; i < result.length; i++) {
    if (result[i + 1] && result[i].name === result[i + 1].name) {
      result.splice(i, 1);
    }
  }

  return result as IBreadcrumb;
});
</script>

<style>
@import "@prestashopcorp/puik/dist/index.css";
@import "@/common/assets/index.css";
</style>
