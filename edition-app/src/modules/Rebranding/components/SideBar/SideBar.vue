<template>
  <div class="text-[#363a41] pb-4 sm:pb-16">
    <SideBarHeader :collapsed="collapsed" @on-collapse-click="$emit('on-collapse-click')" />
    <div class="px-2 pt-4">
      <SideBarItemListCollapsed v-if="collapsed" :nav-items="navItems" />
      <SideBarItemList v-else :nav-items="navItems" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { navItem } from "@/modules/Rebranding/models/navItems";
import SideBarHeader from "@/modules/Rebranding/components/SideBar/SideBarHeader.vue";
import SideBarItemListCollapsed from "@/modules/Rebranding/components/SideBar/Collapsed/SideBarItemListCollapsed.vue";
import SideBarItemList from "@/modules/Rebranding/components/SideBar/SideBarItemList.vue";

defineProps<{ navItems: navItem[]; collapsed: boolean }>();
</script>
