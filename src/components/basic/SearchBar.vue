<script setup>
defineProps(["text"]);
const emit = defineEmits(["update:text"]);
let timerID;

function debounceSearch(text) {
  if(timerID) clearTimeout(timerID);
  timerID = setTimeout(() => {
    emit('update:text', text);
  }, 500)
}
</script>

<template>
  <div class="search-bar-container">
    <input :value="text" @input="debounceSearch($event.target.value)" placeholder="Search..." class="search-bar" />
    <div v-show="text" class="clear-icon" @click="$emit('update:text', null)">x</div>
  </div>
</template>

<style scoped>
.search-bar {
  position: relative;
  color: black;
  padding: 0.3rem 1.5rem 0.3rem 0.3rem;
  width: 18rem;
  height: 3rem;
  font-size: 1rem;
  background-color: var(--vt-c-white-soft);
}

.clear-icon {
  position: absolute;
  position: absolute;
  color: var(--vt-c-dark-gray);
  font-size: 2rem;
  right: 0.5rem;
  bottom: 0.2rem;
  cursor: pointer
}

.search-bar:active {
  outline: var(--vt-c-orange);
}
</style>
