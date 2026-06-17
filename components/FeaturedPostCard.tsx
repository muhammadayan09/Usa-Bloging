import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { urlFor } from "@/lib/sanity/image";

interface FeaturedPostCardProps {
  post: {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt: string;
    featuredImage?: any;
    publishedAt: string;
    author?: { name: string };
    category?: { title: string; slug: { current: string } };
    readingTime?: number;
  };
}

export default function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-gray-950 via-sky-900 to-amber-600">
          {post.featuredImage ? (
            <Image
              src={urlFor(post.featuredImage).width(600).height(400).url()}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 p-8 text-white">
              <div className="flex h-full flex-col justify-between rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-900">
                  FEATURED GUIDE
                </span>
                <div>
                  <p className="mb-3 text-sm uppercase tracking-widest text-sky-100">
                    Blogsterix Playbook
                  </p>
                  <p className="text-3xl font-black leading-tight">
                    Build a smarter blog with AI, SEO, and trust.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between p-6 md:p-8">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                FEATURED
              </span>
              {post.category && (
                <Link href={`/category/${post.category.slug.current}`}>
                  <span className="text-xs font-bold text-secondary transition-colors hover:text-blue-600">
                    {post.category.title}
                  </span>
                </Link>
              )}
            </div>

            <h2 className="mb-4 text-2xl font-black leading-tight transition-colors hover:text-secondary md:text-4xl">
              <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
            </h2>

            <p className="mb-5 text-base leading-7 text-gray-600">{post.excerpt}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t border-gray-100 pt-5 text-sm text-gray-500">
            <span>{formatDate(post.publishedAt)}</span>
            {post.author && <span>By {post.author.name}</span>}
            {post.readingTime && <span>{post.readingTime} min read</span>}
          </div>

          <Link
            href={`/blog/${post.slug.current}`}
            className="mt-6 inline-flex w-fit rounded bg-secondary px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Read Full Article <span className="ml-2">-&gt;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
