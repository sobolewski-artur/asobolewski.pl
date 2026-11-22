<script setup lang="ts">
import { skillGroups } from '~/data/skills'
import type { IconName } from '~/components/AppIcon.vue'

const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('about.metaTitle'),
  description: () => t('about.metaDescription'),
  ogTitle: () => `${t('about.metaTitle')} — Artur Sobolewski`,
  ogDescription: () => t('about.metaDescription'),
  ogImage: '/images/my-picture.jpg',
})

const facts = ['experience', 'location', 'focus', 'languages', 'workMode'] as const
const steps = ['discover', 'plan', 'build', 'launch'] as const
</script>

<template>
  <div>
    <!-- Page header + bio -->
    <section class="relative overflow-hidden">
      <div class="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
      <div class="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <SectionHeading as="h1" :eyebrow="t('about.eyebrow')" :title="t('about.title')" />
          <div class="mt-8 space-y-5 text-lg text-pretty text-slate-600 dark:text-slate-300">
            <p>{{ t('about.bio1') }}</p>
            <p>{{ t('about.bio2') }}</p>
            <p>{{ t('about.bioAi') }}</p>
            <p>{{ t('about.bio3') }}</p>
          </div>
        </div>

        <aside class="self-start rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <img
            src="/images/my-picture.jpg"
            :alt="t('home.portraitAlt')"
            width="389"
            height="484"
            class="mx-auto aspect-square w-28 rounded-full bg-white object-cover object-top ring-4 ring-sky-100 dark:ring-sky-950"
          >
          <p class="mt-4 text-center font-semibold">Artur Sobolewski</p>
          <p class="text-center font-mono text-sm text-sky-600 dark:text-sky-400">Full Stack Web Developer</p>
          <dl class="mt-6 divide-y divide-slate-200 text-sm dark:divide-slate-800">
            <div v-for="f in facts" :key="f" class="flex justify-between gap-4 py-3">
              <dt class="text-slate-500 dark:text-slate-400">{{ t(`about.facts.${f}.label`) }}</dt>
              <dd class="text-right font-medium">{{ t(`about.facts.${f}.value`) }}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <!-- Skills -->
    <section class="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
      <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading :eyebrow="t('about.skills.eyebrow')" :title="t('about.skills.title')" :subtitle="t('about.skills.subtitle')" />
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="group in skillGroups"
            :key="group.key"
            class="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <div class="flex items-center gap-3">
              <span class="grid size-10 place-items-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                <AppIcon :name="group.icon as IconName" />
              </span>
              <h3 class="font-semibold">{{ t(`about.skills.groups.${group.key}`) }}</h3>
            </div>
            <ul class="mt-5 flex flex-wrap gap-1.5">
              <li
                v-for="item in group.items"
                :key="item"
                class="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- How I work -->
    <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading :eyebrow="t('about.process.eyebrow')" :title="t('about.process.title')" :subtitle="t('about.process.subtitle')" />
      <ol class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <li v-for="(step, i) in steps" :key="step" class="relative border-t-2 border-sky-500 pt-5">
          <span class="font-mono text-sm font-semibold text-sky-600 dark:text-sky-400">0{{ i + 1 }}</span>
          <h3 class="mt-1 text-lg font-semibold">{{ t(`about.process.steps.${step}.title`) }}</h3>
          <p class="mt-2 text-pretty text-slate-600 dark:text-slate-400">{{ t(`about.process.steps.${step}.text`) }}</p>
        </li>
      </ol>
    </section>

    <!-- Beyond code -->
    <section class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="grid items-center overflow-hidden rounded-3xl border border-slate-200 lg:grid-cols-2 dark:border-slate-800">
        <img
          src="/images/ja_luk.jpg"
          :alt="t('about.hobby.alt')"
          width="1012"
          height="662"
          loading="lazy"
          class="h-full w-full object-cover"
        >
        <div class="p-8 sm:p-12">
          <p class="inline-flex items-center gap-2 font-mono text-sm font-semibold text-sky-600 dark:text-sky-400">
            <AppIcon name="target" class="size-4" />
            {{ t('about.hobby.eyebrow') }}
          </p>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-balance">{{ t('about.hobby.title') }}</h2>
          <p class="mt-4 text-lg text-pretty text-slate-600 dark:text-slate-400">{{ t('about.hobby.text') }}</p>
          <NuxtLink
            :to="localePath('portfolio')"
            class="mt-6 inline-flex items-center gap-1.5 font-semibold text-sky-600 hover:underline dark:text-sky-400"
          >
            {{ t('common.viewWork') }}
            <AppIcon name="arrow-right" class="size-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <ContactCta />
  </div>
</template>
