export default defineNuxtRouteMiddleware(() => {
  if (import.meta.client) {
    const { resetOverlays } = useUI();
    resetOverlays();
  }
});
