<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const { isNavMenuOpen, toggleNavMenu } = useUI();
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-40 font-primary transition-all duration-300 ease-out',
      isScrolled
        ? 'h-16 sm:h-[68px] bg-hive-dark/60 backdrop-blur-md shadow-card'
        : 'h-[72px] sm:h-20 lg:h-[90px] bg-transparent',
    ]"
  >
    <div
      class="max-w-7xl mx-auto h-full w-full flex items-center justify-between px-4 sm:px-8 lg:px-12"
    >
      <!-- Brand Logo -->
      <NuxtLink
        to="/"
        aria-label="Golden Comb Home"
        class="inline-flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none"
      >
        <NuxtImg
          src="/images/logo/golden_comb_logo.png"
          alt="Golden Comb Logo"
          :class="[
            'object-contain transition-all duration-300 ease-out drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] group-hover:scale-105',
            isScrolled
              ? 'h-10 w-10 sm:h-11 sm:w-11'
              : 'h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16',
          ]"
        />
        <span
          class="hidden xs:inline-block sm:inline-block text-sm sm:text-base font-extrabold uppercase tracking-[0.18em] text-honey-light group-hover:text-honey transition-colors"
        >
          Golden Comb
        </span>
      </NuxtLink>

      <!-- Menu Toggle Button -->
      <UiButton
        type="button"
        aria-label="Open navigation menu"
        :aria-expanded="isNavMenuOpen"
        @click="toggleNavMenu"
        :class="[
          'inline-flex items-center justify-center rounded-btn border transition-all duration-300 cursor-pointer',
          isScrolled
            ? 'p-2 sm:p-2.5 bg-hive-card/90 border-honey/25 text-honey-light hover:text-honey hover:border-honey/50'
            : 'p-2.5 sm:p-3 bg-hive-card/60 backdrop-blur-sm border-white/10 text-honey-light hover:text-honey hover:border-honey/40',
        ]"
      >
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 scale-90"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-90"
        >
          <Icon
            v-if="!isNavMenuOpen"
            name="iconmind:menu-outline-thin"
            :class="[
              'transition-all duration-300',
              isScrolled ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl',
            ]"
          />
        </Transition>
      </UiButton>
    </div>

    <GlobalsNavMenu />
  </header>
</template>
