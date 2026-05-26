import type { Metadata } from 'next';
import { getCertificates } from '@/lib/cms';
import type { Locale } from '@/types';
import FactoryCarousel from './FactoryCarousel';

type Props = { params: { locale: string } };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: params.locale === 'en' ? 'About Us' : 'О Нас' };
}

const content: Record<string, Record<string, string>> = {
  en: {
    title: 'About Us',
    headline: 'Established in 2015 — 15 Years of Export Excellence',
    body: 'Liwin Flooring is a professional wooden flooring manufacturer with 15 years of export experience. Our products reach over 20 countries across North America, Europe, Asia, and Oceania.\n\nOur core team — most with 5+ years in production, design, and international trade — ensures strict quality control and reliable craftsmanship. We offer a full range of flooring: solid wood, engineered, laminate, and parquet.\n\nWe support flexible customization including specifications, surface finishes, packaging, and private labeling. Guided by "Quality First, Customer Supreme," we provide eco-friendly flooring and one-stop professional service to global clients.',
  },
  ru: {
    title: 'О Нас',
    headline: 'Основана в 2015 — 15 лет экспортного опыта',
    body: 'Liwin Flooring — профессиональный производитель деревянных напольных покрытий с 15-летним опытом экспорта. Наша продукция представлена в более чем 20 странах Северной Америки, Европы, Азии и Океании.\n\nНаша команда обеспечивает строгий контроль качества и надежное мастерство. Мы предлагаем полный спектр напольных покрытий: массив, инженерные, ламинат и паркет.',
  },
  zh: {
    title: '关于我们',
    headline: '成立于2015年 — 15年出口经验',
    body: 'Liwin Flooring 是一家专业的木地板制造商，拥有15年出口经验。产品远销北美、欧洲、亚洲和大洋洲的20多个国家。\n\n核心团队多数拥有5年以上生产、设计和国际贸易经验，确保严格的质量控制和可靠的工艺。我们提供全系列地板：实木、工程、强化和拼花。\n\n支持灵活的定制服务，包括规格、表面处理、包装和自有品牌。秉承"质量第一、客户至上"的理念，为全球客户提供环保地板和一站式专业服务。',
  },
};

export default function AboutPage({ params }: Props) {
  const locale = params.locale as Locale;
  const t = content[locale] || content.en;
  const certificates = getCertificates();

  return (
    <div>
      <section className="bg-black py-20 text-center text-white">
        <div className="container-custom">
          <h1 className="text-4xl font-light sm:text-5xl">{t.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-neutral-300">{t.headline}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-neutral max-w-none font-light text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.body.replace(/\n\n/g, '</p><p>') }} />
        </div>
      </section>

      {/* Factory — full bleed black */}
      <section className="bg-black py-12 md:py-16">
        <div className="px-12 sm:px-20 lg:px-28">
          <h2 className="text-[clamp(2rem,3vw,3rem)] font-light text-white mb-10">
            {locale === 'en' ? 'Our Factory' : locale === 'ru' ? 'Наша Фабрика' : '我们的工厂'}
          </h2>
          <FactoryCarousel />
        </div>
      </section>

      {certificates.length > 0 && (
        <section className="section-padding bg-neutral-50"><div className="container-custom text-center"><h2 className="section-title">{locale === 'en' ? 'Certificates' : 'Сертификаты'}</h2><div className="mt-8 flex flex-wrap justify-center gap-8">{certificates.map((cert, i) => (<div key={i} className="rounded-xl bg-white p-6 shadow-sm"><img src={cert.image} alt={cert.name} className="h-20 w-20 object-contain grayscale hover:grayscale-0 transition-all" /><p className="mt-2 text-sm font-medium">{cert.name}</p></div>))}</div></div></section>
      )}
    </div>
  );
}
