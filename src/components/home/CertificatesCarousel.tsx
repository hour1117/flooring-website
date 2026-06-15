'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const certImages = [
  '/images/uploads/certificates/fe28e8d8548461f92e44b6e89651515a_.jpg',
  '/images/uploads/certificates/cf5db538efecf61001b0fb835f50ee84_.jpg',
  '/images/uploads/certificates/0ba26ab1b3074aa07be250dc260e6b89_.png',
  '/images/uploads/certificates/887532af2862e6644c9bd4cef1cf76ff_.png',
  '/images/uploads/certificates/2db848d638e40fd5eaaf6634b6f53377_.png',
];

const titles: Record<string, string> = {
  en: 'Our Certifications',
  ru: 'Наши Сертификаты',
  zh: '认证资质',
  es: 'Nuestras Certificaciones',
  fr: 'Nos Certifications',
  pt: 'Nossas Certificações',
};

interface Props {
  locale: string;
}

export default function CertificatesCarousel({ locale }: Props) {
  const [idx, setIdx] = useState(0);
  const n = certImages.length;
  const title = titles[locale] || titles.en;

  const next = useCallback(() => setIdx((i) => (i + 1) % n), [n]);
  const prev = () => setIdx((i) => (i === 0 ? n - 1 : i - 1));

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  if (!n) return null;

  // Visible 3 for desktop: idx, idx+1, idx+2 with wrap
  const visible: string[] = [];
  for (let j = 0; j < 3; j++) {
    visible.push(certImages[(idx + j) % n]);
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-[90rem] mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-black text-center mb-10">{title}</h2>

        {/* ── Desktop ── */}
        <div className="hidden md:block relative px-12">
          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {visible.map((img, i) => (
              <div key={`${idx}-${i}`} className="aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-50 border border-neutral-100">
                <img src={img} alt={`Certificate ${((idx + i) % n) + 1}`} className="h-full w-full object-contain p-6" />
              </div>
            ))}
          </div>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center hover:bg-neutral-50 transition-colors">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center hover:bg-neutral-50 transition-colors">
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="flex justify-center gap-1.5 mt-5">
            {certImages.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === idx ? 'bg-black' : 'bg-neutral-300'}`} />
            ))}
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="md:hidden relative px-10">
          <div className="overflow-hidden rounded-2xl max-w-sm mx-auto">
            <div className="aspect-[3/4] bg-neutral-50 border border-neutral-100 flex items-center justify-center">
              <img src={certImages[idx]} alt={`Certificate ${idx + 1}`} className="h-full w-full object-contain p-6" />
            </div>
          </div>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center">
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="flex justify-center gap-1.5 mt-4">
            {certImages.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === idx ? 'bg-black' : 'bg-neutral-300'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
