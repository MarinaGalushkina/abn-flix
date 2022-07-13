<script setup>
defineProps(['color', 'tagName']);
</script>

<template>
  <div class="tag" :style="{ 'background-color': color }"> {{ tagName }} </div>
</template>

<style scoped>
.tag {
  padding: 0 3px;
  margin: 0.1rem;
  border: 2px solid var(--vt-c-dark-gray);
  background: var(--vt-c-dark-gray);
  color: var(--vt-c-white-mute);
  border-radius: 15px;
  line-height: initial;
  font-size: 1rem;
  cursor: pointer;
  width: fit-content;
}
</style>