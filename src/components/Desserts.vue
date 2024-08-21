<script setup lang="ts">
import { useProducts } from "@/composables/useProducts";
import ProductCard from "./ProductCard.vue";

const { products } = useProducts();
</script>

<template>
  <section>
    <h1>Desserts</h1>
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
    width: 50rem;
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
