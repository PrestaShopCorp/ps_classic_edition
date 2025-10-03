<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { usePsAcademy, type PsAcademyCard } from "@/modules/Onboarding/stores/psAcademy";
import { useContext } from "@/common/composables/use-context";

const { context } = useContext();
const psAcademyStore = usePsAcademy();
const { sortedProducts, pages, loading } = storeToRefs(psAcademyStore);

const psAcademyUrl = "https://care-center.prestashop.com/";

const currentIndex = ref(0);
/**
 * Used to define the direction of the animation in the <Transition></Transition>
 * Initialized at slide right so that it has the correct animation when it is mounted for the first time
 * */
const slideDirection = ref("slide-right");

const cardsToDisplay = ref<PsAcademyCard[]>([]);

const toPrevious = () => {
  if (currentIndex.value > 0 && currentIndex.value <= pages.value - 1) {
    slideDirection.value = "slide-left";
    currentIndex.value--;
  }
};

const toNext = () => {
  if (currentIndex.value >= 0 && currentIndex.value < pages.value - 1) {
    slideDirection.value = "slide-right";
    currentIndex.value++;
  }
};

const image = await import('@/modules/Onboarding/assets/img/thumbnail-psacademy.png');

// Remove the last part of the URL (/admin{thing}) to get the base URL in order to be compatible
// with subdirectory installations.
const baseUrl = context.value.baseUrl.replace('/index.php', '');
const imageUrl = baseUrl.substring(0, baseUrl.lastIndexOf('/')) + image.default;

watch(currentIndex, () => {
  cardsToDisplay.value = sortedProducts.value.slice(currentIndex.value * 5, currentIndex.value * 5 + 5);
});

onMounted(async () => {
  await psAcademyStore.initProducts();
  cardsToDisplay.value = sortedProducts.value.slice(currentIndex.value * 5, currentIndex.value * 5 + 5);
});
</script>

<template>
  <div class="w-[100%]">
    <!-- HEADER -->
    <div class="flex flex-wrap justify-between items-center py-4">
      <span class="flex items-center">
        <h2 class="text-4xl font-bold uppercase mr-4">{{ $t("onb.homepage.psAcademy.header.title") }}</h2>
        <a
          :href="psAcademyUrl"
          target="_blank"
          class="no-decoration flex items-center text-xl px-8"
        >
          {{ $t("onb.homepage.psAcademy.header.seeAll") }}
          <puik-icon icon="chevron_right" node_type="span" class="ml-2" />
        </a>
      </span>
      <div class="flex items-center">
        {{ $t("onb.homepage.psAcademy.header.pages", { first: currentIndex + 1, second: pages }) }}
        <span class="flex items-center ml-2">
          <puik-icon
            icon="keyboard_arrow_left"
            font-size="16px"
            node-type="span"
            class="btn-slider pr-[2px] mr-2 select-none"
            :class="currentIndex === 0 ? 'disable' : ''"
            @click="toPrevious"
          />
          <puik-icon
            icon="keyboard_arrow_right"
            font-size="16px"
            node-type="span"
            class="btn-slider pl-[2px] select-none"
            :class="currentIndex === pages - 1 ? 'disable' : ''"
            @click="toNext"
          />
        </span>
      </div>
    </div>
    <!-- END HEADER -->
    <!-- CARDS -->
    <div class="overflow-hidden w-full">
      <PuikSkeletonLoaderGroup
        v-if="loading"
        class="relative opacity-60 flex flex-nowrap overflow-hidden md:grid md:grid-cols-4 md:grid-rows-2 gap-2"
      >
        <template v-for="i in 5" :key="i">
          <div
            class="flex flex-col gap-6 min-w-[75%] md:w-full"
            :class="i === 1 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'"
          >
            <PuikSkeletonLoader class="md:w-full" :class="i === 1 ? 'md:min-h-[400px]' : 'md:min-h-[200px]'" />
          </div>
        </template>
      </PuikSkeletonLoaderGroup>
      <Transition v-else :name="slideDirection" mode="out-in" class="relative w-full h-full">
        <div
          :key="cardsToDisplay.length > 0 ? cardsToDisplay[0].name : ''"
          class="w-full flex flex-nowrap overflow-auto touch-pan-x md:overflow-hidden md:touch-none md:grid md:grid-cols-4 md:grid-rows-2 gap-2"
        >
          <!-- i start at 1 -->
          <template v-for="i in 5" :key="cardsToDisplay[i - 1]?.name">
            <puik-card
              v-if="cardsToDisplay[i - 1]"
              class="min-w-[75%] md:w-full gap-0"
              :class="i === 1 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'"
            >
              <h3 class="text-sm font-bold">{{ cardsToDisplay[i - 1]?.name }}</h3>
              <img v-if="i === 1" :src="imageUrl" class="pt-4" />
              <p v-html="cardsToDisplay[i - 1]?.description" class="my-4 text-xs line-clamp-2"></p>
              <puik-button class="mt-auto text-black bg-primary-400">
                <a :href="cardsToDisplay[i - 1]?.url" target="_blank" class="w-full flex justify-center">
                  <puik-icon icon="open_in_new" font-size="16px" node-type="span" class="mr-2 mt-[1px]" />
                  {{ $t("onb.homepage.psAcademy.button") }}
                </a>
              </puik-button>
            </puik-card>
          </template>
        </div>
      </Transition>
    </div>
    <!-- END CARDS -->
  </div>
</template>

<style lang="scss">
.btn-slider {
  @apply bg-white rounded-full w-9 h-9 text-center pt-[10px] border border-black hover:cursor-pointer;
}

.disable {
  color: #ddd;
  border-color: #ddd;
  background-color: #f7f7f7;

  &:hover {
    cursor: default;
  }
}

.slide-left-enter-active {
  animation: slideLeftIn 0.5s ease-in-out;
}

.slide-left-leave-active {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  animation: slideLeftOut 0.5s ease-in-out;
}

@keyframes slideLeftIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideLeftOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

.slide-right-enter-active {
  animation: slideRightIn 0.5s ease-in-out;
}

.slide-right-leave-active {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  animation: slideRightOut 0.5s ease-in-out;
}

@keyframes slideRightIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideRightOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
