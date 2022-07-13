<script setup>
import { onMounted } from "vue";
import { useTVShowsStore } from "@/store";
import TVShowDetails from "@/components/TVShowDetails.vue";
import Poster from "@/components/basic/Poster.vue";
import Preloader from "@/components/basic/Preloader.vue";
import Error from "@/components/basic/Error.vue";

const tvShowsStore = useTVShowsStore();
const showId = window.location.pathname.split("/").pop();

onMounted(() => {
  tvShowsStore.getTVShowByID(showId);
});
</script>

<template>
  <div class="container">
    <Poster :src="tvShowsStore.details.tvShow?.image.original" :size="'full'" class="poster" />
    <TVShowDetails :tvShow="tvShowsStore.details.tvShow" class="details" />
    <Preloader v-if="!tvShowsStore.details.loaded" />
    <Error v-if="tvShowsStore.details.error" />
  </div>
</template>

<style scoped>
.container {
  font-size: 1rem;
}
.poster {
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .container {
    display: grid;
    grid-template-areas:
      "poster details";
    box-sizing: border-box;
    max-width: 1200px;
    margin: auto;
    grid-gap: 20px;
    font-size: 1.5rem;
  }

  .poster {
    grid-area: poster;
    margin-bottom: 1rem;
  }

  .details {
    grid-area: details;
  }
}
</style>
