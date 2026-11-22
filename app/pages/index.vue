<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

useHead({ title: () => t('home.title') })
</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-50 px-4 text-slate-900">
    <h1 class="text-4xl font-bold tracking-tight text-center">{{ t('home.title') }}</h1>
    <p class="max-w-prose text-center text-lg text-slate-600">{{ t('home.subtitle') }}</p>

    <nav :aria-label="t('language')" class="flex gap-2">
      <NuxtLink
        v-for="l in locales"
        :key="l.code"
        :to="switchLocalePath(l.code)"
        class="rounded-md border px-3 py-1.5 text-sm transition-colors"
        :class="l.code === locale
          ? 'border-slate-900 bg-slate-900 text-white'
          : 'border-slate-300 hover:bg-slate-200'"
      >
        {{ l.name }}
      </NuxtLink>
    </nav>
  </main>
</template>
