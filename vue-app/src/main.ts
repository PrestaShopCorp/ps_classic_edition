import { createApp } from "vue";
import App from "@/App.vue";
import "@/common/assets/index.css";
import i18n from "@/i18n";
import { useContext } from "@/common/composables/use-context";
import { createPinia } from "pinia";
import { router } from "@/router";
import MinimizedSetupGuideContainer from "@/modules/Onboarding/components/MinimizedSetupGuide/MinimizedSetupGuideContainer.vue";

const mountEl = document.querySelector<HTMLDivElement>("#vue-app");
const context = useContext();
let pinia;
if (mountEl && mountEl.dataset.context) {
  try {
    if (mountEl && mountEl.dataset.context) {
      context.setContext(JSON.parse(mountEl.dataset.context));
    }
  } catch (err) {
    console.error("Context is not valid: " + err);
  }

  const app = createApp(App);
  pinia = createPinia();

  app.use(pinia);
  app.use(i18n);
  app.use(router);
  app.mount("#vue-app");
}

let navPosition2 = document.querySelector<HTMLDivElement>(".header-right #header-notifications-container");
if (!navPosition2) {
  navPosition2 = document.querySelector<HTMLDivElement>("#header_infos ul.header-list");
}

if (navPosition2) {
  if (window.minimizedGuideContext && (!context.context.value || !context.context.value.SETUP_GUIDE_API_URL)) {
    context.setContext(window.minimizedGuideContext);
  }

  if (context.context.value.SETUP_GUIDE_API_URL) {
    const setupGuideMinimizedContainer = document.createElement("div");
    setupGuideMinimizedContainer.id = "setup-guide-minimized-container";
    setupGuideMinimizedContainer.classList.add("puik-style");
    navPosition2.parentNode?.insertBefore<HTMLDivElement>(setupGuideMinimizedContainer, navPosition2.nextSibling);

    const minimizedSetupGuide = createApp(MinimizedSetupGuideContainer);

    if (!pinia) {
      pinia = createPinia();
    }
    minimizedSetupGuide.use(pinia);
    minimizedSetupGuide.use(i18n);
    minimizedSetupGuide.mount("#setup-guide-minimized-container");
  }
}
