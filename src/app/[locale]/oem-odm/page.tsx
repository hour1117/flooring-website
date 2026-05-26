import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { PenTool, Settings, Truck, CheckCircle, Factory } from 'lucide-react';
import type { Locale } from '@/types';

type Props = { params: { locale: string } };
export async function generateMetadata(): Promise<Metadata> { return { title: 'OEM/ODM Services' }; }

const content: Record<string, Record<string, string>> = {
  en: { title: 'OEM/ODM Services', headline: 'Custom Manufacturing Solutions', intro: 'With 20+ years of parquet manufacturing expertise and two in-house factories, we offer comprehensive OEM and ODM services.', process: 'Our Process' },
  ru: { title: 'Услуги OEM/ODM', headline: 'Индивидуальные Производственные Решения', intro: 'С более чем 20-летним опытом производства паркета и двумя фабриками, мы предлагаем полные услуги OEM и ODM.', process: 'Наш Процесс' },
  zh: { title: 'OEM/ODM服务', headline: '定制制造解决方案', intro: '拥有20+年拼花地板制造经验和两家工厂，我们提供全面的OEM和ODM服务。', process: '我们的流程' },
};

const steps = [
  { icon: PenTool, title: { en: 'Design Consultation', ru: 'Консультация по Дизайну', zh: '设计咨询' }, desc: { en: 'Share your requirements with our design team', ru: 'Обсуждение требований', zh: '与设计团队沟通需求' } },
  { icon: Settings, title: { en: 'Sample Production', ru: 'Производство Образцов', zh: '样品生产' }, desc: { en: 'Custom samples within 7-10 days', ru: 'Образцы за 7-10 дней', zh: '7-10天出定制样品' } },
  { icon: Factory, title: { en: 'Mass Production', ru: 'Массовое Производство', zh: '批量生产' }, desc: { en: 'Full-scale manufacturing with strict QC', ru: 'Производство с контролем', zh: '严格品控的规模生产' } },
  { icon: CheckCircle, title: { en: 'Quality Inspection', ru: 'Проверка Качества', zh: '品质检验' }, desc: { en: 'Rigorous testing before shipment', ru: 'Тестирование перед отправкой', zh: '出货前严格检测' } },
  { icon: Truck, title: { en: 'Global Delivery', ru: 'Глобальная Доставка', zh: '全球配送' }, desc: { en: 'Secure packaging and worldwide shipping', ru: 'Надёжная упаковка', zh: '安全包装全球运输' } },
];

const ctaText: Record<string, { ready: string; contact: string }> = {
  en: { ready: 'Ready to Start?', contact: 'Contact Us' },
  ru: { ready: 'Готовы Начать?', contact: 'Связаться' },
  zh: { ready: '准备开始？', contact: '联系我们' },
};

export default function OEMODMPage({ params }: Props) {
  const locale = params.locale as Locale;
  const t = content[locale] || content.en;
  const c = ctaText[locale] || ctaText.en;
  return (
    <div>
      <section className="bg-black py-20 text-center text-white"><div className="container-custom"><h1 className="text-4xl font-light sm:text-5xl">{t.title}</h1><p className="mx-auto mt-4 max-w-2xl text-lg font-light text-neutral-300">{t.headline}</p></div></section>
      <section className="section-padding"><div className="container-custom max-w-4xl">
        <p className="text-lg font-light leading-relaxed text-neutral-500">{t.intro}</p>
        <h2 className="mt-16 mb-8 text-center text-display-md">{t.process}</h2>
        <div className="space-y-8">{steps.map((step, i) => (
          <div key={i} className="flex gap-5 items-start rounded-2xl border border-neutral-100 p-6 hover:shadow-md transition-all">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500"><span className="text-sm font-medium">{i + 1}</span></div>
            <div><h3 className="text-lg font-medium text-black">{step.title[locale] || step.title.en}</h3><p className="mt-1 text-neutral-500 font-light">{step.desc[locale] || step.desc.en}</p></div>
          </div>
        ))}</div>
        <div className="mt-16 text-center rounded-2xl bg-neutral-50 p-10"><h3 className="text-2xl font-light">{c.ready}</h3><div className="mt-6"><Link href="/contact" className="btn-dark">{c.contact}</Link></div></div>
      </div></section>
    </div>
  );
}
