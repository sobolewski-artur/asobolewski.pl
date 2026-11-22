import type { Localized } from '~/data/projects'

/** Returns a helper that picks the value for the current locale from a `{ pl, en }` object. */
export function useLocalized() {
  const { locale } = useI18n()
  return (value: Localized) => value[locale.value as keyof Localized] ?? value.pl
}
