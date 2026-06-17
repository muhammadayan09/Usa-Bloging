export interface SeoMetadata {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
}

export function generateSeoMetadata(meta: SeoMetadata) {
  return {
    title: meta.title,
    description: meta.description,
    canonical: meta.canonical,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: meta.ogType || "website",
      images: meta.ogImage ? [{ url: meta.ogImage, width: 1200, height: 630 }] : [],
      publishedTime: meta.publishedAt,
      modifiedTime: meta.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: meta.ogImage ? [meta.ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

export function generateArticleSchema(data: {
  title: string;
  description: string;
  image?: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: data.title,
    description: data.description,
    image: data.image || "",
    datePublished: data.publishedAt,
    dateModified: data.updatedAt || data.publishedAt,
    author: {
      "@type": "Person",
      name: data.author || "Blogsterix",
    },
    publisher: {
      "@type": "Organization",
      name: "Blogsterix",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": data.url,
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Blogsterix",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
    description:
      "Smart Blogging, AI Tools & Tech Guides for Beginners",
    sameAs: [
      "https://twitter.com/blogsterix",
      "https://facebook.com/blogsterix",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    name: "Blogsterix",
    description:
      "Smart Blogging, AI Tools & Tech Guides for Beginners",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL}/search?q={search_term_string}`,
      },
      query_input: "required name=search_term_string",
    },
  };
}
