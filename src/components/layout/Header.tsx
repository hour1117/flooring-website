'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import type { SiteSettings, Category } from '@/types';
import { localizedValue } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';

interface Props { locale: any;
  settings: SiteSettings;
  categories: Category[];
}

const navLabels: Record<string, Record<string, string>> = {
  en: { home: 'Home', products: 'Products', about: 'About', oem: 'OEM/ODM', projects: 'Projects', blog: 'Blog', contact: 'Contact' },
  ru: { home: 'Главная', products: 'Продукция', about: 'О Нас', oem: 'OEM/ODM', projects: 'Проекты', blog: 'Блог', contact: 'Контакты' },
  es: { home: 'Inicio', products: 'Productos', about: 'Nosotros', oem: 'OEM/ODM', projects: 'Proyectos', blog: 'Blog', contact: 'Contacto' },
  fr: { home: 'Accueil', products: 'Produits', about: 'À Propos', oem: 'OEM/ODM', projects: 'Projets', blog: 'Blog', contact: 'Contact' },
  pt: { home: 'Início', products: 'Produtos', about: 'Sobre', oem: 'OEM/ODM', projects: 'Projetos', blog: 'Blog', contact: 'Contato' },
  zh: { home: '首页', products: '产品', about: '关于我们', oem: 'OEM/ODM', projects: '项目', blog: '博客', contact: '联系' },
};

export default function Header({ locale, settings, categories }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isTransparent = !scrolled && (pathname === '/en' || pathname === '/ru' || pathname === '/zh' || pathname === '/es' || pathname === '/fr' || pathname === '/pt' || pathname === '/');

  return (
    <header className={`fixed top-0 start-0 end-0 z-50 transition-all duration-500 ${
      isTransparent
        ? 'text-white'
        : 'bg-white/95 backdrop-blur-md text-black shadow-sm'
    }`}>
      <div className={`container-custom flex items-center justify-between transition-all duration-500 ${
        isTransparent ? 'h-24 md:h-32' : 'h-20 md:h-24'
      } ${isTransparent ? '' : 'border-b border-neutral-100'}`}>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt={localizedValue(settings.company_name, locale)}
            className="h-24 md:h-36 w-auto transition-all"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {(['home', 'products', 'about', 'oem', 'contact'] as const).map((key) => {
            const href = key === 'home' ? '/' : key === 'products' ? '/products' : `/${key === 'oem' ? 'oem-odm' : key}`;
            const isActive = key === 'home' ? pathname.replace(/^\/(en|ru|zh|es|fr|pt)/, '/') === '/' : pathname.startsWith(href) && href !== '/';

            if (key === 'products') {
              return (
                <div key={key} className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
                  <Link
                    href="/products"
                    className={`flex items-center gap-1 text-xs font-extralight tracking-[0.15em] uppercase transition-colors ${
                      isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    {navLabels[locale]?.products || 'Products'}
                    <ChevronDown className={`h-3 w-3 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  {productsOpen && (
                    <div className="absolute start-1/2 -translate-x-1/2 top-full pt-3 w-56">
                      <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden py-2">
                        <Link href="/products" onClick={() => setProductsOpen(false)} className="block px-5 py-2.5 text-sm text-black hover:bg-neutral-50 transition-colors font-medium">
                          {locale === 'en' ? 'All Products' : locale === 'ru' ? 'Все Продукты' : locale === 'es' ? 'Todos' : locale === 'fr' ? 'Tout' : locale === 'pt' ? 'Todos' : '全部产品'}
                        </Link>
                        <div className="mx-4 my-1 border-t border-neutral-100" />
                        {categories.map((cat) => (
                          <Link key={cat.slug} href={`/categories/${cat.slug}`} onClick={() => setProductsOpen(false)} className="block px-5 py-2.5 text-sm text-neutral-600 hover:text-black hover:bg-neutral-50 transition-colors">
                            {localizedValue(cat.title, locale)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={key}
                href={href}
                className={`text-xs font-extralight tracking-[0.15em] uppercase transition-colors ${
                  isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                }`}
              >
                {navLabels[locale]?.[key] || key}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white text-black border-t border-neutral-100">
          <div className="container-custom py-4 space-y-1">
            {(['home'] as const).map((key) => (
              <Link key={key} href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-sm font-light text-neutral-700 hover:text-black transition-colors">
                {navLabels[locale]?.home || 'Home'}
              </Link>
            ))}
            {/* Products — expandable */}
            <div>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-sm font-light text-neutral-700 hover:text-black transition-colors"
              >
                <span>{navLabels[locale]?.products || 'Products'}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsOpen && (
                <div className="ml-4 border-l border-neutral-100 pl-4 space-y-1">
                  <Link href="/products" onClick={() => { setMobileOpen(false); setProductsOpen(false); }} className="block px-3 py-2 text-sm font-medium text-black hover:text-neutral-600 transition-colors">
                    {locale === 'en' ? 'All Products' : locale === 'ru' ? 'Все Продукты' : locale === 'es' ? 'Todos' : locale === 'fr' ? 'Tout' : locale === 'pt' ? 'Todos' : '全部产品'}
                  </Link>
                  {categories.map((cat) => (
                    <Link key={cat.slug} href={`/categories/${cat.slug}`} onClick={() => { setMobileOpen(false); setProductsOpen(false); }} className="block px-3 py-2 text-sm font-light text-neutral-600 hover:text-black transition-colors">
                      {localizedValue(cat.title, locale)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {(['about', 'oem', 'contact'] as const).map((key) => (
              <Link
                key={key}
                href={key === 'oem' ? '/oem-odm' : `/${key}`}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-sm font-light text-neutral-700 hover:text-black transition-colors"
              >
                {navLabels[locale]?.[key] || key}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
