<template>
  <puik-card
    class="flex flex-row items-center shrink-0 px-4 py-6 gap-6 bg-amber-500 sm:shrink sm:p-8 xl:py-[34px] 2xl:py-[38px]"
  >
    <div class="w-1/3">
      <img class="mx-auto" :src="logoUrl" />
    </div>
    <div class="w-2/3">
      <h3 class="puik-h4 font-bold md:custom-puik-h3">
        {{ $t("onb.homepage.workshop.title") }}
      </h3>
      <p class="puik-body-default-bold">
        {{ $t("onb.homepage.workshop.subtitle") }}
      </p>
      <div class="my-4 text-xs md:text-sm">
        {{ $t("onb.homepage.workshop.description") }}
      </div>
      <puik-button
        variant="primary"
        size="md"
        class="h-auto"
        left-icon="assignment_turned_in"
        @click="handleWorkshopClick"
      >
        {{ $t("onb.homepage.workshop.button") }}
      </puik-button>
    </div>
  </puik-card>
</template>

<script lang="ts" setup>
import trackWithContext from "@/common/tracking/track";
import constants from "@/common/constants";
import {useContext} from "@/common/composables/use-context";

const { context } = useContext();
const logo = await import('@/modules/Onboarding/assets/img/ateliers.svg');
const logoUrl = context.value.baseUrl + '/../' + logo.default;

const handleWorkshopClick = async () => {
  await trackWithContext("Access Our Workshops Edition Home Clicked", {
    shopUrl: window.location.origin,
    timestamp: new Date(),
    version: 'classic',
  });

  window.open(constants.WORKSHOPS_URL);
};
</script>
