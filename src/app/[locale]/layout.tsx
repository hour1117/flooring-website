import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getSiteSettings, getCategories, localizedValue } from '@/lib/cms';
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
      template: `%s | ${localizedValue(settings.site_title, locale as 'en' | 'ru')}`,
      default: localizedValue(settings.site_title, locale as 'en' | 'ru'),
    },
    description: localizedValue(settings.site_description, locale as 'en' | 'ru'),
    alternates: {
      languages: {
        en: '/en',
        ru: '/ru',
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
  const categories = getCategories(locale as 'en' | 'ru');
  const isRTL = false;

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className={`min-h-screen bg-white text-gray-900 antialiased ${isRTL ? 'font-arabic' : 'font-sans'}`}>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale as 'en' | 'ru'} settings={settings} categories={categories} />
          <main className="min-h-screen">{children}</main>
          <Footer locale={locale as 'en' | 'ru'} settings={settings} categories={categories} />
          <WhatsAppFloat whatsapp={settings.whatsapp} />
          <SocialSidebar social={settings.social} />
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
