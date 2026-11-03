export const useUI = () => {
  const isPreloading = useState<boolean>("pre-loading", () => true);
  const isNavMenuOpen = useState<boolean>("ui:is-nav-menu-open", () => false);
  const toggleNavMenu = () => (isNavMenuOpen.value = !isNavMenuOpen.value);
  const closeNavMenu = () => (isNavMenuOpen.value = false);
  const resetOverlays = () => {
    closeNavMenu();
  };
  const closePreloading = () => (isPreloading.value = false);

  return {
    isPreloading,
    isNavMenuOpen,
    toggleNavMenu,
    closeNavMenu,
    resetOverlays,
    closePreloading,
  };
};
