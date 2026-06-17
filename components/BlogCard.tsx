import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { urlFor } from "@/lib/sanity/image";

interface BlogCardProps {
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

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-sky-100 via-white to-amber-100">
        {post.featuredImage ? (
          <Image
            src={urlFor(post.featuredImage).width(500).height(300).url()}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 p-5">
            <div className="flex h-full flex-col justify-between rounded-lg border border-white/70 bg-white/45 p-4 backdrop-blur-sm">
              <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-sky-700 shadow-sm">
                {post.category?.title || "Blogsterix"}
              </span>
              <div>
                <div className="mb-2 h-2 w-16 rounded-full bg-amber-400" />
                <p className="text-lg font-bold leading-tight text-gray-900">
                  Smart blogging, made practical
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex min-h-[270px] flex-col p-5">
        {post.category && (
          <Link href={`/category/${post.category.slug.current}`}>
            <span className="mb-3 inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700 ring-1 ring-sky-100 transition-colors hover:bg-sky-100">
              {post.category.title}
            </span>
          </Link>
        )}

        <h2 className="mb-2 line-clamp-2 text-xl font-bold leading-snug transition-colors group-hover:text-secondary">
          <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
        </h2>

        <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {post.excerpt}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4 text-xs text-gray-500">
          <span>{formatDate(post.publishedAt)}</span>
          {post.author && <span>By {post.author.name}</span>}
          {post.readingTime && <span>{post.readingTime} min read</span>}
        </div>

        <Link
          href={`/blog/${post.slug.current}`}
          className="mt-4 inline-flex items-center font-semibold text-secondary transition-colors hover:text-blue-600"
        >
          Read More <span className="ml-2">-&gt;</span>
        </Link>
      </div>
    </article>
  );
}
