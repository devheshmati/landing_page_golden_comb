<script setup lang="ts">
import { ref, onMounted } from "vue";
const { $gsap } = useNuxtApp();
const { isPreloading } = useUI();
const container = ref<HTMLElement | null>(null);

onMounted(() => {
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
    <GlobalsPreloader v-if="isPreloading" />
    <div ref="container">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <GlobalsVerticalScrollbar />
    </div>
  </div>
</template>
