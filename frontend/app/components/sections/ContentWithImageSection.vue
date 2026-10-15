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
    class="relative grid grid-cols-2 font-primary bg-cream min-h-screen overflow-hidden"
  >
    <!-- Text column -->
    <div class="relative flex flex-col justify-center items-center px-12">
      <div class="flex w-2/3 max-w-md flex-col gap-4">
        <h3
          class="text-3xl font-bold uppercase leading-tight text-main lg:text-4xl"
        >
          {{ header }}
        </h3>

        <p class="leading-relaxed text-muted text-justify">
          {{ content }}
        </p>
      </div>
    </div>

    <!-- Image column -->
    <div
      :class="[
        'relative flex items-center justify-center p-12',
        imagePose === 'left' ? 'order-first' : '',
      ]"
    >
      <img
        :src="imageUrl"
        :alt="imageAlt"
        class="max-h-[70%] w-auto rounded-showcase object-contain"
      />
    </div>
  </section>
</template>
