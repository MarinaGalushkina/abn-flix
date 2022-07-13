<script setup>
import Tag from "@/components/basic/Tag.vue";
defineProps(["tags", "activeTags"]);
defineEmits(["update:activeTags"])
</script>

<template>
  <div class="tags-bar-container">
    <div v-for="tag in tags" @click="$emit('update:activeTags', tag)" :class="{ active: activeTags.has(tag) }">
      <Tag :tagName="tag.toUpperCase()" />
    </div>
  </div>
</template>

<style scoped>
.tags-bar-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
}

.active .tag {
  background: var(--vt-c-orange);
  border: 2px solid var(--vt-c-orange);
}
</style>
