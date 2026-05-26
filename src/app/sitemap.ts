import { MetadataRoute } from 'next';
import { getProducts, getBlogPosts, getProjects, getCategories } from '@/lib/cms';
import { locales } from '@/types';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://floorpro-flooring.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const staticPages = [
    '', '/products', '/about', '/oem-odm', '/projects', '/blog', '/contact', '/search',
  ];

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    }

    // Products
    getProducts(locale).forEach((p) => {
      entries.push({
        url: `${BASE_URL}/${locale}/products/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });

    // Blog posts
    getBlogPosts(locale).forEach((b) => {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${b.slug}`,
        lastModified: new Date(b.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });

    // Projects
    getProjects(locale).forEach((p) => {
      entries.push({
        url: `${BASE_URL}/${locale}/projects/${p.slug}`,
        lastModified: new Date(p.completion_date),
        changeFrequency: 'yearly',
        priority: 0.6,
      });
    });

    // Categories
    getCategories(locale).forEach((c) => {
      entries.push({
        url: `${BASE_URL}/${locale}/categories/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  }

  return entries;
}
