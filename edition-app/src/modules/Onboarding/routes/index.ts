import Homepage from "@/modules/Onboarding/views/Homepage.vue";
import constants from "@/common/constants";

const routes = [
  {
    path: constants.BASE_URL + "/homepage",
    component: Homepage,
  },
];

export default routes;
