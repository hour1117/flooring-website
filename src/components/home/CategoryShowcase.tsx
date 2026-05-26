import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { localizedValue } from '@/lib/utils';
import type { Category, Locale } from '@/types';

interface Props {
  categories: Category[];
  locale: Locale;
}

const titles: Record<string, string> = {
  en: 'Our Collections',
  ru: 'Наши Коллекции',
  zh: '我们的系列',
};

export default function CategoryShowcase({ categories, locale }: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-14 text-center">
          <p className="text-overline mb-3 tracking-[0.15em]">{titles[locale] || titles.en}</p>
          <h2 className="section-title text-center max-w-2xl mx-auto">
            {localizedValue(categories[0]?.title, locale) || titles[locale] || titles.en}
          </h2>
          <div className="divider mx-auto" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="card-hover group relative overflow-hidden rounded-2xl bg-neutral-50 p-8"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 start-0 end-0 h-1 bg-gradient-to-r from-neutral-500 via-neutral-600 to-neutral-400" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-800 transition-colors">
                  {localizedValue(cat.title, locale)}
                </h3>
                {cat.description && (
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400 line-clamp-3">
                    {localizedValue(cat.description, locale)}
                  </p>
                )}
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-neutral-700 group-hover:gap-2 transition-all">
                  {locale === 'en' ? 'Discover' : 'Открыть'}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
