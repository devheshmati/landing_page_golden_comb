<script setup lang="ts">
import { ref, onMounted } from "vue";
const { $gsap, $ScrollTrigger } = useNuxtApp();

const beeEle = ref<HTMLElement | null>(null);
const beeShadowEle = ref<HTMLElement | null>(null);
const beeSize = 150;
const startY = -800;

onMounted(() => {
  // Extract the actual underlying DOM element from Vue component refs ($el)
  const beeNode = beeEle.value?.$el || beeEle.value;
  const shadowNode = beeShadowEle.value?.$el || beeShadowEle.value;

  if (!beeNode || !shadowNode) return;

  // 5. Dimension settings and vertical flight range
  const endY = window.innerHeight + 200;
  const centerX = window.innerWidth / 2;

  // 6. Flight path keyframes
  const horizontalKeyframes = [
    { progress: 0.0, offset: 0 },
    { progress: 0.1, offset: 0.5 },
    { progress: 0.25, offset: -0.3 },
    { progress: 0.4, offset: 0 },
    { progress: 0.55, offset: -0.8 },
    { progress: 0.7, offset: 0.1 },
    { progress: 0.85, offset: -0.3 },
    { progress: 1.0, offset: 0.8 },
  ];

  const verticalKeyframes = [
    { progress: 0.0, drop: 0.0 },
    { progress: 0.05, drop: 0.10 },
    { progress: 0.1, drop: 0.25 },
    { progress: 0.2, drop: 0.5 },
    { progress: 0.5, drop: 0.5 },
    { progress: 0.8, drop: 0.9 },
    { progress: 1.0, drop: 1.0 },
  ];

  const swayReach = window.innerWidth * 0.4;

  // 7. Helper functions for smooth interpolation
  function smoothStep(edge0, edge1, x) {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  }

  function sampleKeyframes(keyframes, progress, valueKey) {
    let i = 0;
    while (i < keyframes.length - 1 && keyframes[i + 1].progress <= progress) {
      i++;
    }
    if (i >= keyframes.length - 1)
      return keyframes[keyframes.length - 1][valueKey];

    const p1 = keyframes[i];
    const p2 = keyframes[i + 1];
    const factor = (progress - p1.progress) / (p2.progress - p1.progress);
    const smoothedFactor = smoothStep(0, 1, factor);

    return p1[valueKey] + (p2[valueKey] - p1[valueKey]) * smoothedFactor;
  }

  // 8. Main function to position and calculate locations using real DOM nodes
  function positionBee(progress) {
    const xOffset =
      sampleKeyframes(horizontalKeyframes, progress, "offset") * swayReach;
    const x = centerX + xOffset;

    const dropFactor = sampleKeyframes(verticalKeyframes, progress, "drop");
    const y = startY + (endY - startY) * dropFactor;

    const nextProgress = Math.min(1, progress + 0.01);
    const nextXOffset =
      sampleKeyframes(horizontalKeyframes, nextProgress, "offset") * swayReach;
    const nextX = centerX + nextXOffset;
    const tilt = (nextX - x) * 0.1;

    $gsap.set(beeNode, {
      x: x - beeSize / 2,
      y: y,
      rotation: tilt,
    });

    const heightField = Math.sin(dropFactor * Math.PI);
    const shadowScale = 1 + heightField * 0.5;
    const shadowOpacity = Math.max(0.2, 1 - heightField * 0.6);
    const shadowYOffset = heightField * 50;

    $gsap.set(shadowNode, {
      x: x - beeSize / 2 + 20,
      y: y + shadowYOffset + 80,
      scale: shadowScale,
      opacity: shadowOpacity,
      skewX: tilt * 0.5,
    });
  }

  positionBee(0);

  // 9. Attach animation to scrolling via ScrollTrigger
  $gsap.to(
    {},
    {
      scrollProgress: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".spotlight",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          positionBee(self.progress);
        },
      },
    },
  );

  // 10. Refresh using the provided plugin reference
  window.addEventListener("resize", () => {
    $ScrollTrigger.refresh();
  });
});
</script>

<template>
  <div>
    <UiBee
      ref="beeEle"
      class="fixed top-[4rem] left-[10rem] z-100"
      :width="beeSize"
    />
    <!-- bee shadow -->
    <UiBee
      ref="beeShadowEle"
      class="fixed brightness-0 blur-sm top-[4rem] left-[20rem] z-100"
      :width="beeSize - 40"
    />

    <SectionsHeroSection />
    <SectionsContentWithImageSection
      header="Header"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quod quis! Aliquam ad ullam debitis porro assumenda repellat quod impedit quas magnam harum quisquam atque aspernatur nulla obcaecati dolores maxime, alias iste maiores animi voluptatibus fuga! Alias ipsum amet, explicabo expedita laudantium ratione debitis numquam. Excepturi dolores provident animi veniam."
      imageUrl="/images/honey_jar2.webp"
      imageAlt=""
      imagePose="left"
    />
    <SectionsContentWithImageSection
      header="Header"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quod quis! Aliquam ad ullam debitis porro assumenda repellat quod impedit quas magnam harum quisquam atque aspernatur nulla obcaecati dolores maxime, alias iste maiores animi voluptatibus fuga! Alias ipsum amet, explicabo expedita laudantium ratione debitis numquam. Excepturi dolores provident animi veniam."
      imageUrl="/images/honey_jar2.webp"
      imageAlt=""
      imagePose=""
    />
    <SectionsContentWithImageSection
      header="Header"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quod quis! Aliquam ad ullam debitis porro assumenda repellat quod impedit quas magnam harum quisquam atque aspernatur nulla obcaecati dolores maxime, alias iste maiores animi voluptatibus fuga! Alias ipsum amet, explicabo expedita laudantium ratione debitis numquam. Excepturi dolores provident animi veniam."
      imageUrl="/images/honey_jar2.webp"
      imageAlt=""
      imagePose="left"
    />
    <SectionsContentWithImageSection
      header="Header"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quod quis! Aliquam ad ullam debitis porro assumenda repellat quod impedit quas magnam harum quisquam atque aspernatur nulla obcaecati dolores maxime, alias iste maiores animi voluptatibus fuga! Alias ipsum amet, explicabo expedita laudantium ratione debitis numquam. Excepturi dolores provident animi veniam."
      imageUrl="/images/honey_jar2.webp"
      imageAlt=""
      imagePose=""
    />
  </div>
</template>
