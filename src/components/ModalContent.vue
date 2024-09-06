<script setup lang="ts">
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap.mjs";
import { onMounted, onUnmounted, ref } from "vue";

const target = ref();
const { activate, deactivate } = useFocusTrap(target, {
  returnFocusOnDeactivate: true,
  immediate: true,
});

onMounted(() => {
  activate();
});

onUnmounted(() => {
  deactivate();
});
</script>

<template>
  <div ref="target">
    <slot />
  </div>
</template>
