<template>
  <puik-card class="px-7 py-6 gap-2 h-fit">
    <div class="flex flex-col gap-6">
      <SetupGuideHeader @openModal="setModalIsOpen(true)" />
      <p v-if="setupGuideStore.remainingSteps > 0">{{ $t("onb.homepage.setupGuide.description") }}</p>
      <p v-else>{{ $t("onb.homepage.setupGuide.description_done") }}</p>
      <SetupGuideProgressBar />
    </div>
    <SetupGuideList v-if="setupGuideStore.remainingSteps > 0" />
    <div class="flex justify-end" v-else>
      <puik-button class="w-fit" @click="setModalVisibility">{{
        $t("onb.homepage.setupGuide.exploreButton")
      }}</puik-button>
    </div>
    <puik-modal
      class="z-[2000]"
      :title="$t('onb.homepage.setupGuide.modal.title')"
      :main-button-text="$t('onb.homepage.setupGuide.modal.mainButton')"
      :second-button-text="$t('onb.homepage.setupGuide.modal.cancelButton')"
      title-icon="delete"
      :variant="PuikModalVariant.DESTRUCTIVE"
      :size="PuikModalSize.MEDIUM"
      :is-open="isModalOpen"
      @close="setModalIsOpen(false)"
      @button-second="setModalIsOpen(false)"
      @button-main="setModalVisibility"
    >
      {{ $t("onb.homepage.setupGuide.modal.description") }}
    </puik-modal>
  </puik-card>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useSetupGuideStore } from "@/modules/Onboarding/stores/useSetupGuideStore";
import SetupGuideHeader from "@/modules/Onboarding/components/SetupGuide/SetupGuideHeader.vue";
import SetupGuideProgressBar from "@/modules/Onboarding/components/SetupGuide/SetupGuideProgressBar.vue";
import SetupGuideList from "@/modules/Onboarding/components/SetupGuide/SetupGuideList.vue";
import confetti from "canvas-confetti";
import { PuikModalSize, PuikModalVariant } from "@prestashopcorp/puik/es";

const setupGuideStore = useSetupGuideStore();
const { removeModal, steps } = setupGuideStore;
const isModalOpen = ref(false);

const setModalIsOpen = async (isOpened: boolean) => {
  isModalOpen.value = isOpened;

  const headlessui_portal_root = document.querySelector("#headlessui-portal-root");
  if (!headlessui_portal_root?.classList.contains("puik-style")) {
    headlessui_portal_root?.classList.add("puik-style");
  }
};

const setModalVisibility = async () => {
  setModalIsOpen(false);
  removeModal();
};

const throwConfetti = () => {
  const count = 200;
  const defaults = {
    colors: ["174EEF", "207F4B", "7B4FAC", "A4DBE8", "BA151A", "FFA000"],
    scalar: 1.5,
    shapes: ["rectangle"],
    origin: { y: 0.7 },
  };

  function fire(particleRatio: number, opts: any) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

watch(steps, (val) => {
  console.log("steps", steps);
  if (setupGuideStore.remainingSteps === 0) {
    throwConfetti();
  }
});
</script>
