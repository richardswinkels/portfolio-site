<template>
  <nav
    class="fixed z-50 w-full bg-white transition-all duration-300"
    :class="{
      'border-b border-gray-200 py-3 shadow-lg': scrolled,
      'py-4': !scrolled,
    }"
  >
    <div
      class="container flex max-w-screen-lg flex-row flex-wrap items-center justify-between"
    >
      <span class="m-0 text-3xl font-bold text-accent-900">RS</span>
      <button
        id="toggleMobileMenuBtn"
        class="border-gw border-box rounded-xl px-2 py-2 focus:bg-gray-100 focus:ring-2 focus:ring-gray-200 md:hidden"
        title="ToggleMobileMenuButton"
        @click="toggleMobileMenu"
      >
        <Bars3Icon class="h-6 w-6 text-secondary-900" />
      </button>
      <ul
        class="mt-3 w-full flex-col font-semibold text-secondary-900 md:mt-0 md:w-auto md:flex-row md:gap-10"
        :class="{
          flex: expanded,
          'hidden md:flex': !expanded,
        }"
      >
        <li>
          <NuxtLink
            class="block py-2 decoration-accent-900 decoration-2 underline-offset-4 hover:underline md:py-0"
            to="#hero"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="block py-2 decoration-accent-900 decoration-2 underline-offset-4 hover:underline md:py-0"
            to="#about"
          >
            Over mij
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="block py-2 decoration-accent-900 decoration-2 underline-offset-4 hover:underline md:py-0"
            to="#skills"
          >
            Vaardigheden
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="block py-2 decoration-accent-900 decoration-2 underline-offset-4 hover:underline md:py-0"
            to="#projects"
          >
            Projecten
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { Bars3Icon } from '@heroicons/vue/24/solid';

const scrolled = ref(false);
const expanded = ref(false);

const onScroll = () => {
  scrolled.value = window.scrollY > 1 || expanded.value;
};

const toggleMobileMenu = () => {
  expanded.value = !expanded.value;
  scrolled.value = expanded.value || window.scrollY > 1;
};

const closeMobileMenu = () => {
  if (expanded.value) {
    toggleMobileMenu();
  }
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);

  const navlinks = document.querySelectorAll('nav a');
  navlinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });
});
</script>
