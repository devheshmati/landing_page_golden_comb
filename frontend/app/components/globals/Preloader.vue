<script setup lang="ts">
import { ref, onMounted } from "vue";

const { $gsap } = useNuxtApp();
const { closePreloading } = useUI();
const preloaderContainer = ref<HTMLElement | null>(null);
const preloaderSpin = ref<HTMLElement | null>(null);
const preloaderText = ref<HTMLElement | null>(null);

const handlePreloader = () => {
  $gsap.to(preloaderContainer.value, {
    autoAlpha: 0,
    ease: "power3.out",
    duration: 0.8,
    onComplete: () => closePreloading(),
  });
};

onMounted(() => {
  $gsap.set(preloaderSpin.value, {
    autoAlpha: 0,
  });

  $gsap.set(preloaderText.value, {
    autoAlpha: 0,
    y: 20,
  });

  $gsap.to(preloaderSpin.value, {
    autoAlpha: 1,
    ease: "power3.out",
    duration: 0.8,
  });

  $gsap.to(preloaderText.value, {
    autoAlpha: 1,
    ease: "expo.out",
    y: 0,
    duration: 0.8,
  });

  setTimeout(handlePreloader, 1000);
});
</script>

<template>
  <div
    ref="preloaderContainer"
    class="h-full w-full fixed top-0 left-0 bg-black text-white flex flex-col justify-center items-center z-999"
  >
    <div
      ref="preloaderSpin"
      class="opacity-0 animate-spin [&.animate-spin]:[animation-duration:3s] absolute top-center left-center w-[80px] h-[80px] border-3 border-gray-400 border-t-honey-dark rounded-full"
    ></div>
    <div ref="preloaderText" class="opacity-0">Loading</div>
  </div>
</template>
