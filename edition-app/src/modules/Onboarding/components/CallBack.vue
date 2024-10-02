<template>
  <puik-card
    class="flex flex-row items-center shrink-0 px-4 py-6 gap-6 bg-ocean-blue-500 sm:shrink sm:p-8 xl:py-[34px] 2xl:py-[38px]"
    v-if="callBackCardVisibility"
  >
    <div class="w-1/3">
      <img class="mx-auto" src="@/modules/Onboarding/assets/img/included-subscription.svg" />
    </div>
    <div class="w-2/3">
      <h3 class="puik-h4 font-bold md:custom-puik-h3">
        {{ $t("onb.homepage.call-back.title") }}
      </h3>
      <p class="puik-body-default-bold">
        {{ $t("onb.homepage.call-back.subtitle") }}
      </p>
      <div class="my-4 text-xs md:text-sm">
        {{ $t("onb.homepage.call-back.description") }}
      </div>
      <puik-button
        variant="primary"
        size="md"
        class="h-auto"
        left-icon="phone_iphone"
        :disabled="callBackButtonDisabled"
        @click="handleCallBackClick"
      >
        {{ $t("onb.homepage.call-back.button") }}
      </puik-button>
    </div>
  </puik-card>
</template>

<script lang="ts" setup>
import { useContext } from "@/common/composables/use-context";
import constants from "@/common/constants";
import {
  getCallBackStatus,
  getCallBackCardVisibility,
  getCallBackButtonDisabled,
} from "@/modules/Onboarding/services/callback";
import { onMounted, ref } from "vue";
import { jsonFetch } from "@/common/utils/api";
import trackWithContext from "@/common/tracking/track";

const {
  context: {
    value: {
      callBack: { isCalledBack },
      psAccountShopID,
      shopName,
      CALL_BACK_MODULE_URL,
    },
  },
} = useContext();

const callBackCardVisibility = ref(false);
const callBackButtonDisabled = ref(false);

const { subscriptionId } = defineProps({
  subscriptionId: {
    type: String,
    required: true,
  },
});

onMounted(async () => {
  if (!isCalledBack) {
    const callBackStatus = await getCallBackStatus(subscriptionId);

    callBackCardVisibility.value = getCallBackCardVisibility(callBackStatus);
    callBackButtonDisabled.value = getCallBackButtonDisabled(callBackStatus);

    if (!callBackCardVisibility.value) {
      const response: { eventTriggered: boolean } = await jsonFetch(CALL_BACK_MODULE_URL, "POST", {
        isCalledBack: true,
      });

      if (response.eventTriggered === true) {
        await trackWithContext("call_back_done", { subscriptionId });
      }
    }
  }
});

const handleCallBackClick = async () => {
  window.open(
    `${constants.CALL_BACK_TYPEFORM_URL}#id_souscription=${subscriptionId}&shop_id=${psAccountShopID}&shop_name=${shopName}`,
  );
  await trackWithContext("call_back_requested", { subscriptionId });
};
</script>
