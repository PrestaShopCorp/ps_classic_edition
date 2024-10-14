import Settings from "@/modules/User/views/Settings.vue";
import constants from "@/common/constants";

const userRoutes = [
  {
    path: constants.BASE_URL + "/settings",
    component: Settings,
  },
];

export default userRoutes;
