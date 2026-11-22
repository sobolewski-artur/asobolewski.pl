<script setup lang="ts">
import { projects, type ProjectCategory } from '~/data/projects'

const { t } = useI18n()

useSeoMeta({
  title: () => t('portfolio.metaTitle'),
  description: () => t('portfolio.metaDescription'),
  ogTitle: () => `${t('portfolio.metaTitle')} — Artur Sobolewski`,
  ogDescription: () => t('portfolio.metaDescription'),
})

type Filter = 'all' | ProjectCategory

// Only offer filters for categories that actually have projects
const filters = computed<Filter[]>(() => [
  'all',
  ...(['webapp', 'website', 'ecommerce', 'api'] as const).filter(c => projects.some(p => p.category === c)),
])

const active = ref<Filter>('all')

const visible = computed(() =>
  [...projects]
    .filter(p => active.value === 'all' || p.category === active.value)
    .sort((a, b) => b.year - a.year),
)
</script>

<template>
  <div>
    <section class="relative overflow-hidden">
      <div class="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
      <div class="relative mx-auto max-w-6xl px-4 pt-16 pb-10 sm:px-6 md:pt-24">
        <SectionHeading as="h1" :eyebrow="t('portfolio.eyebrow')" :title="t('portfolio.title')" :subtitle="t('portfolio.lead')" />
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 sm:px-6">
      <div role="group" :aria-label="t('portfolio.filterLabel')" class="flex flex-wrap gap-2">
        <button
          v-for="f in filters"
          :key="f"
          type="button"
          :aria-pressed="active === f"
          class="rounded-full border px-4 py-1.5 text-sm font-medium transition-colors"
          :class="active === f
            ? 'border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900'
            : 'border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white'"
          @click="active = f"
        >
          {{ f === 'all' ? t('portfolio.all') : t(`portfolio.categories.${f}`) }}
        </button>
      </div>

      <div v-if="visible.length" class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        <ProjectCard v-for="p in visible" :key="p.slug" :project="p" />
      </div>
      <p v-else class="mt-10 rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500 dark:border-slate-700">
        {{ t('portfolio.empty') }}
      </p>
    </section>

    <ContactCta />
  </div>
</template>
