<template>
  <template v-for="item in navItems" :key="item.icon">
    <SideBarItemWithLinks
      v-if="item.links.length"
      :icon="item.icon"
      :label="item.label"
      :class_name="item.class_name"
      :links="item.links"
      :opened="openedItemLabel === item.label"
      @label-click="toggleList(item.label)"
      @init="toggleList(item.label)"
    />
    <template v-else>
      <Divider v-if="item.icon === 'settings'" />
      <SideBarItem
        :icon="item.icon"
        :label="item.label"
        :class_name="item.class_name"
        :selected="item.selected"
        :href="item.href"
        :opened="openedItemLabel === item.label"
        @click="toggleList(item.label)"
      />
    </template>
  </template>
</template>

<script lang="ts" setup>
import useList from "@/modules/Rebranding/components/SideBar/composables/useList";
import type { navItem } from "@/modules/Rebranding/models/navItems";
import Divider from "@/common/components/Divider.vue";
import SideBarItem from "@/modules/Rebranding/components/SideBar/SideBarItem.vue";
import SideBarItemWithLinks from "@/modules/Rebranding/components/SideBar/SideBarItemWithLinks.vue";

const props = defineProps<{ navItems: navItem[] }>();

const { openedItemLabel, toggleList } = useList();
</script>
