import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { getProducts } from '@/lib/cms';
import { localizedValue } from '@/lib/utils';
import { Filter } from 'lucide-react';
import type { Locale } from '@/types';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.locale === 'en' ? 'Products' : params.locale === 'ru' ? 'Продукция' : params.locale === 'es' ? 'Productos' : params.locale === 'fr' ? 'Produits' : params.locale === 'pt' ? 'Produtos' : '产品',
  };
}

const labels: Record<string, Record<string, string>> = {
  en: { title: 'Our Products', search: 'Search products...', all: 'All Categories', noResults: 'No products found', viewAll: 'View Details' },
  ru: { title: 'Наша Продукция', search: 'Поиск...', all: 'Все Категории', noResults: 'Продукты не найдены', viewAll: 'Подробнее' },
  zh: { title: '产品中心', search: '搜索', all: '全部分类', noResults: '未找到产品', viewAll: '查看详情' },
  
  
  
};

export default function ProductsPage({ params }: Props) {
  const locale = params.locale as Locale;
  const t = labels[locale] || labels.en;
  const allProducts = getProducts(locale);
  const filtered = allProducts;

  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8">
          <h1 className="section-title">{t.title}</h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-neutral-600" />
        </div>


        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group rounded-2xl border border-gray-100 bg-white p-4 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={product.featured_image}
                    alt={localizedValue(product.title, locale)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-medium text-neutral-700 uppercase tracking-wider">
                    {(locale==='en'?'Parquet Flooring':locale==='ru'?'Паркет':locale==='es'?'Parquet':locale==='fr'?'Parquet':locale==='pt'?'Parquet':'拼花地板')}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900 group-hover:text-neutral-700 transition-colors">
                    {localizedValue(product.title, locale)}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {localizedValue(product.short_description, locale)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Filter className="h-12 w-12 text-gray-300" />
            <p className="mt-4 text-lg text-gray-500">{t.noResults}</p>
          </div>
        )}
      </div>
    </div>
  );
}
