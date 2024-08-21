<script setup lang="ts">
import { useShoppingCart } from "@/composables/useShoppingCart";

const { totalQuantity } = useShoppingCart();
</script>

<template>
  <aside>
    <h2 class="text-preset-2">Your Cart ({{ totalQuantity }})</h2>
    <section class="empty-car" v-if="!totalQuantity">
      <img src="/assets/images/illustration-empty-cart.svg" alt="empty cart" />
      <p class="empty-car__message text-preset-4-bold">
        Your added items will appear here
      </p>
    </section>
    <section v-else></section>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  width: 100%;

  h2 {
    color: var(--clr-red);
    margin-bottom: var(--spc-300);
  }

  .empty-car {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--spc-200) 0;
    &__message {
      color: var(--clr-rose-500);
      text-align: center;
    }
  }
}
</style>
