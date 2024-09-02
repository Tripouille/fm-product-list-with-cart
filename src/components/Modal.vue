<script setup lang="ts">
export type ModalProps = {
  modalIsOpen: boolean;
};

export type ModalEmits = {
  (e: "close-modal"): void;
};

defineProps<ModalProps>();
const emit = defineEmits<ModalEmits>();
</script>

<template>
  <Teleport to="#modal">
    <section v-if="modalIsOpen" class="backdrop" @click.self="emit('close-modal')">
      <slot />
    </section>
  </Teleport>
</template>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: var(--zi-modal);

  display: grid;
  place-items: center;
}
</style>
