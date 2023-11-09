<template>
  <section id="about" class="container mb-4 max-w-screen-lg scroll-mt-10 py-8">
    <h2 class="mb-4 text-2xl font-semibold">Over mij</h2>
    <div class="flex flex-col-reverse justify-between md:flex-row">
      <div class="md:w-2/3">
        <p class="mb-4">
          Ik ben een 22-jarige software developer uit Eindhoven. Momenteel zit
          ik in het laatste jaar van de MBO-4 opleiding Software Development aan
          het Summa College.
        </p>
        <p class="mb-4">
          Deze opleiding sluit aan bij mijn persoonlijke interesse voor
          computers en software, die ik al van jongs af aan heb. Tijdens mijn
          studie heb ik me voornamelijk gericht op webdevelopment, waar ik heb
          ontdekt dat mijn grootste passie ligt bij het ontwikkelen van
          backend-systemen.
        </p>
        <p class="mb-4">
          Naast mijn opleiding werk ik als webdeveloper bij
          <a
            href="https://fruitcake.nl"
            class="inline font-semibold underline"
            target="_blank"
          >
            Fruitcake
          </a>
          . Hier ben ik verantwoordelijk voor de ontwikkeling van verschillende
          maatwerk webapplicaties met behulp van het PHP-framework Laravel.
        </p>
        <p class="mb-4">
          Heeft u interesse in mijn werk? Neem gerust contact met mij op!
        </p>
      </div>
      <div class="mb-8 sm:mb-6 md:mb-0">
        <img
          alt="about me picture"
          src="~/assets/img/photo.webp"
          class="sm:md-0 mb-2 rounded-3xl drop-shadow-2xl sm:float-left sm:mr-4 sm:w-3/5 md:float-none md:mb-2 md:mr-0 md:h-60 md:w-60"
        />
        <div class="text-sm">
          <a href="mailto:contact@richardswinkels.nl" class="hover:underline">
            <div class="mb-2 flex items-center gap-2">
              <img
                src="~/assets/img/email-icon.svg"
                class="h-6 w-6"
                alt="linkedin icon"
              />
              <span>contact@richardswinkels.nl</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/richardswinkels/"
            target="_blank"
            class="hover:underline"
          >
            <div class="mb-2 flex items-center gap-2">
              <img
                src="~/assets/img/linkedin-icon.svg"
                class="h-6 w-6"
                alt="linkedin icon"
              />
              <span>Richard Swinkels</span>
            </div>
          </a>
          <a
            href="https://www.github.com/users/richardswinkels/"
            target="_blank"
            class="hover:underline"
          >
            <div class="mb-2 flex items-center gap-2">
              <img
                src="~/assets/img/github-icon.svg"
                class="h-6 w-6"
                alt="github icon"
              />
              <span>richardswinkels</span>
            </div>
          </a>
          <a
            href="https://www.x.com/richardswnkls/"
            target="_blank"
            class="hover:underline"
          >
            <div class="flex items-center gap-2">
              <img src="~/assets/img/x-icon.svg" class="h-6 w-6" alt="X icon" />
              <span>@richardswnkls</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
