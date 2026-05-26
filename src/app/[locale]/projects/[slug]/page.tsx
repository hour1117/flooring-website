import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { getProjectBySlug, getProjects, getProducts, localizedValue } from '@/lib/cms';
import { MapPin, CalendarDays, ArrowLeft } from 'lucide-react';
import type { Locale } from '@/types';

type Props = { params: { locale: string; slug: string } };
export function generateStaticParams({ params }: Omit<Props, 'slug'> & { params: { locale: string } }) { return getProjects(params.locale as Locale).map((p) => ({ locale: params.locale, slug: p.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.locale as Locale, params.slug);
  if (!project) return { title: 'Not Found' };
  return { title: localizedValue(project.title, params.locale as Locale), openGraph: { images: [project.featured_image] } };
}

const labels: Record<string, Record<string, string>> = {
  en: { back: 'Back to Projects', loc: 'Location', date: 'Completion Date', used: 'Products Used' },
  ru: { back: 'Назад к Проектам', loc: 'Местоположение', date: 'Дата Завершения', used: 'Использованные Продукты' },
  zh: { back: '返回项目', loc: '地点', date: '完工日期', used: '使用产品' },
};

export default function ProjectDetailPage({ params }: Props) {
  const locale = params.locale as Locale;
  const t = labels[locale] || labels.en;
  const project = getProjectBySlug(locale, params.slug);
  if (!project) notFound();
  const allProducts = getProducts(locale);
  const usedProducts = (project.products_used || []).map((slug: string) => allProducts.find((p) => p.slug === slug)).filter(Boolean);
  return (
    <div className="section-padding"><div className="container-custom max-w-4xl"><Link href="/projects" className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-black mb-8"><ArrowLeft className="h-4 w-4"/>{t.back}</Link>
      <h1 className="text-3xl font-light text-black sm:text-4xl">{localizedValue(project.title, locale)}</h1>
      <div className="mt-4 flex flex-wrap gap-6 text-sm text-neutral-400"><span className="flex items-center gap-1"><MapPin className="h-4 w-4"/>{t.loc}: {project.location}</span><span className="flex items-center gap-1"><CalendarDays className="h-4 w-4"/>{t.date}: {project.completion_date}</span></div>
      <img src={project.featured_image} alt={localizedValue(project.title, locale)} className="mt-8 w-full rounded-2xl object-cover aspect-video"/>
      <div className="prose prose-neutral mt-10 max-w-none font-light" dangerouslySetInnerHTML={{ __html: localizedValue(project.body, locale).replace(/\n\n/g, '</p><p>') }}/>
      {usedProducts.length > 0 && (<div className="mt-12 rounded-2xl bg-neutral-50 p-8"><h3 className="text-lg font-medium">{t.used}</h3><div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{usedProducts.map((product: any) => (product && <Link key={product.slug} href={`/products/${product.slug}`} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm hover:shadow-md"><img src={product.featured_image} alt="" className="h-12 w-12 rounded-lg object-cover"/><span className="text-sm font-medium text-black">{localizedValue(product.title, locale)}</span></Link>))}</div></div>)}
    </div></div>
  );
}
