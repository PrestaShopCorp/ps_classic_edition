<script lang="ts" setup>
import { computed } from "vue";
import { useSubscriptionStore } from "../stores/useSubscriptionStore";
import constants from "@/common/constants";
import useTabs from "@/common/composables/use-tabs";
import trackWithContext from "@/common/tracking/track";

defineProps<{ isShopEnabled: boolean }>();

const { getAdminLink } = useTabs();

const subscriptionStore = useSubscriptionStore();

const hostedOrClassic = computed(() => (subscriptionStore.subscription ? "hosted" : "classic"));

const goMaintenance = async () => {
  await trackWithContext("Publish Store Banner Clicked", {
    shopUrl: window.location.origin,
    timestamp: new Date(),
    version: hostedOrClassic.value,
  });

  window.location.href = getAdminLink(constants.MAINTENANCE) ?? "";
};
</script>

<template>
  <puik-alert
    v-if="isShopEnabled"
    :title="$t('onb.homepage.maintenance.online.title')"
    variant="success"
    :disabled-borders="false"
    :button-label="$t('onb.homepage.maintenance.online.button')"
    @click="goMaintenance"
  >
    {{ $t("onb.homepage.maintenance.online.description") }}
  </puik-alert>
  <puik-alert
    v-else
    :title="$t('onb.homepage.maintenance.title')"
    variant="warning"
    :disabled-borders="false"
    :button-label="$t('onb.homepage.maintenance.button')"
    @click="goMaintenance"
  >
    {{ $t("onb.homepage.maintenance.description") }}
    <strong>{{ $t("onb.homepage.maintenance.maintenance") }}</strong>
  </puik-alert>
</template>
