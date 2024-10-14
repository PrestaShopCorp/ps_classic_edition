<template>
  <div class="flex flex-col [&:not(:last-child)]:border-b [&:not(:last-child)]:border-light-blue-300 group">
    <SetupGuideAccordionHeader
      :step="step"
      :isOpened="isExpanded"
      :isExpandable="isExpandable"
      @markAsCompleted="markAsCompleted"
      @open="toggleExpanded"
    />
    <slide-transition :id="step.name" :opened="isExpanded">
      <div
        class="flex flex-col items-start w-full gap-4"
        :class="{
          hidden: !isExpanded,
          'pb-6': isExpandable,
        }"
      >
        <prestashop-accounts v-if="step.name === 'account'"></prestashop-accounts>
        <div v-if="step.content" v-for="content in step.content" :key="content?.description">
          <div v-if="content" class="flex flex-col gap-2 pt-3">
            <h5 class="puik-h5" v-if="content.subtitle">{{ $t(content.subtitle) }}</h5>
            <p v-if="content.description">{{ $t(content.description) }}</p>
            <puik-link
              v-if="content.documentation"
              :href="$t(content.documentation.href)"
              @click="openDocumentationLink"
              target="_blank"
              size="md"
            >
              {{ $t(content.documentation.cta) }}
            </puik-link>
          </div>

          <div v-if="content" class="flex flex-row gap-2">
            <puik-button
              v-for="button in content.buttons"
              :key="button.cta"
              :variant="button.variant || 'primary'"
              size="md"
              class="h-auto mt-4"
              @click="openStep(button)"
              >{{ $t(button.cta) }}</puik-button
            >
          </div>
        </div>
      </div>
    </slide-transition>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, type PropType, onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import { useSubscriptionStore } from "../../stores/useSubscriptionStore";
import { useSetupGuideStore } from "@/modules/Onboarding/stores/useSetupGuideStore";
import trackWithContext from "@/common/tracking/track";
import SlideTransition from "@/common/components/SlideTransition.vue";
import SetupGuideAccordionHeader from "@/modules/Onboarding/components/SetupGuide/SetupGuideAccordionHeader.vue";
import { SetupGuideEvent, SetupGuideStep as StepName } from "@/modules/Onboarding/enums/setupGuide.enum";
import type { SetupGuideButton, SetupGuideStep } from "@/modules/Onboarding/types/setup-guide";

const { isExpandable, opened, step } = defineProps({
  step: {
    type: Object as PropType<SetupGuideStep>,
    required: true,
  },
  opened: {
    type: Boolean,
    default: false,
  },
  isExpandable: {
    type: Boolean,
    default: true,
  },
});

const subscriptionStore = useSubscriptionStore();
const setupGuideStore = useSetupGuideStore();
const { markStepAsCompleted, setExpandStep } = setupGuideStore;
const { expandedStep } = storeToRefs(setupGuideStore);

const hostedOrClassic = computed(() => (subscriptionStore.subscription ? "hosted" : "classic"));

const isExpanded = ref(opened === true ? opened : expandedStep.value === step.name);

const markAsCompleted = async (markAsCompletedStatus?: boolean) => {
  markStepAsCompleted(step.name, markAsCompletedStatus);
  toggleExpanded(false, true);
  if ((markAsCompletedStatus === true || markAsCompletedStatus === undefined) && step.isCompleted) {
    await trackWithContext(getTrackEvent(step.name as StepName, SetupGuideEvent.CHECK), {
      shopUrl: window.location.origin,
      timestamp: new Date(),
      version: hostedOrClassic.value,
    });
  }
};

const toggleExpanded = (isExpandedStatus?: boolean, onSameStep?: boolean) => {
  if (!isExpandable) return;
  if (onSameStep && expandedStep.value !== step.name) return;

  if (isExpandedStatus !== undefined) {
    isExpandedStatus ? setExpandStep(step.name) : setExpandStep(null);
    return;
  }

  isExpanded.value ? setExpandStep(null) : setExpandStep(step.name);
};

const openDocumentationLink = async () => {
  await trackWithContext(getTrackEvent(step.name as StepName, SetupGuideEvent.DOCUMENTATION), {
    shopUrl: window.location.origin,
    timestamp: new Date(),
    version: hostedOrClassic.value,
  });
};

const openStep = async (buttonStep: SetupGuideButton) => {
  if (buttonStep.skip) {
    markAsCompleted(true);
    toggleExpanded(false, true);
    await trackWithContext(getTrackEvent(step.name as StepName, SetupGuideEvent.SKIPPED), {
      shopUrl: window.location.origin,
      timestamp: new Date(),
      version: hostedOrClassic.value,
    });
  } else {
    await trackWithContext(getTrackEvent(step.name as StepName, SetupGuideEvent.CTA), {
      shopUrl: window.location.origin,
      timestamp: new Date(),
      version: hostedOrClassic.value,
    });
    window.location.href = buttonStep.href;
  }
};

const getTrackEvent = (stepName: StepName, event: SetupGuideEvent) => {
  let value = "";
  switch (event) {
    case SetupGuideEvent.CHECK:
      value = " Done";
      break;
    case SetupGuideEvent.DOCUMENTATION:
      value = " Help Clicked";
      break;
    case SetupGuideEvent.CTA:
      value = " Button Clicked";
      break;
    case SetupGuideEvent.SKIPPED:
      value = " Skipped";
      break;
  }

  let trackEvent = "";
  switch (stepName) {
    case StepName.DOMAIN:
      trackEvent = `Domain Checklist BO ${value}`;
      break;
    case StepName.ACCOUNT:
      trackEvent = `Association Checklist BO ${value}`;
      break;
    case StepName.PRODUCT:
      trackEvent = `Product Checklist BO ${value}`;
      break;
    case StepName.PAYMENT:
      trackEvent = `Payment Checklist BO ${value}`;
      break;
    case StepName.SHIPPING:
      trackEvent = `Shipping Checklist BO ${value}`;
      break;
    case StepName.LEGAL:
      trackEvent = `Shipping Checklist BO ${value}`;
      break;
    case StepName.THEME:
      trackEvent = `Appearance Checklist BO ${value}`;
      break;
  }

  return trackEvent;
};

watch(
  () => expandedStep.value,
  (newValue) => {
    if (!isExpandable) return;
    isExpanded.value = newValue === step.name;
  },
);

onMounted(() => {
  const isOnboardingCompleted = (window as any).psaccountsVue?.isOnboardingCompleted();
  markStepAsCompleted("account", isOnboardingCompleted);
});
</script>
