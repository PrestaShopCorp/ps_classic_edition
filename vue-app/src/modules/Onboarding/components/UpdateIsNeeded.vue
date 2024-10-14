<script lang="ts" setup>
import { useContext } from "@/common/composables/use-context";
import { ref } from "vue";

const { context } = useContext();

const updateStatus = ref<null | "running" | "success" | "error">(null);
const errorReason = ref<string | null>(null);
const closed = ref<boolean>(false);

const goUpdateModule = async () => {
  updateStatus.value = "running";

  try {
    const result = await (await fetch(context.value.moduleUpdateLink, { method: "POST" })).json();

    if (result[context.value.moduleSlug]?.status) {
      updateStatus.value = "success";
      reload();
    } else {
      throw new Error(result[context.value.moduleSlug]?.msg);
    }
  } catch (e: any) {
    updateStatus.value = "error";
    errorReason.value = e.message ?? e.toString() ?? e;
    console.error(e);
  }
};

const reload = () => location.reload();
</script>

<template>
  <div v-if="!closed" class="self">
    <puik-alert
      v-if="updateStatus === 'running' || updateStatus === null"
      :title="
        updateStatus === 'running'
          ? $t('onb.homepage.update-modal.update-running')
          : $t('onb.homepage.update-modal.update-required', { moduleName: context.moduleName })
      "
      variant="warning"
      :disabled-borders="false"
      :isClosable="true"
      @close="() => (closed = true)"
    >
      <p
        class="loading-p"
        v-if="updateStatus === 'running'"
        v-html="$t('onb.homepage.update-modal.please-wait', { moduleName: context.moduleName })"
      ></p>
      <p v-else v-html="$t('onb.homepage.update-modal.module-needs-update', { moduleName: context.moduleName })"></p>
    </puik-alert>

    <puik-button
      v-if="updateStatus === null"
      @click="goUpdateModule"
      variant="primary"
      v-html="$t('onb.homepage.update-modal.update-module-btn', { moduleName: context.moduleName })"
    ></puik-button>
    <puik-icon v-if="updateStatus === 'running'" icon="refresh" class="refresh-icon" font-size="45px" />

    <puik-alert
      v-if="updateStatus === 'success'"
      :title="$t('onb.homepage.update-modal.update-success', { moduleName: context.moduleName })"
      variant="success"
    ></puik-alert>

    <puik-alert
      v-if="updateStatus === 'error'"
      :title="$t('onb.homepage.update-modal.update-error', { moduleName: context.moduleName })"
      variant="error"
    >
      <p>{{ $t("onb.homepage.update-modal.error-occured") }}</p>
      <p v-if="errorReason">{{ errorReason }}</p>

      <div class="mt-4 flex justify-center">
        <puik-button @click="reload">{{ $t("onb.homepage.update-modal.refresh") }}</puik-button>
      </div>
    </puik-alert>
  </div>
</template>

<style scoped>
.self {
  position: relative;
  top: 10vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 3rem;
}

.self + :deep(.vue-edition-homepage) {
  filter: blur(1.2rem);
  pointer-events: none;
  user-select: none;
}

.loading-p {
  display: flex;
  align-items: center;
}

.refresh-icon {
  animation-name: loading;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
  animation-timing-function: linear;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
