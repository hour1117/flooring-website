import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { getProjects, localizedValue } from '@/lib/cms';
import { MapPin, CalendarDays } from 'lucide-react';
import type { Locale } from '@/types';

type Props = { params: { locale: string } };
export async function generateMetadata(): Promise<Metadata> { return { title: 'Projects' }; }

const labels: Record<string, Record<string, string>> = {
  en: { title: 'Project Cases', view: 'View Project', noProjects: 'No projects yet' },
  ru: { title: 'Проекты', view: 'Смотреть Проект', noProjects: 'Проектов пока нет' },
  zh: { title: '项目案例', view: '查看项目', noProjects: '暂无项目' },
};

export default function ProjectsPage({ params }: Props) {
  const locale = params.locale as Locale;
  const t = labels[locale] || labels.en;
  const projects = getProjects(locale);
  return (
    <div className="section-padding bg-neutral-50 min-h-screen"><div className="container-custom"><h1 className="section-title">{t.title}</h1><div className="mt-4 h-px w-16 bg-neutral-300"/>
      {projects.length > 0 ? (<div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project) => (<Link key={project.slug} href={`/projects/${project.slug}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg"><div className="aspect-video overflow-hidden"><img src={project.featured_image} alt={localizedValue(project.title, locale)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"/></div><div className="p-5"><div className="flex items-center gap-4 text-xs text-neutral-400"><span className="flex items-center gap-1"><MapPin className="h-3 w-3"/>{project.location}</span><span className="flex items-center gap-1"><CalendarDays className="h-3 w-3"/>{project.completion_date}</span></div><h3 className="mt-3 text-lg font-medium text-black group-hover:text-neutral-600 line-clamp-2">{localizedValue(project.title, locale)}</h3><span className="mt-4 inline-flex items-center text-sm font-medium text-black">{t.view} &rarr;</span></div></Link>))}</div>) : (<p className="mt-10 text-center text-neutral-400">{t.noProjects}</p>)}
    </div></div>
  );
}
