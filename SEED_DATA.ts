/**
 * Sample Seed Data for Blogsterix
 * 
 * Instructions for importing sample data:
 * 1. Go to Sanity Studio (or create documents manually)
 * 2. Use this file as reference for creating initial content
 * 3. Or use Sanity CLI to import: sanity dataset import <filename>
 * 
 * Note: This file shows the structure; images and references will need
 * to be created in Sanity first before importing.
 */

export const sampleAuthor = {
  _type: 'author',
  name: 'John Doe',
  slug: {
    _type: 'slug',
    current: 'john-doe',
  },
  bio: 'Tech blogger and AI enthusiast helping beginners build online businesses.',
  socialLinks: [
    {
      platform: 'twitter',
      url: 'https://twitter.com/johndoe',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/johndoe',
    },
  ],
};

export const sampleCategories = [
  {
    _type: 'category',
    title: 'AI Tools',
    slug: {
      _type: 'slug',
      current: 'ai-tools',
    },
    description:
      'Discover the best AI tools for blogging, productivity, content creation, SEO, and online business.',
  },
  {
    _type: 'category',
    title: 'Blogging',
    slug: {
      _type: 'slug',
      current: 'blogging',
    },
    description:
      'Simple blogging guides, SEO tips, content writing strategies, and growth tips for beginners.',
  },
  {
    _type: 'category',
    title: 'Software Reviews',
    slug: {
      _type: 'slug',
      current: 'software-reviews',
    },
    description:
      'Honest software reviews, comparisons, alternatives, and tool recommendations.',
  },
  {
    _type: 'category',
    title: 'Web Hosting',
    slug: {
      _type: 'slug',
      current: 'web-hosting',
    },
    description:
      'Web hosting guides, reviews, comparisons, and beginner-friendly hosting recommendations.',
  },
  {
    _type: 'category',
    title: 'Make Money Online',
    slug: {
      _type: 'slug',
      current: 'make-money-online',
    },
    description:
      'Practical guides about affiliate marketing, blogging income, online business, and monetization.',
  },
];

export const sampleTags = [
  { _type: 'tag', title: 'AI Tools', slug: { _type: 'slug', current: 'ai-tools' } },
  { _type: 'tag', title: 'Blogging', slug: { _type: 'slug', current: 'blogging' } },
  { _type: 'tag', title: 'SEO', slug: { _type: 'slug', current: 'seo' } },
  { _type: 'tag', title: 'Content Writing', slug: { _type: 'slug', current: 'content-writing' } },
  { _type: 'tag', title: 'Productivity', slug: { _type: 'slug', current: 'productivity' } },
  { _type: 'tag', title: 'Web Hosting', slug: { _type: 'slug', current: 'web-hosting' } },
  { _type: 'tag', title: 'Monetization', slug: { _type: 'slug', current: 'monetization' } },
];

export const sampleSiteSettings = {
  _type: 'siteSettings',
  siteTitle: 'Blogsterix - Smart Blogging, AI Tools & Tech Guides for Beginners',
  siteDescription:
    'Discover the best AI tools, blogging strategies, and tech guides for beginners. Learn how to grow your blog, make money online, and master AI tools.',
  socialLinks: [
    {
      platform: 'twitter',
      url: 'https://twitter.com/blogsterix',
    },
    {
      platform: 'facebook',
      url: 'https://facebook.com/blogsterix',
    },
  ],
};

/**
 * Sample Blog Post
 * 
 * Note: In your actual Sanity project, you'll create documents with:
 * - Real featured images (uploaded to Sanity)
 * - Real author references (created first)
 * - Real category references (created first)
 * - Real tag references (created first)
 * - Rich content using Portable Text blocks
 */
export const sampleBlogPost = {
  _type: 'post',
  title: 'Best AI Tools for Bloggers in 2025: Top Tools to Write, Rank, and Grow Faster',
  slug: {
    _type: 'slug',
    current: 'best-ai-tools-for-bloggers',
  },
  excerpt:
    'Discover the best AI tools for bloggers in 2025 to write better content, improve SEO, create images, research keywords, and grow your blog faster.',
  seoTitle: 'Best AI Tools for Bloggers in 2025: Write & Rank Faster',
  seoDescription:
    'Explore the best AI tools for bloggers in 2025, including AI writing tools, SEO tools, image generators, keyword research tools, and productivity apps.',
  publishedAt: new Date().toISOString(),
  featured: true,
  affiliateDisclosureEnabled: true,
  content: [
    {
      _type: 'block',
      style: 'normal',
      _key: 'intro',
      children: [
        {
          _type: 'span',
          text: 'Artificial Intelligence is transforming the way bloggers create content, optimize for search engines, and grow their audience. In 2025, using AI tools is no longer optional—it\'s essential for staying competitive.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      _key: 'heading1',
      children: [
        {
          _type: 'span',
          text: 'Why Bloggers Should Use AI Tools',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      _key: 'paragraph1',
      children: [
        {
          _type: 'span',
          text: 'AI tools help you work smarter, not harder. They can assist with content creation, research, optimization, and design—freeing up time to focus on strategy and growth.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      _key: 'heading2',
      children: [
        {
          _type: 'span',
          text: 'Best AI Writing Tools for Bloggers',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      _key: 'heading3',
      children: [
        {
          _type: 'span',
          text: 'ChatGPT',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      _key: 'paragraph2',
      children: [
        {
          _type: 'span',
          text: 'ChatGPT is a versatile AI assistant that can help with brainstorming, outlining, writing, and editing. It\'s perfect for overcoming writer\'s block and generating ideas for blog topics.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      _key: 'features',
      children: [
        {
          _type: 'span',
          text: 'Key features:',
          marks: ['strong'],
        },
      ],
    },
    {
      _type: 'block',
      style: 'bullet',
      _key: 'bullet1',
      children: [
        {
          _type: 'span',
          text: 'Real-time conversation and refinement',
        },
      ],
    },
    {
      _type: 'block',
      style: 'bullet',
      _key: 'bullet2',
      children: [
        {
          _type: 'span',
          text: 'Content generation and brainstorming',
        },
      ],
    },
    {
      _type: 'block',
      style: 'bullet',
      _key: 'bullet3',
      children: [
        {
          _type: 'span',
          text: 'Code assistance and technical writing',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      _key: 'closing',
      children: [
        {
          _type: 'span',
          text: 'AI tools are becoming increasingly powerful and accessible. Whether you choose ChatGPT, specialized writing tools, or a combination of different services, the key is to experiment and find what works best for your workflow.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      _key: 'conclusion',
      children: [
        {
          _type: 'span',
          text: 'Conclusion',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      _key: 'final',
      children: [
        {
          _type: 'span',
          text: 'The future of blogging is AI-powered. Start exploring these tools today and see how they can transform your content creation process.',
        },
      ],
    },
  ],
  // Note: In actual implementation, reference IDs for author, category, and tags:
  // author: { _type: 'reference', _ref: 'author-document-id' },
  // category: { _type: 'reference', _ref: 'category-document-id' },
  // tags: [{ _type: 'reference', _ref: 'tag-document-id' }],
};

/**
 * How to use this seed data:
 * 
 * 1. Manually create documents in Sanity Studio
 * 2. OR use the Sanity CLI to import a JSON file with these structures
 * 3. OR use a script with the Sanity client to programmatically create documents
 * 
 * Important notes:
 * - Upload images first, then reference their asset IDs in image fields
 * - Create authors, categories, and tags before creating posts
 * - Use correct document ID formats when creating references
 * - Publish all documents when ready to make them visible
 */
