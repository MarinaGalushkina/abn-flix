<script setup>
import TVShowSlide from "@/components/TVShowSlide.vue";
import Carousel from "@/components/basic/Carousel.vue";
import Tag from "@/components/basic/Tag.vue";
defineProps(['tvShowsByGenres', 'tvShowsList']);
defineEmits(['show:details']);
</script>

<template>
    <div v-for="(tvShows, genre) in tvShowsByGenres" class="genre-preview-container">
      <Tag :tagName="genre.toUpperCase()" />
      <Carousel :slides="tvShows.map(twShowID => tvShowsList.get(twShowID))" :id="genre" class="carousel">
        <template v-slot="{ slide }">
          <TVShowSlide :slide="slide" @click="$emit('show:details', slide.id)" />
        </template>
      </Carousel>
    </div>
</template>

<style scoped>
.genre-preview-container {
  margin: 2rem 0;
}

.carousel {
  margin: 1rem 0;
}
</style>