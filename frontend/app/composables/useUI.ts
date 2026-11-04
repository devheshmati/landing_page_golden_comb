export const useUI = () => {
  const isPreloading = useState<boolean>("pre-loading", () => true);
  const hasPreloaded = useState<boolean>("hasPreloaded", () => false);
  const isNavMenuOpen = useState<boolean>("ui:is-nav-menu-open", () => false);
  const toggleNavMenu = () => (isNavMenuOpen.value = !isNavMenuOpen.value);
  const closeNavMenu = () => (isNavMenuOpen.value = false);
  const resetOverlays = () => {
    closeNavMenu();
  };
  const closePreloading = () => {
    isPreloading.value = false;
    hasPreloaded.value = true;
  };

  return {
    isPreloading,
    hasPreloaded,
    isNavMenuOpen,
    toggleNavMenu,
    closeNavMenu,
    resetOverlays,
    closePreloading,
  };
};
