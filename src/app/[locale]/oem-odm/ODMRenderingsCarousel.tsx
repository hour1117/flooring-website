'use client';

import { useState, useEffect, useCallback } from 'react';
import { Link } from '@/i18n/navigation';
import { localizedValue } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Locale, Product } from '@/types';

export default function ODMRenderingsCarousel({ products, locale }: { products: Product[]; locale: Locale }) {
  const [current, setCurrent] = useState(0);
  const totalSlides = Math.ceil(products.length / 3);

  const next = useCallback(() => setCurrent((c) => (c + 1) % totalSlides), [totalSlides]);
  const prev = () => setCurrent((c) => (c === 0 ? totalSlides - 1 : c - 1));

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  if (!products.length) return null;

  // Products for current desktop slide (3 at a time)
  const startIdx = current * 3;
  const visibleProducts = products.slice(startIdx, startIdx + 3);
  // Pad if fewer than 3
  while (visibleProducts.length < 3) {
    visibleProducts.push(products[visibleProducts.length % products.length]);
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Desktop: 3 slides with auto-scroll */}
      <div className="hidden md:block relative">
        <div className="grid grid-cols-3 gap-6">
          {visibleProducts.map((product, i) => (
            <Link key={`${product.slug}-${startIdx}-${i}`} href={`/products/${product.slug}`} className="group rounded-2xl border border-neutral-100 bg-white p-3 hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden rounded-xl bg-neutral-100">
                <img src={product.featured_image} alt={localizedValue(product.title, locale)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h4 className="mt-3 text-sm font-medium text-black text-center line-clamp-1">{localizedValue(product.title, locale)}</h4>
            </Link>
          ))}
        </div>
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center hover:bg-neutral-50">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center hover:bg-neutral-50">
          <ChevronRight className="h-4 w-4" />
        </button>
        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-5">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-black' : 'bg-neutral-300'}`} />
          ))}
        </div>
      </div>

      {/* Mobile: single slide with arrows */}
      <div className="md:hidden relative">
        <div className="overflow-hidden rounded-2xl">
          <Link href={`/products/${products[current].slug}`} className="group block rounded-2xl border border-neutral-100 bg-white p-3">
            <div className="aspect-square overflow-hidden rounded-xl bg-neutral-100">
              <img src={products[current].featured_image} alt={localizedValue(products[current].title, locale)} className="h-full w-full object-cover" />
            </div>
            <h4 className="mt-3 text-sm font-medium text-black text-center">{localizedValue(products[current].title, locale)}</h4>
          </Link>
        </div>
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-8 h-8 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-8 h-8 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center">
          <ChevronRight className="h-4 w-4" />
        </button>
        <div className="flex justify-center gap-1.5 mt-4">
          {products.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-black' : 'bg-neutral-300'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
