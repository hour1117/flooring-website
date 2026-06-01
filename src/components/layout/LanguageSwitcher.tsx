'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const localeNames: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
  zh: '中文',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLocale = pathname.split('/')[1] || 'en';

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  function switchTo(locale: string) {
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm opacity-70 hover:opacity-100 transition-opacity"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{localeNames[currentLocale] || currentLocale}</span>
      </button>
      {open && (
        <div className="absolute end-0 top-8 z-50 min-w-[130px] rounded-xl bg-white py-1 shadow-lg ring-1 ring-black/5">
          {Object.entries(localeNames).map(([code, name]) => (
            <button
              key={code}
              onClick={() => switchTo(code)}
              className={`block w-full px-4 py-2 text-start text-sm transition-colors hover:bg-neutral-50 ${
                code === currentLocale ? 'font-medium text-black' : 'text-neutral-600'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
