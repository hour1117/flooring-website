import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { getCategoryBySlug, getCategories, groupProductsBySubcategory, localizedValue } from '@/lib/cms';
import type { Locale } from '@/types';

type Props = { params: { locale: string; slug: string } };
export function generateStaticParams({ params }: Omit<Props, 'slug'> & { params: { locale: string } }) { return getCategories(params.locale as Locale).map((c) => ({ locale: params.locale, slug: c.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryBySlug(params.locale as Locale, params.slug);
  if (!cat) return { title: 'Not Found' };
  return { title: localizedValue(cat.title, params.locale as Locale) };
}

function ProductCard({ product, locale }: { product: any; locale: Locale }) {
  return (
    <Link href={`/products/${product.slug}`} className="group rounded-2xl border border-neutral-100 bg-white p-4 hover:shadow-lg hover:-translate-y-1 transition-all">
      <div className="aspect-square overflow-hidden rounded-xl bg-neutral-100">
        <img src={product.featured_image} alt={localizedValue(product.title, locale)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-black group-hover:text-neutral-600 line-clamp-2">{localizedValue(product.title, locale)}</h3>
    </Link>
  );
}

export default function CategoryPage({ params }: Props) {
  const locale = params.locale as Locale;
  const category = getCategoryBySlug(locale, params.slug);
  if (!category) notFound();

  const groups = groupProductsBySubcategory(locale, params.slug);
  const hasSubcategories = groups.size > 1 || (groups.size === 1 && !groups.has('_none'));

  return (
    <div className="section-padding bg-neutral-50 min-h-screen">
      <div className="container-custom">
        <nav className="mb-6 flex items-center gap-2 text-sm text-neutral-400">
          <Link href="/" className="hover:text-black">Home</Link><span>/</span>
          <Link href="/products" className="hover:text-black">Products</Link><span>/</span>
          <span className="text-black">{localizedValue(category.title, locale)}</span>
        </nav>
        <h1 className="section-title">{localizedValue(category.title, locale)}</h1>
        {category.description && <p className="mt-3 text-lg text-neutral-400 max-w-2xl">{localizedValue(category.description, locale)}</p>}
        <div className="mt-4 h-px w-16 bg-neutral-300" />

        {hasSubcategories ? (
          /* Grouped by subcategory */
          Array.from(groups.entries()).map(([subcat, products]) => (
            <section key={subcat} className="mt-12">
              {subcat !== '_none' && (
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-light text-black">{subcat}</h2>
                  <div className="mt-2 mx-auto h-px w-8 bg-neutral-200" />
                </div>
              )}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                  <ProductCard key={product.slug} product={product} locale={locale} />
                ))}
              </div>
            </section>
          ))
        ) : (
          /* Flat grid — no subcategories */
          groups.size > 0 && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {(groups.values().next().value || []).map((product: any) => (
                <ProductCard key={product.slug} product={product} locale={locale} />
              ))}
            </div>
          )
        )}
        {groups.size === 0 && (
          <p className="mt-10 text-neutral-400">No products in this category.</p>
        )}
      </div>
    </div>
  );
}
