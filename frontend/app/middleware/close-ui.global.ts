export default defineNuxtRouteMiddleware(() => {
  const { resetOverlays } = useUI();

  resetOverlays();
});
