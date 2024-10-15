<template>
  <SideBarItem :icon="icon" :class="{ 'bg-[#F7F7F7]': opened }" :selected="hasLinkSelected" class="relative">
    <div v-if="opened" class="flex flex-col overflow-hidden bg-[#F7F7F7] absolute -top-1 w-52 left-[123%]">
      <SideBarItemLink v-for="link in links" :href="link.href" :label="link.label" :selected="link.selected" />
    </div>
  </SideBarItem>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { Link } from "@/modules/Rebranding/components/SideBar/SideBarItemLink.vue";
import SideBarItemLink from "@/modules/Rebranding/components/SideBar/SideBarItemLink.vue";
import SideBarItem from "@/modules/Rebranding/components/SideBar/SideBarItem.vue";

export interface SideBarItemWithLinksCollapsedProps {
  icon: string;
  opened: boolean;
  links: Link[];
}

const props = defineProps<SideBarItemWithLinksCollapsedProps>();

const hasLinkSelected = computed(() => props.links?.some((link) => link.selected) ?? false);
</script>
