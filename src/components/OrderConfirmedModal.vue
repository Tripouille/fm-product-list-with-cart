<script setup lang="ts">
import { useShoppingCart } from "@/composables/useShoppingCart";
import { formatPrice } from "@/utils/format";
import { computed } from "vue";
import Modal from "./Modal.vue";
import ShoppingCartConfirmedOrder from "./ShoppingCartConfirmedOrder.vue";

export type ModalProps = {
  modalIsOpen: boolean;
};

export type ModalEmits = {
  (e: "close-modal"): void;
  (e: "start-new-order"): void;
};

defineProps<ModalProps>();
const emit = defineEmits<ModalEmits>();

const { totalPrice, shoppingCart } = useShoppingCart();
const formattedTotalPrice = computed(() => {
  return formatPrice(totalPrice.value);
});
</script>

<template>
  <Modal :modal-is-open="modalIsOpen" @close-modal="emit('close-modal')">
    <div class="order-confirmed-modal-content">
      <header>
        <img
          src="/assets/images/icon-order-confirmed.svg"
          alt="order confirmed"
          height="48"
          width="48"
        />
        <hgroup>
          <h2 class="text-preset-1">Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </hgroup>
      </header>

      <section>
        <ul>
          <template v-for="(order, index) in shoppingCart" :key="order.id">
            <li>
              <div v-if="index" role="separator" class="li-separator" />
              <ShoppingCartConfirmedOrder :="order" />
            </li>
          </template>
        </ul>
        <div role="separator" class="separator" />
        <p class="order-total">
          <span class="text-preset-4">Order Total</span
          ><span class="text-preset-2">{{ formattedTotalPrice }}</span>
        </p>
      </section>

      <footer>
        <button class="text-preset-3" @click="emit('start-new-order')">
          Start New Order
        </button>
      </footer>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.order-confirmed-modal-content {
  width: min(37rem, 100%);
  max-height: 43rem;
  padding: 1.25rem;
  border-radius: 0.75rem 0.75rem 0 0;
  background-color: var(--clr-white);
  display: flex;
  flex-direction: column;
  gap: var(--spc-400);

  .li-separator,
  .separator {
    height: 1px;
    background: var(--clr-rose-100);
  }

  .li-separator {
    margin-bottom: var(--spc-200);
  }

  header {
    img {
      margin-bottom: var(--spc-300);
    }
    hgroup {
      h2 {
        margin-bottom: var(--spc-100);
        color: var(--clr-rose-900);
      }
      p {
        color: var(--clr-rose-500);
      }
    }
  }

  section {
    padding: var(--spc-300);
    display: flex;
    flex-direction: column;
    gap: var(--spc-300);
    overflow-y: auto;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: var(--spc-200);
    }

    .order-total {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      color: var(--clr-rose-900);
    }
  }

  footer {
    button {
      border: none;
      cursor: pointer;
      background-color: var(--clr-red);
      width: 100%;
      padding: var(--spc-200);
      border-radius: 9999px;
      color: white;
    }
  }
}

@media (min-width: 376px) {
  .order-confirmed-modal-content {
    margin: var(--spc-500);
    padding: var(--spc-500);
    border-radius: 0.75rem;
  }
}
</style>
