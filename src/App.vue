<script setup lang="ts">
import ProductCard from "./components/ProductCard.vue";
import { useProducts } from "./composables/useProducts";
const { products } = useProducts();
</script>

<template>
  <main>
    <h1>Desserts</h1>
    <ul>
      <li v-for="product in products">
        <ProductCard v-bind="product" />
      </li>
    </ul>
  </main>
</template>

<style scoped>
h1 {
  margin-bottom: 1.5rem;
}
main {
  max-width: 76rem;
  margin: 0 auto;
  padding: 5.5rem 7rem;
}
ul {
  max-width: 50rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;

  li {
    list-style: none;
  }
}
</style>
