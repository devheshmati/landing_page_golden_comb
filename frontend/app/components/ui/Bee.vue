<script setup lang="ts">
const props = defineProps<{
  width?: number;
  height?: number;
}>();
</script>

<template>
  <div>
    <Lottie
      name="bee-lounging"
      :width="`${props.width}px`"
      :height="`${props.height}px`"
    />
  </div>
</template>
