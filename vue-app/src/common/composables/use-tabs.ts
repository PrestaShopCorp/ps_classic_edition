import { useContext, type Tab } from "@/common/composables/use-context";

const { context } = useContext();

const findTabRecursivelyWithClassName = (tabs: Tab[], className: string): Tab | undefined => {
  for (const tab of tabs) {
    if (tab.class_name === className) {
      return tab;
    }

    const subTab = findTabRecursivelyWithClassName(tab.sub_tabs, className);

    if (subTab) {
      return subTab;
    }
  }
};

const getAdminLink = (className: string): string => {
  const tabs = [...context.value.tabs, ...context.value.modulesTabs];

  return findTabRecursivelyWithClassName(tabs, className)?.href ?? "";
};

const useTabs = () => {
  return { getAdminLink };
};

export default useTabs;
