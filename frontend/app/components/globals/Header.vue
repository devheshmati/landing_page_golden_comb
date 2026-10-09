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
    <UiButton @click="toggleNavMenu">
      <Transition
        enter-active-class="transition duration-500 ease"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-500 ease"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-4"
      >
        <Icon
          v-if="!isNavMenuOpen"
          name="iconmind:menu-outline-thin"
          :class="[
            'transition-all duration-300',
            isScrolled ? 'text-3xl' : 'text-4xl',
          ]"
        />
      </Transition>
    </UiButton>

    <GlobalsNavMenu />
  </header>
</template>
