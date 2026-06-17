import type { BlogPost, Category, Tag } from "./types";

const block = (key: string, text: string, style: "normal" | "h2" | "h3" | "blockquote" = "normal") => ({
  _type: "block",
  _key: key,
  style,
  children: [{ _type: "span", text, marks: [] }],
});

export const sampleCategories: Category[] = [
  {
    _id: "cat-ai-tools",
    title: "AI Tools",
    slug: { current: "ai-tools" },
    description: "Practical AI workflows, tool reviews, and beginner-friendly automation ideas.",
  },
  {
    _id: "cat-blogging",
    title: "Blogging",
    slug: { current: "blogging" },
    description: "Content planning, writing systems, SEO basics, and growth playbooks for creators.",
  },
  {
    _id: "cat-seo",
    title: "SEO",
    slug: { current: "seo" },
    description: "Search strategy, keyword research, on-page optimization, and traffic growth.",
  },
  {
    _id: "cat-monetization",
    title: "Monetization",
    slug: { current: "make-money-online" },
    description: "Affiliate content, digital products, email funnels, and smart income systems.",
  },
  {
    _id: "cat-tools",
    title: "Creator Tools",
    slug: { current: "creator-tools" },
    description: "Software stacks that help small teams publish better content faster.",
  },
];

export const sampleTags: Tag[] = [
  { _id: "tag-ai", title: "AI Writing", slug: { current: "ai-writing" } },
  { _id: "tag-seo", title: "SEO", slug: { current: "seo" } },
  { _id: "tag-workflow", title: "Workflow", slug: { current: "workflow" } },
  { _id: "tag-beginner", title: "Beginner Guide", slug: { current: "beginner-guide" } },
];

