<script setup>
import TVShowSlide from "@/components/TVShowSlide.vue";
defineProps(['tvShows']);
defineEmits(['show:details'])
</script>

<template>
  <div class="filter-result">
    <TVShowSlide v-for="tvShow in tvShows" :slide="tvShow" class="list-item" @click="$emit('show:details', tvShow.id)" />
  </div>
</template>

<style scoped>
.filter-result {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 25px 30px;
}

.filter-result .list-item {
  margin: 0 auto;
}
</style>