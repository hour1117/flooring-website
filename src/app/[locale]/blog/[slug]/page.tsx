import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { getBlogPostBySlug, getBlogPosts, localizedValue } from '@/lib/cms';
import { CalendarDays, User, ArrowLeft } from 'lucide-react';
import type { Locale } from '@/types';

type Props = { params: { locale: string; slug: string } };
export function generateStaticParams({ params }: Omit<Props, 'slug'> & { params: { locale: string } }) { return getBlogPosts(params.locale as Locale).map((p) => ({ locale: params.locale, slug: p.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.locale as Locale, params.slug);
  if (!post) return { title: 'Not Found' };
  return { title: localizedValue(post.title, params.locale as Locale), openGraph: { images: [post.featured_image] } };
}

const labels: Record<string, Record<string, string>> = {
  en: { back: 'Back to Blog', share: 'Share' },
  ru: { back: 'Назад в Блог', share: 'Поделиться' },
  zh: { back: '返回博客', share: '分享' },
};

export default function BlogDetailPage({ params }: Props) {
  const locale = params.locale as Locale;
  const t = labels[locale] || labels.en;
  const post = getBlogPostBySlug(locale, params.slug);
  if (!post) notFound();
  return (
    <div className="section-padding"><article className="container-custom max-w-4xl"><Link href="/blog" className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-black mb-8"><ArrowLeft className="h-4 w-4"/>{t.back}</Link>
      <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400 mb-4"><span className="rounded-full bg-neutral-50 px-3 py-1 font-medium text-neutral-600">{post.category}</span><span className="flex items-center gap-1"><CalendarDays className="h-4 w-4"/>{post.date}</span><span className="flex items-center gap-1"><User className="h-4 w-4"/>{post.author}</span></div>
      <h1 className="text-3xl font-light text-black sm:text-4xl">{localizedValue(post.title, locale)}</h1>
      <img src={post.featured_image} alt={localizedValue(post.title, locale)} className="mt-8 w-full rounded-2xl object-cover aspect-video"/>
      <div className="prose prose-neutral mt-10 max-w-none font-light" dangerouslySetInnerHTML={{ __html: localizedValue(post.body, locale).replace(/\n\n/g, '</p><p>') }}/>
    </article></div>
  );
}
