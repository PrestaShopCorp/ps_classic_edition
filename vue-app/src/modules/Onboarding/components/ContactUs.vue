<template>
  <puik-card
    class="flex flex-row items-center shrink-0 px-4 py-6 gap-6 bg-amber-500 sm:shrink sm:p-8 xl:py-[34px] 2xl:py-[38px]"
  >
    <div class="w-1/3">
      <i class="material-icons" style="font-size: 120px">support_agent</i>
    </div>
    <div class="w-2/3">
      <h3 class="puik-h4 font-bold md:custom-puik-h3">
        {{ $t("onb.homepage.contact-us.title") }}
      </h3>
      <div class="my-4 text-xs md:text-sm">
        {{ $t("onb.homepage.contact-us.description") }}
      </div>
      <puik-button
        variant="primary"
        size="md"
        class="h-auto"
        left-icon="assignment_turned_in"
        @click="handleContactUsClick"
      >
        {{ $t("onb.homepage.contact-us.button") }}
      </puik-button>
    </div>
  </puik-card>
</template>

<script lang="ts" setup>
import i18n from "@/i18n";

const handleContactUsClick = async () => {
  window.open(i18n.global.t("onb.homepage.contact-us.url"));
};
</script>
