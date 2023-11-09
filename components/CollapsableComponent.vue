<template>
  <div>
    <div class="mb-4 flex cursor-pointer" @click="toggleAccordion">
      <ChevronRightIcon
        class="mr-4 h-6 w-6 transition-all"
        :class="{ 'rotate-90': isOpen }"
      ></ChevronRightIcon>
      <slot name="title">Accordion Title</slot>
    </div>
    <div
      class="max-h-0 overflow-hidden transition-all duration-500 ease-in-out"
      :class="{ 'max-h-96': isOpen }"
    >
      <slot name="content">Accordion content</slot>
    </div>
  </div>
</template>

<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  opened: {
    type: Boolean,
    default: false,
  },
});

const isOpen = ref(props.opened);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};
</script>
