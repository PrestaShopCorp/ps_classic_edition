import type { Tab } from "@/common/composables/use-context";
import type { VueI18nTranslation } from "vue-i18n";

export interface Link {
  id: string;
  label: string;
  href: string;
}

export interface SettingsItem {
  id: number;
  parentId: number;
  label: string;
  className: string;
  href: string;
  description: string;
  icon: string;
  links: Link[];
}

export const buildLink = (tab: Tab) => ({ href: tab.href, label: tab.name, id: tab.id_tab });

const buildSettingsItem = (tab: Tab, t: VueI18nTranslation): SettingsItem => {
  return {
    id: tab.id_tab,
    parentId: tab.id_parent,
    label: tab.name,
    className: tab.class_name,
    href: tab.href,
    description: t("onb.settings." + tab.class_name + ".description"),
    icon: t("onb.settings." + tab.class_name + ".icon"),
    links: tab.sub_tabs.map((subTab: Tab) => buildLink(subTab)),
  };
};

export const buildSettingsItems = (tabs: Tab[], t: VueI18nTranslation) => {
  return tabs.map((tab: Tab) => buildSettingsItem(tab, t));
};
