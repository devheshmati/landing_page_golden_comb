<script setup lang="ts">
import { watch, onUnmounted } from "vue";

const { isNavMenuOpen, closeNavMenu } = useUI();

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy", to: "/privacy" },
];

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && isNavMenuOpen.value) {
    closeNavMenu();
  }
};

watch(
  isNavMenuOpen,
  (isOpen) => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) {
      window.addEventListener("keydown", handleKeydown);
    } else {
      window.removeEventListener("keydown", handleKeydown);
    }
  },
  { immediate: true }
);

onUnmounted(() => {
  if (typeof window === "undefined") return;
  document.body.style.overflow = "";
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 -translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div
        v-if="isNavMenuOpen"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        class="fixed inset-0 z-100 h-dvh w-screen bg-hive-dark/95 backdrop-blur-md font-primary flex flex-col justify-between px-6 sm:px-10 md:px-16 py-6 sm:py-8 overflow-y-auto select-none"
      >
        <!-- Top Header Bar: Brand Label & Close Button -->
        <div class="flex items-center justify-between w-full max-w-5xl mx-auto">
          <span
            class="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-honey"
          >
            Golden Comb
          </span>

          <UiButton
            type="button"
            aria-label="Close navigation menu"
            @click="closeNavMenu"
            class="inline-flex items-center justify-center p-2.5 sm:p-3 rounded-btn bg-hive-card/80 hover:bg-hive-card text-honey-light/80 hover:text-honey border border-honey/20 transition-all duration-200 cursor-pointer"
          >
            <Icon
              name="iconmind:socket-close-outline-thin"
              class="text-2xl sm:text-3xl"
            />
          </UiButton>
        </div>

        <!-- Navigation Links -->
        <nav
          class="my-auto w-full max-w-5xl mx-auto py-8 flex flex-col gap-2 sm:gap-3 md:gap-4"
        >
          <NuxtLink
            v-for="(item, index) in navLinks"
            :key="item.to"
            :to="item.to"
            @click="closeNavMenu"
            active-class="text-honey"
            class="group flex items-baseline gap-4 sm:gap-6 py-2.5 sm:py-3 border-b border-white/10 last:border-none text-honey-light/80 hover:text-honey transition-colors duration-200"
          >
            <span
              class="text-xs sm:text-sm font-semibold text-honey/60 group-hover:text-honey tabular-nums transition-colors"
            >
              0{{ index + 1 }}
            </span>
            <span
              class="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight group-hover:translate-x-2 transition-transform duration-300"
            >
              {{ item.label }}
            </span>
          </NuxtLink>
        </nav>

        <!-- Bottom Footer Note -->
        <div
          class="w-full max-w-5xl mx-auto pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-muted"
        >
          <span>Pure Liquid Gold, Straight From Nature.</span>
          <span>©2026 devheshmati.ir</span>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
