import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { getBlogPosts, localizedValue } from '@/lib/cms';
import { CalendarDays, ArrowRight } from 'lucide-react';
import type { Locale } from '@/types';

type Props = { params: { locale: string } };
export async function generateMetadata(): Promise<Metadata> { return { title: 'Blog' }; }

const labels: Record<string, Record<string, string>> = {
  en: { title: 'Blog & News', readMore: 'Read More', noPosts: 'No articles yet' },
  es: { title: 'Blog', readMore: 'Leer Más', noPosts: 'Sin artículos' },
  fr: { title: 'Blog', readMore: 'Lire Plus', noPosts: 'Aucun article' },
  pt: { title: 'Blog', readMore: 'Ler Mais', noPosts: 'Sem artigos' },
  ru: { title: 'Блог и Новости', readMore: 'Читать', noPosts: 'Статей пока нет' },
  zh: { title: '博客与新闻', readMore: '阅读更多', noPosts: '暂无文章' },
};

export default function BlogPage({ params }: Props) {
  const locale = params.locale as Locale;
  const t = labels[locale] || labels.en;
  const posts = getBlogPosts(locale);
  return (
    <div className="section-padding bg-neutral-50 min-h-screen"><div className="container-custom"><h1 className="section-title">{t.title}</h1><div className="mt-4 h-px w-16 bg-neutral-300"/>
      {posts.length > 0 ? (<div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{posts.map((post) => (<Link key={post.slug} href={`/blog/${post.slug}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg"><div className="aspect-video overflow-hidden"><img src={post.featured_image} alt={localizedValue(post.title, locale)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"/></div><div className="p-5"><div className="flex items-center gap-4 text-xs text-neutral-400"><span className="rounded-full bg-neutral-50 px-3 py-1 font-medium text-neutral-600">{post.category}</span><span className="flex items-center gap-1"><CalendarDays className="h-3 w-3"/>{post.date}</span></div><h3 className="mt-3 text-lg font-medium text-black group-hover:text-neutral-600 line-clamp-2">{localizedValue(post.title, locale)}</h3><p className="mt-2 text-sm text-neutral-400 line-clamp-3">{localizedValue(post.excerpt, locale)}</p><span className="mt-4 inline-flex items-center text-sm font-medium text-black">{t.readMore} <ArrowRight className="ms-1 h-3.5 w-3.5"/></span></div></Link>))}</div>) : (<p className="mt-10 text-center text-neutral-400">{t.noPosts}</p>)}
    </div></div>
  );
}
