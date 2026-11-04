<script setup lang="ts">
import { ref, onMounted } from "vue";
const { $gsap } = useNuxtApp();
const { isPreloading, hasPreloaded } = useUI();
const container = ref<HTMLElement | null>(null);

onMounted(() => {
  if (hasPreloaded.value) {
    isPreloading.value = false; // make sure it stays hidden
    return;
  }

  if (isPreloading.value) {
    $gsap.from(container.value, {
      autoAlpha: 0,
      ease: "power3.out",
      duration: 0.5,
    });
  }
});
</script>

<template>
  <div>
    <GlobalsPreloader v-if="isPreloading && !hasPreloaded"  />
    <div ref="container">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <GlobalsVerticalScrollbar />
    </div>
  </div>
</template>
