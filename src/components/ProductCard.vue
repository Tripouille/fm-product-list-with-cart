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
      <picture>
        <source
          media="(max-width: 375px)"
          :srcset="image.mobile"
          :alt="name"
          height="212"
          width="327"
        />
        <source
          media="(max-width: 768px)"
          :srcset="image.tablet"
          :alt="name"
          height="212"
          width="213"
        />
        <img :src="image.desktop" :alt="name" height="240" width="250" />
      </picture>
      <AddToCartButton
        :quantity="quantity"
        @update-quantity="handleUpdateQuantity"
      />
    </div>
    <div class="informations">
      <p class="category text-preset-4">{{ category }}</p>
      <h2 class="name text-preset-3">{{ name }}</h2>
      <p class="price text-preset-3">{{ formattedPrice }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
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

  .img-wrapper {
    position: relative;
    margin-bottom: 2.375rem;
    border-radius: 0.5rem;

    picture {
      border-radius: inherit;

      img {
        display: block;
      }
    }

    &.in-shopping-cart {
      outline: 2px solid var(--clr-red);
    }
  }
}
</style>
