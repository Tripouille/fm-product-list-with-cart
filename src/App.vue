<script setup lang="ts">
import Desserts from "./components/Desserts.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
</script>

<template>
  <main>
    <Desserts class="desserts" />
    <ShoppingCart class="shopping-cart" />
  </main>
</template>

<style scoped>
main {
  max-width: 90rem;
  padding: var(--spc-300);
  margin: 0 auto;
  display: grid;
  gap: var(--spc-400);
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "desserts desserts"
    "shopping-cart shopping-cart";

  .desserts {
    grid-area: desserts;
  }

  .shopping-cart {
    grid-area: shopping-cart;
    width: 100%;
  }

  @media (min-width: 768px) {
    padding: var(--spc-500);
  }

  @media (min-width: 1440px) {
    padding: var(--spc-1100) var(--spc-1300);

    grid-template-areas: "desserts shopping-cart";
    .desserts {
      width: 50rem;
    }
  }
}
</style>
