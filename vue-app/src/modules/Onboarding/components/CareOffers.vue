<script lang="ts" setup>
import { ref, onMounted } from "vue";
import i18n from "@/i18n";
import { register } from "swiper/element/bundle";

// register Swiper
register();

const screenWidth = ref(screen.width);
const slidesPerView = ref(2);

const goPrev = () => {
  const swiperEl = document.querySelector("swiper-container");
  if (swiperEl) {
    swiperEl.swiper.slidePrev();
  }
};

const goNext = () => {
  const swiperEl = document.querySelector("swiper-container");
  if (swiperEl) {
    swiperEl.swiper.slideNext();
  }
};

const truncate = (txt: string) => {
  let dots = txt.length > 130 ? "..." : "";
  return `${txt}`.slice(0, 130) + dots;
};

const handleResize = () => {
  screenWidth.value = window.innerWidth;
  slidesPerView.value = screenWidth.value <= 768 ? 1.2 : 2;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);

  const buttonSlideLeft = document.querySelector("#left-arrow");
  const buttonSlideRight = document.querySelector("#right-arrow");

  if (buttonSlideLeft && buttonSlideRight) {
    buttonSlideLeft.addEventListener("click", goPrev);
    buttonSlideRight.addEventListener("click", goNext);
  }
});

</script>

<template>
  <puik-card
    variant="blue"
    class="flex flex-col lg:flex-row items-start shrink-0 px-4 py-6 gap-6 sm:shrink sm:p-8 xl:py-[34px] 2xl:py-[38px] ocean-blue"
  >
    <!-- gauche -->
    <div class="lg:w-4/12 w-full">
      <h2 class="puik-brand-h1 font-bold">
        {{ $t("onb.homepage.care-offers.title") }}
      </h2>
      <h3 class="puik-h3 font-semibold mt-2 leading-6 text-lg">
        {{ $t("onb.homepage.care-offers.description") }}
      </h3>
      <a :href="i18n.global.t('onb.homepage.care-offers.link')" target="_blank">
        <puik-button variant="secondary" size="lg" rightIcon="keyboard_arrow_right" class="mt-3">
          {{ $t("onb.homepage.care-offers.button") }}
        </puik-button>
      </a>
    </div>

    <!-- droite -->
    <div class="lg:w-7/12 w-full">
      <!-- Slides -->
      <swiper-container :slides-per-view="slidesPerView" space-between="30" loop="true">
        <swiper-slide class="h-auto">
          <puik-card variant="default" class="h-full">
            <div class="puik-grid ml-0">
              <div class="col-span-3">
                <img src="@/modules/Onboarding/assets/img/icon-prestashop-module.png" />
              </div>
              <div class="col-span-9 w-10/12">
                <p class="font-bold text-sm leading-4">{{ $t("onb.homepage.care-offers.bloc-1.title") }}</p>
                <p class="text-xs mt-0.5">{{ $t("onb.homepage.care-offers.bloc-1.price") }}</p>
              </div>
            </div>
            <span class="text-xs">{{ truncate(i18n.global.t("onb.homepage.care-offers.bloc-1.description")) }}</span>
            <div class="mt-auto">
              <a :href="i18n.global.t('onb.homepage.care-offers.bloc-1.link')" target="_blank">
                <puik-button variant="tertiary" :fluid="true" leftIcon="launch">
                  {{ $t("onb.homepage.care-offers.bloc-1.button") }}
                </puik-button>
              </a>
            </div>
          </puik-card>
        </swiper-slide>
        <swiper-slide class="h-auto">
          <puik-card variant="default" class="h-full">
            <div class="puik-grid ml-0">
              <div class="col-span-3">
                <img src="@/modules/Onboarding/assets/img/icon-prestashop-module.png" />
              </div>
              <div class="col-span-9 w-10/12">
                <p class="font-bold text-sm leading-4">{{ $t("onb.homepage.care-offers.bloc-2.title") }}</p>
                <p class="text-xs mt-0.5">{{ $t("onb.homepage.care-offers.bloc-2.price") }}</p>
              </div>
            </div>
            <span class="text-xs">{{ truncate(i18n.global.t("onb.homepage.care-offers.bloc-2.description")) }}</span>
            <div class="mt-auto">
              <a :href="i18n.global.t('onb.homepage.care-offers.bloc-2.link')" target="_blank">
                <puik-button variant="tertiary" :fluid="true" leftIcon="launch">
                  {{ $t("onb.homepage.care-offers.bloc-2.button") }}
                </puik-button>
              </a>
            </div>
          </puik-card>
        </swiper-slide>
        <swiper-slide class="h-auto">
          <puik-card variant="default" class="h-full">
            <div class="puik-grid ml-0">
              <div class="col-span-3">
                <img src="@/modules/Onboarding/assets/img/icon-prestashop-module.png" />
              </div>
              <div class="col-span-9 w-10/12">
                <p class="font-bold text-sm leading-4">{{ $t("onb.homepage.care-offers.bloc-3.title") }}</p>
                <p class="text-xs mt-0.5">{{ $t("onb.homepage.care-offers.bloc-3.price") }}</p>
              </div>
            </div>
            <span class="text-xs">{{ truncate(i18n.global.t("onb.homepage.care-offers.bloc-3.description")) }}</span>
            <div class="mt-auto">
              <a :href="i18n.global.t('onb.homepage.care-offers.bloc-3.link')" target="_blank">
                <puik-button variant="tertiary" :fluid="true" leftIcon="launch">
                  {{ $t("onb.homepage.care-offers.bloc-3.button") }}
                </puik-button>
              </a>
            </div>
          </puik-card>
        </swiper-slide>
        <swiper-slide class="h-auto">
          <puik-card variant="default" class="h-full">
            <div class="puik-grid ml-0">
              <div class="col-span-3">
                <img src="@/modules/Onboarding/assets/img/icon-prestashop-module.png" />
              </div>
              <div class="col-span-9 w-10/12">
                <p class="font-bold text-sm leading-4">{{ $t("onb.homepage.care-offers.bloc-4.title") }}</p>
                <p class="text-xs mt-0.5">{{ $t("onb.homepage.care-offers.bloc-4.price") }}</p>
              </div>
            </div>
            <span class="text-xs">{{ truncate(i18n.global.t("onb.homepage.care-offers.bloc-4.description")) }}</span>
            <div class="mt-auto">
              <a :href="i18n.global.t('onb.homepage.care-offers.bloc-4.link')" target="_blank">
                <puik-button variant="tertiary" :fluid="true" leftIcon="launch">
                  {{ $t("onb.homepage.care-offers.bloc-4.button") }}
                </puik-button>
              </a>
            </div>
          </puik-card>
        </swiper-slide>
      </swiper-container>
    </div>
    <!-- btns slider -->
    <div class="w-1/12 lg:block hidden">
      <span class="flex items-center">
        <puik-icon
          id="left-arrow"
          icon="keyboard_arrow_left"
          font-size="16px"
          node-type="span"
          class="btn-slider pr-[2px] mr-2"
          @click="goPrev()"
        />
        <puik-icon
          id="right-arrow"
          icon="keyboard_arrow_right"
          font-size="16px"
          node-type="span"
          class="btn-slider pl-[2px]"
          @click="goNext()"
        />
      </span>
    </div>
  </puik-card>
</template>

<style scoped>
.btn-slider {
  @apply bg-white rounded-full text-center pt-[10px] border hover:cursor-pointer;
  min-width: 36px;
  min-height: 36px;
  border-color: #1d1d1b;
}
.ocean-blue {
  background: #a4dbe8;
  color: #342a25;
}
</style>
