<script setup>
defineProps(["src", "size"]);
</script>

<template>
  <div :class="['poster-container', size]">
    <img :src="src" />
  </div>
</template>

<style scoped>
.poster-container.preview {
  position: relative;
  height: 295px;
  width: 210px;
  background-color: var(--vt-c-black);
}

.poster-container.full {
  position: relative;
  max-height: 600px;
  max-width: 400px;
  background-color: var(--vt-c-black);
}

.poster-container img {
  max-width: 100%;
  height: auto;
}
</style>
