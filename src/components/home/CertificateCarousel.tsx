import type { Certificate, Locale } from '@/types';

interface Props {
  certificates: Certificate[];
  locale: Locale;
}

const titles: Record<string, string> = {
  en: 'Quality Assured',
  ru: 'Гарантия Качества',
  zh: '品质保障',
};

export default function CertificateCarousel({ certificates, locale }: Props) {
  if (!certificates.length) return null;

  return (
    <section className="section-padding bg-neutral-50/50">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <p className="text-overline mb-3 tracking-[0.15em]">{titles[locale] || titles.en}</p>
          <h2 className="section-title">
            {locale === 'en' ? 'International Certifications' : 'Международные Сертификаты'}
          </h2>
          <div className="divider mx-auto" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="group flex flex-col items-center rounded-xl bg-white px-8 py-6 shadow-sm border border-neutral-100 transition-all hover:shadow-md hover:border-neutral-200"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="h-16 w-16 object-contain opacity-70 grayscale transition-all group-hover:grayscale-0 group-hover:opacity-100"
              />
              <p className="mt-3 text-sm font-semibold text-neutral-700">{cert.name}</p>
              {cert.issuer && (
                <p className="mt-0.5 text-xs text-neutral-400">{cert.issuer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
