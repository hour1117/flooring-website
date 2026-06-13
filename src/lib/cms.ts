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

export function groupProductsBySubcategory(locale: Locale, category: string): Map<string, Product[]> {
  const products = getProductsByCategory(locale, category);
  const groups = new Map<string, Product[]>();
  for (const p of products) {
    const key = p.subcategory?.[locale] || p.subcategory?.en || '_none';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(p);
  }
  // Sort by actual image aspect ratio — portrait first, then landscape
  const getImageRatio = (p: Product): number => {
    try {
      const imgPath = path.join(process.cwd(), 'public', p.featured_image);
      if (!fs.existsSync(imgPath)) return 1;
      const buf = fs.readFileSync(imgPath);
      // PNG: width at bytes 16-19, height at 20-23 (big-endian)
      if (buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47) {
        const w = buf.readUInt32BE(16);
        const h = buf.readUInt32BE(20);
        return w / h;
      }
      // JPEG: scan for SOF marker (0xFF 0xC0) to get dimensions
      if (buf[0] === 0xFF && buf[1] === 0xD8) {
        let i = 2;
        while (i < buf.length - 8) {
          if (buf[i] === 0xFF && (buf[i+1] === 0xC0 || buf[i+1] === 0xC2)) {
            const h = buf.readUInt16BE(i + 5);
            const w = buf.readUInt16BE(i + 7);
            return w / h;
          }
          i += buf.readUInt16BE(i + 2) + 2;
        }
      }
    } catch {}
    return 1;
  };
  groups.forEach((prods) => {
    prods.sort((a, b) => getImageRatio(a) - getImageRatio(b));
  });
  return groups;
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
  value: { en: string; ru: string; zh: string; es: string; fr: string; pt: string } | undefined,
  locale: Locale
): string {
  if (!value) return '';
  return value[locale] || value.en || '';
}
