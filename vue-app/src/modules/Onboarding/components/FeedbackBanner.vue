<template>
  <div class="flex flex-row items-center justify-center gap-2 mt-12">
    <div class="font-medium">
      {{ feedback.text }}
    </div>
    <puik-link
      variant="primary"
      :target="feedback.link.target"
      :href="feedback.link.href"
      size="md"
      class="h-auto"
      :left-icon="feedback.link.icon"
      @click="trackFeedback"
    >
      {{ feedback.link.text ?? "Go" }}
    </puik-link>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useSubscriptionStore } from "../stores/useSubscriptionStore";
import trackWithContext from "@/common/tracking/track";
import { type HomepageFormFeedback } from "@/common/gql/graphql";

defineProps<{ feedback: HomepageFormFeedback }>();

const subscriptionStore = useSubscriptionStore();
const hostedOrClassic = computed(() => (subscriptionStore.subscription ? "hosted" : "classic"));

const trackFeedback = async () => {
  await trackWithContext("Feedback BO Classic Clicked", {
    shopUrl: window.location.origin,
    timestamp: new Date(),
    version: hostedOrClassic.value,
  });
};
</script>
