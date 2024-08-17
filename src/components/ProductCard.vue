<script setup lang="ts">
import { Product } from "@/repositories/productRepository";

const props = defineProps<Product>();
</script>

<template>
  <figure>
    <img
      :src="props.image.desktop"
      :alt="props.name"
      height="262"
      width="250"
    />
    <figcaption>
      <p class="category text-preset-4">{{ props.category }}</p>
      <h2 class="name text-preset-3">{{ props.name }}</h2>
      <p class="price text-preset-3">{{ props.price }}</p>
    </figcaption>
  </figure>
</template>

<style lang="scss" scoped>
figure {
  width: 15.625rem;

  img {
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  figcaption {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

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
