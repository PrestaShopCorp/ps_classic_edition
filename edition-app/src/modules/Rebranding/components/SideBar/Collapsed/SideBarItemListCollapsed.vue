<template>
  <div class="flex flex-col basis-full">
    <template v-for="item in navItems" :key="item.icon">
      <SideBarItemWithLinksCollapsed
        v-if="item.links.length > 0"
        :icon="item.icon"
        :links="item.links"
        :opened="openedItemLabel === item.label"
        @label-click="toggleList(item.label)"
      />
      <template v-else>
        <Divider v-if="item.icon === 'settings'" />
        <SideBarItem
          :icon="item.icon"
          :selected="item.selected"
          :href="item.href"
          :opened="openedItemLabel === item.label"
          @click="toggleList(item.label)"
        />
      </template>
    </template>
  </div>
</template>

<script lang="ts" setup>
import useList from "@/modules/Rebranding/components/SideBar/composables/useList";
import type { navItem } from "@/modules/Rebranding/models/navItems";
import SideBarItem from "@/modules/Rebranding/components/SideBar/SideBarItem.vue";
import Divider from "@/common/components/Divider.vue";
import SideBarItemWithLinksCollapsed from "@/modules/Rebranding/components/SideBar/Collapsed/SideBarItemWithLinksCollapsed.vue";

export interface SideBarItemListProps {
  navItems: navItem[];
}

const props = defineProps<SideBarItemListProps>();

const { openedItemLabel, toggleList } = useList();
</script>
