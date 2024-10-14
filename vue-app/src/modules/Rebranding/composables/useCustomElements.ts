import { defineCustomElement } from "vue";
import SideBar from "@/modules/Rebranding/components/SideBar/SideBar.ce.vue";
import Breadcrumb from "@/modules/Rebranding/components/Breadcrumb/Breadcrumb.ce.vue";

export default () => {
  if (!customElements.get("wc-side-bar")) {
    customElements.define("wc-side-bar", defineCustomElement(SideBar));
    customElements.define("wc-breadcrumb", defineCustomElement(Breadcrumb));
  }
};
