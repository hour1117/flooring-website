// Multilingual field: each locale has its own value
export type Locale = 'en' | 'ru' | 'zh' | 'es' | 'fr' | 'pt';
export const locales: Locale[] = ['en', 'ru', 'zh', 'es', 'fr', 'pt'];
export const defaultLocale: Locale = 'en';

export interface LocalizedString {
  en: string;
  ru: string;
  zh: string;
  es: string;
  fr: string;
  pt: string;
}

// Product category
export interface Category {
  slug: string;
  title: LocalizedString;
  icon?: string;
  description?: LocalizedString;
  order: number;
}

// Product
export interface ProductSpec {
  name: LocalizedString;
  value: LocalizedString;
}

export interface Product {
  slug: string;
  title: LocalizedString;
  category: string;
  subcategory?: LocalizedString;
  featured_image: string;
  gallery: string[];
  short_description: LocalizedString;
  body: LocalizedString;
  specs: ProductSpec[];
  pdf_spec?: string;
  video_url?: string;
  related_products?: string[];
  is_featured: boolean;
  seo_title?: LocalizedString;
  seo_description?: LocalizedString;
}

// Blog post
export interface BlogPost {
  slug: string;
  title: LocalizedString;
  author: string;
  date: string;
  featured_image: string;
  excerpt: LocalizedString;
  body: LocalizedString;
  category: string;
  tags: string[];
  seo_title?: LocalizedString;
  seo_description?: LocalizedString;
}

// Project case
export interface Project {
  slug: string;
  title: LocalizedString;
  location: string;
  completion_date: string;
  featured_image: string;
  gallery: string[];
  body: LocalizedString;
  products_used?: string[];
}

// Certificate
export interface Certificate {
  name: string;
  image: string;
  issuer?: string;
  order: number;
}

// Site settings
export interface SiteSettings {
  site_title: LocalizedString;
  site_description: LocalizedString;
  company_name: LocalizedString;
  email: string;
  phone: string;
  whatsapp: string;
  address: LocalizedString;
  maps_embed_url?: string;
  social: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    vk?: string;
    linkedin?: string;
    youtube?: string;
  };
  ga_id?: string;
}
