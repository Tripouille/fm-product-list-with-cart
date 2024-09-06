<script setup lang="ts">
import { computed, ref } from "vue";
import { useShoppingCart } from "~/composables/useShoppingCart";
import { formatPrice } from "~/utils/format";
import OrderConfirmedModal from "./OrderConfirmedModal.vue";
import ShoppingCartOrder from "./ShoppingCartOrder.vue";

const { totalQuantity, totalPrice, shoppingCart, cleanShoppingCart } =
  useShoppingCart();
const formattedTotalPrice = computed(() => {
  return formatPrice(totalPrice.value);
});
const orderConfirmedModalIsOpen = ref(false);

function handleStartNewOrder() {
  orderConfirmedModalIsOpen.value = false;
  cleanShoppingCart();
}
</script>

<template>
  <aside class="shopping-cart">
    <h2 class="text-preset-2">Your Cart ({{ totalQuantity }})</h2>
    <section class="empty-cart" v-if="!totalQuantity">
      <img src="/assets/images/illustration-empty-cart.svg" alt="empty cart" />
      <p class="empty-cart__message text-preset-4-bold">
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
      <div class="carbon-neutral-wrapper">
        <img
          src="/assets/images/icon-carbon-neutral.svg"
          alt=""
          aria-hidden="true"
          height="20"
          width="20"
        />
        <p class="text-preset-4">
          This is a
          <span class="text-preset-4-bold">carbon-neutral</span> delivery
        </p>
      </div>
      <button
        class="confirm-order-button text-preset-3"
        @click="orderConfirmedModalIsOpen = true"
      >
        Confirm Order
      </button>
    </section>
    <OrderConfirmedModal
      :modal-is-open="orderConfirmedModalIsOpen"
      @close-modal="orderConfirmedModalIsOpen = false"
      @start-new-order="handleStartNewOrder"
    />
  </aside>
</template>

<style lang="scss" scoped>
.shopping-cart {
  padding: var(--spc-300);

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
    align-items: center;
    color: var(--clr-rose-900);
    margin-top: 3.125rem;
  }

  .carbon-neutral-wrapper {
    background-color: var(--clr-rose-50);
    color: var(--clr-rose-900);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spc-100);
    padding: var(--spc-200) 0;
    border-radius: 0.5rem;
    margin-top: var(--spc-300);
  }
  .confirm-order-button {
    background-color: var(--clr-red);
    color: var(--clr-white);
    border-radius: 9999px;
    border: none;
    padding: var(--spc-200) 0;
    cursor: pointer;
    margin-top: var(--spc-300);
    width: 100%;
    text-align: center;
  }
}
</style>
