<template>
  <puik-card
    class="flex flex-row items-center shrink-0 px-4 py-6 gap-6 bg-green-100 sm:shrink sm:p-8 xl:py-[34px] 2xl:py-[38px]"
  >
    <div class="w-1/3">
      <img class="mx-auto" :src="logoUrl" />
    </div>
    <div class="w-2/3">
      <h3 class="puik-h4 font-bold md:custom-puik-h3">
        {{ $t("onb.homepage.help.title") }}
      </h3>
      <div class="my-4 text-xs md:text-sm">
        {{ $t("onb.homepage.help.description") }}
        <strong>{{ $t("onb.homepage.help.help-center") }}</strong>
      </div>
      <puik-button
        variant="primary"
        size="md"
        class="h-auto"
        left-icon="assignment_turned_in"
        @click="handleDocumentationClick"
      >
        {{ $t("onb.homepage.help.button") }}
      </puik-button>
    </div>
  </puik-card>
</template>

<script lang="ts" setup>
import i18n from "@/i18n";
import {useContext} from "@/common/composables/use-context";

const { context } = useContext();
const logo = await import('@/modules/Onboarding/assets/img/question.svg');
const logoUrl = context.value.baseUrl + '/../' + logo.default;

const handleDocumentationClick = async () => {
  window.open(i18n.global.t("onb.homepage.help.url"));
};
</script>
