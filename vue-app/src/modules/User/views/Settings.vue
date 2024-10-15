<script setup lang="ts">
import { useContext } from "@/common/composables/use-context";
import SettingsCard from "@/modules/User/components/SettingsCard.vue";
import { buildSettingsItems } from "@/modules/User/models/Settings";
import { useI18n } from "vue-i18n";
import SettingsTitle from "@/modules/User/components/SettingsTitle.vue";

const { context } = useContext();
const { t } = useI18n();

const tabs = buildSettingsItems(context.value.tabs, t);
const modulesTabs = buildSettingsItems(context.value.modulesTabs, t);
</script>

<template>
  <div class="flex">
    <div class="flex flex-col gap-y-5 w-full mx-auto lg:max-w-3xl xl:max-w-5xl">
      <SettingsTitle label="Configuration" :description="$t('onb.settings.description')" className="configuration" />
      <SettingsCard
        v-for="item in tabs"
        :key="item.label"
        :icon="item?.icon"
        :href="item.href"
        :description="item?.description"
        :label="item.label"
        :links="item.links"
        :className="item.className"
      />
      <SettingsTitle label="Modules" :description="$t('onb.settings.description')" className="modules"  />

      <SettingsCard
        v-for="item in modulesTabs"
        :key="item.label"
        :href="item.href"
        :label="item.label"
        :links="item.links"
        :className="item.className"
      />
    </div>
  </div>
</template>

<style>
body {
  background: #f8fafc;
}
.header-toolbar .title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
  padding-bottom: 10px;
}
</style>
