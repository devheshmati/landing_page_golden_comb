<script setup lang="ts">
definePageMeta({
  layout: "empty",
});
</script>

<template>
  <div
    class="page flex flex-col gap-16 bg-main min-h-screen text-amber-50/90 pb-20"
  >
    <!-- Hero Section -->
    <div class="relative flex flex-col justify-center items-center">
      <img
        src="/images/Beekeeper_standing_between_hives_512.webp"
        alt="happy female beekeeper standing between hives"
        class="h-screen w-full object-cover brightness-40"
      />

      <div
        class="absolute z-50 left-6 md:left-12 top-1/3 flex flex-col gap-5 max-w-2xl"
      >
        <h3 class="text-2xl text-honey-light uppercase tracking-wider">
          About Us
        </h3>
        <NuxtLink
          to="/"
          class="flex flex-col text-3xl md:text-5xl text-honey uppercase opacity-90 hover:opacity-100 hover:drop-shadow-[0_0_12px_theme(colors.honey)] cursor-pointer transition-all duration-300"
        >
          <div>Golden Comb</div>
          <div class="text-honey-glow">Bee Farm</div>
        </NuxtLink>

        <p class="text-sm md:text-lg leading-relaxed text-amber-50/90">
          A concept landing page for a raw honey brand, designed and built as an
          independent portfolio project to explore brand storytelling, motion,
          and front-end craft.
        </p>
      </div>
    </div>

    <!-- Section 3: Connect & Project Links (New Added Section) -->
    <div
      class="w-11/12 md:w-9/10 max-w-4xl mx-auto text-center flex flex-col gap-8"
    >
      <div class="flex flex-col gap-2">
        <h3 class="text-2xl md:text-3xl text-honey-glow font-bold">
          Connect & Explore
        </h3>
        <p class="text-sm md:text-base text-amber-50/70">
          Interested in the code, or want to collaborate? Get in touch with me
          through the links below.
        </p>
      </div>

      <!-- Links Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <!-- GitHub Profile -->
        <a
          href="https://github.com/devheshmati"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-4 p-4 rounded-xl bg-honey-dark/20 border border-honey/20 hover:border-honey hover:bg-zinc-800 transition-all duration-300 group"
        >
          <div
            class="p-3 rounded-lg bg-honey/10 text-honey group-hover:scale-110 transition-transform"
          >
            <!-- GitHub Icon SVG -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </div>
          <div class="text-left">
            <div class="text-sm font-bold text-amber-50">GitHub</div>
            <div class="text-xs text-amber-50/60 truncate">devheshmati</div>
          </div>
        </a>

        <!-- Repository Link -->
        <a
          href="https://github.com/devheshmati/landing_page_golden_comb"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-4 p-4 rounded-xl bg-honey-dark/20 border border-honey/20 hover:border-honey hover:bg-zinc-800 transition-all duration-300 group"
        >
          <div
            class="p-3 rounded-lg bg-honey/10 text-honey group-hover:scale-110 transition-transform"
          >
            <!-- Code/Repo Icon SVG -->
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <div class="text-left">
            <div class="text-sm font-bold text-amber-50">Source Code</div>
            <div class="text-xs text-amber-50/60 truncate">
              landing_page_golden_comb
            </div>
          </div>
        </a>

        <!-- LinkedIn Profile -->
        <a
          href="https://www.linkedin.com/in/devheshmati/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-4 p-4 rounded-xl bg-honey-dark/20 border border-honey/20 hover:border-honey hover:bg-zinc-800 transition-all duration-300 group"
        >
          <div
            class="p-3 rounded-lg bg-honey/10 text-honey group-hover:scale-110 transition-transform"
          >
            <!-- LinkedIn Icon SVG -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
              />
            </svg>
          </div>
          <div class="text-left">
            <div class="text-sm font-bold text-amber-50">LinkedIn</div>
            <div class="text-xs text-amber-50/60 truncate">in/devheshmati</div>
          </div>
        </a>
      </div>

      <!-- Email Direct Contact Button -->
      <div class="mt-2">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-honey text-black font-semibold hover:bg-honey-glow hover:shadow-[0_0_15px_theme(colors.honey)] transition-all duration-300"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>Contact</span>
        </NuxtLink>
      </div>
    </div>
    <!-- Section 2: Portfolio & Developer Spotlight -->
    <div
      class="w-11/12 md:w-9/10 max-w-6xl mx-auto p-6 md:p-12 bg-honey-dark/20 border border-honey/20 rounded-2xl shadow-2xl"
    >
      <h3
        class="text-center text-honey-glow text-2xl md:text-3xl font-bold mb-8"
      >
        Crafted with Passion & Code
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <!-- Left Col: Text & Brand Story -->
        <div
          class="flex flex-col gap-4 text-justify text-cream/80 leading-relaxed"
        >
          <p class="text-base md:text-lg">
            <strong class="text-honey">GoldenComb</strong> is a self-initiated
            concept project, not a commercial honey brand. It was crafted by
            <strong class="text-honey">devheshmati</strong> as a high-end
            design-and-development case study to explore a complete digital
            brand experience.
          </p>
          <p class="text-sm md:text-base text-amber-50/70">
            From the conceptual brand direction and warm amber visual system to
            fluid micro-interactions and robust front-end implementation using
            <span class="text-honey-light font-medium"
              >Nuxt, Tailwind CSS, and GSAP</span
            >
            — every detail was built to demonstrate how design aesthetics and
            technical precision merge into a seamless web experience.
          </p>
        </div>

        <!-- Right Col: Image Showcase -->
        <div
          class="relative overflow-hidden rounded-xl border border-honey/30 shadow-lg group"
        >
          <img
            src="/images/Coding_on_laptop_with_text_512.webp"
            alt="a person coding on laptop representing devheshmati workflow"
            class="w-full h-[320px] md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4"
          >
            <span
              class="text-honey-light text-xs md:text-sm font-mono tracking-wider"
            >
              // Developed by devheshmati
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
