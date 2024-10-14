<template>
  <puik-card class="hover:shadow gap-1 overflow-hidden">
    <a
      :href="href"
      @click="(e) => handleTitleCardClick(e)"
      class="flex items-center justify-between no-underline cursor-pointer"
    >
      <div class="flex items-center gap-x-3">
        <span
          v-if="icon"
          class="puik-icon p-5 bg-[#EFF3F7] text-[#505969] text-3xl rounded-full w-14 h-14 flex items-center justify-center"
          >{{ icon }}</span
        >
        <SettingsTitle :label="label" :description="description" :className="className" />
      </div>
      <span v-if="links.length" class="puik-icon text-xl font-normal">
        {{ opened ? "expand_less" : "expand_more" }}
      </span>
    </a>
    <slide-transition :opened="opened && !!links.length">
      <Divider />
      <div class="grid grid-cols-3">
        <puik-link v-for="link in links" :href="link.href" size="lg">
          {{ link.label }}
        </puik-link>
      </div>
    </slide-transition>
  </puik-card>
</template>

<script lang="ts" setup>
import SettingsTitle from "@/modules/User/components/SettingsTitle.vue";
import type { Link } from "@/modules/User/models/Settings";
import { ref } from "vue";
import Divider from "@/common/components/Divider.vue";
import SlideTransition from "@/common/components/SlideTransition.vue";

const props = defineProps<{
  icon?: string;
  label: string;
  className: string;
  description?: string;
  href: string;
  links: Link[];
}>();

const opened = ref(false);

const handleTitleCardClick = (eventClick: Event) => {
  if (props.links.length) {
    opened.value = !opened.value;
    eventClick.preventDefault();
  }
};
</script>
