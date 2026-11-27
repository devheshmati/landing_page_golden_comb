<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const { $gsap } = useNuxtApp();
const { closePreloading } = useUI();

const preloaderContainer = ref<HTMLElement | null>(null);
const preloaderSpin = ref<HTMLElement | null>(null);
const preloaderText = ref<HTMLElement | null>(null);

let ctx: ReturnType<typeof $gsap.context> | undefined;
let timeoutId: ReturnType<typeof setTimeout> | undefined;
let isClosing = false;

const handlePreloader = () => {
  if (isClosing) return;
  isClosing = true;

  if (!preloaderContainer.value) {
    closePreloading();
    return;
  }

  $gsap.to(preloaderContainer.value, {
    autoAlpha: 0,
    ease: "power3.out",
    duration: 0.8,
    overwrite: "auto",
    onComplete: () => {
      closePreloading();
    },
  });
};

onMounted(() => {
  ctx = $gsap.context(() => {
    const targets = [preloaderSpin.value, preloaderText.value].filter(Boolean);
    if (!targets.length) return;

    if (preloaderSpin.value) {
      $gsap.set(preloaderSpin.value, { autoAlpha: 0 });
      $gsap.to(preloaderSpin.value, {
        autoAlpha: 1,
        ease: "power3.out",
        duration: 0.8,
      });
    }

    if (preloaderText.value) {
      $gsap.set(preloaderText.value, { autoAlpha: 0, y: 20 });
      $gsap.to(preloaderText.value, {
        autoAlpha: 1,
        ease: "expo.out",
        y: 0,
        duration: 0.8,
      });
    }
  }, preloaderContainer.value ?? undefined);

  timeoutId = setTimeout(handlePreloader, 1000);
});

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId);
  ctx?.revert();
});
</script>

<template>
  <div
    ref="preloaderContainer"
    class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
  >
    <div
      ref="preloaderSpin"
      class="h-20 w-20 animate-spin rounded-full border-4 border-gray-400 border-t-honey-dark [animation-duration:3s]"
    />
    <div ref="preloaderText" class="mt-4">Loading</div>
  </div>
</template>
