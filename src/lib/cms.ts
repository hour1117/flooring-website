import fs from 'fs';
import path from 'path';
import type { Product, Category, BlogPost, Project, Certificate, SiteSettings, Locale } from '@/types';

const CONTENT_ROOT = path.join(process.cwd(), 'src/content');

function readJSON<T>(filePath: string): T | null {
  try {
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function readAllJSON<T>(dir: string): T[] {
  try {
    if (!fs.existsSync(dir)) return [];
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'));
    return files
      .map((file) => readJSON<T>(path.join(dir, file)))
      .filter((item): item is T => item !== null);
  } catch {
    return [];
  }
}

// ---- Site Settings ----
let siteSettingsCache: SiteSettings | null = null;

export function getSiteSettings(): SiteSettings {
  if (siteSettingsCache) return siteSettingsCache;
  const filePath = path.join(CONTENT_ROOT, 'settings', 'site.json');
  const data = readJSON<SiteSettings>(filePath);
  if (!data) {
    throw new Error('Site settings not found. Create src/content/settings/site.json');
  }
  siteSettingsCache = data;
  return data;
}

// ---- Products ----
export function getProducts(locale: Locale): Product[] {
  const dir = path.join(CONTENT_ROOT, 'products', locale);
  return readAllJSON<Product>(dir);
}

export function getProductBySlug(locale: Locale, slug: string): Product | null {
  const filePath = path.join(CONTENT_ROOT, 'products', locale, `${slug}.json`);
  return readJSON<Product>(filePath);
}

export function getFeaturedProducts(locale: Locale): Product[] {
  return getProducts(locale).filter((p) => p.is_featured);
}

export function getProductsByCategory(locale: Locale, category: string): Product[] {
  return getProducts(locale).filter((p) => p.category === category);
}

// ---- Categories ----
export function getCategories(locale: Locale): Category[] {
  const dir = path.join(CONTENT_ROOT, 'categories', locale);
  return readAllJSON<Category>(dir).sort((a, b) => a.order - b.order);
}

export function getCategoryBySlug(locale: Locale, slug: string): Category | null {
  const filePath = path.join(CONTENT_ROOT, 'categories', locale, `${slug}.json`);
  return readJSON<Category>(filePath);
}

// ---- Blog Posts ----
export function getBlogPosts(locale: Locale): BlogPost[] {
  const dir = path.join(CONTENT_ROOT, 'blog', locale);
  return readAllJSON<BlogPost>(dir).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPostBySlug(locale: Locale, slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_ROOT, 'blog', locale, `${slug}.json`);
  return readJSON<BlogPost>(filePath);
}

export function getRecentBlogPosts(locale: Locale, limit: number = 3): BlogPost[] {
  return getBlogPosts(locale).slice(0, limit);
}

// ---- Projects ----
export function getProjects(locale: Locale): Project[] {
  const dir = path.join(CONTENT_ROOT, 'projects', locale);
  return readAllJSON<Project>(dir).sort(
    (a, b) => new Date(b.completion_date).getTime() - new Date(a.completion_date).getTime()
  );
}

export function getProjectBySlug(locale: Locale, slug: string): Project | null {
  const filePath = path.join(CONTENT_ROOT, 'projects', locale, `${slug}.json`);
  return readJSON<Project>(filePath);
}

// ---- Certificates ----
export function getCertificates(): Certificate[] {
  const dir = path.join(CONTENT_ROOT, 'certificates');
  return readAllJSON<Certificate>(dir).sort((a, b) => a.order - b.order);
}

// ---- Search helpers ----
export interface SearchResult {
  type: 'product' | 'blog' | 'project';
  slug: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export function getAllSearchData(locale: Locale): SearchResult[] {
  const results: SearchResult[] = [];

  getProducts(locale).forEach((p) => {
    results.push({
      type: 'product',
      slug: p.slug,
      title: p.title[locale] || p.title.en,
      description: p.short_description[locale] || p.short_description.en,
      image: p.featured_image,
      url: `/products/${p.slug}`,
    });
  });

  getBlogPosts(locale).forEach((b) => {
    results.push({
      type: 'blog',
      slug: b.slug,
      title: b.title[locale] || b.title.en,
      description: b.excerpt[locale] || b.excerpt.en,
      image: b.featured_image,
      url: `/blog/${b.slug}`,
    });
  });

  getProjects(locale).forEach((p) => {
    results.push({
      type: 'project',
      slug: p.slug,
      title: p.title[locale] || p.title.en,
      description: p.body[locale] || p.body.en,
      image: p.featured_image,
      url: `/projects/${p.slug}`,
    });
  });

  return results;
}

// ---- Localized value helper ----
export function localizedValue(
  value: { en: string; ru: string; zh?: string } | undefined,
  locale: Locale
): string {
  if (!value) return '';
  return value[locale] || value.en || '';
}
