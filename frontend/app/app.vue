<script setup lang="ts">
const { isPreloading } = useUI();

useHead({
  bodyAttrs: {
    style: computed(() => (isPreloading.value ? "overflow: hidden" : "")),
  },
});
</script>

<template>
  <div>
    <GlobalsPreloader v-if="isPreloading" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
