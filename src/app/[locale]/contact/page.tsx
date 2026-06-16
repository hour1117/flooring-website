import type { Metadata } from 'next';
import { getSiteSettings, localizedValue } from '@/lib/cms';
import ContactForm from '@/components/contact/ContactForm';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import type { Locale } from '@/types';

type Props = { params: { locale: string } };
export async function generateMetadata(): Promise<Metadata> { return { title: 'Contact' }; }

const labels: Record<string, Record<string, string>> = {
  en: { title: 'Contact Us', subtitle: 'Get in touch', formTitle: 'Send a Message', whatsapp: 'WhatsApp', email: 'Email', phone: 'Phone', address: 'Address', chat: 'Chat on WhatsApp' },
  ru: { title: 'Контакты', subtitle: 'Свяжитесь с нами', formTitle: 'Отправьте Сообщение', whatsapp: 'WhatsApp', email: 'Эл. Почта', phone: 'Телефон', address: 'Адрес', chat: 'Чат в WhatsApp' },
  zh: { title: '联系我们', subtitle: '', formTitle: '', whatsapp: 'WhatsApp', email: '邮箱', phone: '电话', address: '地址', chat: '' },
};

export default function ContactPage({ params }: Props) {
  const locale = params.locale as Locale;
  const t = labels[locale] || labels.en;
  const settings = getSiteSettings();
  const cleanWA = settings.whatsapp.replace(/[^0-9]/g, '');
  return (
    <div>
      <section className="bg-black py-20 text-center text-white"><div className="container-custom"><h1 className="text-4xl font-light">{t.title}</h1><p className="mt-4 text-lg font-light text-neutral-300">{t.subtitle}</p></div></section>
      <section className="section-padding"><div className="container-custom"><div className="grid gap-10 lg:grid-cols-2"><div><h2 className="text-2xl font-light">{t.formTitle}</h2><p className="mt-2 text-neutral-500 font-light">Our team will reply within 24 hours.</p><ContactForm locale={locale} /><div className="mt-12 space-y-5">{[{ icon: Phone, label: t.phone, value: settings.phone, href: 'tel:'+settings.phone },{ icon: Mail, label: t.email, value: settings.email, href: 'mailto:'+settings.email },{ icon: Mail, label: t.email, value: settings.email2 || '', href: settings.email2 ? 'mailto:'+settings.email2 : '' },{ icon: MapPin, label: t.address, value: localizedValue(settings.address, locale), href: '' }].filter(item => item.value).map((item, i) => (<div key={i} className="flex items-start gap-4"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-50 text-neutral-500"><item.icon className="h-5 w-5"/></div><div><p className="text-sm text-neutral-400">{item.label}</p>{item.href ? <a href={item.href} className="text-black">{item.value}</a> : <p className="text-black">{item.value}</p>}</div></div>))}<a href={'https://wa.me/'+cleanWA} target="_blank" rel="noopener" className="flex items-center gap-3 rounded-xl bg-green-500 px-5 py-3 text-white hover:bg-green-600"><MessageCircle className="h-5 w-5"/><span>{t.chat}</span></a></div></div><div className="overflow-hidden rounded-2xl bg-neutral-100 min-h-[400px]">{settings.maps_embed_url ? <iframe src={settings.maps_embed_url} width="100%" height="100%" className="min-h-[400px] border-0" allowFullScreen loading="lazy"/> : <div className="flex h-full min-h-[400px] items-center justify-center text-neutral-400">Map</div>}</div></div></div></section>
    </div>
  );
}
