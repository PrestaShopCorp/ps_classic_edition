<template>
  <update-is-needed v-if="updateIsRequired() && context.moduleIsUpdatable" />
  <promo-banner v-else-if="showBanner" :promos="promoBanners" @close="closePromoBanner" />
  <div class="vue-edition-homepage max-w-[1134px] mx-auto">
    <div class="mb-4">
      <h2>{{ $t("onb.homepage.title") }}</h2>
    </div>
    <maintenance-alert :is-shop-enabled="context.isShopEnabled" />
    <shop-informations v-if="subscriptionId" class="mt-4" :nextBiling="nextBillingAt" :trialEndTimestamp="trialEndTimestamp" />
    <div class="onb__homepage__shop-info"></div>
    <div class="grid gap-4 items-stretch mt-4 md:grid-cols-2 grid-rows-1">
      <setup-guide v-if="!isHidden && steps.length" />
      <div class="only:grid only:col-span-full only:md:grid-cols-2 flex flex-col gap-4">
        <call-back
          v-if="subscriptionId && isCallbackFeatureActive"
          class="row-span-2"
          :subscription-id="subscriptionId"
        />
        <disk-usage v-if="instanceInfos" class="row-span-2" :disk="instanceInfos.disk" />
        <our-workshops v-if="isWorkshopsFeatureActive"  class="row-span-2"/>
        <help-center class="row-span-2" />
        <div v-if="isDynamicBlocEnabled">
          <dynamic-bloc v-for="bloc in blocDatasList" :bloc="bloc" />
        </div>
      </div>
    </div>
    <care-offers v-if="!subscription && !loadingSub" class="mt-4" />
    <ps-academy v-if="!subscription && !loadingSub" />
    <feedback-banner :feedback="formFeedbackData" v-if="isFormFeedBackEnabled && formFeedbackData?.link.href"></feedback-banner>
  </div>
</template>


<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { computed, onBeforeMount, onMounted, ref } from "vue";
import { jsonFetch } from "@/common/utils/api";
import { useContext } from "@/common/composables/use-context";
import { getInstanceInfos, getShopDomainInfos } from "@/modules/Onboarding/services/graphql.client";
import MaintenanceAlert from "@/modules/Onboarding/components/MaintenanceAlert.vue";
import ShopInformations from "@/modules/Onboarding/components/ShopInformations.vue";
import DynamicBloc from "@/modules/Onboarding/components/DynamicBloc.vue";
import FeedbackBanner from "@/modules/Onboarding/components/FeedbackBanner.vue";
import SetupGuide from "@/modules/Onboarding/components/SetupGuide/SetupGuide.vue";
import HelpCenter from "@/modules/Onboarding/components/HelpCenter.vue";
import DiskUsage from "@/modules/Onboarding/components/DiskUsage.vue";
import CallBack from "@/modules/Onboarding/components/CallBack.vue";
import OurWorkshops from "@/modules/Onboarding/components/OurWorkshops.vue";
import PromoBanner from "@/modules/Onboarding/components/PromoBanner.vue";
import UpdateIsNeeded from "@/modules/Onboarding/components/UpdateIsNeeded.vue";
import CareOffers from "@/modules/Onboarding/components/CareOffers.vue";
import PsAcademy from "@/modules/Onboarding/components/PsAcademy/PsAcademy.vue"
import { useSetupGuideStore } from "@/modules/Onboarding/stores/useSetupGuideStore";
import { 
  FeatureFlag, 
  isFeatureActive,
  isFormFeedBackEnabled,
  isPromoBannerEnabled,
  isDynamicBlocEnabled,
  isDiskUsageEnabled
} from "../services/featureFlag";
import { getHomepageDynamicBlocDatas } from '../services/graphql.client';
import type { HomepageDynamicBloc, HomepageFormFeedback } from "@/common/gql/graphql";
import type { PromoBannerPromo } from "../types/promo";
import { useSubscriptionStore } from "../stores/useSubscriptionStore";

const { fetchSubscription } = useSubscriptionStore();
const { subscription } = storeToRefs(useSubscriptionStore())
const { context, updateIsRequired } = useContext();
const setupGuideStore = useSetupGuideStore();
const { isHidden, steps } = storeToRefs(setupGuideStore);

const trialEndTimestamp = ref(0);
const nextBillingAt = ref(0);
const subscriptionId = ref(context.value.psSubscriptionID);
const displayPromoBanner = ref(true);
const promoBanners = ref<PromoBannerPromo[]>([]);
const loadingSub = ref(true);

const showBanner = computed(() => isPromoBannerEnabled && displayPromoBanner.value && promoBanners.value.length > 0);

const blocDatasList = ref<HomepageDynamicBloc[]>([]);
const formFeedbackData = ref<HomepageFormFeedback>();
const instanceInfos = ref();



const isCallbackFeatureActive = isFeatureActive(FeatureFlag.CALLBACK_FEATURE, context.value.shopCountry);
const isWorkshopsFeatureActive = isFeatureActive(FeatureFlag.WORKSHOPS_FEATURE, context.value.shopCountry);
const sessionStorageDisplayPromoBannerKey = 'psDisplayPromoBanner';

function closePromoBanner() {
  displayPromoBanner.value = false;
  sessionStorage.setItem(sessionStorageDisplayPromoBannerKey, '0');
}

const fetchSubscriptionInfos = async () => {
  try {
    const sub = await fetchSubscription()
    if (subscriptionId.value && subscriptionId.value !== sub.id) {
      await jsonFetch(context.value.CALL_BACK_MODULE_URL, "POST", {
        subscriptionId: subscriptionId,
      });
    }

    subscriptionId.value = sub.id ?? "";
    trialEndTimestamp.value = sub.trial_end ?? 0;

  } catch (e) {
    console.log(e);
  }
  loadingSub.value = false;
}

const fetchDynamicBlocDatas = async () => {

  const { blocs, formFeedback, promoBanners: banners } = await getHomepageDynamicBlocDatas(subscription.value);
  blocDatasList.value = blocs;
  formFeedbackData.value = formFeedback;
  promoBanners.value = banners;
}

const fetchInstanceInfos = async () => {
  try {
    const { instanceId } = await getShopDomainInfos(context.value.psAccountShopID)
    const res = await getInstanceInfos(instanceId);
    if (!res) return;
    instanceInfos.value = { disk: res.disk };
  } catch (e) {
    console.log(e);
  }
}

onBeforeMount(() => {
  displayPromoBanner.value = sessionStorage.getItem(sessionStorageDisplayPromoBannerKey) ?
    Boolean(Number(sessionStorage.getItem(sessionStorageDisplayPromoBannerKey))) :
    true;
});


onMounted(async () => {

  /* Initialize Account */
  (window as any).psaccountsVue?.init();

  if (isDiskUsageEnabled) {
    fetchInstanceInfos();
  }

  await fetchSubscriptionInfos();
  fetchDynamicBlocDatas();

  nextBillingAt.value = subscription.value?.next_billing_at || 0;
});

</script>

<style>
.promo-banner__container {
  display: grid;
}

.promo-banner__container .promo-banner__item {
  grid-area: 1 / 1;
  transition: transform .3s ease-in-out;
}

.promo-banner__item.promo-banner__item--invisible {
  visibility: hidden;
  pointer-events: none;
}
</style>
