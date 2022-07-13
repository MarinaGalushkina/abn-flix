<script setup>
import SearchBar from "@/components/basic/SearchBar.vue";
import RatingBar from "@/components/basic/RatingBar.vue";
import TagsBar from '@/components/basic/TagsBar.vue';
import { useTVShowsStore } from '@/store';

const tvShowsStore = useTVShowsStore();
const filteredGenres = tvShowsStore.filter.genres;
</script>

<template>
  <div class="filter-panel">
    <div class="rating-bar-container">
      <label class="rating-bar-title">Rating is at least:</label>
      <RatingBar @update:rating="tvShowsStore.setRatingBar" :rating="tvShowsStore.filter.minRating" />
    </div>
    <SearchBar :text="tvShowsStore.filter.searchBar" @update:text="tvShowsStore.setSearchBar" />
  </div>
  <TagsBar :tags="['All Genres', ...tvShowsStore.allGenres]" :activeTags="filteredGenres.size ? filteredGenres : new Set(['All Genres'])"
    @update:activeTags="tvShowsStore.setGenresBar" />
  <div v-show="tvShowsStore.filterMode" class="filter-panel-result">
    <div>Found: {{ tvShowsStore.filteredTVShows.length }} TV Shows</div>
    <span class="reset-filter" @click="tvShowsStore.resetFilter()">Reset the filter</span>
  </div>
</template>

<style scoped>
.filter-panel {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  margin: 2rem 0;
}

.filter-panel-result {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  font-size: 1rem;
}

.reset-filter {
  cursor: pointer;
  text-decoration: underline
}

.rating-bar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  padding: 0.1rem;
  width: 18rem;
  cursor: pointer;
}

.rating-bar-title {
  font-size: 1.2rem;
}
</style>