export const samplePosts: BlogPost[] = [
  {
    _id: "post-ai-blogging-system",
    title: "How to Build a Profitable AI Blogging System in 2026",
    slug: { current: "profitable-ai-blogging-system-2026" },
    excerpt:
      "A complete beginner-friendly system for choosing a niche, planning content, using AI responsibly, publishing faster, and turning traffic into income.",
    publishedAt: "2026-06-17",
    updatedAt: "2026-06-17",
    author: {
      _id: "author-blogsterix",
      name: "Ayan from Blogsterix",
      slug: { current: "ayan" },
      bio: "Creator, SEO learner, and practical AI workflow builder.",
    },
    category: sampleCategories[0],
    tags: sampleTags,
    featured: true,
    readingTime: 9,
    affiliateDisclosureEnabled: true,
    seoTitle: "How to Build a Profitable AI Blogging System in 2026",
    seoDescription:
      "Learn a complete AI blogging workflow for niche selection, SEO, content creation, publishing, email capture, and monetization.",
    content: [
      block(
        "intro",
        "AI blogging is not about pressing one button and hoping Google sends traffic. The creators who win use AI like a research assistant, editor, planner, and productivity partner while keeping the strategy human."
      ),
      block("system", "The 5-part AI blogging system", "h2"),
      block(
        "system-copy",
        "A profitable blog needs five connected pieces: a sharp niche, search-focused topics, useful articles, trust-building design, and a monetization path. If one part is missing, the whole machine feels weak."
      ),
      block("niche", "1. Pick a niche with buyer intent", "h3"),
      block(
        "niche-copy",
        "Do not choose a niche only because it is popular. Choose one where readers are trying to solve expensive or annoying problems. Examples include AI tools for students, WordPress speed, email marketing for creators, and budget software for small businesses."
      ),
      block("research", "2. Use AI for research, not lazy writing", "h3"),
      block(
        "research-copy",
        "Ask AI to map subtopics, compare reader pain points, generate outlines, and find missing angles. Then add your own examples, screenshots, opinions, and testing notes. That human layer is what makes the article worth reading."
      ),
      block(
        "quote",
        "Good AI content still needs taste. The tool can draft words, but you decide what is useful, honest, and worth publishing.",
        "blockquote"
      ),
      block("workflow", "3. Build a repeatable publishing workflow", "h3"),
      block(
        "workflow-copy",
        "Use one template for every article: reader problem, quick answer, step-by-step guide, tool suggestions, common mistakes, FAQ, and next action. Templates help you publish consistently without making every post feel copied."
      ),
      block("money", "4. Monetize after the article earns trust", "h3"),
      block(
        "money-copy",
        "Place affiliate recommendations where they naturally help the reader. Add a disclosure, explain who the tool is best for, and include alternatives. Trust converts better than pressure."
      ),
      block("comments", "5. Invite comments and improve the post", "h3"),
      block(
        "comments-copy",
        "A blog post should not feel dead after publishing. Ask readers what they are building, collect questions, and update the article when a pattern appears. Comments can become future sections, future posts, and better rankings."
      ),
      block("finish", "Final checklist before publishing", "h2"),
      block(
        "finish-copy",
        "Make sure the headline is clear, the intro promises a real outcome, the article has examples, the design is easy to scan, and there is one clear next step for the reader."
      ),
    ],
  },
  {
    _id: "post-keyword-map",
    title: "Simple Keyword Mapping for New Blogs",
    slug: { current: "simple-keyword-mapping-new-blogs" },
    excerpt:
      "Turn messy keyword ideas into a clean publishing calendar with pillar pages, supporting posts, and internal links.",
    publishedAt: "2026-06-12",
    author: { _id: "author-blogsterix", name: "Ayan from Blogsterix", slug: { current: "ayan" } },
    category: sampleCategories[2],
    tags: [sampleTags[1], sampleTags[3]],
    readingTime: 6,
  },
  {
    _id: "post-tool-stack",
    title: "My Favorite Beginner Tool Stack for Content Creators",
    slug: { current: "beginner-tool-stack-content-creators" },
    excerpt:
      "A lean set of tools for writing, design, SEO checks, analytics, newsletters, and publishing without wasting money.",
    publishedAt: "2026-06-08",
    author: { _id: "author-blogsterix", name: "Ayan from Blogsterix", slug: { current: "ayan" } },
    category: sampleCategories[4],
    tags: [sampleTags[2], sampleTags[3]],
    readingTime: 7,
  },
  {
    _id: "post-affiliate-content",
    title: "How to Write Affiliate Content That Feels Helpful",
    slug: { current: "affiliate-content-that-feels-helpful" },
    excerpt:
      "A practical structure for comparison posts, review articles, and recommendation blocks that build trust first.",
    publishedAt: "2026-06-03",
    author: { _id: "author-blogsterix", name: "Ayan from Blogsterix", slug: { current: "ayan" } },
    category: sampleCategories[3],
    tags: [sampleTags[0], sampleTags[1]],
    readingTime: 8,
  },
  {
    _id: "post-ai-prompts",
    title: "15 AI Prompts That Make Blog Planning Easier",
    slug: { current: "ai-prompts-blog-planning" },
    excerpt:
      "Prompt ideas for niche research, headline testing, outline creation, FAQ expansion, and content refreshing.",
    publishedAt: "2026-05-29",
    author: { _id: "author-blogsterix", name: "Ayan from Blogsterix", slug: { current: "ayan" } },
    category: sampleCategories[0],
    tags: [sampleTags[0], sampleTags[2]],
    readingTime: 5,
  },
  {
    _id: "post-first-30-days",
    title: "Your First 30 Days as a Serious Blogger",
    slug: { current: "first-30-days-serious-blogger" },
    excerpt:
      "A calm, focused launch plan for publishing your first posts, setting up analytics, and building momentum.",
    publishedAt: "2026-05-21",
    author: { _id: "author-blogsterix", name: "Ayan from Blogsterix", slug: { current: "ayan" } },
    category: sampleCategories[1],
    tags: [sampleTags[3], sampleTags[2]],
    readingTime: 6,
  },
];

export const sampleComments = [
  {
    name: "Rohit Sharma",
    role: "New blogger",
    date: "June 17, 2026",
    text: "This is exactly the structure I needed. The part about using AI for research instead of lazy writing makes the whole process feel more honest.",
  },
  {
    name: "Nisha Verma",
    role: "Freelance writer",
    date: "June 16, 2026",
    text: "Loved the publishing workflow. I am going to turn the checklist into a Notion template for my next batch of articles.",
  },
  {
    name: "Amit Patel",
    role: "Affiliate marketer",
    date: "June 15, 2026",
    text: "The trust-first affiliate section is gold. So many review posts feel pushy; this gives a much cleaner approach.",
  },
];

export function findSamplePost(slug: string) {
  return samplePosts.find((post) => post.slug.current === slug);
}

export function findSampleCategory(slug: string) {
  return sampleCategories.find((category) => category.slug.current === slug);
}

export function findSampleTag(slug: string) {
  return sampleTags.find((tag) => tag.slug.current === slug);
}
