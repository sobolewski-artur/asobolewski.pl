<script setup lang="ts">
import { projects } from '~/data/projects'
import { highlightedStack } from '~/data/skills'
import type { IconName } from '~/components/AppIcon.vue'

const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('home.metaTitle'),
  description: () => t('home.metaDescription'),
  ogTitle: () => `Artur Sobolewski — ${t('home.metaTitle')}`,
  ogDescription: () => t('home.metaDescription'),
  ogImage: '/images/my-picture.jpg',
})

const services: { key: string, icon: IconName }[] = [
  { key: 'frontend', icon: 'code' },
  { key: 'backend', icon: 'server' },
  { key: 'data', icon: 'database' },
]

const featured = projects.filter(p => p.featured).slice(0, 3)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
      <div class="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">
            <span class="relative flex size-2">
              <span class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
              <span class="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {{ t('home.available') }}
          </p>

          <h1 class="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            <span class="block text-xl font-semibold text-slate-500 sm:text-2xl dark:text-slate-400">{{ t('home.greeting') }}</span>
            Artur Sobolewski
          </h1>
          <p class="mt-3 font-mono text-lg font-semibold text-sky-600 sm:text-xl dark:text-sky-400">
            Full Stack Web Developer
          </p>
          <p class="mt-6 max-w-xl text-xl text-balance text-slate-700 dark:text-slate-200">
            {{ t('home.headline') }}
          </p>
          <p class="mt-4 max-w-xl text-pretty text-slate-600 dark:text-slate-400">
            {{ t('home.intro') }}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink
              :to="localePath('portfolio')"
              class="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white transition-colors hover:bg-sky-600 dark:bg-white dark:text-slate-900 dark:hover:bg-sky-400"
            >
              {{ t('common.viewWork') }}
              <AppIcon name="arrow-right" class="size-4" />
            </NuxtLink>
            <a
              href="#contact"
              class="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-semibold transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              {{ t('common.contact') }}
            </a>
          </div>

          <ul class="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-slate-200 pt-6 dark:border-slate-800">
            <li class="flex items-center gap-3">
              <span class="text-4xl font-extrabold tracking-tight">5</span>
              <span class="text-sm leading-tight text-slate-600 dark:text-slate-400">{{ t('home.stats.years') }}</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="grid size-10 place-items-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-300">
                <AppIcon name="sparkles" />
              </span>
              <span class="text-sm leading-tight text-slate-600 dark:text-slate-400">
                {{ t('home.stats.ai') }}<br>
                <strong class="font-semibold text-slate-900 dark:text-white">Claude Code</strong>
              </span>
            </li>
          </ul>
        </div>

        <div class="relative mx-auto w-full max-w-sm">
          <div class="absolute -inset-4 rotate-3 rounded-[2rem] bg-linear-to-br from-sky-400 to-indigo-500 opacity-90" aria-hidden="true" />
          <img
            src="/images/my-picture.jpg"
            :alt="t('home.portraitAlt')"
            width="389"
            height="484"
            fetchpriority="high"
            class="relative w-full rounded-3xl bg-white object-cover shadow-2xl"
          >
          <div class="absolute -bottom-5 -left-5 rounded-xl border border-slate-200 bg-white px-4 py-3 font-mono text-sm shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <span class="text-slate-400">const</span> <span class="text-sky-600 dark:text-sky-400">stack</span> = <span class="text-emerald-600 dark:text-emerald-400">'full'</span>
          </div>
        </div>
      </div>
    </section>

    <!-- What I do -->
    <section class="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
      <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading :eyebrow="t('home.services.eyebrow')" :title="t('home.services.title')" :subtitle="t('home.services.subtitle')" />
        <ul class="mt-12 grid gap-6 md:grid-cols-3">
          <li
            v-for="s in services"
            :key="s.key"
            class="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <span class="grid size-11 place-items-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
              <AppIcon :name="s.icon" />
            </span>
            <h3 class="mt-5 text-lg font-semibold">{{ t(`home.services.${s.key}.title`) }}</h3>
            <p class="mt-2 text-pretty text-slate-600 dark:text-slate-400">{{ t(`home.services.${s.key}.text`) }}</p>
          </li>
        </ul>

        <div class="mt-14">
          <h3 class="text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">{{ t('home.stackTitle') }}</h3>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="tech in highlightedStack"
              :key="tech"
              class="rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Featured projects -->
    <section class="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading :eyebrow="t('home.featured.eyebrow')" :title="t('home.featured.title')" :subtitle="t('home.featured.subtitle')" />
        <NuxtLink
          :to="localePath('portfolio')"
          class="inline-flex items-center gap-1.5 font-semibold text-sky-600 hover:underline dark:text-sky-400"
        >
          {{ t('common.seeAll') }}
          <AppIcon name="arrow-right" class="size-4" />
        </NuxtLink>
      </div>
      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="p in featured" :key="p.slug" :project="p" />
      </div>
    </section>

    <!-- Short about teaser -->
    <section class="mx-auto max-w-6xl px-4 pt-20 sm:px-6">
      <div class="grid items-center gap-8 rounded-3xl border border-slate-200 p-8 md:grid-cols-[auto_1fr] md:p-10 dark:border-slate-800">
        <img
          src="/images/ja_luk.jpg"
          alt=""
          width="1012"
          height="662"
          loading="lazy"
          class="aspect-square w-32 rounded-2xl object-cover object-[35%_center]"
        >
        <div>
          <h2 class="text-2xl font-bold tracking-tight">{{ t('home.aboutTeaser.title') }}</h2>
          <p class="mt-2 max-w-2xl text-pretty text-slate-600 dark:text-slate-400">{{ t('home.aboutTeaser.text') }}</p>
          <NuxtLink
            :to="localePath('about')"
            class="mt-4 inline-flex items-center gap-1.5 font-semibold text-sky-600 hover:underline dark:text-sky-400"
          >
            {{ t('common.moreAbout') }}
            <AppIcon name="arrow-right" class="size-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <ContactCta />
  </div>
</template>
