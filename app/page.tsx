import Link from "next/link";
import Container from "@/components/Container";
import FeaturedPostCard from "@/components/FeaturedPostCard";
import BlogCard from "@/components/BlogCard";
import NewsletterBox from "@/components/NewsletterBox";
import Button from "@/components/Button";
import { sanityClient } from "@/lib/sanity/client";
import { ALL_CATEGORIES_QUERY, ALL_POSTS_QUERY } from "@/lib/sanity/queries";
import { sampleCategories, samplePosts } from "@/lib/sampleData";

async function getHomePageData() {
  try {
    const [posts, categories] = await Promise.all([
      sanityClient.fetch(ALL_POSTS_QUERY),
      sanityClient.fetch(ALL_CATEGORIES_QUERY),
    ]);

    return {
      posts: posts?.length ? posts : samplePosts,
      categories: categories?.length ? categories : sampleCategories,
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return { posts: samplePosts, categories: sampleCategories };
  }
}

const stats = [
  { value: "6", label: "core content systems" },
  { value: "30+", label: "blog ideas to launch" },
  { value: "1 hr", label: "weekly workflow plan" },
];

const processSteps = [
  {
    title: "Find the angle",
    text: "Choose topics with real reader pain, search intent, and monetization potential.",
  },
  {
    title: "Draft with structure",
    text: "Use AI for outlines, research questions, and clarity while keeping your voice in the article.",
  },
  {
    title: "Publish with trust",
    text: "Add examples, disclosures, internal links, comments, and a clear next step.",
  },
];

export default async function Home() {
  const { posts, categories } = await getHomePageData();
  const featuredPost = posts.find((p: any) => p.featured) || posts[0];
  const latestPosts = posts.slice(1, 7);

  return (
    <>
      <section className="overflow-hidden bg-white">
        <Container className="grid gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              AI tools, SEO, and blogging systems for beginners
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-gray-950 md:text-6xl">
              Build a blog that looks useful, earns trust, and grows with AI.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Blogsterix helps new creators plan smarter content, write better
              guides, choose useful tools, and turn their blog into a serious
              online asset.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/blog" size="lg">
                Read the Blog
              </Button>
              <Button href="/resources" variant="outline" size="lg">
                Explore Tools
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-lg">
            <div className="rounded-lg bg-gradient-to-br from-amber-50 via-white to-sky-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
                Today&apos;s creator stack
              </p>
              <div className="mt-6 space-y-3">
                {["Niche research", "AI-assisted outlines", "SEO checklist", "Affiliate trust blocks"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-4 py-3"
                    >
                      <span className="font-semibold text-gray-900">{item}</span>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
                        0{index + 1}
                      </span>
                    </div>
                  )
                )}
              </div>
              <p className="mt-6 text-sm leading-6 text-gray-700">
                A clean workflow beats random posting. Start with one useful
                system, then improve it every week.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <Container className="grid gap-4 py-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg bg-white p-5 shadow-sm">
              <p className="text-3xl font-black text-gray-950">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-600">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {featuredPost && (
        <section className="py-14 md:py-18">
          <Container>
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-secondary">
                  Start here
                </p>
                <h2 className="mt-2 text-3xl font-black text-gray-950 md:text-4xl">
                  Featured blogging playbook
                </h2>
              </div>
              <Link href="/blog" className="font-semibold text-secondary hover:text-blue-600">
                View all articles -&gt;
              </Link>
            </div>
            <FeaturedPostCard post={featuredPost} />
          </Container>
        </section>
      )}

      <section className="py-14 md:py-18 bg-white">
        <Container>
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
              Explore topics
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Everything a new creator needs in one place.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {categories.slice(0, 5).map((category: any) => (
              <Link
                key={category._id}
                href={`/category/${category.slug.current}`}
                className="group rounded-lg border border-gray-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-500">{category.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-18">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-secondary">
                Simple process
              </p>
              <h2 className="mt-2 text-3xl font-black text-gray-950 md:text-4xl">
                From idea to polished post without confusion.
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Use this site as a practical map: pick a topic, follow a
                repeatable writing system, add monetization carefully, then
                improve using reader questions.
              </p>
            </div>
            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 font-black text-secondary">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-950">{step.title}</h3>
                      <p className="mt-2 leading-7 text-gray-600">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-14 md:py-18">
        <Container>
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-secondary">
                Fresh reads
              </p>
              <h2 className="mt-2 text-3xl font-black text-gray-950 md:text-4xl">
                Latest guides and tool ideas
              </h2>
            </div>
            <Link href="/blog" className="font-semibold text-secondary hover:text-blue-600">
              Browse blog -&gt;
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post: any) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </Container>
      </section>
      {/* Improved Hero right card: switch to light premium style */}

      <section className="py-14 md:py-18">
        <Container>
          <NewsletterBox />
        </Container>
      </section>
    </>
  );
}
