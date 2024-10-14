const getInitCollapsed = (): boolean => {
  const burgerMenu = document.querySelector(".js-mobile-menu");
  if (!burgerMenu) {
    return false;
  }

  if (burgerMenu.getBoundingClientRect().width > 0) {
    return false;
  }

  return !!document.querySelector(".page-sidebar-closed");
};

const clickOnCollapseIcon = (): void => {
  const oldCollapseIcon = document.querySelector<HTMLButtonElement>(".menu-collapse");
  const sideBarPs = document.querySelector(".nav-bar");

  if (!sideBarPs || !oldCollapseIcon) return;

  oldCollapseIcon?.click();
  sideBarPs.classList.toggle("collapsed");
};

export { getInitCollapsed, clickOnCollapseIcon };
