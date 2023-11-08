<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    class: 'scroll-smooth',
  },
});
</script>
