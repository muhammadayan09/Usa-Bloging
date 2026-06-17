import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import SeoJsonLd from "@/components/SeoJsonLd";
import RelatedPosts from "@/components/RelatedPosts";
import NewsletterBox from "@/components/NewsletterBox";
import { sanityClient } from "@/lib/sanity/client";
import { POST_BY_SLUG_QUERY, RELATED_POSTS_QUERY } from "@/lib/sanity/queries";
import {
  generateArticleSchema,
  generateSeoMetadata,
} from "@/lib/seo";
import { formatDate, getAbsoluteUrl } from "@/lib/utils";
import { urlFor } from "@/lib/sanity/image";
import {
  findSamplePost,
  sampleComments,
  samplePosts,
} from "@/lib/sampleData";
import type { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPostData(slug: string) {
  try {
    const post = await sanityClient.fetch(POST_BY_SLUG_QUERY, { slug });

    if (post) {
      const relatedPosts = await sanityClient.fetch(RELATED_POSTS_QUERY, {
        categoryId: post.category?._id,
        slug,
      });

      return { post, relatedPosts: relatedPosts || [] };
    }
  } catch (error) {
    console.error("Error fetching post:", error);
  }

  const samplePost = findSamplePost(slug) || samplePosts[0];
  const relatedPosts = samplePosts.filter((post) => post._id !== samplePost._id).slice(0, 3);
  return { post: samplePost, relatedPosts };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = await getPostData(params.slug);
  const { post } = data;
  const postUrl = getAbsoluteUrl(`/blog/${post.slug.current}`);
  const seoTitle = post.seoTitle || post.title;
  const seoDescription = post.seoDescription || post.excerpt;

  const metadata = generateSeoMetadata({
    title: seoTitle,
    description: seoDescription,
    canonical: post.canonicalUrl || postUrl,
    ogType: "article",
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    author: post.author?.name,
  });

  return {
    title: seoTitle,
    description: seoDescription,
    ...metadata,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { post, relatedPosts } = await getPostData(params.slug);
  const postUrl = getAbsoluteUrl(`/blog/${post.slug.current}`);
  const imageUrl = post.featuredImage
    ? urlFor(post.featuredImage).width(1200).height(630).url()
    : undefined;

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    image: imageUrl,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    author: post.author?.name,
    url: postUrl,
  });

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: post.category?.title || "Article",
      url: `/category/${post.category?.slug?.current || "ai-tools"}`,
    },
    { name: post.title, url: postUrl },
  ];

  return (
    <>
      <SeoJsonLd schema={articleSchema} />

      <section className="bg-gray-50 py-4">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </section>

      <article>
        <section className="bg-gray-950 text-white">
          <Container className="grid gap-10 py-12 md:grid-cols-[1fr_0.7fr] md:items-center md:py-16">
            <div>
              {post.category && (
                <Link href={`/category/${post.category.slug.current}`}>
                  <span className="inline-flex rounded-full bg-amber-300 px-4 py-2 text-sm font-bold text-gray-950">
                    {post.category.title}
                  </span>
                </Link>
              )}
              <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
                {post.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
                {post.excerpt}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-gray-300">
                {post.author && <span>By {post.author.name}</span>}
                <span>{formatDate(post.publishedAt)}</span>
                {post.readingTime && <span>{post.readingTime} min read</span>}
                {post.updatedAt && <span>Updated {formatDate(post.updatedAt)}</span>}
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-sky-900 via-gray-900 to-amber-600 shadow-2xl">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 p-6">
                  <div className="flex h-full flex-col justify-between rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                    <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-900">
                      COMPLETE GUIDE
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-sky-100">
                        AI Blogging System
                      </p>
                      <p className="mt-3 text-3xl font-black leading-tight text-white">
                        Research, write, publish, improve.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </section>

        <section className="py-12 md:py-16">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
              <div className="min-w-0">
                {post.affiliateDisclosureEnabled && <AffiliateDisclosure />}

                <div className="mt-8 rounded-lg border border-gray-200 bg-white p-5 shadow-sm md:p-8">
                  <PortableTextRenderer content={post.content} />
                </div>

                {post.tags && post.tags.length > 0 && (
                  <div className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
                    <h2 className="mb-4 text-xl font-bold text-gray-900">Tags</h2>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: any) => (
                        <Link
                          key={tag._id}
                          href={`/tag/${tag.slug.current}`}
                          className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-sky-50 hover:text-secondary"
                        >
                          {tag.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <section className="mt-10 rounded-lg border border-gray-200 bg-white p-5 shadow-sm md:p-8">
                  <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row md:items-end">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-secondary">
                        Reader discussion
                      </p>
                      <h2 className="mt-2 text-3xl font-black text-gray-950">
                        Comments
                      </h2>
                    </div>
                    <span className="text-sm font-semibold text-gray-500">
                      {sampleComments.length} comments
                    </span>
                  </div>

                  <div className="space-y-4">
                    {sampleComments.map((comment) => (
                      <div key={comment.name} className="rounded-lg bg-gray-50 p-5">
                        <div className="mb-3 flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-base font-bold text-gray-950">
                              {comment.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {comment.role} - {comment.date}
                            </p>
                          </div>
                          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-secondary">
                            Verified
                          </span>
                        </div>
                        <p className="leading-7 text-gray-700">{comment.text}</p>
                      </div>
                    ))}
                  </div>

                  <form className="mt-6 grid gap-4 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-5">
                    <h3 className="text-xl font-bold text-gray-950">Add a comment</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        className="rounded border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Your name"
                      />
                      <input
                        className="rounded border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Your email"
                        type="email"
                      />
                    </div>
                    <textarea
                      className="min-h-32 rounded border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Share your question or experience..."
                    />
                    <button
                      type="button"
                      className="w-fit rounded bg-secondary px-6 py-3 font-semibold text-white hover:bg-blue-600"
                    >
                      Post Comment
                    </button>
                  </form>
                </section>

                  {/* FAQ & Contact */}
                  <section className="mt-10 rounded-lg border border-gray-200 bg-white p-5 shadow-sm md:p-8">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                      <details className="rounded-lg bg-gray-50 p-4">
                        <summary className="cursor-pointer font-semibold">Who is this guide for?</summary>
                        <p className="mt-2 text-gray-700">This guide is for new creators and bloggers who want a practical, repeatable system for planning, writing, and growing with AI and SEO.</p>
                      </details>

                      <details className="rounded-lg bg-gray-50 p-4">
                        <summary className="cursor-pointer font-semibold">How often is content updated?</summary>
                        <p className="mt-2 text-gray-700">We update flagship guides periodically — check the "Last updated" date at the top of the page for the latest revision.</p>
                      </details>

                      <details className="rounded-lg bg-gray-50 p-4">
                        <summary className="cursor-pointer font-semibold">Can I request a topic?</summary>
                        <p className="mt-2 text-gray-700">Yes — use the contact link below or subscribe to the weekly brief and reply to the confirmation email with your suggestion.</p>
                      </details>

                      <div className="mt-4 rounded-lg border border-dashed border-gray-200 bg-white p-4">
                        <h3 className="text-lg font-bold text-gray-900">Contact the author</h3>
                        <p className="mt-2 text-sm text-gray-700">Questions, suggestions, or topic requests? Email directly:</p>
                        <a className="mt-3 inline-block rounded bg-secondary px-4 py-2 font-semibold text-white" href="mailto:iamayan469@gmail.com?subject=Blog%20Question">Email Ayan</a>
                      </div>
                    </div>
                  </section>
              </div>

              <aside className="space-y-5">
                <div className="sticky top-24 rounded-lg border border-gray-200 bg-gray-50 p-5">
                  <h2 className="text-xl font-bold text-gray-950">In this guide</h2>
                  <div className="mt-4 space-y-3 text-sm font-medium text-gray-600">
                    <p>1. Pick a niche with buyer intent</p>
                    <p>2. Use AI for research</p>
                    <p>3. Build a publishing workflow</p>
                    <p>4. Monetize after trust</p>
                    <p>5. Improve from comments</p>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-12 md:py-16">
          <Container>
            <RelatedPosts posts={relatedPosts} />
          </Container>
        </section>
      )}

      <section className="py-12">
        <Container>
          <NewsletterBox />
        </Container>
      </section>
    </>
  );
}
