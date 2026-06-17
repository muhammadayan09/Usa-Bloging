import Container from "@/components/Container";
import BlogCard from "@/components/BlogCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { sanityClient } from "@/lib/sanity/client";
import { CATEGORY_BY_SLUG_QUERY, POSTS_BY_CATEGORY_QUERY } from "@/lib/sanity/queries";
import { generateSeoMetadata } from "@/lib/seo";
import { getAbsoluteUrl } from "@/lib/utils";
import { findSampleCategory, samplePosts } from "@/lib/sampleData";
import type { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getCategoryData(slug: string) {
  try {
    const category = await sanityClient.fetch(CATEGORY_BY_SLUG_QUERY, { slug });

    if (category) {
      const posts = await sanityClient.fetch(POSTS_BY_CATEGORY_QUERY, {
        categoryId: category._id,
      });

      return { category, posts: posts || [] };
    }
  } catch (error) {
    console.error("Error fetching category:", error);
  }

  const category = findSampleCategory(slug);
  if (!category) return null;

  return {
    category,
    posts: samplePosts.filter((post) => post.category?.slug.current === slug),
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = await getCategoryData(params.slug);

  if (!data) {
    return {
      title: "Category Not Found",
      description: "The category you're looking for could not be found.",
    };
  }

  const { category } = data;
  const seoTitle = category.seoTitle || category.title;
  const seoDescription = category.seoDescription || category.description;
  const categoryUrl = getAbsoluteUrl(`/category/${category.slug.current}`);
  const metadata = generateSeoMetadata({
    title: seoTitle,
    description: seoDescription,
    canonical: categoryUrl,
  });

  return { title: seoTitle, description: seoDescription, ...metadata };
}

export default async function CategoryPage({ params }: PageProps) {
  const data = await getCategoryData(params.slug);

  if (!data) {
    return (
      <section className="py-20">
        <Container>
          <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
            <h1 className="text-3xl font-black text-gray-950">Category Not Found</h1>
            <p className="mt-2 text-gray-600">Sorry, we could not find this category.</p>
          </div>
        </Container>
      </section>
    );
  }

  const { category, posts } = data;
  const categoryUrl = getAbsoluteUrl(`/category/${category.slug.current}`);
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: category.title, url: categoryUrl },
  ];

  return (
    <>
      <section className="bg-gray-50 py-4">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
      </section>

      <section className="bg-gray-950 text-white">
        <Container className="py-14 md:py-18">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
            Category
          </p>
          <h1 className="mt-3 text-4xl font-black text-white md:text-6xl">
            {category.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            {category.description}
          </p>
          <p className="mt-5 text-sm font-semibold text-sky-100">
            {posts.length} article{posts.length !== 1 ? "s" : ""} in this category
          </p>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post: any) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
              <p className="text-lg text-gray-600">
                No articles found in this category yet.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
