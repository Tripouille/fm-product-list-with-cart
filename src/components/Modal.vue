<script setup lang="ts">
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap.mjs";
import { nextTick, ref, watch } from "vue";
export type ModalProps = {
  modalIsOpen: boolean;
};

export type ModalEmits = {
  (e: "close-modal"): void;
};

const props = defineProps<ModalProps>();
const emit = defineEmits<ModalEmits>();

const target = ref();
const { activate, deactivate } = useFocusTrap(target, {
  escapeDeactivates: true,
  onDeactivate: () => {
    emit("close-modal");
  },
});

async function activateFocusTrapOnNextTick() {
  await nextTick();
  activate();
}

watch(
  () => props.modalIsOpen,
  (isOpen) => {
    if (isOpen) activateFocusTrapOnNextTick();
    else deactivate();
  }
);
</script>

<template>
  <Teleport to="#modal">
    <section
      v-if="modalIsOpen"
      ref="target"
      class="backdrop"
      @click.self="() => deactivate()"
    >
      <slot />
    </section>
  </Teleport>
</template>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: var(--zi-modal);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
}

@media (min-width: 376px) {
  .backdrop {
    align-items: center;
  }
}
</style>
