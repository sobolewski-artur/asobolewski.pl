<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{ project: Project }>()

const { t } = useI18n()
const l = useLocalized()

const title = computed(() => l(props.project.title))
</script>

<template>
  <article class="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/40">
    <!-- Cover: a stylised browser window, so no screenshots are required -->
    <div class="bg-linear-to-br p-5 pb-0" :class="project.accent" aria-hidden="true">
      <div class="overflow-hidden rounded-t-lg bg-white/95 shadow-lg dark:bg-slate-950/90">
        <div class="flex items-center gap-1.5 border-b border-slate-200 px-3 py-2 dark:border-slate-800">
          <span class="size-2 rounded-full bg-rose-400" />
          <span class="size-2 rounded-full bg-amber-400" />
          <span class="size-2 rounded-full bg-emerald-400" />
          <span class="ml-2 h-2 w-24 rounded-full bg-slate-200 dark:bg-slate-800" />
        </div>
        <div class="space-y-2 px-4 py-5 font-mono text-xs">
          <p class="truncate text-slate-400">&lt;{{ project.slug }} /&gt;</p>
          <p class="truncate text-base font-semibold text-slate-800 dark:text-slate-100">{{ title }}</p>
          <div class="flex gap-1.5 pt-1">
            <span class="h-1.5 w-16 rounded-full bg-slate-200 dark:bg-slate-800" />
            <span class="h-1.5 w-8 rounded-full bg-slate-200 dark:bg-slate-800" />
            <span class="h-1.5 w-12 rounded-full bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-1 flex-col p-6">
      <p class="flex items-center gap-2 text-xs font-medium tracking-wide text-slate-500 uppercase dark:text-slate-400">
        <span>{{ t(`portfolio.categories.${project.category}`) }}</span>
        <span aria-hidden="true">·</span>
        <span>{{ project.year }}</span>
      </p>
      <h3 class="mt-2 text-xl font-semibold">{{ title }}</h3>
      <p class="mt-2 text-pretty text-slate-600 dark:text-slate-400">{{ l(project.summary) }}</p>

      <ul class="mt-4 flex flex-wrap gap-1.5" :aria-label="t('portfolio.stack')">
        <li
          v-for="tech in project.stack"
          :key="tech"
          class="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
        >
          {{ tech }}
        </li>
      </ul>

      <div v-if="project.links?.live || project.links?.repo" class="mt-auto flex gap-4 pt-5 text-sm font-medium">
        <a
          v-if="project.links.live"
          :href="project.links.live"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-1 text-sky-600 hover:underline dark:text-sky-400"
        >
          {{ t('common.live') }}
          <AppIcon name="arrow-up-right" class="size-4" />
          <span class="sr-only">— {{ title }}</span>
        </a>
        <a
          v-if="project.links.repo"
          :href="project.links.repo"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-1 text-slate-600 hover:underline dark:text-slate-300"
        >
          <AppIcon name="github" class="size-4" />
          {{ t('common.code') }}
          <span class="sr-only">— {{ title }}</span>
        </a>
      </div>
    </div>
  </article>
</template>
