// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap',
        },
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    baseUrl: 'https://asobolewski.pl',
    // Translation files live in i18n/locales/
    locales: [
      { code: 'pl', language: 'pl-PL', name: 'Polski', file: 'pl.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'pl',
    // "/" = Polish, "/en" = English
    strategy: 'prefix_except_default',
    // Localized URLs: /o-mnie (PL) and /en/about (EN)
    customRoutes: 'config',
    pages: {
      about: { pl: '/o-mnie', en: '/about' },
      portfolio: { pl: '/portfolio', en: '/portfolio' },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_lang',
      redirectOn: 'root',
    },
  },
})
