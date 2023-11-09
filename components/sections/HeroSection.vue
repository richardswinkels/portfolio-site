<template>
  <section
    id="hero"
    class="container flex min-h-screen max-w-screen-lg flex-col items-center justify-center py-20 text-center md:flex-row-reverse md:justify-between"
  >
    <div class="mb-10 md:m-0">
      <img
        src="~/assets/img/laptop.svg"
        width="400"
        height="400"
        alt="laptop"
      />
    </div>
    <div class="md:text-left">
      <h1 class="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
        Richard
        <span class="text-accent-900">Swinkels</span>
      </h1>
      <p class="mb-6 text-lg md:text-xl lg:text-2xl">
        Student software development
      </p>
      <NuxtLink
        class="text-primary-100 rounded-full bg-accent-900 px-10 py-3 text-primary transition-all duration-300 ease-in hover:bg-accent-700"
        to="#about"
      >
        Lees verder
      </NuxtLink>
    </div>
  </section>
</template>
