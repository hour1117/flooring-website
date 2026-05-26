import { Link } from '@/i18n/navigation';
import { localizedValue } from '@/lib/utils';
import type { Product, Locale } from '@/types';

interface Props {
  products: Product[];
  locale: Locale;
}

export default function RelatedProducts({ products, locale }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
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
          <h3 className="mt-3 text-sm font-semibold text-gray-900 group-hover:text-neutral-700 transition-colors line-clamp-2">
            {localizedValue(product.title, locale)}
          </h3>
        </Link>
      ))}
    </div>
  );
}
