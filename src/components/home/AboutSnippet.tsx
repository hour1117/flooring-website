'use client';

import { useRef, useEffect, useState } from 'react';
import type { Locale } from '@/types';

const content: Record<string, Record<string, string>> = {
  en: {
    overline: 'About Avonda',
    headline: '40 Years of Heritage. A New Standard in Premium Flooring.',
    intro: 'Avonda is the premium brand of Liancheng Wood Industry. With 10 years of export experience, backed by Liancheng\'s 40-year manufacturing heritage in Huzhou — the heart of China\'s wood flooring industry — we serve discerning partners and clients across more than 50 countries.',
    craftTitle: 'European Precision, Chinese Craftsmanship',
    craftText: 'Our 30,000 m² facility is equipped with advanced European technology — Austrian Wintersteiger frame saws, Italian Nardi drying kilns, German HOMAG processing lines, and Belgian Uniclic locking systems. Every plank passes ten rigorous quality stages.',
    qualityTitle: 'Trusted in 50+ Countries',
    qualityText: 'Our parquet floors grace luxury hotels, premium residences, and commercial spaces across Europe, the Middle East, Southeast Asia, and the Americas. 15+ international certifications.',
    stat1: 'Production Area', stat2: 'Countries', stat3: 'Heritage', stat4: 'Product Lines',
  },
  ru: {
    overline: 'Наша История',
    headline: '40 Лет Наследия. Новый Стандарт Премиального Паркета.',
    intro: 'Avonda — премиальный бренд компании Liancheng Wood Industry. С 10-летним экспортным опытом, опираясь на 40-летнее наследие Liancheng в Хучжоу — центре деревообрабатывающей промышленности Китая — мы обслуживаем взыскательных партнеров и клиентов в более чем 50 странах.',
    craftTitle: 'Европейская Точность, Китайское Мастерство',
    craftText: 'Наш завод площадью 30 000 м² оснащен передовым европейским оборудованием — австрийские рамные пилы Wintersteiger, итальянские сушильные камеры Nardi, немецкие линии HOMAG и бельгийские замки Uniclic. Каждая доска проходит десять строгих этапов контроля.',
    qualityTitle: 'Доверие в 50+ Странах',
    qualityText: 'Наши полы в отелях, резиденциях и коммерческих помещениях Европы, Ближнего Востока, Азии и Америки. Более 15 международных сертификатов.',
    stat1: 'Производство', stat2: 'Страны', stat3: 'Наследие', stat4: 'Мастера',
  },
  zh: {
    overline: '我们的故事',
    headline: '四十年传承，高端地板新标杆',
    intro: 'Avonda是联成木业旗下高端品牌。Avonda拥有10年出口经验，依托联成40年制造传承，坐落于中国木地板之都湖州，我们服务全球50多个国家的挑剔客户与合作伙伴。',
    craftTitle: '欧洲精密，中国制造',
    craftText: '30,000平方米生产基地配备先进欧洲技术 — 奥地利Wintersteiger框锯、意大利Nardi干燥窑、德国HOMAG生产线和比利时Uniclic锁扣系统。每块地板经过十道严格质检工序。',
    qualityTitle: '50+国家的信任',
    qualityText: '我们的拼花地板遍布欧洲、中东、东南亚和美洲的豪华酒店、高端住宅和商业空间。持有15+国际认证。',
    stat1: '生产面积', stat2: '国家', stat3: '传承', stat4: '工匠',
  },
};

function SlideInSection({ children, direction = 'left', delay = 0 }: { children: React.ReactNode; direction?: 'left' | 'right'; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(node); } },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);
  const startClass = direction === 'left' ? '-translate-x-12' : 'translate-x-12';
  return (
    <div ref={ref} className="transition-all duration-1000 ease-out" style={{ transitionDelay: `${delay}ms` }}>
      <div className={`transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-x-0' : `opacity-0 ${startClass}`}`}>
        {children}
      </div>
    </div>
  );
}

