<script setup lang="ts">
import { site } from '~/data/site'

const { t } = useI18n()
const localePath = useLocalePath()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 dark:border-slate-800">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="font-semibold">{{ site.name }}</p>
        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
          © {{ year }} {{ site.name }}. {{ t('footer.rights') }}
        </p>
      </div>

      <nav :aria-label="t('footer.nav')" class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
        <NuxtLink :to="localePath('index')" class="hover:text-sky-600 dark:hover:text-sky-400">{{ t('nav.home') }}</NuxtLink>
        <NuxtLink :to="localePath('about')" class="hover:text-sky-600 dark:hover:text-sky-400">{{ t('nav.about') }}</NuxtLink>
        <NuxtLink :to="localePath('portfolio')" class="hover:text-sky-600 dark:hover:text-sky-400">{{ t('nav.portfolio') }}</NuxtLink>
      </nav>

      <ul class="flex gap-2">
        <li>
          <a :href="`mailto:${site.email}`" class="grid size-10 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white" aria-label="E-mail">
            <AppIcon name="mail" />
          </a>
        </li>
        <li>
          <a :href="site.useme" target="_blank" rel="noopener" class="grid size-10 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white" aria-label="Useme" title="Useme">
            <AppIcon name="briefcase" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
