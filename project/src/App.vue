<script setup lang="ts">
import Headers from "./components/Headers.vue";
import Dashboard from "./view/dashboard.vue";
</script>

<template>
  <Headers class="fixed top-0 w-full z-50" />
  <main class="pt-16 px-6">
    <router-view />
  </main>
</template>

<style scoped></style>
