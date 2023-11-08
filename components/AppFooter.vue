<template>
  <footer class="bg-secondary-900 py-6 text-center text-primary">
    <p class="mb-2">Copyright © {{ currentYear }} - Richard Swinkels</p>
    <p>
      Built with ❤️ using
      <NuxtLink class="underline" to="https://nuxt.com" target="_blank">
        Nuxt.js
      </NuxtLink>
    </p>
  </footer>
</template>

<script setup>
const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>
