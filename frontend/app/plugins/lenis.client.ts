import Lenis from "lenis";

export default defineNuxtPlugin(() => {
  const { $gsap, $ScrollTrigger } = useNuxtApp();
  const lenis = new Lenis();

  lenis.on("scroll", $ScrollTrigger.update);

  $gsap.ticker.add((time) => {
    return lenis.raf(time * 1000);
  });

  $gsap.ticker.lagSmoothing(0);

  return {
    provide: { lenis },
  };
});
