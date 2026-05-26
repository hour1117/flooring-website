'use client';
import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import type { Locale } from '@/types';

const labels: Record<string, Record<string, string>> = {
  en: { name: 'Your Name', email: 'Your Email', phone: 'Phone', company: 'Company', country: 'Country', message: 'Your Message', submit: 'Send Message', success: 'Thank you! We will reply within 24 hours.', error: 'Something went wrong. Please email us directly.' },
  ru: { name: 'Ваше Имя', email: 'Ваша Почта', phone: 'Телефон', company: 'Компания', country: 'Страна', message: 'Сообщение', submit: 'Отправить', success: 'Спасибо! Мы ответим в течение 24 часов.', error: 'Ошибка. Свяжитесь с нами по почте.' },
  zh: { name: '姓名', email: '邮箱', phone: '电话', company: '公司', country: '国家', message: '留言', submit: '发送', success: '谢谢！24小时内回复。', error: '出错，请直接发邮件。' },
};

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = labels[locale] || labels.en;
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus('loading');
    const form = e.currentTarget; const data = new FormData(form);
    try { const res = await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ name: data.get('name'), email: data.get('email'), phone: data.get('phone'), company: data.get('company'), country: data.get('country'), message: data.get('message') }) }); if (res.ok) { setStatus('success'); form.reset(); } else setStatus('error'); } catch { setStatus('error'); }
  }
  if (status === 'success') return (<div className="mt-6 flex items-center gap-3 rounded-xl bg-green-50 p-6 text-green-700"><CheckCircle className="h-6 w-6"/><p>{t.success}</p></div>);
  return (<form onSubmit={handleSubmit} className="mt-6 space-y-4">{status==='error'&&(<div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-red-700 text-sm"><AlertCircle className="h-5 w-5"/><p>{t.error}</p></div>)}
    <div className="grid gap-4 sm:grid-cols-2"><div><label className="block text-sm font-medium text-neutral-600 mb-1">{t.name} *</label><input type="text" name="name" required className="w-full rounded-lg border-neutral-200 focus:border-black focus:ring-black"/></div><div><label className="block text-sm font-medium text-neutral-600 mb-1">{t.email} *</label><input type="email" name="email" required className="w-full rounded-lg border-neutral-200 focus:border-black focus:ring-black"/></div></div>
    <div className="grid gap-4 sm:grid-cols-2"><div><label className="block text-sm font-medium text-neutral-600 mb-1">{t.phone}</label><input type="tel" name="phone" className="w-full rounded-lg border-neutral-200 focus:border-black focus:ring-black"/></div><div><label className="block text-sm font-medium text-neutral-600 mb-1">{t.company}</label><input type="text" name="company" className="w-full rounded-lg border-neutral-200 focus:border-black focus:ring-black"/></div></div>
    <div><label className="block text-sm font-medium text-neutral-600 mb-1">{t.country}</label><input type="text" name="country" className="w-full rounded-lg border-neutral-200 focus:border-black focus:ring-black"/></div>
    <div><label className="block text-sm font-medium text-neutral-600 mb-1">{t.message} *</label><textarea name="message" required rows={4} className="w-full rounded-lg border-neutral-200 focus:border-black focus:ring-black"/></div>
    <button type="submit" disabled={status==='loading'} className="btn-dark w-full">{status==='loading' ? 'Sending...' : <span className="flex items-center gap-2"><Send className="h-4 w-4"/>{t.submit}</span>}</button>
  </form>);
}
