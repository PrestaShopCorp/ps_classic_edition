// https://router.vuejs.org/guide

import { createRouter, createWebHistory } from "vue-router";
import onBoardingRoutes from "@/modules/Onboarding/routes";
import { useSetupGuideStore } from "@/modules/Onboarding/stores/useSetupGuideStore";
import { useApplicationStore } from "./common/stores/useApplicationStore";

const routes = [...onBoardingRoutes];
const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach(async () => {
  const { dataIsAlreadyFetched, fetchInitialDatas } = useSetupGuideStore();
  const { setLoading } = useApplicationStore();

  if (!dataIsAlreadyFetched) {
    setLoading(true);

    try {
      await fetchInitialDatas();
    } catch (e) {
      console.error("Setup Guide initial datas aren't valid:" + e);
    }

    setLoading(false);
  }
});

export { router };
