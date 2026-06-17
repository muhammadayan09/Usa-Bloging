import Container from "@/components/Container";
import BlogCard from "@/components/BlogCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { sanityClient } from "@/lib/sanity/client";
import { POSTS_BY_TAG_QUERY, TAG_BY_SLUG_QUERY } from "@/lib/sanity/queries";
import { generateSeoMetadata } from "@/lib/seo";
import { getAbsoluteUrl } from "@/lib/utils";
import { findSampleTag, samplePosts } from "@/lib/sampleData";
import type { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getTagData(slug: string) {
  try {
    const tag = await sanityClient.fetch(TAG_BY_SLUG_QUERY, { slug });

    if (tag) {
      const posts = await sanityClient.fetch(POSTS_BY_TAG_QUERY, {
        tagId: tag._id,
      });

      return { tag, posts: posts || [] };
    }
  } catch (error) {
    console.error("Error fetching tag:", error);
  }

  const tag = findSampleTag(slug);
  if (!tag) return null;

  return {
    tag,
    posts: samplePosts.filter((post) =>
      post.tags?.some((postTag) => postTag.slug.current === slug)
    ),
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = await getTagData(params.slug);

  if (!data) {
    return {
      title: "Tag Not Found",
      description: "The tag you're looking for could not be found.",
    };
  }

  const { tag } = data;
  const tagUrl = getAbsoluteUrl(`/tag/${tag.slug.current}`);
  const metadata = generateSeoMetadata({
    title: `Articles tagged "${tag.title}"`,
    description: `Explore all articles tagged with ${tag.title}`,
    canonical: tagUrl,
  });

  return {
    title: `Articles tagged "${tag.title}"`,
    description: `Explore all articles tagged with ${tag.title}`,
    ...metadata,
  };
}

export default async function TagPage({ params }: PageProps) {
  const data = await getTagData(params.slug);

  if (!data) {
    return (
      <section className="py-20">
        <Container>
          <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
            <h1 className="text-3xl font-black text-gray-950">Tag Not Found</h1>
            <p className="mt-2 text-gray-600">Sorry, we could not find this tag.</p>
          </div>
        </Container>
      </section>
    );
  }

  const { tag, posts } = data;
  const tagUrl = getAbsoluteUrl(`/tag/${tag.slug.current}`);
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: `Tag: ${tag.title}`, url: tagUrl },
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
            Tag
          </p>
          <h1 className="mt-3 text-4xl font-black text-white md:text-6xl">
            {tag.title}
          </h1>
          <p className="mt-5 text-lg text-gray-300">
            {posts.length} article{posts.length !== 1 ? "s" : ""} found
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
              <p className="text-lg text-gray-600">No articles found with this tag.</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
