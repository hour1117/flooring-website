import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/types';

const content: Record<Locale, { title: string; cta: string }> = {
  en: { title: 'Explore Our Collections', cta: 'View All Products' },
  ru: { title: 'Откройте Наши Коллекции', cta: 'Смотреть Все' },
  zh: { title: '探索我们的系列', cta: '查看全部产品' },
  es: { title: 'Explore Nuestras Colecciones', cta: 'Ver Todos' },
  fr: { title: 'Découvrez Nos Collections', cta: 'Voir Tout' },
  pt: { title: 'Explore Nossas Coleções', cta: 'Ver Todos' },
};

const images = [
  '/images/uploads/parquet/herringbone/herringbone-1.jpg',
  '/images/uploads/parquet/versailles/versailles-1.jpg',
  '/images/uploads/parquet/art-parquet/art-parquet-1.png',
];

export default function ProductShowcase({ locale }: { locale: Locale }) {
  const t = content[locale] || content.en;

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-display-md font-light text-black">{t.title}</h2>
          <div className="mx-auto mt-5 h-px w-16 bg-neutral-300" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {images.map((img, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl aspect-[3/4]">
              <img
                src={img}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/products" className="btn-outline-dark inline-flex items-center gap-2">
            {t.cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
