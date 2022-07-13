<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import RatingBar from "@/components/basic/RatingBar.vue";

defineProps(["tvShow"]);

const ratingStarSize = ref(window.innerWidth < 768 ? "1rem" : "1.5rem");

function resizeHandler() {
  if (window.innerWidth < 768) {
    ratingStarSize.value = "1rem";
  } else {
    ratingStarSize.value = "1.5rem";
  }
}

onMounted(() => {
  window.addEventListener("resize", resizeHandler);
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeHandler);
});
</script>

<template>
  <div v-if="tvShow">
    <h1 class="title">{{ tvShow.name }}</h1>
    <div class="detail">
      <p>Year:</p>
      <p>{{ tvShow.premiered.split('-').reverse().join('-') }}</p>
    </div>
    <div class="detail">
      <p>Language:</p>
      <p>{{ tvShow.language }}</p>
    </div>
    <div class="detail">
      <p>Genres:</p>
      <p>{{ tvShow.genres.length ? tvShow.genres.join(', ') : "-" }}</p>
    </div>
    <div class="detail">
      <p>Rating:</p>
      <div>
        <RatingBar :rating="tvShow.rating.average" :size="ratingStarSize" />
        <p>{{ tvShow.rating.average || '-' }}/10</p>
      </div>
    </div>
    <div class="detail">
      <p>Runtime:</p>
      <p>{{ tvShow.runtime }} min</p>
    </div>
    <div class="detail about">
      <p>About the show:</p>
      <div class="summary" v-html="tvShow.summary" />
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 2rem;
  line-height: 1.4rem;
  margin-bottom: 1rem;
}

.detail {
  display: grid;
  grid-template-columns: 120px auto;
  margin-bottom: 0.5rem;
}

.detail p:first-child {
  color: #a2a2a2;
}

.about {
  display: flex;
  flex-direction: column;
}

.summary {
  text-align: justify;
}
</style>
