import type { MetadataRoute } from "next";
import { sanityClient } from "@/lib/sanity/client";
import {
  ALL_POSTS_QUERY,
  ALL_CATEGORIES_QUERY,
  ALL_TAGS_QUERY,
} from "@/lib/sanity/queries";

async function getSitemapData() {
  try {
    const [posts, categories, tags] = await Promise.all([
      sanityClient.fetch(ALL_POSTS_QUERY),
      sanityClient.fetch(ALL_CATEGORIES_QUERY),
      sanityClient.fetch(ALL_TAGS_QUERY),
    ]);

    return { posts, categories, tags };
  } catch (error) {
    console.error("Error fetching sitemap data:", error);
    return { posts: [], categories: [], tags: [] };
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts, categories, tags } = await getSitemapData();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blogsterix.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/affiliate-disclosure`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Blog posts
  const postUrls: MetadataRoute.Sitemap = (posts || []).map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: post.updatedAt || post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Categories
  const categoryUrls: MetadataRoute.Sitemap = (categories || []).map(
    (category: any) => ({
      url: `${baseUrl}/category/${category.slug.current}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })
  );

  // Tags
  const tagUrls: MetadataRoute.Sitemap = (tags || []).map((tag: any) => ({
    url: `${baseUrl}/tag/${tag.slug.current}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...postUrls, ...categoryUrls, ...tagUrls];
}
