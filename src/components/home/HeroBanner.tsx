'use client';

import { useEffect, useState } from 'react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/types';

const content: Record<string, { overline: string; title: string; subtitle: string; cta1: string; cta2: string }> = {
  en: {
    overline: 'Parquet Manufacturer | Since 2015',
    title: 'Premium Parquet Flooring',
    subtitle: 'Crafted with precision since 2015. Herringbone, chevron, and custom patterns for exceptional interiors.',
    cta1: 'Discover Our Collection',
    cta2: 'Get in Touch',
  },
  zh: { overline: '拼花地板制造商 | 始于2015', title: '高级拼花地板', subtitle: '自2015年精工制造。人字拼、鱼骨拼和定制图案，打造卓越室内空间。', cta1: '浏览产品', cta2: '联系我们' },
  ru: { overline: 'Производитель Паркета | С 2015 Года',
    title: 'Премиальный Паркет',
    subtitle: 'Создано с точностью с 2015 года. Узоры ёлочка, шеврон и индивидуальные дизайны для исключительных интерьеров.',
    cta1: 'Смотреть Коллекцию',
    cta2: 'Связаться',
  },
};

export default function HeroBanner({ locale }: { locale: Locale }) {
  const t = content[locale] || content.en;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/images/uploads/hero-bg.jpg')",
          transform: `translateY(${scrollY * 0.35}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      <div
        className="container-custom relative z-10 w-full transition-opacity duration-300"
        style={{ opacity: Math.max(0, 1 - scrollY / 500) }}
      >
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50 mb-6">{t.overline}</p>
          <h1 className="text-[clamp(2.5rem,5vw,4.375rem)] font-light leading-[1.15] tracking-tight text-white">
            {t.title}
          </h1>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
            {t.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/products" className="btn-white">{t.cta1}</Link>
            <Link href="/contact" className="btn-white">{t.cta2}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
