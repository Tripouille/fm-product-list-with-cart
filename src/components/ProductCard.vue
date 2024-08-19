<script setup lang="ts">
import { useShoppingCart } from "@/composables/useShoppingCart";
import { Product } from "@/repositories/productRepository";
import { formatPrice } from "@/utils/format";
import { computed } from "vue";

const props = defineProps<Product>();

const formattedPrice = computed(() => formatPrice(props.price));
const { getShoppingCartProductQuantity, updateShoppingCartOrder } =
  useShoppingCart();
const quantity = computed(() => getShoppingCartProductQuantity(props));

function handleAddToCart() {
  updateShoppingCartOrder({
    ...props,
    type: "product",
    quantity: quantity.value + 1,
  });
}
</script>

<template>
  <section>
    <div class="img-wrapper">
      <img
        :src="props.image.desktop"
        :alt="props.name"
        height="262"
        width="250"
      />
      <button
        class="add-to-cart-button text-preset-4-bold"
        @click="handleAddToCart"
      >
        <img
          src="/assets/images/icon-add-to-cart.svg"
          alt=""
          aria-hidden="true"
        />
        <span>Add to cart {{ quantity }}</span>
      </button>
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
    position: relative;
    margin-bottom: 2.375rem;
    height: 16.375rem;

    img {
      border-radius: 0.5rem;
      height: 100%;
    }

    .add-to-cart-button {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: var(--spc-100);
      padding: var(--spc-150) var(--spc-300);
      color: var(--clr-rose-900);
      border: 1px solid var(--clr-rose-400);
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      text-wrap: nowrap;
      border-radius: 9999px;
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
