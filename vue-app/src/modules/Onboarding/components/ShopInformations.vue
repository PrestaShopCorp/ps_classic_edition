<template>
  <puik-card class="flex flex-row items-center px-8 py-6 gap-6">
    <div class="w-full">
      <div class="onb__shop-informations__title">
        <h2 class="puik-h3 md:custom-puik-h2">
          {{ $t("onb.homepage.shopInfos.title") }}
        </h2>
      </div>
      <div class="flex mt-4 text-xs md:text-sm">
        <div class="w-1/2">
          <p>
            <strong>
              {{ $t("onb.homepage.shopInfos.domainName") }}
            </strong>
            {{ constants.HOST }}
          </p>
          <a
            class="block w-fit m-0 mt-2 p-0 font-bold text-[#442CC7]"
            :href="getAdminLink(constants.MANAGE_DOMAIN_NAME)"
            target="_self"
            @click="trackShopInfo('Change My Domain Edition Home Name Clicked')"
          >
            {{ $t("onb.homepage.shopInfos.changeDomainName") }}
          </a>
        </div>
        <div class="w-1/2">
          <p>
            <strong>{{ $t("onb.homepage.shopInfos.subscription") }}</strong>
            <span>
              <template v-if="trialEndTimestamp">
                {{
                  $t("onb.homepage.shopInfos.endSubscriptionOn", {
                    trialEndDate: formatTimestamp(props.trialEndTimestamp, "LL", locale),
                  })
                }}
              </template>
              <template v-else>
                {{
                  $t("onb.homepage.shopInfos.nextBilling", {
                    nextBilling: formatTimestamp(props.nextBillingAt, "LL", locale),
                  })
                }}
              </template>
            </span>
          </p>
          <a
            class="block w-fit m-0 mt-2 p-0 font-bold no-underline text-[#442CC7]"
            :href="getAdminLink(constants.MANAGE_SUBSCRIPTION)"
            target="_self"
            @click="trackShopInfo('Manage My Subscription Edition Home Clicked')"
          >
            {{ $t("onb.homepage.shopInfos.manageSubscription") }}
          </a>
        </div>
      </div>
    </div>
  </puik-card>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { formatTimestamp } from "@/common/utils/dates";
import constants from "@/common/constants";
import useTabs from "@/common/composables/use-tabs";
import trackWithContext from "@/common/tracking/track";
import { useSubscriptionStore } from "../stores/useSubscriptionStore";

const props = defineProps<{
  trialEndTimestamp: number;
  nextBillingAt: number;
}>();

const { getAdminLink } = useTabs();
const { locale } = useI18n();

const subscriptionStore = useSubscriptionStore();

const hostedOrClassic = computed(() => (subscriptionStore.subscription ? "hosted" : "classic"));

const trackShopInfo = async (event: string) => {
  await trackWithContext(event, {
    shopUrl: window.location.origin,
    timestamp: new Date(),
    version: hostedOrClassic.value,
  });
};
</script>
