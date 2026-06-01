import { getFeaturedProducts } from '@/lib/cms';
import type { Locale } from '@/types';
import HeroBanner from '@/components/home/HeroBanner';
import BestSellers from '@/components/home/BestSellers';

import AboutSnippet from '@/components/home/AboutSnippet';
import ContactCTA from '@/components/home/ContactCTA';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

type Props = {
  params: { locale: string };
};

export default function HomePage({ params }: Props) {
  const locale = params.locale as Locale;
  const featured = getFeaturedProducts(locale);

  return (
    <>
      <HeroBanner locale={locale} />
      {featured.length > 0 && (
        <RevealOnScroll>
          <BestSellers products={featured} locale={locale} />
        </RevealOnScroll>
      )}
      <RevealOnScroll>
        <AboutSnippet locale={locale} />
      </RevealOnScroll>
      <RevealOnScroll>
        <ContactCTA locale={locale} />
      </RevealOnScroll>
    </>
  );
}
