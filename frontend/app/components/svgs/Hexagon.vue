<template>
  <div>
    <svg class="hex animate-spin [animation-duration:10s] text-honey" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" fill="none" stroke="currentColor" stroke-width="4" />
    </svg>
  </div>
</template>

<style>
.hex {
  width: var(--hex-size, 80px);
  height: var(--hex-size, 80px);
}
</style>
