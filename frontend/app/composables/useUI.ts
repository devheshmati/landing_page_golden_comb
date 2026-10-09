export const useUI = () => {
  const isNavMenuOpen = useState<boolean>("ui:is-nav-menu-open", () => false);
  const toggleNavMenu = () => (isNavMenuOpen.value = !isNavMenuOpen.value);
  const closeNavMenu = () => (isNavMenuOpen.value = false);
  const resetOverlays = () => {
    closeNavMenu();
  };

  return { isNavMenuOpen, toggleNavMenu, closeNavMenu, resetOverlays };
};
