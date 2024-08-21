<script setup lang="ts">
import Desserts from "./components/Desserts.vue";
</script>

<template>
  <main>
    <Desserts />
  </main>
</template>

<style scoped>
main {
  max-width: 76rem;
  margin: 0 auto;
  padding: 5.5rem 7rem;
  display: flex;
  gap: var(--spc-400);
}
</style>
