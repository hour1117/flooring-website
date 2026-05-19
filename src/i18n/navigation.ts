import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const pathnames = {
  '/': '/',
  '/products': '/products',
  '/about': '/about',
  '/oem-odm': '/oem-odm',
  '/projects': '/projects',
  '/blog': '/blog',
  '/contact': '/contact',
  '/search': '/search',
} as const;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales: routing.locales, pathnames });
