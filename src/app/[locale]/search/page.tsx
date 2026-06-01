import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { getAllSearchData } from '@/lib/cms';
import { Search } from 'lucide-react';
import type { Locale } from '@/types';

type Props = { params: { locale: string }; searchParams: { q?: string } };
export async function generateMetadata(): Promise<Metadata> { return { title: 'Search' }; }

const labels: Record<string, Record<string, string>> = {
  en: { title: 'Search', placeholder: 'Search...', noResults: 'No results for', results: 'results' },
  es: { title: 'Buscar', placeholder: 'Buscar...', noResults: 'Sin resultados', results: 'resultados' },
  fr: { title: 'Rechercher', placeholder: 'Rechercher...', noResults: 'Aucun résultat', results: 'résultats' },
  pt: { title: 'Buscar', placeholder: 'Buscar...', noResults: 'Sem resultados', results: 'resultados' },
  ru: { title: 'Поиск', placeholder: 'Поиск...', noResults: 'Ничего не найдено для', results: 'результатов' },
  zh: { title: '搜索', placeholder: '搜索...', noResults: '未找到', results: '结果' },
};

export default function SearchPage({ params, searchParams }: Props) {
  const locale = params.locale as Locale;
  const t = labels[locale] || labels.en;
  const query = searchParams.q || '';
  const allData = getAllSearchData(locale);
  const results = query ? allData.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase())) : [];
  return (
    <div className="section-padding bg-neutral-50 min-h-screen"><div className="container-custom max-w-4xl"><h1 className="section-title">{t.title}</h1>
      <form className="mt-8" method="GET"><div className="relative"><Search className="absolute start-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400"/><input type="text" name="q" defaultValue={query} placeholder={t.placeholder} className="w-full rounded-xl border-neutral-200 py-4 ps-12 pe-4 text-lg focus:border-black focus:ring-black" autoFocus/></div></form>
      {query && (<div className="mt-8"><p className="text-sm text-neutral-500">{results.length} {t.results} for &quot;{query}&quot;</p>{results.length > 0 ? (<div className="mt-6 space-y-4">{results.map((item, i) => (<Link key={i} href={item.url} className="flex gap-4 rounded-xl bg-white p-4 shadow-sm hover:shadow-md"><img src={item.image} alt={item.title} className="h-20 w-20 rounded-lg object-cover"/><div><span className="text-xs font-medium uppercase text-neutral-400">{item.type}</span><h3 className="mt-1 font-medium text-black">{item.title}</h3><p className="mt-1 text-sm text-neutral-500 line-clamp-2">{item.description}</p></div></Link>))}</div>) : (<div className="mt-10 text-center"><p className="text-lg text-neutral-500">{t.noResults} &quot;{query}&quot;</p></div>)}</div>)}
    </div></div>
  );
}
