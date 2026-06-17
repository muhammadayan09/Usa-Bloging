"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "@/components/Container";
import BlogCard from "@/components/BlogCard";
import SearchBox from "@/components/SearchBox";
import CategoryFilter from "@/components/CategoryFilter";
import { sanityClient } from "@/lib/sanity/client";
import { ALL_CATEGORIES_QUERY, ALL_POSTS_QUERY } from "@/lib/sanity/queries";
import { sampleCategories, samplePosts } from "@/lib/sampleData";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>(samplePosts);
  const [categories, setCategories] = useState<any[]>(sampleCategories);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [postsData, categoriesData] = await Promise.all([
          sanityClient.fetch(ALL_POSTS_QUERY),
          sanityClient.fetch(ALL_CATEGORIES_QUERY),
        ]);

        if (postsData?.length) setPosts(postsData);
        if (categoriesData?.length) setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredPosts = useMemo(() => {
    let nextPosts = posts;

    if (selectedCategory) {
      nextPosts = nextPosts.filter(
        (post) => post.category?.slug?.current === selectedCategory
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      nextPosts = nextPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query)
      );
    }

    return nextPosts;
  }, [posts, selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return (
    <>
      <section className="bg-gray-950 text-white">
        <Container className="grid gap-8 py-14 md:grid-cols-[1fr_0.75fr] md:items-end md:py-18">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
              Blogsterix library
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-white md:text-6xl">
              Guides that help you build, publish, and earn smarter.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
              Browse practical articles about AI tools, blogging strategy, SEO,
              affiliate content, and creator workflows.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <p className="text-3xl font-black text-white">{posts.length}</p>
            <p className="mt-1 text-sm text-gray-300">curated articles ready to read</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded bg-white/10 p-3">SEO</div>
              <div className="rounded bg-white/10 p-3">AI tools</div>
              <div className="rounded bg-white/10 p-3">Money</div>
              <div className="rounded bg-white/10 p-3">Systems</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <div>
                  <h2 className="mb-3 text-lg font-bold text-gray-900">Search articles</h2>
                  <SearchBox
                    placeholder="Try AI, SEO, affiliate..."
                    onSearch={(value) => {
                      setSearchQuery(value);
                      setCurrentPage(1);
                    }}
                  />
                </div>
                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCategory || undefined}
                  onCategoryChange={(slug) => {
                    setSelectedCategory(slug);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="mb-6 flex flex-col justify-between gap-3 rounded-lg bg-gray-50 p-4 md:flex-row md:items-center">
                <p className="font-semibold text-gray-800">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
                </p>
                {loading && <p className="text-sm text-gray-500">Refreshing live content...</p>}
              </div>

              {paginatedPosts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {paginatedPosts.map((post) => (
                      <BlogCard key={post._id} post={post} />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                      <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="rounded border border-gray-300 px-4 py-2 font-semibold hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Previous
                      </button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`rounded px-4 py-2 font-semibold ${
                            currentPage === page
                              ? "bg-secondary text-white"
                              : "border border-gray-300 hover:bg-gray-100"
                          }`}
                        >
                          {page}
                        </button>
                      ))}

                      <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="rounded border border-gray-300 px-4 py-2 font-semibold hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
                  <h2 className="text-2xl font-bold text-gray-900">No articles found</h2>
                  <p className="mt-2 text-gray-600">
                    Try a different search or clear the category filter.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
