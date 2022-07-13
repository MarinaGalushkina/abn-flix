<script setup>
defineProps({
  errorMessage: {
    type: String,
    default: "There is an error occurred. Try to reload the page.",
  }
});
</script>

<template>
    <div class="error">{{errorMessage}}</div>
</template>

<style scoped>
.error {
  font-size: 1.5rem;
}
</style>