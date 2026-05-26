import { Link } from '@/i18n/navigation';
import type { Locale } from '@/types';

const content: Record<string, { title: string; text: string; button: string }> = {
  en: {
    title: 'Start Your Project',
    text: 'Partner with us for premium parquet flooring that transforms interiors.',
    button: 'Get in Touch',
  },
  ru: {
    title: 'Начните Свой Проект',
    text: 'Сотрудничайте с нами для премиального паркета, который преображает интерьеры.',
    button: 'Связаться с Нами',
  },
  zh: {
    title: '开启您的项目',
    text: '与我们合作，用高级拼花地板焕新室内空间。',
    button: '联系我们',
  },
};

export default function ContactCTA({ locale }: { locale: Locale }) {
  const t = content[locale] || content.en;
  return (
    <section className="section-padding bg-white">
      <div className="container-custom text-center">
        <h2 className="text-display-md font-light text-black">{t.title}</h2>
        <p className="mx-auto mt-4 max-w-md text-base font-light text-neutral-400">{t.text}</p>
        <div className="mt-8">
          <Link href="/contact" className="btn-dark">{t.button}</Link>
        </div>
      </div>
    </section>
  );
}
