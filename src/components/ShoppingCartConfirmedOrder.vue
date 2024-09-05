<script setup lang="ts">
import { computed } from "vue";
import { ShoppingCartOrder } from "~/repositories/shoppingCartRepository";
import { formatPrice } from "~/utils/format";

const props = defineProps<ShoppingCartOrder>();

const formattedPrice = computed(() => {
  return formatPrice(props.price);
});

const formattedTotalPrice = computed(() => {
  return formatPrice(props.price * props.quantity);
});
</script>

<template>
  <div class="shopping-cart-confirmed-order">
    <img
      class="thumbnail"
      :src="image.thumbnail"
      :alt="name"
      height="48"
      width="48"
    />
    <p class="text-preset-4-bold name">{{ name }}</p>
    <p class="informations">
      <span class="quantity text-preset-4-bold">{{ quantity }}x</span>
      <span class="price text-preset-4">@ {{ formattedPrice }}</span>
    </p>
    <p class="total-price text-preset-3">{{ formattedTotalPrice }}</p>
  </div>
</template>

<style lang="scss" scoped>
.shopping-cart-confirmed-order {
  display: grid;
  grid-template-areas:
    "thumbnail name total-price"
    "thumbnail informations total-price";
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--spc-100);

  .thumbnail {
    grid-area: thumbnail;
  }

  .name {
    grid-area: name;
  }

  .informations {
    grid-area: informations;
    display: inline-flex;
    gap: var(--spc-100);

    .quantity {
      color: var(--clr-red);
    }

    .price {
      color: var(--clr-rose-500);
    }
  }

  .total-price {
    grid-area: total-price;
    color: var(--clr-rose-500);
  }
}
</style>
