<script lang="ts" setup>
import { useContext } from "@/common/composables/use-context";

defineProps<{ isShopEnabled: boolean }>();

const { context } = useContext();

const goMaintenance = async () => {
  window.location.href = context.value.MAINTENANCE_URL;
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
