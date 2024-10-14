<template>
  <div>
    <SideBarItem
      :label="label"
      :icon="icon"
      :selected="hasLinkSelected"
      :class="{ 'bg-[#F7F7F7]': opened }"
      :class_name="class_name"
      @label-click="$emit('label-click')"
    >
      <template #icon>
        <puik-icon :icon="opened ? 'expand_less' : 'expand_more'" class="text-xl font-normal" node-type="span" />
      </template>
      <slide-transition class="flex flex-col bg-[#F7F7F7]" :opened="opened">
        <SideBarItemLink
          v-for="link in links"
          :href="link.href"
          :label="link.label"
          :selected="link.selected"
          :class_name="link.class_name"
        />
      </slide-transition>
    </SideBarItem>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import type { Link } from "@/modules/Rebranding/components/SideBar/SideBarItemLink.vue";
import SlideTransition from "@/common/components/SlideTransition.vue";
import SideBarItem from "@/modules/Rebranding/components/SideBar/SideBarItem.vue";
import SideBarItemLink from "@/modules/Rebranding/components/SideBar/SideBarItemLink.vue";

export interface SideBarItemWithLinksProps {
  class_name?: string;
  icon: string;
  label: string;
  opened: boolean;
  links: Link[];
}

const props = defineProps<SideBarItemWithLinksProps>();
const emit = defineEmits<{
  (e: "init"): void;
  (e: "label-click"): void;
}>();

const hasLinkSelected = computed(() => props.links?.some((link) => link.selected) ?? false);

onMounted(() => {
  if (hasLinkSelected.value) {
    emit("init");
  }
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
