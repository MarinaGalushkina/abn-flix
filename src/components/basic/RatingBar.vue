<script setup>
import StarIcon from "@/components/icons/StarIcon.vue";
defineProps({
  rating: {
    type: Number,
  },
  size: {
    type: String,
    default: "1.5rem",
  }
});
defineEmits(["update:rating"])
</script>

<template>
  <div class="rating-bar-stars">
    <StarIcon v-for="star in 10" :index="star" @click="$emit('update:rating', star)" :size="size" :isFilled="star <= rating" />
  </div>
</template>

<style scoped>
.rating-bar-stars {
  margin: 0;
  padding: 0;
}
</style>
