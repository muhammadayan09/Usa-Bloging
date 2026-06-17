/**
 * TypeScript types and interfaces for Blogsterix
 */

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  featuredImage?: any;
  publishedAt: string;
  updatedAt?: string;
  author?: Author;
  category?: Category;
  tags?: Tag[];
  content?: any[];
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  featured?: boolean;
  readingTime?: number;
  affiliateDisclosureEnabled?: boolean;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image?: any;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Tag {
  _id: string;
  title: string;
  slug: { current: string };
}

export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  image?: any;
  bio?: string;
  socialLinks?: SocialLink[];
}

export interface SocialLink {
  platform: "twitter" | "linkedin" | "github" | "website" | "facebook" | "instagram" | "youtube";
  url: string;
}

export interface SiteSettings {
  _id: string;
  siteTitle: string;
  siteDescription: string;
  logo?: any;
  defaultOgImage?: any;
  socialLinks?: SocialLink[];
}

export interface TableOfContentsItem {
  text: string;
  id: string;
  level: number;
}

export interface PortableTextBlock {
  _type: "block" | "image" | "codeBlock";
  _key: string;
  style?: "normal" | "h1" | "h2" | "h3" | "blockquote";
  children?: PortableTextSpan[];
  asset?: any;
  code?: string;
  language?: string;
}

export interface PortableTextSpan {
  _type: "span";
  text: string;
  marks?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SeoMetadataInput {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
}

export interface ArticleSchemaData {
  title: string;
  description: string;
  image?: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  url: string;
}