const inlineLabels: Record<string, { lines: string; precision: string; certs: string }> = {
  en: { lines: 'Production Lines', precision: 'Tolerance', certs: 'Certifications' },
  ru: { lines: 'Производственные Линии', precision: 'Допуск', certs: 'Сертификаты' },
  zh: { lines: '生产线', precision: '精度', certs: '认证' },
};

export default function AboutSnippet({ locale }: { locale: Locale }) {
  const t = content[locale] || content.en;
  const l = inlineLabels[locale] || inlineLabels.en;

  return (
    <section className="bg-white overflow-hidden">
      {/* Row 1 — intro + stats : text left, image right */}
      <div className="container-custom section-padding">
        <div className="grid gap-16 md:gap-24 md:grid-cols-2 items-center">
          <SlideInSection direction="left">
            <p className="text-overline mb-4">{t.overline}</p>
            <h2 className="text-display-md font-light text-black">{t.headline}</h2>
            <p className="mt-6 text-base font-light leading-relaxed text-neutral-500">{t.intro}</p>
            <div className="mt-10 grid grid-cols-4 gap-8">
              <div><p className="text-2xl font-light text-black">30,000 m²</p><p className="mt-1 text-xs text-neutral-400">{t.stat1}</p></div>
              <div><p className="text-2xl font-light text-black">50+</p><p className="mt-1 text-xs text-neutral-400">{t.stat2}</p></div>
              <div><p className="text-2xl font-light text-black">40+</p><p className="mt-1 text-xs text-neutral-400">{t.stat3}</p></div>
              <div><p className="text-2xl font-light text-black">200+</p><p className="mt-1 text-xs text-neutral-400">{t.stat4}</p></div>
            </div>
          </SlideInSection>
          <SlideInSection direction="right" delay={200}>
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img src="/images/uploads/products/style-1.jpg" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -start-8 w-56 h-40 overflow-hidden rounded-2xl shadow-2xl">
                <img src="/images/uploads/products/style-3.jpg" alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </SlideInSection>
        </div>
      </div>

      {/* Row 2 */}
      <div className="container-custom pb-20 md:pb-28">
        <div className="grid gap-16 md:gap-24 md:grid-cols-2 items-center">
          <SlideInSection direction="left">
            <h3 className="text-[clamp(1.625rem,2vw,2rem)] font-light">{t.craftTitle}</h3>
            <p className="mt-5 text-base font-light leading-relaxed text-neutral-500">{t.craftText}</p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="border-t border-neutral-200 pt-4"><p className="text-lg font-light">6</p><p className="text-xs text-neutral-400 mt-1">{l.lines}</p></div>
              <div className="border-t border-neutral-200 pt-4"><p className="text-lg font-light">&lt;0.1mm</p><p className="text-xs text-neutral-400 mt-1">{l.precision}</p></div>
              <div className="border-t border-neutral-200 pt-4"><p className="text-lg font-light">15+</p><p className="text-xs text-neutral-400 mt-1">{l.certs}</p></div>
            </div>
          </SlideInSection>
          <SlideInSection direction="right" delay={200}>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src="/images/uploads/products/style-5.jpg" alt="" className="h-full w-full object-cover" />
            </div>
          </SlideInSection>
        </div>
      </div>

      {/* Row 3 : text left, image right */}
      <div className="bg-neutral-50">
        <div className="container-custom section-padding">
          <div className="grid gap-16 md:gap-24 md:grid-cols-2 items-center">
            <SlideInSection direction="left">
              <h3 className="text-[clamp(1.625rem,2vw,2rem)] font-light text-black">{t.qualityTitle}</h3>
              <p className="mt-5 text-base font-light leading-relaxed text-neutral-500">{t.qualityText}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['ISO 9001', 'FSC', 'CE Marking', 'FloorScore', 'ISO 14001'].map((cert) => (
                  <span key={cert} className="rounded-full border border-neutral-200 px-4 py-2 text-xs font-light text-neutral-500">{cert}</span>
                ))}
              </div>
            </SlideInSection>
            <SlideInSection direction="right" delay={200}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img src="/images/uploads/products/style-2.jpg" alt="" className="h-full w-full object-cover" />
              </div>
            </SlideInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
