<script setup>
import { onMounted } from "vue";
import FilterPanel from "@/components/FilterPanel.vue";
import FilterResult from "@/components/FilterResult.vue";
import GenresPreview from "@/components/GenresPreview.vue";
import Preloader from "@/components/basic/Preloader.vue";
import Error from "@/components/basic/Error.vue";
import { useTVShowsStore } from '@/store';

const tvShowsStore = useTVShowsStore();

onMounted(() => {
  tvShowsStore.getTVShows();
});

function showDetails(id) {
  tvShowsStore.toThePage(`/details/${id}`);
}
</script>

<template>
  <FilterPanel />
  <FilterResult v-if="tvShowsStore.filterMode" :tvShows="tvShowsStore.filteredTVShows" @show:details="showDetails" />
  <GenresPreview v-if="!tvShowsStore.filterMode" :tvShowsByGenres="tvShowsStore.tvShowsByGenres" :tvShowsList="tvShowsStore.tvShowsList"
    @show:details="showDetails" />
  <Preloader v-if="!tvShowsStore.loaded" />
  <Error v-if="tvShowsStore.error" />
</template>

