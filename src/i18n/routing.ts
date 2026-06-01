import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ru', 'zh', 'es', 'fr', 'pt'],
  defaultLocale: 'en',
  localePrefix: 'always',
});
