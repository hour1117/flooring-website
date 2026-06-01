import type { Locale } from '@/types';

export function localizedValue(
  value: { en: string; ru: string; zh: string; es: string; fr: string; pt: string } | undefined,
  locale: Locale
): string {
  if (!value) return '';
  return value[locale] || value.en || '';
}
