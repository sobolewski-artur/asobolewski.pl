<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
  /** Use "h1" for page headers */
  as?: 'h1' | 'h2'
  center?: boolean
}>(), { as: 'h2' })
</script>

<template>
  <div :class="center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'">
    <p v-if="eyebrow" class="font-mono text-sm font-semibold text-sky-600 dark:text-sky-400">
      {{ eyebrow }}
    </p>
    <component
      :is="as"
      class="mt-2 font-bold tracking-tight text-balance"
      :class="as === 'h1' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'"
    >
      {{ title }}
    </component>
    <p v-if="subtitle" class="mt-4 text-lg text-pretty text-slate-600 dark:text-slate-400">
      {{ subtitle }}
    </p>
  </div>
</template>
