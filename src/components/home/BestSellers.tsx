'use client';

import { Link } from '@/i18n/navigation';
import { localizedValue } from '@/lib/utils';
import type { Product, Locale } from '@/types';

interface Props {
  products: Product[];
  locale: Locale;
}

const content: Record<string, { title: string; subtitle: string; cta: string; category: string }> = {
  en: {
    title: 'Parquet Flooring',
    subtitle: 'Our selected collection of premium parquet flooring',
    cta: 'View All Products',
    category: 'Parquet Flooring',
  },
  ru: {
    title: 'Паркет',
    subtitle: 'Наша избранная коллекция премиального паркета',
    cta: 'Смотреть Все Продукты',
    category: 'Паркет',
  },
  zh: {
    title: '拼花地板',
    subtitle: '精选高级拼花地板系列',
    cta: '查看全部产品',
    category: '拼花地板',
  },
};

export default function BestSellers({ products, locale }: Props) {
  const t = content[locale] || content.en;
  if (!products.length) return null;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-display-md font-light text-black">{t.title}</h2>
          <p className="mt-4 max-w-xl text-base font-light text-neutral-400">{t.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-neutral-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.featured_image}
                  alt={localizedValue(product.title, locale)}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="p-8 w-full">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">{t.category}</p>
                  <h3 className="mt-1 text-xl font-light text-white">{localizedValue(product.title, locale)}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/products" className="btn-outline-dark">{t.cta}</Link>
        </div>
      </div>
    </section>
  );
}
