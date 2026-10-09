<script setup lang="ts">
const { isNavMenuOpen, toggleNavMenu, closeNavMenu } = useUI();
</script>

<template>
  <Transition
    enter-active-class="transition duration-800 ease"
    enter-from-class="opacity-0 -translate-x-400"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-800 ease"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-400"
  >
    <div
      v-if="isNavMenuOpen"
      class="fixed top-0 left-0 z-100 h-full w-full bg-hive-card/90 backdrop-blur-sm flex flex-column gap-2"
    >
      <nav class="text-gray-400 flex flex-col mt-10">
        <!-- make dynamic later -->
        <NuxtLink class="py-2 px-4 hover:text-white" to="/">Home</NuxtLink>
        <NuxtLink class="py-2 px-4 hover:text-white" to="/about"
          >About</NuxtLink
        >
        <NuxtLink class="py-2 px-4 hover:text-white" to="/contact"
          >Contact</NuxtLink
        >
      </nav>
      <UiButton
        @click="closeNavMenu"
        class="absolute top-5 right-5 text-gray-400 hover:text-white cursor-pointer text-xl"
      >
        <Icon name="iconmind:socket-close-outline-thin" class="text-4xl" />
      </UiButton>
    </div>
  </Transition>
</template>
