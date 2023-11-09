<template>
  <section id="projects" class="container max-w-screen-lg scroll-mt-10 py-8">
    <h2 class="mb-4 text-2xl font-semibold">Mijn projecten</h2>
    <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
      <ContentList v-slot="{ list }" :query="query">
        <div
          v-for="project in list"
          :key="project._path"
          class="mb-4 flex flex-col rounded-lg border border-gray-200 shadow-lg"
        >
          <div>
            <img
              :src="project.image_path"
              :alt="project.name"
              class="aspect-video w-full rounded-t-lg object-contain"
            />
          </div>
          <div class="flex flex-1 flex-col justify-between p-2">
            <div>
              <h2 class="mb-2 text-lg font-semibold">{{ project.name }}</h2>
              <p class="mb-4" v-html="project.description"></p>
            </div>
            <div class="mb-3">
              <div class="mb-6 flex flex-wrap gap-2">
                <span
                  v-for="(tag, index) in project.tags"
                  :key="index"
                  class="rounded-lg bg-secondary-700 px-2 py-1 text-sm text-white"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="flex h-10 gap-2">
                <a
                  v-if="project.github_link"
                  target="_blank"
                  :href="project.github_link"
                  class="text-primary-100 flex items-center rounded-xl bg-accent-900 px-3 py-2 text-primary transition-all duration-100 ease-in hover:bg-accent-700"
                >
                  <CodeBracketIcon class="mr-2 h-5 w-5"></CodeBracketIcon>
                  Code
                </a>
                <a
                  v-if="project.live_demo_link"
                  target="_blank"
                  :href="project.live_demo_link"
                  class="text-primary-100 flex items-center rounded-xl bg-accent-900 px-3 py-2 text-primary transition-all duration-100 ease-in hover:bg-accent-700"
                >
                  <EyeIcon class="mr-2 h-5 w-5"></EyeIcon>
                  Live demo
                </a>
                <button
                  v-if="project.demo_video_links"
                  class="text-primary-100 flex items-center rounded-xl bg-accent-900 px-3 py-2 text-primary transition-all duration-100 ease-in hover:bg-accent-700"
                  @click="lightboxToggler = !lightboxToggler"
                >
                  <FsLightbox
                    :toggler="lightboxToggler"
                    :sources="project.demo_video_links"
                    :custom-attributes="[
                      {
                        autoplay: 'autoplay',
                      },
                    ]"
                  />
                  <VideoCameraIcon class="mr-2 h-5 w-5"></VideoCameraIcon>
                  Demo video
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContentList>
    </div>
  </section>
</template>

<script setup>
import {
  CodeBracketIcon,
  VideoCameraIcon,
  EyeIcon,
} from '@heroicons/vue/24/solid';
import FsLightbox from 'fslightbox-vue/v3';

const query = { path: '/projects', sort: [{ order: -1 }] };
const lightboxToggler = ref(true);
</script>
