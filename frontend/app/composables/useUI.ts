export const useUI = () => {
  const isNavMenuOpen = useState<boolean>(() => false);
  const toggleNavMenu = () => (isNavMenuOpen.value = !isNavMenuOpen.value);
  const closeNavMenu = () => (isNavMenuOpen.value = false);

  return { isNavMenuOpen, toggleNavMenu, closeNavMenu };
};
