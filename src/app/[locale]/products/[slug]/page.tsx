import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { getProductBySlug, getProducts, localizedValue } from '@/lib/cms';
import { Download, Play, Send } from 'lucide-react';
import ProductGallery from '@/components/products/ProductGallery';
import ProductSpecs from '@/components/products/ProductSpecs';
import RelatedProducts from '@/components/products/RelatedProducts';
import type { Locale } from '@/types';

type Props = { params: { locale: string; slug: string } };
export function generateStaticParams({ params }: Omit<Props, 'slug'> & { params: { locale: string } }) { return getProducts(params.locale as Locale).map((p) => ({ locale: params.locale, slug: p.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.locale as Locale, params.slug);
  if (!product) return { title: 'Not Found' };
  return { title: localizedValue(product.title, params.locale as Locale), openGraph: { images: [product.featured_image] } };
}

const labels: Record<string, Record<string, string>> = {
  en: { specs: 'Specifications', download: 'Download Spec Sheet', video: 'Watch Video', inquire: 'Inquire Now', related: 'Related Products' },
  ru: { specs: 'Характеристики', download: 'Скачать Спецификацию', video: 'Смотреть Видео', inquire: 'Запросить', related: 'Похожие Продукты' },
  zh: { specs: '规格参数', download: '下载规格书', video: '观看视频', inquire: '立即询价', related: '相关产品' },
};

export default function ProductDetailPage({ params }: Props) {
  const locale = params.locale as Locale;
  const t = labels[locale] || labels.en;
  const product = getProductBySlug(locale, params.slug);
  if (!product) notFound();
  const allProducts = getProducts(locale);
  const relatedProducts = (product.related_products || []).map((slug: string) => allProducts.find((p) => p.slug === slug)).filter(Boolean);
  return (
    <div className="section-padding"><div className="container-custom">
      <Link href="/products" className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-black transition-colors">&larr; {locale==="en"?"Back to Products":locale==="ru"?"Назад к Продукции":"返回产品"}</Link>
      <nav className="mb-2 flex items-center gap-2 text-sm text-neutral-400"><Link href="/" className="hover:text-black">{locale==="en"?"Home":locale==="ru"?"Главная":"首页"}</Link><span>/</span><Link href="/products" className="hover:text-black">{locale==="en"?"Products":locale==="ru"?"Продукция":"产品"}</Link><span>/</span><span className="text-black">{localizedValue(product.title, locale)}</span></nav>
      <div className="grid gap-12 lg:grid-cols-2">
        <ProductGallery images={[product.featured_image, ...(product.gallery || [])]} alt={localizedValue(product.title, locale)}/>
        <div>
          
          <h1 className="mt-2 text-3xl font-light text-black sm:text-4xl">{localizedValue(product.title, locale)}</h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-500">{localizedValue(product.short_description, locale)}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {product.pdf_spec && <a href={product.pdf_spec} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"><Download className="h-4 w-4"/>{t.download}</a>}
            {product.video_url && <a href={product.video_url} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-red-200 px-5 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"><Play className="h-4 w-4"/>{t.video}</a>}
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"><Send className="h-4 w-4"/>{t.inquire}</Link>
          </div>
          {product.specs.length > 0 && (<div className="mt-10"><h3 className="text-xl font-light text-black">{t.specs}</h3><ProductSpecs specs={product.specs} locale={locale}/></div>)}
        </div>
      </div>
      <div className="mt-16 max-w-4xl"><div className="prose prose-neutral max-w-none font-light" dangerouslySetInnerHTML={{ __html: localizedValue(product.body, locale).replace(/\n/g, '<br/>') }}/></div>
      {relatedProducts.length > 0 && (<div className="mt-16"><h2 className="section-title mb-8">{t.related}</h2><RelatedProducts products={relatedProducts as any} locale={locale}/></div>)}
    </div></div>
  );
}
