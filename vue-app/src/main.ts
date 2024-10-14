import { createApp } from "vue";
import App from "@/App.vue";
import "@/common/assets/index.css";
import i18n from "@/i18n";
import { useContext } from "@/common/composables/use-context";
import { createPinia } from "pinia";
import { router } from "@/router";
import useCustomElements from "@/modules/Rebranding/composables/useCustomElements";
import MinimizedSetupGuideContainer from "@/modules/Onboarding/components/MinimizedSetupGuide/MinimizedSetupGuideContainer.vue";

useCustomElements();

const mountEl = document.querySelector<HTMLDivElement>("#vue-app");
const context = useContext();
if (!mountEl || !mountEl.dataset.context) {
  console.error("Vue app mount element or context not found");
}

try {
  if (mountEl && mountEl.dataset.context) {
    context.setContext(JSON.parse(mountEl.dataset.context));
    if (context.updateIsRequired()) {
      context.callForMboCacheClear();
    }
  }
} catch (err) {
  console.error("Context is not valid: " + err);
}

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(i18n);
app.use(router);
app.mount("#vue-app");

const navPosition2 = document.querySelector<HTMLDivElement>(".header-right #header-notifications-container");
if (navPosition2) {
  const setupGuideMinimizedContainer = document.createElement("div");
  setupGuideMinimizedContainer.id = "setup-guide-minimized-container";
  setupGuideMinimizedContainer.classList.add("puik-style");
  navPosition2.parentNode?.insertBefore<HTMLDivElement>(setupGuideMinimizedContainer, navPosition2.nextSibling);

  const minimizedSetupGuide = createApp(MinimizedSetupGuideContainer);

  minimizedSetupGuide.use(pinia);
  minimizedSetupGuide.use(i18n);
  minimizedSetupGuide.mount("#setup-guide-minimized-container");
}

setTimeout(() => {
  document.getElementById("header-userflow")?.remove();
}, 100);
