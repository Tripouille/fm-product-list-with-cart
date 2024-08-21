<script setup lang="ts">
import { useShoppingCart } from "@/composables/useShoppingCart";

const { totalQuantity } = useShoppingCart();
</script>

<template>
  <aside>
    <h2 class="text-preset-2">Your Cart ({{ totalQuantity }})</h2>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  width: 100%;

  h2 {
    color: var(--clr-red);
  }
}
</style>
