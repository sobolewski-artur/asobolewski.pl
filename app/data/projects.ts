export interface Localized {
  pl: string
  en: string
}

// Category labels are translated via `portfolio.categories.<key>` in i18n/locales.
export type ProjectCategory = 'webapp' | 'website' | 'ecommerce' | 'api'

export interface Project {
  slug: string
  title: Localized
  summary: Localized
  category: ProjectCategory
  year: number
  stack: string[]
  /** Tailwind gradient classes for the card cover */
  accent: string
  featured?: boolean
  links?: { live?: string, repo?: string }
}

// TODO: these are example projects — replace them with your real work.
// Add `links.live` / `links.repo` to show buttons on the card.
export const projects: Project[] = [
  {
    slug: 'clothing-store',
    title: { pl: 'Sklep odzieżowy', en: 'Clothing Store' },
    summary: {
      pl: 'Dwujęzyczny sklep internetowy z odzieżą — kategorie produktów, koszyk i promocje. Renderowany po stronie serwera w Nuxt, z backendem na Firebase.',
      en: 'Bilingual online clothing store with product categories, a shopping cart and promotions — server-rendered with Nuxt and backed by Firebase.',
    },
    category: 'ecommerce',
    year: 2026,
    stack: ['Nuxt', 'Vue.js', 'Tailwind CSS', 'Firebase'],
    accent: 'from-stone-500 to-amber-700',
    featured: true,
    links: { live: 'https://clothing-storee.web.app' },
  },
  {
    slug: 'booking-platform',
    title: { pl: 'Platforma rezerwacji', en: 'Booking Platform' },
    summary: {
      pl: 'Platforma rezerwacji online dla firm usługowych z kalendarzem, przypomnieniami SMS i panelem do zarządzania pracownikami oraz dostępnością.',
      en: 'Online booking platform for service businesses with a calendar, SMS reminders and an admin panel for managing staff and availability.',
    },
    category: 'webapp',
    year: 2025,
    stack: ['Nuxt', 'Go', 'PostgreSQL'],
    accent: 'from-sky-500 to-indigo-600',
    featured: true,
  },
  {
    slug: 'handmade-store',
    title: { pl: 'Sklep z rękodziełem', en: 'Handmade Store' },
    summary: {
      pl: 'Sklep internetowy z wariantami produktów, płatnościami Stripe, kodami rabatowymi i integracją z API firmy kurierskiej.',
      en: 'Online store with product variants, Stripe payments, discount codes and an integration with a courier delivery API.',
    },
    category: 'ecommerce',
    year: 2024,
    stack: ['Nuxt', 'Firebase', 'Tailwind CSS'],
    accent: 'from-emerald-500 to-teal-600',
    featured: true,
  },
  {
    slug: 'analytics-dashboard',
    title: { pl: 'Panel analityczny', en: 'Analytics Dashboard' },
    summary: {
      pl: 'Wewnętrzny dashboard, który zbiera dane sprzedażowe i marketingowe w interaktywne wykresy oraz cykliczne raporty PDF.',
      en: 'Internal dashboard that turns sales and marketing data into interactive charts and scheduled PDF reports.',
    },
    category: 'webapp',
    year: 2024,
    stack: ['Vue.js', 'Rust', 'PostgreSQL'],
    accent: 'from-violet-500 to-fuchsia-600',
    featured: true,
  },
  {
    slug: 'law-firm-website',
    title: { pl: 'Strona kancelarii', en: 'Law Firm Website' },
    summary: {
      pl: 'Wielojęzyczna strona firmowa z blogiem i formularzami kontaktowymi zapisywanymi w Firebase — zoptymalizowana pod kątem szybkości i SEO.',
      en: 'Multilingual company website with a blog and contact forms stored in Firebase — optimised for speed and SEO.',
    },
    category: 'website',
    year: 2023,
    stack: ['Nuxt', 'Tailwind CSS', 'Firebase'],
    accent: 'from-amber-500 to-orange-600',
  },
  {
    slug: 'fleet-tracking-api',
    title: { pl: 'API do śledzenia floty', en: 'Fleet Tracking API' },
    summary: {
      pl: 'REST API i procesy w tle dla mobilnej aplikacji do śledzenia pojazdów — obsługa pozycji GPS w czasie rzeczywistym i powiadomień.',
      en: 'REST API and background workers for a vehicle tracking mobile app, handling real-time GPS updates and notifications.',
    },
    category: 'api',
    year: 2023,
    stack: ['Rust', 'SurrealDB'],
    accent: 'from-rose-500 to-red-600',
  },
  {
    slug: 'asobolewski-pl',
    title: { pl: 'asobolewski.pl', en: 'asobolewski.pl' },
    summary: {
      pl: 'Ta strona — dwujęzyczne portfolio zbudowane w Nuxt 4 i Tailwind CSS 4, z lokalizowanymi adresami URL.',
      en: 'This website — a bilingual portfolio built with Nuxt 4 and Tailwind CSS 4, with localized URLs.',
    },
    category: 'website',
    year: 2026,
    stack: ['Nuxt', 'Vue.js', 'Tailwind CSS'],
    accent: 'from-slate-600 to-slate-900',
    links: { live: 'https://asobolewski.pl' },
  },
]
