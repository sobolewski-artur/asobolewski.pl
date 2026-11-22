<script setup lang="ts">
import { site } from '~/data/site'

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-14 text-center text-white sm:px-12 dark:bg-slate-900 dark:ring-1 dark:ring-slate-800">
      <div class="bg-dots absolute inset-0 opacity-20" aria-hidden="true" />
      <div class="relative">
        <h2 class="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{{ t('cta.title') }}</h2>
        <p class="mx-auto mt-4 max-w-xl text-lg text-pretty text-slate-300">{{ t('cta.text') }}</p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            :href="`mailto:${site.email}`"
            class="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-sky-400"
          >
            <AppIcon name="mail" />
            {{ t('cta.button') }}
          </a>
          <a
            :href="site.useme"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold transition-colors hover:bg-white/10"
          >
            <AppIcon name="briefcase" />
            {{ t('cta.useme') }}
          </a>
        </div>
        <p class="mt-6 font-mono text-sm text-slate-400">{{ site.email }}</p>
      </div>
    </div>
  </section>
</template>
