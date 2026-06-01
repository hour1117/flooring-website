import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getSiteSettings, getCategories, localizedValue } from '@/lib/cms';
import type { Locale } from '@/types';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import SocialSidebar from '@/components/shared/SocialSidebar';
import BackToTop from '@/components/shared/BackToTop';
import './globals.css';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const settings = getSiteSettings();

  return {
    title: {
      template: `%s | ${localizedValue(settings.site_title, locale as Locale)}`,
      default: localizedValue(settings.site_title, locale as Locale),
    },
    description: localizedValue(settings.site_description, locale as Locale),
    alternates: {
      languages: {
        en: '/en',
        ru: '/ru',
        zh: '/zh',
        es: '/es',
        fr: '/fr',
        pt: '/pt',
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();
  const settings = getSiteSettings();
  const categories = getCategories(locale as Locale);

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-white text-black antialiased font-sans">
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale as Locale} settings={settings} categories={categories} />
          <main className="min-h-screen">{children}</main>
          <Footer locale={locale as Locale} settings={settings} categories={categories} />
          <WhatsAppFloat whatsapp={settings.whatsapp} />
          <SocialSidebar social={settings.social} />
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
