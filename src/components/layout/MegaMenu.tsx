'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { ChevronDown } from 'lucide-react';
import type { Category } from '@/types';
import { localizedValue } from '@/lib/utils';

interface Props {
  categories: Category[];
  locale: 'en' | 'ru';
}

export default function MegaMenu({ categories, locale }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors py-4"
        onClick={() => setOpen(!open)}
      >
        Products
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute start-1/2 -translate-x-1/2 top-full z-50 w-screen max-w-4xl rounded-xl bg-white shadow-2xl ring-1 ring-gray-900/5">
          <div className="grid grid-cols-4 gap-6 p-8">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group rounded-lg p-3 transition-colors hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                {cat.icon && (
                  <div className="mb-2 h-12 w-12 rounded-lg bg-primary-50 flex items-center justify-center">
                    <img src={cat.icon} alt="" className="h-6 w-6 object-contain" />
                  </div>
                )}
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {localizedValue(cat.title, locale)}
                </h4>
                {cat.description && (
                  <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                    {localizedValue(cat.description, locale)}
                  </p>
                )}
              </Link>
            ))}
            <Link
              href="/products"
              className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 p-3 text-sm font-medium text-primary-600 transition-colors hover:border-primary-300 hover:bg-primary-50"
              onClick={() => setOpen(false)}
            >
              View All Products &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
