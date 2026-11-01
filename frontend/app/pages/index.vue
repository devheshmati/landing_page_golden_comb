<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import type { ComponentPublicInstance } from "vue";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

const { $gsap, $ScrollTrigger } = useNuxtApp();

const rootEle = ref<HTMLElement | null>(null);
const beeEle = ref<HTMLElement | ComponentPublicInstance | null>(null);
const beeShadowEle = ref<HTMLElement | ComponentPublicInstance | null>(null);

const beeSize = 150;
const startY = -800;

// shared scope — visible to BOTH onMounted and onUnmounted
let beeNode: HTMLElement | null = null;
let shadowNode: HTMLElement | null = null;
let trigger: ScrollTriggerType | null = null;

let centerX = 0;
let endY = 0;
let swayReach = 0;

const horizontalKeyframes = [
  { progress: 0.0, offset: 1 },
  { progress: 0.25, offset: 0.6 },
  { progress: 0.5, offset: -0.4 },
  { progress: 0.65, offset: 0.4 },
  { progress: 0.75, offset: -0.35 },
  { progress: 0.85, offset: -0.3 },
  { progress: 1, offset: 0.8 },
];

const verticalKeyframes = [
  { progress: 0.0, drop: 0 },
  { progress: 0.1, drop: 0.2 },
  { progress: 0.2, drop: 0.5 },
  { progress: 0.5, drop: 0.5 },
  { progress: 0.8, drop: 0.7 },
  { progress: 0.9, drop: 0.7 },
  { progress: 1, drop: 1 },
];

type Keyframe = { progress: number; [key: string]: number };

function smoothStep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function sampleKeyframes(
  keyframes: Keyframe[],
  progress: number,
  valueKey: string,
): number {
  let i = 0;
  while (i < keyframes.length - 1 && keyframes[i + 1].progress <= progress) i++;

  if (i >= keyframes.length - 1)
    return keyframes[keyframes.length - 1][valueKey];

  const p1 = keyframes[i];
  const p2 = keyframes[i + 1];
  const factor = (progress - p1.progress) / (p2.progress - p1.progress);
  const smoothed = smoothStep(0, 1, factor);

  return p1[valueKey] + (p2[valueKey] - p1[valueKey]) * smoothed;
}

function updateLayout(): void {
  centerX = window.innerWidth / 2;
  endY = window.innerHeight + 180;
  swayReach = window.innerWidth * 0.4;
}

function positionBee(progress: number): void {
  if (!beeNode || !shadowNode) return;

  const xOffset =
    sampleKeyframes(horizontalKeyframes, progress, "offset") * swayReach;
  const x = centerX + xOffset;

  const dropFactor = sampleKeyframes(verticalKeyframes, progress, "drop");
  const y = startY + (endY - startY) * dropFactor;

  const nextProgress = Math.min(1, progress + 0.01);
  const nextX =
    centerX +
    sampleKeyframes(horizontalKeyframes, nextProgress, "offset") * swayReach;
  const tilt = (nextX - x) * 0.1;

  $gsap.set(beeNode, { x: x - beeSize / 2, y, rotation: tilt });

  const heightField = Math.sin(dropFactor * Math.PI);
  $gsap.set(shadowNode, {
    x: x - beeSize / 2 + 20,
    y: y + heightField * 50 + 80,
    scale: 1 + heightField * 0.5,
    opacity: Math.max(0.2, 1 - heightField * 0.6),
    skewX: tilt * 0.5,
  });
}

let resizeTimer: ReturnType<typeof setTimeout> | undefined;

// single stable reference for add/removeEventListener
function doScrollTriggerRefresh(): void {
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    updateLayout(); // recompute viewport-dependent math
    positionBee(trigger?.progress ?? 0); // re-place the bee immediately
    $ScrollTrigger.refresh(); // then re-measure triggers
  }, 150);
}

onMounted(() => {
  beeNode = (beeEle.value as ComponentPublicInstance)?.$el ?? beeEle.value;
  shadowNode =
    (beeShadowEle.value as ComponentPublicInstance)?.$el ?? beeShadowEle.value;

  if (!(beeNode instanceof HTMLElement) || !(shadowNode instanceof HTMLElement))
    return;

  updateLayout();
  positionBee(0);

  trigger = $ScrollTrigger.create({
    trigger: rootEle.value,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => positionBee(self.progress),
  });

  window.addEventListener("resize", doScrollTriggerRefresh);
});

onUnmounted(() => {
  window.removeEventListener("resize", doScrollTriggerRefresh);
  if (resizeTimer) clearTimeout(resizeTimer);

  trigger?.kill();
  trigger = null;

  if (beeNode) $gsap.killTweensOf(beeNode);
  if (shadowNode) $gsap.killTweensOf(shadowNode);

  beeNode = null;
  shadowNode = null;
});
</script>

<template>
  <div ref="rootEle">
    <UiBee ref="beeEle" :class="['fixed z-100']" :width="beeSize" />
    <!-- bee shadow -->
    <UiBee
      ref="beeShadowEle"
      class="fixed brightness-0 blur-[0.4rem] top-[1rem] left-[7rem] z-100"
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
