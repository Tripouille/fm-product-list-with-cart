<script setup lang="ts">
import { Quantity } from "~/repositories/shoppingCartRepository";

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
    <button title="decrement quantity" @click="handleDecrementQuantity">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="2"
        fill="none"
        viewBox="0 0 10 2"
      >
        <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
      </svg>
    </button>

    <span> {{ quantity }}</span>

    <button title="increment quantity" @click="handleIncrementQuantity">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        fill="none"
        viewBox="0 0 10 10"
      >
        <path
          fill="#fff"
          d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
        />
      </svg>
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
  align-items: center;
  background-color: var(--clr-red);
  color: var(--clr-white);

  span {
    flex-grow: 1;
    text-align: center;
  }

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

    svg {
      width: 17px;
      height: 17px;
    }
  }
}

.add-to-cart-button {
  justify-content: center;
  color: var(--clr-rose-900);
  cursor: pointer;
  gap: var(--spc-100);
  border: 1px solid var(--clr-rose-400);

  svg {
    height: 20px;
    width: 20px;
  }
}

.add-to-cart-button:hover {
  border-color: var(--clr-red);
  color: var(--clr-red);
}

.adjust-quantity-buttons-wrapper {
  button:hover {
    background: var(--clr-white);
    svg path {
      fill: var(--clr-red);
    }
  }
}
</style>
