<script setup lang="ts">
import ProductCard from "~/components/ProductCard.vue";
import { useProducts } from "~/composables/useProducts";

const { products } = useProducts();
</script>

<template>
  <section>
    <h1 class="text-preset-1">Desserts</h1>
    <ul>
      <li v-for="product in products">
        <ProductCard :="product" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  h1 {
    margin-bottom: var(--spc-300);
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--spc-300);

    li {
      list-style: none;
    }
  }
}
</style>
