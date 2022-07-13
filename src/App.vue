<script setup>
import { RouterView } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
