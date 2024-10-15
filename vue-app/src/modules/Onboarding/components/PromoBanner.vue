<template>
  <Teleport to=".header-toolbar">
    <div v-if="promos.length" class="promo-banner puik-style" style="order: -1">
      <aside
        class="promo-banner__container text-primary-800 py-4 sm:py-2 relative overflow-hidden"
        :class="backgroundClass"
      >
        <div
          v-for="(promo, index) in promos"
          :key="index"
          ref="promosDom"
          class="promo-banner__item d-flex sm:items-center justify-center gap-2 px-4 sm:px-6"
          :class="{
            'promo-banner__item--invisible': index !== 0,
            'promo-banner__item--enter': index !== 0,
            ['pr-12 sm:pr-16']: closable,
          }"
        >
          <puik-icon class="text-2xl leading-6 self-start sm:self-center" v-if="promo.icon" :icon="promo.icon" />
          <div class="d-flex gap-x-4 gap-y-3 sm:items-center flex-wrap">
            <p class="font-medium text-xs leading-[1.125rem] sm:text-sm">
              {{ promo.text }}
            </p>
            <puik-button
              class="sm:h-7 sm:py-1 sm:px-2 sm:text-xs"
              v-if="promo.link"
              variant="primary"
              right-icon="arrow_forward"
              :href="promo.link.href"
              :target="promo.link.target"
              @click="trackPB(promo.text)"
            >
              {{ promo.link.text }}
            </puik-button>
          </div>
        </div>
        <button
          v-if="closable"
          class="absolute right-3 top-[0.875rem] sm:top-[0.625rem] p-1 flex justify-center items-center w-6 h-6 puik-button--text focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-blue"
          @click="close"
        >
          <puik-icon class="w-[1.5rem] h-[1.5rem] leading-[1.5rem] test" icon="close" font-size="1.5rem" />
        </button>
      </aside>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watchEffect, onMounted, onBeforeUnmount, computed } from "vue";
import { useSubscriptionStore } from "../stores/useSubscriptionStore";
import { PromoBannerVariants, type PromoBannerProps } from "@/modules/Onboarding/types/promo";
import trackWithContext from "@/common/tracking/track";

const emit = defineEmits(["close"]);

const props = withDefaults(defineProps<PromoBannerProps>(), {
  variant: PromoBannerVariants.BLUE,
  closable: true,
});

const subscriptionStore = useSubscriptionStore();

const hostedOrClassic = computed(() => (subscriptionStore.subscription ? "hosted" : "classic"));

const promosDom = ref<HTMLElement[] | undefined>();
let animationInterval: NodeJS.Timeout | null;

const timeToDisplay = 5000;
const timeTransition = 800;

const close = () => {
  emit("close");
};

const getBackgroundClass = (variant: PromoBannerVariants): string => {
  switch (variant) {
    case PromoBannerVariants.PURPLE:
      return "bg-purple";
    case PromoBannerVariants.YELLOW:
      return "bg-amber";
    case PromoBannerVariants.GREEN:
      return "bg-green-marketing";
    case PromoBannerVariants.BLUE:
      return "bg-ocean-blue";
  }
};

const backgroundClass = ref<String>(getBackgroundClass(props.variant));

const clearAnimationInterval = () => {
  if (animationInterval) {
    clearInterval(animationInterval);
  }
};

const enterElement = (element: HTMLElement): void => {
  if (element?.classList) {
    element.classList.remove("promo-banner__item--invisible");
    element.classList.remove("promo-banner__item--enter");
  }
};

const leaveElement = (element: HTMLElement): void => {
  element.classList.add("promo-banner__item--leave");
  setTimeout(() => {
    element.classList.add("promo-banner__item--invisible");
    element.classList.add("promo-banner__item--enter");
    element.classList.remove("promo-banner__item--leave");
  }, timeTransition);
};

const switchElements = () => {
  clearAnimationInterval();

  const elements = [...(promosDom?.value ?? [])];
  const elementsNumber = elements.length;

  if (elementsNumber === 1) return;

  let currentElementDisplayed = 0;

  if (animationInterval) {
    clearInterval(animationInterval);
  }
  animationInterval = setInterval(() => {
    const nextElementNumber = elementsNumber - 1 >= currentElementDisplayed + 1 ? currentElementDisplayed + 1 : 0;
    leaveElement(elements[currentElementDisplayed]);
    enterElement(elements[nextElementNumber]);
    currentElementDisplayed = nextElementNumber;
  }, timeToDisplay);
};

const trackPB = async (content?: string) => {
  const trackProps: Record<string, unknown> = {
    shopUrl: window.location.origin,
    timestamp: new Date(),
    version: hostedOrClassic.value,
  };

  if (content && trackProps) {
    trackProps["content"] = content;
  }

  await trackWithContext("Notification Bar Plan BO Classic Clicked", trackProps);
};

watchEffect(() => {
  backgroundClass.value = getBackgroundClass(props.variant);
  if (props.promos.length > 1) {
    switchElements();
  } else if (props.promos.length === 1) {
    clearAnimationInterval();
    if (promosDom.value && promosDom.value.length > 0) {
      enterElement(promosDom.value[0]);
    }
  }
});

onMounted(() => {
  const headerToolbar: HTMLElement | null = document.querySelector(".header-toolbar");
  if (headerToolbar) {
    headerToolbar.style.display = "grid";
  }
});

onBeforeUnmount(() => {
  clearAnimationInterval();
});
</script>

<style>
.promo-banner__container {
  display: grid;
}

.promo-banner__container .promo-banner__item {
  grid-area: 1 / 1;
  transition: transform 0.8s cubic-bezier(0.4, 0.14, 1, 1);
}

.promo-banner__item.promo-banner__item--invisible {
  visibility: hidden;
  pointer-events: none;
}

.promo-banner__item.promo-banner__item--enter {
  transform: translateX(100%);
}

.promo-banner__item.promo-banner__item--leave {
  transform: translateX(-100%);
}
</style>
