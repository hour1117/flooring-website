'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import type { SiteSettings, Category } from '@/types';
import { localizedValue } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';

interface Props { locale: 'en' | 'ru' | 'zh';
  settings: SiteSettings;
  categories: Category[];
}

const navLabels: Record<string, Record<string, string>> = {
  en: { home: 'Home', products: 'Products', about: 'About', oem: 'OEM/ODM', projects: 'Projects', blog: 'Blog', contact: 'Contact' },
  ru: { home: 'Главная', products: 'Продукция', about: 'О Нас', oem: 'OEM/ODM', projects: 'Проекты', blog: 'Блог', contact: 'Контакты' },
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

  const isTransparent = !scrolled && (pathname === '/en' || pathname === '/ru' || pathname === '/zh' || pathname === '/');

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
          {(['home', 'products', 'about', 'oem', 'projects', 'blog', 'contact'] as const).map((key) => {
            const href = key === 'home' ? '/' : key === 'products' ? '/products' : `/${key === 'oem' ? 'oem-odm' : key}`;
            const isActive = key === 'home' ? pathname === '/en' || pathname === '/ru' || pathname === '/zh' : pathname.startsWith(href) && href !== '/';

            if (key === 'products') {
              return (
                <Link
                  key={key}
                  href="/products"
                  className={`text-xs font-extralight tracking-[0.15em] uppercase transition-colors ${
                    isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  {navLabels[locale]?.products || 'Products'}
                </Link>
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
            {['home', 'products', 'about', 'oem', 'projects', 'blog', 'contact'].map((key) => (
              <Link
                key={key}
                href={key === 'home' ? '/' : key === 'products' ? '/products' : `/${key === 'oem' ? 'oem-odm' : key}`}
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
