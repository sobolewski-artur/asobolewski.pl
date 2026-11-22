// Group labels are translated via `about.skills.groups.<key>` in i18n/locales.
export const skillGroups = [
  {
    key: 'frontend',
    icon: 'code',
    items: ['JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vue.js', 'Nuxt'],
  },
  {
    key: 'backend',
    icon: 'server',
    items: ['Rust', 'Go', 'Firebase'],
  },
  {
    key: 'databases',
    icon: 'database',
    items: ['PostgreSQL', 'SurrealDB'],
  },
  {
    key: 'ai',
    icon: 'sparkles',
    items: ['Claude Code'],
  },
] as const

// Full list shown on the home page
export const highlightedStack = [
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Vue.js',
  'Nuxt',
  'Firebase',
  'SurrealDB',
  'PostgreSQL',
  'Rust',
  'Go',
  'Claude Code',
]
