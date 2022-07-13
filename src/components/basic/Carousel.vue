<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
defineProps(["slides", "id"]);

const breakpoints = {
  // 350px and up
  350: {
    itemsToShow: 1,
    itemsToScroll: 1,
    snapAlign: 'start',
  },
  580: {
    itemsToShow: 2,
    itemsToScroll: 2,
    snapAlign: 'start',
  },
  1024: {
    itemsToShow: 3,
    itemsToScroll: 3,
    snapAlign: 'start',
  },
  1400: {
    itemsToShow: 5,
    itemsToScroll: 5,
    snapAlign: 'start',
  },
  1536: {
    itemsToShow: 6,
    itemsToScroll: 6,
    snapAlign: 'start',
  },
  2048: {
    itemsToShow: 8,
    itemsToScroll: 8,
    snapAlign: 'start',
  },
  2560: {
    itemsToShow: 10,
    itemsToScroll: 10,
    snapAlign: 'start',
  },
  3440: {
    itemsToShow: 13,
    itemsToScroll: 13,
    snapAlign: 'start',
  },
  3840: {
    itemsToShow: 15,
    itemsToScroll: 15,
    snapAlign: 'start',
  }
};
</script>

<template>
  <div class="carousel-container">
    <carousel :transition="500" class="hideArrows" :id="id" :breakpoints="breakpoints">
      <slide v-for="slide in slides" :key="slide.id" :id="slide.id">
        <slot :slide="slide"></slot>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<style>
.carousel__next,
.carousel__prev {
  background-color: var(--vt-c-orange);
}

.hideArrows .carousel__prev--in-active,
.hideArrows .carousel__next--in-active {
  display: none;
}

.carousel__slide>.carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}

.carousel__slide--visible>.carousel__item {
  opacity: 1;
  transform: rotateY(0);
}

.carousel__slide--next>.carousel__item {
  transform: scale(0.9) translate(-10px);
}

.carousel__slide--prev>.carousel__item {
  transform: scale(0.9) translate(10px);
}

.carousel__slide--active>.carousel__item {
  transform: scale(1.1);
}
</style>
