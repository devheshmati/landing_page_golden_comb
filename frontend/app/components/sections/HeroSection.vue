<script setup lang="ts">
import { ref } from "vue";

const heroContainer = ref<HTMLElement | null>(null);
const watermarkText = ref<HTMLElement | null>(null);
const heroContent = ref<HTMLElement | null>(null);
const heroImage = ref<HTMLElement | null>(null);
const statsContainer = ref<HTMLElement | null>(null);
const scrollIndicator = ref<HTMLElement | null>(null);
</script>

<template>
  <section
    ref="heroContainer"
    class="relative min-h-screen w-full bg-honey-light overflow-hidden flex flex-col justify-between px-6 md:px-12 pt-28 pb-8 text-white select-none"
  >
    <div
      ref="watermarkText"
      class="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-6xl font-black uppercase text-hive-dark/20 pointer-events-none tracking-widest whitespace-nowrap z-0"
    >
      Golden Comb
    </div>

    <div
      class="relative z-10 flex items-center my-auto w-full mx-auto"
    >
      <div ref="heroContent" class="w-1/2 flex flex-col gap-6 ps-[12rem]">
        <p class="text-muted text-base leading-relaxed max-w-md w-2/3">
          Discover the purest, most delicious honey straight from nature to your
          table. Carefully harvested to preserve rich flavor, natural nutrients,
          and health benefits.
        </p>

        <div class="flex items-center gap-3">
          <div class="flex -space-x-2 overflow-hidden">
            <img
              class="inline-block h-9 w-9 rounded-full ring-2 ring-hive-card object-cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
              alt="User Avatar"
            />
            <img
              class="inline-block h-9 w-9 rounded-full ring-2 ring-hive-card object-cover"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
              alt="User Avatar"
            />
            <img
              class="inline-block h-9 w-9 rounded-full ring-2 ring-hive-card object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
              alt="User Avatar"
            />
          </div>
          <div class="flex flex-col text-xs">
            <span class="font-bold text-white text-sm">125K+</span>
            <span class="text-muted">Satisfied Consumers</span>
          </div>
        </div>

        <UiButton
          class="bg-honey hover:bg-honey-glow text-honey-glow hover:text-honey font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-honey/20 cursor-pointer"
        >
          Contact Us
        </UiButton>
      </div>

      <div
        ref="heroImage"
        class="lg:col-span-4 flex justify-center items-center relative"
      ></div>

      <div
        ref="statsContainer"
        class="flex flex-col ms-auto justify-between lg:justify-center gap-6 lg:gap-8 lg:items-end"
      >
        <div class="flex flex-col lg:text-right">
          <span
            class="text-honey text-4xl lg:text-5xl font-black tracking-tight"
            >4K+</span
          >
          <span class="text-muted text-xs lg:text-sm font-medium mt-1"
            >Satisfied Clients</span
          >
        </div>

        <div class="flex flex-col lg:text-right">
          <span
            class="text-honey text-4xl lg:text-5xl font-black tracking-tight"
            >5K+</span
          >
          <span class="text-muted text-xs lg:text-sm font-medium mt-1"
            >Successful Sales</span
          >
        </div>

        <div class="flex flex-col lg:text-right">
          <span
            class="text-honey text-4xl lg:text-5xl font-black tracking-tight"
            >20+</span
          >
          <span class="text-muted text-xs lg:text-sm font-medium mt-1"
            >Unique Products</span
          >
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-0 right-1/20 w-auto h-8/10 aspect-square flex justify-center items-center"
    >
      <div
        class="absolute inset-0 bg-honey/10 blur-3xl rounded-full scale-90"
      ></div>

      <img
        src="/images/honey_jar2.webp"
        alt="Golden Comb Honey Jar"
        class="relative z-0 max-h-[450px] w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]"
      />
    </div>

    <div
      ref="scrollIndicator"
      class="relative z-10 flex flex-col items-center gap-2 mt-auto pt-4 text-xs text-hive-dark tracking-wider uppercase animate-pulse"
    >
      <span>Scroll to explore</span>
      <div
        class="w-5 h-8 rounded-full border-2 border-hive-dark flex justify-center pt-1"
      >
        <div class="w-1 h-2 bg-honey rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>
