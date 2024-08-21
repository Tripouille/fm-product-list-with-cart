<script setup lang="ts">
import Desserts from "./components/Desserts.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
</script>

<template>
  <main>
    <Desserts />
    <ShoppingCart />
  </main>
</template>

<style scoped>
main {
  max-width: 90rem;
  margin: 0 auto;
  padding: 5.5rem 7rem;
  display: flex;
  gap: var(--spc-400);
}
</style>
