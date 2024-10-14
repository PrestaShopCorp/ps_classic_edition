<template>
  <div class="puik-style">
    <SideBar :nav-items="navItems(tabsParsed)" :collapsed="collapsed" @on-collapse-click="toggleCollapse" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { clickOnCollapseIcon, getInitCollapsed } from "@/modules/Rebranding/services/html";
import navItems from "@/modules/Rebranding/models/navItems";
import SideBar from "@/modules/Rebranding/components/SideBar/SideBar.vue";
import type { Tab } from "@/common/composables/use-context";

const collapsed = ref(getInitCollapsed());

const props = defineProps<{ tabs: string }>();

const tabsParsed = computed(() => {
  return JSON.parse(props.tabs) as Tab[];
});

let resizeObserver = new ResizeObserver(() => {
  collapsed.value = getInitCollapsed();
});

resizeObserver.observe(document.getElementsByTagName("body")[0]);

const toggleCollapse = () => {
  collapsed.value = !collapsed.value;

  clickOnCollapseIcon();
};
</script>

<style>
@import "@prestashopcorp/puik/dist/index.css";
@import "@/common/assets/index.css";
</style>
