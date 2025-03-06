<template>
  <div class="vue-edition-homepage max-w-[1134px] mx-auto">
    <div class="mb-4">
      <h2>{{ $t("onb.homepage.title") }}</h2>
    </div>
    <maintenance-alert :is-shop-enabled="context.isShopEnabled" />
    <div class="onb__homepage__shop-info"></div>
    <div class="grid gap-4 items-stretch mt-4 md:grid-cols-2 grid-rows-1">
      <setup-guide v-if="!isHidden && steps.length" />
      <div class="only:grid only:col-span-full only:md:grid-cols-2 flex flex-col gap-4">
        <our-workshops v-if="isWorkshopsFeatureActive"  class="row-span-2"/>
        <help-center class="row-span-2" />
      </div>
    </div>
    <care-offers class="mt-4" />
    <ps-academy />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useContext } from "@/common/composables/use-context";
import MaintenanceAlert from "@/modules/Onboarding/components/MaintenanceAlert.vue";
import SetupGuide from "@/modules/Onboarding/components/SetupGuide/SetupGuide.vue";
import HelpCenter from "@/modules/Onboarding/components/HelpCenter.vue";
import OurWorkshops from "@/modules/Onboarding/components/OurWorkshops.vue";
import CareOffers from "@/modules/Onboarding/components/CareOffers.vue";
import PsAcademy from "@/modules/Onboarding/components/PsAcademy/PsAcademy.vue"
import { useSetupGuideStore } from "@/modules/Onboarding/stores/useSetupGuideStore";
import {
  FeatureFlag,
  isFeatureActive,
} from "../services/featureFlag";

const { context } = useContext();
const setupGuideStore = useSetupGuideStore();
const { isHidden, steps } = storeToRefs(setupGuideStore);

const isWorkshopsFeatureActive = isFeatureActive(FeatureFlag.WORKSHOPS_FEATURE, context.value.shopCountry);

onMounted(async () => {
  /* Initialize Account */
  (window as any).psaccountsVue?.init();
});

</script>
