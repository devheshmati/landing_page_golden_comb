<script setup lang="ts">
interface Props {
  minThumb?: number;
  hideDelay?: number;
  side?: "left" | "right" | "auto";
  active?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  minThumb: 36,
  hideDelay: 1200,
  side: "auto",
  active: true,
});

const emit = defineEmits<{
  show: [];
  hide: [];
}>();

const bar = ref<HTMLDivElement | null>(null);
const thumb = ref<HTMLDivElement | null>(null);
const visible = ref(false);
const isDragging = ref(false);

let hideTimer: ReturnType<typeof setTimeout> | null = null;
let dragStartY = 0;
let dragStartScroll = 0;
let resizeObserver: ResizeObserver | null = null;

const resolvedSide = computed<"left" | "right">(() => {
  if (props.side !== "auto") return props.side;
  if (typeof document === "undefined") return "right";
  return document.documentElement.getAttribute("dir") === "rtl"
    ? "left"
    : "right";
});

function metrics() {
  const doc = document.documentElement;
  const scrollHeight = doc.scrollHeight;
  const clientHeight = doc.clientHeight;
  const maxScroll = Math.max(scrollHeight - clientHeight, 0);
  const trackHeight = bar.value?.clientHeight ?? clientHeight;

  let thumbHeight = (clientHeight / scrollHeight) * trackHeight;
  thumbHeight = Math.min(Math.max(thumbHeight, props.minThumb), trackHeight);

  const maxThumbTop = Math.max(trackHeight - thumbHeight, 0);
  return { maxScroll, trackHeight, thumbHeight, maxThumbTop };
}

function render() {
  if (!thumb.value || !bar.value) return;
  const { maxScroll, thumbHeight, maxThumbTop } = metrics();

  if (maxScroll <= 0) {
    visible.value = false;
    return;
  }

  const ratio = window.scrollY / maxScroll;
  const top = ratio * maxThumbTop;

  thumb.value.style.height = `${thumbHeight}px`;
  thumb.value.style.transform = `translate3d(0, ${top}px, 0)`;
}

function showBar() {
  if (!visible.value) emit("show");
  visible.value = true;
  if (hideTimer) clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    if (!isDragging.value) {
      visible.value = false;
      emit("hide");
    }
  }, props.hideDelay);
}

function onScroll() {
  render();
  showBar();
}

function onResize() {
  render();
}

function onThumbPointerDown(e: PointerEvent) {
  if (!thumb.value) return;
  e.preventDefault();
  isDragging.value = true;
  dragStartY = e.clientY;
  dragStartScroll = window.scrollY;
  thumb.value.setPointerCapture(e.pointerId);
  if (hideTimer) clearTimeout(hideTimer);
  visible.value = true;
}

function onThumbPointerMove(e: PointerEvent) {
  if (!isDragging.value) return;
  const { maxScroll, maxThumbTop } = metrics();
  if (maxThumbTop === 0) return;
  const deltaY = e.clientY - dragStartY;
  window.scrollTo({
    top: dragStartScroll + (deltaY / maxThumbTop) * maxScroll,
  });
}

function onThumbPointerUp(e: PointerEvent) {
  if (!isDragging.value) return;
  isDragging.value = false;
  if (thumb.value?.hasPointerCapture(e.pointerId)) {
    thumb.value.releasePointerCapture(e.pointerId);
  }
  showBar();
}

function onTrackPointerDown(e: PointerEvent) {
  if (e.target === thumb.value || !bar.value) return;
  const rect = bar.value.getBoundingClientRect();
  const y = e.clientY - rect.top;
  const { maxScroll, thumbHeight, maxThumbTop } = metrics();
  if (maxThumbTop === 0) return;
  const targetRatio = Math.min(
    Math.max((y - thumbHeight / 2) / maxThumbTop, 0),
    1,
  );
  window.scrollTo({ top: targetRatio * maxScroll, behavior: "smooth" });
}

function attach() {
  if (typeof window === "undefined") return;
  document.documentElement.classList.add("has-custom-scrollbar");
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  if ("ResizeObserver" in window) {
    resizeObserver = new ResizeObserver(render);
    resizeObserver.observe(document.body);
  }
  render();
}

function detach() {
  if (typeof window === "undefined") return;
  document.documentElement.classList.remove("has-custom-scrollbar");
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onResize);
  resizeObserver?.disconnect();
  resizeObserver = null;
  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }
  visible.value = false;
  isDragging.value = false;
}

onMounted(() => props.active && attach());
watch(
  () => props.active,
  (v) => (v ? attach() : detach()),
);
onBeforeUnmount(detach);
</script>

<template>
  <div
    ref="bar"
    class="group fixed top-0 z-[9999] h-dvh w-3.5 touch-none transition-opacity duration-300 ease-out motion-reduce:transition-none"
    :class="[
      resolvedSide === 'left' ? 'left-0' : 'right-0',
      visible
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none',
    ]"
    aria-hidden="true"
    @pointerdown="onTrackPointerDown"
  >
    <div
      ref="thumb"
      class="absolute top-0 inset-x-0 mx-auto w-1.5 cursor-grab rounded-badge bg-linear-to-b from-pollen via-honey to-honey-dark shadow-honey will-change-[transform,height] transition-[width,box-shadow,filter] duration-200 ease-out group-hover:w-2.5 motion-reduce:transition-none data-[dragging]:w-2.5 data-[dragging]:cursor-grabbing data-[dragging]:shadow-glow data-[dragging]:brightness-110 data-[dragging]:transition-none"
      :data-dragging="isDragging || undefined"
      @pointerdown="onThumbPointerDown"
      @mousedown="onThumbPointerDown"
      @pointermove="onThumbPointerMove"
      @pointerup="onThumbPointerUp"
      @pointercancel="onThumbPointerUp"
    />
  </div>
</template>

<style scoped>
:global(html.has-custom-scrollbar) {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
:global(html.has-custom-scrollbar::-webkit-scrollbar) {
  display: none;
}
</style>
