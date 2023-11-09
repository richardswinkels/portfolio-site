<template>
  <section id="skills" class="scroll-mt-10 bg-accent-900 text-white">
    <div class="container max-w-screen-lg py-8">
      <h2 class="mb-4 text-2xl font-semibold">Mijn vaardigheden</h2>
      <CollapsableComponent :opened="true">
        <template #title>
          <h3>Backend</h3>
        </template>
        <template #content>
          <div
            class="mb-8 grid grid-cols-2 gap-4 ease-in-out sm:grid-cols-3 lg:grid-cols-4"
          >
            <div
              v-for="(skill, index) in backendSkills.body"
              :key="index"
              class="flex items-center rounded-lg border border-secondary-800 bg-secondary-700 p-2"
            >
              <img
                :src="skill.icon_path"
                :alt="skill.name"
                class="mr-2 h-8 w-8"
              />
              <p>{{ skill.name }}</p>
            </div>
          </div>
        </template>
      </CollapsableComponent>
      <CollapsableComponent>
        <template #title>
          <h3>Frontend</h3>
        </template>
        <template #content>
          <div
            class="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            <div
              v-for="(skill, index) in frontendSkills.body"
              :key="index"
              class="flex items-center rounded-lg border border-secondary-800 bg-secondary-700 p-2"
            >
              <img
                :src="skill.icon_path"
                :alt="skill.name"
                class="mr-2 h-8 w-8"
              />
              <p>{{ skill.name }}</p>
            </div>
          </div>
        </template>
      </CollapsableComponent>
      <CollapsableComponent>
        <template #title>
          <h3>Tools & DevOps</h3>
        </template>
        <template #content>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <div
              v-for="(skill, index) in otherSkills.body"
              :key="index"
              class="flex items-center rounded-lg border border-secondary-800 bg-secondary-700 p-2"
            >
              <img
                :src="skill.icon_path"
                :alt="skill.name"
                class="mr-2 h-8 w-8"
              />
              <p>{{ skill.name }}</p>
            </div>
          </div>
        </template>
      </CollapsableComponent>
    </div>
  </section>
</template>

<script setup>
const { data: backendSkills } = await useAsyncData('backend', () =>
  queryContent('/skills/backend').findOne(),
);
const { data: frontendSkills } = await useAsyncData('frontend', () =>
  queryContent('/skills/frontend').findOne(),
);
const { data: otherSkills } = await useAsyncData('other', () =>
  queryContent('/skills/tools').findOne(),
);
</script>
