import { Link } from '@/i18n/navigation';
import { localizedValue } from '@/lib/utils';
import { CalendarDays, ArrowRight } from 'lucide-react';
import type { BlogPost, Locale } from '@/types';

interface Props {
  posts: BlogPost[];
  locale: Locale;
}

const titles: Record<string, string> = {
  en: 'Insights & News',
  ru: 'Новости и Статьи',
};

export default function LatestNews({ posts, locale }: Props) {
  if (!posts.length) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-overline mb-3 tracking-[0.15em]">{titles[locale] || titles.en}</p>
            <h2 className="section-title">
              {locale === 'en' ? 'Latest from Our Blog' : 'Последние Новости'}
            </h2>
            <div className="divider" />
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-800 transition-colors">
            {locale === 'en' ? 'View All Articles' : 'Все Статьи'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-hover group overflow-hidden rounded-2xl border border-neutral-100 bg-white"
            >
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={post.featured_image}
                  alt={localizedValue(post.title, locale)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  <span className="rounded-full bg-neutral-50 px-3 py-1 font-semibold text-neutral-700">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString(locale === 'en' ? 'en' : 'ru', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900 group-hover:text-neutral-800 transition-colors line-clamp-2">
                  {localizedValue(post.title, locale)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400 line-clamp-2">
                  {localizedValue(post.excerpt, locale)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
