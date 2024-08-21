<script setup lang="ts">
import { useShoppingCart } from "@/composables/useShoppingCart";
import { Product } from "@/repositories/productRepository";
import { Quantity } from "@/repositories/shoppingCartRepository";
import { formatPrice } from "@/utils/format";
import { computed } from "vue";
import AddToCartButton from "./AddToCartButton.vue";

const props = defineProps<Product>();

const formattedPrice = computed(() => formatPrice(props.price));
const { getShoppingCartProductQuantity, updateShoppingCartOrder } =
  useShoppingCart();
const quantity = computed(() => getShoppingCartProductQuantity(props));

function handleUpdateQuantity(quantity: Quantity) {
  updateShoppingCartOrder({
    ...props,
    type: "product",
    quantity,
  });
}
</script>

<template>
  <section>
    <div class="img-wrapper" :class="[{ 'in-shopping-cart': quantity }]">
      <img
        :src="props.image.desktop"
        :alt="props.name"
        height="262"
        width="250"
      />
      <AddToCartButton
        :quantity="quantity"
        @update-quantity="handleUpdateQuantity"
      />
    </div>
    <div class="informations">
      <p class="category text-preset-4">{{ props.category }}</p>
      <h2 class="name text-preset-3">{{ props.name }}</h2>
      <p class="price text-preset-3">{{ formattedPrice }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 15.625rem;

  .img-wrapper {
    &.in-shopping-cart {
      outline: 2px solid var(--clr-red);
    }

    position: relative;
    margin-bottom: 2.375rem;
    height: 16.375rem;
    border-radius: 0.5rem;

    img {
      border-radius: inherit;
      height: 100%;
      width: 100%;
    }
  }

  .informations {
    display: flex;
    flex-direction: column;
    gap: var(--spc-50);

    .category {
      color: var(--clr-rose-500);
    }

    .name {
      color: var(--clr-rose-900);
    }

    .price {
      color: var(--clr-red);
    }
  }
}
</style>
