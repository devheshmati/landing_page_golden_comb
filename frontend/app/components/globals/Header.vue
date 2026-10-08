<script setup lang="ts">
import { ref, onMounted } from "vue";

const { isNavMenuOpen, toggleNavMenu, closeNavManu } = useUI();
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full transition-all duration-300 ease flex justify-between items-center text-white px-5 z-50',
      isScrolled ? 'h-[60px]' : 'h-[90px]',
    ]"
  >
    <NuxtLink to="/">
      <img
        src="/images/logo/golden_comb_logo.png"
        :class="[
          'p-2 filter drop-shadow-[1px_1px_5px_rgba(0,0,0,1)] transition-all ease duration-300 object-fit',
          isScrolled ? 'h-[60px] w-[60px]' : 'h-[70px] w-[70px]',
        ]"
      />
    </NuxtLink>
    <UiButton
      @click="toggleNavMenu"
      class="text-main-text p-2 focus:outline-none cursor-pointer"
      aria-label="Toggle Navigation Menu"
    >
      <svg
        v-if="!isNavMenuOpen"
        :class="[
          'transition-all duration-300',
          isScrolled ? 'w-6 h-6' : 'w-8 h-8',
        ]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-else
        class="w-6 h-6 hidden"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </UiButton>

    <GlobalsNavMenu />
  </header>
</template>
