<script setup lang="ts">
import { ref, onMounted } from "vue";

const { $gsap } = useNuxtApp();
const { isPreloading, hasPreloaded } = useUI();
const container = ref<HTMLElement | null>(null);

onMounted(() => {
  if (hasPreloaded.value) {
    isPreloading.value = false;
    return;
  }

  if (isPreloading.value && container.value) {
    $gsap.from(container.value, {
      autoAlpha: 0,
      ease: "power3.out",
      duration: 0.5,
      clearProps: "transform,opacity,visibility",
      onComplete: () => {
        isPreloading.value = false;
        hasPreloaded.value = true;
      },
    });
  } else {
    isPreloading.value = false;
  }
});
</script>

<template>
  <div>
    <GlobalsPreloader v-if="isPreloading && !hasPreloaded" />
    <div ref="container">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <GlobalsVerticalScrollbar />
  </div>
</template>
