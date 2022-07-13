<script setup>
import Poster from "@/components/basic/Poster.vue";
defineProps(["slide"]);
</script>

<template>
  <div class="slide-container" id="slide.id">
    <Poster :src="slide.image.medium" :size="'preview'" />
    <div v-show="slide.rating.average" class="rating">{{ slide.rating.average }}</div>
  </div>
</template>

<style scoped>
.slide-container {
  height: 295px;
  width: 210px;
  background-color: var(--vt-c-black);
  cursor: pointer;
}

.rating {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2.5rem;
  height: 1.5rem;
  text-align: center;
  vertical-align: baseline;
  background: var(--vt-c-orange);
  color: var(--vt-c-black-soft);
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
