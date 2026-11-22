<script setup lang="ts">
const { t, locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const menuOpen = ref(false)
watch(() => route.fullPath, () => {
  menuOpen.value = false
})

const links = computed(() => [
  { to: localePath('index'), label: t('nav.home') },
  { to: localePath('about'), label: t('nav.about') },
  { to: localePath('portfolio'), label: t('nav.portfolio') },
])
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/80">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
      <NuxtLink :to="localePath('index')" class="group flex items-center gap-2.5 font-semibold">
        <span class="grid size-9 place-items-center rounded-lg bg-slate-900 font-mono text-sm text-white transition-colors group-hover:bg-sky-600 dark:bg-white dark:text-slate-900 dark:group-hover:bg-sky-400">
          AS
        </span>
        <span class="hidden sm:inline">Artur Sobolewski</span>
      </NuxtLink>

      <nav :aria-label="t('nav.main')" class="hidden md:block">
        <ul class="flex items-center gap-1">
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 aria-[current=page]:text-sky-600 dark:text-slate-300 dark:hover:text-white dark:aria-[current=page]:text-sky-400"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2">
        <nav :aria-label="t('language')" class="flex rounded-lg border border-slate-200 p-0.5 dark:border-slate-700">
          <NuxtLink
            v-for="l in locales"
            :key="l.code"
            :to="switchLocalePath(l.code)"
            :aria-label="l.name"
            :hreflang="l.language"
            class="rounded-md px-2 py-1 font-mono text-xs font-semibold uppercase transition-colors"
            :class="l.code === locale
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'"
          >
            {{ l.code }}
          </NuxtLink>
        </nav>

        <button
          type="button"
          class="grid size-10 place-items-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden dark:text-slate-300 dark:hover:bg-slate-800"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          :aria-label="menuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
          @click="menuOpen = !menuOpen"
        >
          <AppIcon :name="menuOpen ? 'x' : 'menu'" />
        </button>
      </div>
    </div>

    <nav
      v-show="menuOpen"
      id="mobile-menu"
      :aria-label="t('nav.main')"
      class="border-t border-slate-200 px-4 py-3 md:hidden dark:border-slate-800"
    >
      <ul class="flex flex-col gap-1">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="block rounded-md px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-100 aria-[current=page]:bg-sky-50 aria-[current=page]:text-sky-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:aria-[current=page]:bg-sky-950 dark:aria-[current=page]:text-sky-300"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
