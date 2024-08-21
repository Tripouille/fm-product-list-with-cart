<script setup lang="ts">
import { Quantity } from "@/repositories/shoppingCartRepository";

type AddToCartButtonProps = {
  quantity: Quantity;
};

type AddToCartButtonEmits = {
  (e: "update-quantity", quantity: Quantity): void;
};

const props = defineProps<AddToCartButtonProps>();
const emit = defineEmits<AddToCartButtonEmits>();

function handleIncrementQuantity() {
  emit("update-quantity", props.quantity + 1);
}

function handleDecrementQuantity() {
  if (props.quantity > 0) {
    emit("update-quantity", props.quantity - 1);
  }
}
</script>

<template>
  <div
    v-if="quantity"
    class="adjust-quantity-buttons-wrapper empty text-preset-4-bold"
  >
    <button @click="handleDecrementQuantity">
      <img
        src="/assets/images/icon-decrement-quantity.svg"
        alt="decrement-quantity"
        width="17"
        height="17"
      />
    </button>

    <span> {{ quantity }}</span>

    <button @click="handleIncrementQuantity">
      <img
        src="/assets/images/icon-increment-quantity.svg"
        alt="increment-quantity"
        width="17"
        height="17"
      />
    </button>
  </div>

  <button
    v-else
    @click="handleIncrementQuantity"
    class="add-to-cart-button text-preset-4-bold"
  >
    <img
      src="/assets/images/icon-add-to-cart.svg"
      alt=""
      aria-hidden="true"
      height="20"
      width="20"
    />
    <span>Add to cart</span>
  </button>
</template>

<style lang="scss" scoped>
.adjust-quantity-buttons-wrapper,
.add-to-cart-button {
  display: inline-flex;
  align-items: center;
  padding: var(--spc-150) var(--spc-300);
  min-width: 10rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  text-wrap: nowrap;
  border-radius: 9999px;
}

.adjust-quantity-buttons-wrapper {
  justify-content: space-between;
  background-color: var(--clr-red);
  color: var(--clr-white);

  button {
    background-color: var(--clr-red);
    padding: 3.5px;
    height: 17.5px;
    width: 17.5px;
    border: 1px solid var(--clr-white);
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
      width: 100%;
    }
  }
}

.add-to-cart-button {
  justify-content: center;
  color: var(--clr-rose-900);
  cursor: pointer;
  gap: var(--spc-100);
  border: 1px solid var(--clr-rose-400);

  img {
    height: 20px;
    width: 20px;
  }
}
</style>
