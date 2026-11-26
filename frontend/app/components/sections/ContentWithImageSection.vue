<script setup lang="ts">
type ImagePose = "left" | "right";

withDefaults(
  defineProps<{
    imageUrl?: string;
    imageAlt?: string;
    header?: string;
    content?: string;
    imagePose?: ImagePose;
  }>(),
  {
    imagePose: "right",
    imageAlt: "",
  },
);
</script>

<template>
  <section
    class="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 font-primary bg-cream min-h-[auto] lg:min-h-screen px-6 py-16 sm:px-10 md:py-20 lg:px-16 overflow-hidden"
  >
    <!-- Text column -->
    <div
      class="relative flex flex-col justify-center items-center lg:items-start order-2 lg:order-none"
    >
      <div
        class="flex w-full max-w-lg flex-col gap-4 sm:gap-5 text-center lg:text-left"
      >
        <h3
          class="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase leading-tight text-main tracking-tight"
        >
          {{ header }}
        </h3>

        <p
          class="text-sm sm:text-base leading-relaxed text-muted text-left sm:text-justify"
        >
          {{ content }}
        </p>
      </div>
    </div>

    <!-- Image column -->
    <div
      :class="[
        'relative flex items-center justify-center p-2 sm:p-6 lg:p-10 order-1',
        imagePose === 'left' ? 'lg:order-first' : 'lg:order-last',
      ]"
    >
      <NuxtImg
        :src="imageUrl"
        :alt="imageAlt"
        loading="lazy"
        class="w-full max-w-sm sm:max-w-md lg:max-w-lg max-h-[360px] sm:max-h-[440px] lg:max-h-[70vh] object-contain rounded-showcase shadow-card"
      />
    </div>
  </section>
</template>
