<script setup lang="ts">
import { ShoppingCartOrder } from "@/repositories/shoppingCartRepository";
import { formatPrice } from "@/utils/format";
import { computed } from "vue";

const props = defineProps<ShoppingCartOrder>();
const formattedPrice = computed(() => {
  return formatPrice(props.price);
});
const formattedTotalPrice = computed(() => {
  return formatPrice(props.price * props.quantity);
});
</script>

<template>
  <div class="shopping-cart-order">
    <p class="text-preset-4-bold name">{{ name }}</p>
    <p class="informations">
      <span class="quantity text-preset-4-bold">{{ quantity }}x</span>
      <span class="price text-preset-4">@ {{ formattedPrice }}</span>
      <span class="total-price text-preset-4-bold"
        >@ {{ formattedTotalPrice }}</span
      >
    </p>
    <button class="remove-product-button">
      <img
        src="/assets/images/icon-remove-item.svg"
        alt="remove product"
        height="9"
        width="9"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.shopping-cart-order {
  display: grid;
  grid-template-areas:
    "name remove-product-button"
    "informations remove-product-button";
  gap: var(--spc-100);

  .name {
    grid-area: name;
  }

  .informations {
    grid-area: informations;
    display: flex;
    gap: var(--spc-100);
    .quantity {
      color: var(--clr-red);
    }

    .price,
    .total-price {
      color: var(--clr-rose-500);
    }
  }

  .remove-product-button {
    grid-area: remove-product-button;
    align-self: center;
    justify-self: end;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid var(--clr-rose-400);
    border-radius: 50%;
    cursor: pointer;
    padding: var(--spc-50);
  }
}
</style>
