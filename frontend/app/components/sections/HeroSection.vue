<template>
  <section
    class="relative h-screen bg-hive-dark overflow-hidden flex flex-col justify-between font-primary text-honey-light select-none px-6 sm:px-10 lg:px-16 py-10"
  >
    <!-- Ambient Background Glows -->
    <div
      class="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-honey/10 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[32rem] rounded-full bg-honey/15 blur-[120px]"
    ></div>

    <!-- Main 12-Column Hero Grid -->
    <div
      class="relative z-10 my-auto max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-15"
    >
      <!-- Left Column: Brand Story, Social Proof & CTA (5 Cols) -->
      <div class="lg:col-span-5 flex flex-col items-start gap-6">
        <div
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-badge bg-forest/20 border border-forest/40 text-forest-light text-xs font-semibold tracking-wide"
        >
          <span
            class="h-2 w-2 rounded-full bg-forest-light animate-pulse"
          ></span>
          100% Raw & Unfiltered Harvest
        </div>

        <h1
          class="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
        >
          Pure Liquid Gold,
          <span class="text-honey block mt-1">Straight From Nature</span>
        </h1>

        <p
          class="text-honey-light/75 text-base sm:text-lg leading-relaxed max-w-md"
        >
          Discover the purest, most delicious honey carefully harvested to
          preserve rich flavor, natural enzymes, and authentic health benefits.
        </p>

        <!-- Primary & Secondary Actions -->
        <div class="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
          <NuxtLink
            to="/contact"
            class="w-full sm:w-auto text-center bg-honey hover:bg-honey-dark text-hive-dark font-bold px-8 py-4 rounded-btn transition-all duration-300 shadow-honey hover:shadow-glow hover:-translate-y-0.5 cursor-pointer"
          >
            Contact Us
          </NuxtLink>
        </div>

        <!-- Consumer Social Proof -->
        <div
          class="flex items-center gap-4 pt-4 border-t border-hive-card w-full max-w-sm"
        >
          <div class="flex -space-x-2.5 overflow-hidden">
            <NuxtImg
              class="inline-block h-10 w-10 rounded-badge ring-2 ring-hive-dark object-cover"
              src="/images/profile/man-1.webp"
              alt="Satisfied customer"
              loading="lazy"
            />
            <NuxtImg
              class="inline-block h-10 w-10 rounded-badge ring-2 ring-hive-dark object-cover"
              src="/images/profile/women-1.webp"
              alt="Satisfied customer"
              loading="lazy"
            />
            <NuxtImg
              class="inline-block h-10 w-10 rounded-badge ring-2 ring-hive-dark object-cover"
              src="/images/profile/women-2.webp"
              alt="Satisfied customer"
              loading="lazy"
            />
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <span class="font-bold text-white text-base">125K+</span>
              <span class="text-pollen text-xs">★★★★★</span>
            </div>
            <span class="text-muted text-xs font-medium"
              >Satisfied Consumers Worldwide</span
            >
          </div>
        </div>
      </div>

      <!-- Center Column: Hero Product Showcase (4 Cols) -->
      <div
        class="hidden md:block lg:col-span-4 relative flex justify-center items-center my-4 lg:my-0"
      >
        <!-- Decorative Showcase Frame -->
        <div
          class="relative w-72 sm:w-80 lg:w-full max-w-sm aspect-[4/5] rounded-showcase flex items-center justify-center p-6 group"
        >
          <NuxtImg
            src="/images/honey_jar2.webp"
            alt="Golden Comb Honey Jar"
            class="relative z-10 w-full h-fit flex items-center justify-center"
            :img-attrs="{
              class:
                'max-h-[340px] sm:max-h-[380px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.75)]',
            }"
            sizes="sm:320px md:380px lg:400px"
          />
        </div>
      </div>

      <!-- Right Column: Key Metrics (3 Cols) -->
      <div class="lg:col-span-3 grid grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-5">
        <div
          class="bg-hive-card/60 backdrop-blur-sm border border-white/5 hover:border-honey/30 transition-colors rounded-card p-4 sm:p-5 flex flex-col items-center lg:items-end text-center lg:text-right shadow-card"
        >
          <span
            class="text-honey text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight"
            >4K+</span
          >
          <span class="text-muted text-xs sm:text-sm font-medium mt-1"
            >Satisfied Clients</span
          >
        </div>

        <div
          class="bg-hive-card/60 backdrop-blur-sm border border-white/5 hover:border-honey/30 transition-colors rounded-card p-4 sm:p-5 flex flex-col items-center lg:items-end text-center lg:text-right shadow-card"
        >
          <span
            class="text-honey text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight"
            >5K+</span
          >
          <span class="text-muted text-xs sm:text-sm font-medium mt-1"
            >Successful Sales</span
          >
        </div>

        <div
          class="bg-hive-card/60 backdrop-blur-sm border border-white/5 hover:border-honey/30 transition-colors rounded-card p-4 sm:p-5 flex flex-col items-center lg:items-end text-center lg:text-right shadow-card"
        >
          <span
            class="text-honey text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight"
            >20+</span
          >
          <span class="text-muted text-xs sm:text-sm font-medium mt-1"
            >Unique Products</span
          >
        </div>
      </div>
    </div>

    <!-- Bottom Scroll Indicator -->
    <div
      class="absolute left-1/2 -translate-x-1/2 bottom-10 z-10 flex flex-col items-center gap-2 pt-4 text-[11px] font-semibold text-honey-glow/70 tracking-[0.2em] uppercase"
    >
      <span>Scroll to explore</span>
      <div
        class="w-5 h-8 rounded-badge border-2 border-honey/40 flex justify-center pt-1.5"
      >
        <div class="w-1 h-2 bg-honey rounded-badge animate-bounce"></div>
      </div>
    </div>
  </section>
</template>
