// @ts-ignore
import type { SideBarItemProps } from "@/modules/Rebranding/components/SideBar/SideBarItem.vue";
// @ts-ignore
import type { SideBarItemWithLinksProps } from "@/modules/Rebranding/components/SideBar/SideBarItemWithLinks.vue";
import type { Tab } from "@/common/composables/use-context";

export type navItem = SideBarItemProps & Omit<SideBarItemWithLinksProps, "opened">;

const buildLink = (tab: Tab) => ({
  href: tab.href,
  label: tab.name,
  selected: tab.current,
  class_name: tab.class_name,
});

const buildNavItem = (tab: Tab): navItem => {
  if (!Array.isArray(tab.sub_tabs)) {
    return {
      class_name: tab.class_name,
      label: tab.name,
      href: tab.href,
      icon: tab?.icon,
      selected: tab.current,
      links: Object.keys(tab.sub_tabs).map((key) => buildLink(tab.sub_tabs[key])),
    };
  }

  return {
    class_name: tab.class_name,
    label: tab.name,
    href: tab.href,
    icon: tab?.icon,
    selected: tab.current,
    links: tab.sub_tabs.map((subTab: Tab) => buildLink(subTab)),
  };
};

const navItems = (tabs: Tab[]): navItem[] => {
  return tabs.map((tab) => buildNavItem(tab));
};

export default navItems;
