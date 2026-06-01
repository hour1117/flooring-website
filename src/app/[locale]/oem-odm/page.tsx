import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { PenTool, Settings, Truck, CheckCircle, Factory } from 'lucide-react';
import type { Locale } from '@/types';

type Props = { params: { locale: string } };
export async function generateMetadata(): Promise<Metadata> { return { title: 'OEM/ODM Services' }; }

const content: Record<string, Record<string, string>> = {
  en: { title: 'OEM/ODM Services', headline: 'Custom Manufacturing Solutions', intro: 'With 20+ years of parquet manufacturing expertise and two in-house factories, we offer comprehensive OEM and ODM services.', process: 'Our Process' },
  ru: { title: 'Услуги OEM/ODM', headline: 'Индивидуальные Производственные Решения', intro: 'OEM/ODM услуги для вашего бизнеса.', process: 'Наш Процесс' },
  zh: { title: 'OEM/ODM服务', headline: '定制制造解决方案', intro: 'OEM/ODM服务。', process: '我们的流程' },
  es: { title: 'Servicios OEM/ODM', headline: 'Soluciones Personalizadas', intro: 'Servicios OEM/ODM para su negocio.', process: 'Proceso' },
  fr: { title: 'Services OEM/ODM', headline: 'Solutions Personnalisées', intro: 'Services OEM/ODM pour votre entreprise.', process: 'Processus' },
  pt: { title: 'Serviços OEM/ODM', headline: 'Soluções Personalizadas', intro: 'Serviços OEM/ODM para o seu negócio.', process: 'Processo' },
};

const steps = [
  { icon: PenTool, title: { en: 'Design', ru: 'Дизайн', zh: '设计', es: 'Diseño', fr: 'Design', pt: 'Design' }, desc: { en: 'Share requirements', ru: 'Обсуждение', zh: '沟通', es: 'Requisitos', fr: 'Besoins', pt: 'Requisitos' } },
  { icon: Settings, title: { en: 'Samples', ru: 'Образцы', zh: '样品', es: 'Muestras', fr: 'Échantillons', pt: 'Amostras' }, desc: { en: 'Samples in 7-10 days', ru: '7-10 дней', zh: '7-10天', es: '7-10 días', fr: '7-10 jours', pt: '7-10 dias' } },
  { icon: Factory, title: { en: 'Production', ru: 'Производство', zh: '生产', es: 'Producción', fr: 'Production', pt: 'Produção' }, desc: { en: 'Full-scale manufacturing', ru: 'Производство', zh: '规模生产', es: 'Fabricación', fr: 'Fabrication', pt: 'Fabricação' } },
  { icon: CheckCircle, title: { en: 'Quality', ru: 'Качество', zh: '质检', es: 'Calidad', fr: 'Qualité', pt: 'Qualidade' }, desc: { en: 'Testing before shipment', ru: 'Тестирование', zh: '出货检测', es: 'Pruebas', fr: 'Tests', pt: 'Testes' } },
  { icon: Truck, title: { en: 'Delivery', ru: 'Доставка', zh: '配送', es: 'Entrega', fr: 'Livraison', pt: 'Entrega' }, desc: { en: 'Worldwide shipping', ru: 'Доставка', zh: '全球运输', es: 'Envío', fr: 'Expédition', pt: 'Envio' } },
];

const ctaText: Record<string, { ready: string; contact: string }> = {
  en: { ready: 'Ready to Start?', contact: 'Contact Us' },
  ru: { ready: 'Готовы?', contact: 'Связаться' },
  zh: { ready: '准备开始？', contact: '联系我们' },
  es: { ready: 'Listo?', contact: 'Contáctenos' },
  fr: { ready: 'Prêt?', contact: 'Contactez-nous' },
  pt: { ready: 'Pronto?', contact: 'Contate-nos' },
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
