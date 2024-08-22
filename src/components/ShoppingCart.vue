<script setup lang="ts">
import { useShoppingCart } from "@/composables/useShoppingCart";
import { formatPrice } from "@/utils/format";
import { computed } from "vue";
import ShoppingCartOrder from "./ShoppingCartOrder.vue";

const { totalQuantity, totalPrice, shoppingCart } = useShoppingCart();
const formattedTotalPrice = computed(() => {
  return formatPrice(totalPrice.value);
});
</script>

<template>
  <aside>
    <h2 class="text-preset-2">Your Cart ({{ totalQuantity }})</h2>
    <section class="empty-cart" v-if="!totalQuantity">
      <img src="/assets/images/illustration-empty-cart.svg" alt="empty cart" />
      <p class="empty-car__message text-preset-4-bold">
        Your added items will appear here
      </p>
    </section>
    <section v-else>
      <ul class="cart-orders">
        <li v-for="order in shoppingCart" :key="order.id">
          <ShoppingCartOrder :="order" />
        </li>
      </ul>
      <p class="order-total">
        <span class="text-preset-4">Order Total</span>
        <span class="text-preset-2">{{ formattedTotalPrice }}</span>
      </p>
    </section>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  width: 100%;

  h2 {
    color: var(--clr-red);
    margin-bottom: var(--spc-300);
  }

  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--spc-200) 0;
    &__message {
      color: var(--clr-rose-500);
      text-align: center;
    }
  }

  .cart-orders {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--spc-400);
  }

  .order-total {
    display: flex;
    justify-content: space-between;
    color: var(--clr-rose-900);
    margin-top: 3.125rem;
  }
}
</style>
