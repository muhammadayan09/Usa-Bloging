# Blogsterix - Smart Blogging, AI Tools & Tech Guides

A modern, SEO-friendly blogging platform built with **Next.js 15**, **React**, **TypeScript**, **Tailwind CSS**, and **Sanity CMS**. Designed for bloggers, content creators, and entrepreneurs building online businesses.

## Features

✨ **Modern Stack**
- Next.js 15 App Router
- React 19 with Server Components
- TypeScript for type safety
- Tailwind CSS for responsive design

📝 **Content Management**
- Sanity CMS for flexible content management
- Structured blog posts, categories, authors, and tags
- Portable Text editor for rich content
- SEO metadata fields built-in

🔍 **SEO Optimized**
- Dynamic metadata for all pages
- Article schema JSON-LD
- Organization and Website schema
- Breadcrumb navigation with schema
- Dynamic sitemap and robots.txt
- Semantic HTML structure

📱 **Responsive & Fast**
- Mobile-first design
- Image optimization with Next.js Image
- Fast loading performance
- Clean, professional UI/UX

💰 **Monetization Ready**
- AdSense-friendly layout with ad placeholders
- Affiliate disclosure component
- Built-in affiliate link management
- Newsletter subscription support

🛠️ **Developer Experience**
- Full TypeScript support
- Reusable component library
- Clean folder structure
- Environment variable configuration
- Production-ready code

## Project Structure

```
blogsterix/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── blog/
│   │   ├── page.tsx            # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx        # Single blog post page
│   ├── category/
│   │   └── [slug]/
│   │       └── page.tsx        # Category page
│   ├── tag/
│   │   └── [slug]/
│   │       └── page.tsx        # Tag page
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── resources/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── disclaimer/page.tsx
│   ├── affiliate-disclosure/page.tsx
│   ├── terms-and-conditions/page.tsx
│   ├── robots.ts               # Dynamic robots.txt
│   └── sitemap.ts              # Dynamic sitemap
├── components/
│   ├── Header.tsx              # Main navigation
│   ├── Footer.tsx              # Footer with links
│   ├── MobileMenu.tsx
│   ├── BlogCard.tsx            # Blog post card
│   ├── FeaturedPostCard.tsx    # Featured post display
│   ├── CategoryCard.tsx
│   ├── Container.tsx           # Layout wrapper
│   ├── Button.tsx              # Reusable button
│   ├── NewsletterBox.tsx       # Email signup
│   ├── AffiliateDisclosure.tsx
│   ├── TableOfContents.tsx
│   ├── RelatedPosts.tsx
│   ├── Breadcrumbs.tsx
│   ├── AdPlaceholder.tsx       # AdSense placeholder
│   ├── PortableTextRenderer.tsx # Sanity rich text
│   ├── SearchBox.tsx
│   ├── CategoryFilter.tsx
│   └── SeoJsonLd.tsx
├── lib/
│   ├── sanity/
│   │   ├── client.ts           # Sanity client setup
│   │   ├── queries.ts          # GROQ queries
│   │   └── image.ts            # Image utilities
│   ├── seo.ts                  # SEO helpers
│   └── utils.ts                # General utilities
├── sanity/
│   └── schemas/
│       ├── post.ts             # Blog post schema
│       ├── category.ts         # Category schema
│       ├── tag.ts              # Tag schema
│       ├── author.ts           # Author schema
│       ├── siteSettings.ts     # Site config schema
│       └── index.ts
├── public/
│   └── favicon.ico
├── .env.local.example          # Environment variables template
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
├── package.json
└── README.md
```

## Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager
- Sanity account (free at sanity.io)

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Set Up Sanity CMS

1. **Create a Sanity account** at [sanity.io](https://www.sanity.io)
2. **Create a new project** and dataset
3. **Note your Project ID and Dataset**

### 3. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

2. Fill in your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_READ_TOKEN=your_read_token_here
NEXT_PUBLIC_SITE_URL=https://blogsterix.com
```

**How to get your tokens:**
- Project ID: Found in Sanity project settings
- Read Token: Generate in Sanity's API dashboard (Tokens section)
- For local development, you can use a public token, but for production use a restricted read token

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

### 5. Set Up Sanity Studio (Optional)

To manage content with Sanity Studio, you'll need to:

1. Install Sanity CLI globally:

```bash
npm i -g @sanity/cli
```

2. Initialize Sanity in your project:

```bash
sanity init
```

3. Run Sanity Studio locally:

```bash
sanity start
```

Studio will be available at http://localhost:3333

## Creating Content

### 1. Create a Site Settings Document

In Sanity Studio, create a single document of type "Site Settings" with:
- Site Title: "Blogsterix"
- Site Description: "Smart Blogging, AI Tools & Tech Guides for Beginners"
- Logo and default Open Graph image
- Social media links

### 2. Create Authors

Create author documents with:
- Name
- Slug (auto-generated)
- Profile image
- Bio
- Social links

### 3. Create Categories

Create category documents for:
- AI Tools
- Blogging
- Software Reviews
- Web Hosting
- Make Money Online

### 4. Create Tags

Create relevant tags for your content.

### 5. Create Blog Posts

Create blog posts with:
- Title, slug (auto-generated), excerpt
- Featured image
- Author and category (required)
- Tags
- Rich content using Portable Text blocks
- SEO title and description (optional - uses title/excerpt as fallback)
- Mark as featured if desired
- Enable affiliate disclosure if needed

## Customization

### Colors

Edit `tailwind.config.ts` to customize colors:

```typescript
colors: {
  primary: "#1F2937",
  secondary: "#0EA5E9",
  accent: "#F59E0B",
}
```

### Branding

Update in `app/layout.tsx`:
- Site title and description
- Social links
- Logo image
- Google verification code

### Navigation

Update navbar links in `components/Header.tsx` and footer in `components/Footer.tsx`.

## Google AdSense Setup

1. **Create ad placeholders** are already in place in:
   - Blog post pages (top and bottom)
   - Homepage

2. **To enable AdSense:**
   - Get your AdSense publisher ID
   - Replace ad placeholders in `components/AdPlaceholder.tsx` with actual AdSense code
   - Use data attributes for responsive ads
   - Ensure Google's ad script is loaded in `app/layout.tsx`

## Google Search Console

1. Add your site to Google Search Console
2. Add your `public/robots.txt` URL
3. Submit dynamic sitemap: `https://yourdomain.com/sitemap.xml`
4. Monitor indexing and search performance

## Deployment

### Vercel (Recommended)

1. Push code to GitHub

2. Connect to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Add environment variables
   - Deploy

3. Configure custom domain:
   - Add your blogsterix.com domain in Vercel settings

### Other Platforms

Works with Netlify, AWS Amplify, etc. Ensure Node.js 18+ is used.

## Analytics Setup

### Google Analytics

1. Create a Google Analytics 4 property
2. Get your Measurement ID
3. Add to `app/layout.tsx`:

```typescript
<script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}></script>
```

### Other Services

- Vercel Web Analytics
- Plausible Analytics
- Simple Analytics

## Email Marketing Integration

To connect email newsletters, integrate with:
- ConvertKit
- Mailchimp
- SendGrid
- Klaviyo

Update the NewsletterBox component in `components/NewsletterBox.tsx`.

## SEO Best Practices

✓ All pages have proper metadata
✓ JSON-LD structured data
✓ Mobile responsive design
✓ Fast loading (optimized images)
✓ Semantic HTML structure
✓ Internal linking
✓ Proper heading hierarchy
✓ Image alt text
✓ XML sitemap and robots.txt

## Performance Optimization

- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **CSS**: Tailwind CSS with purging
- **Caching**: Set in Next.js config
- **API**: Sanity CDN enabled

## Building for Production

```bash
npm run build
npm start
```

## Troubleshooting

### Sanity Connection Issues
- Verify NEXT_PUBLIC_SANITY_PROJECT_ID is correct
- Check SANITY_API_READ_TOKEN has read access
- Ensure dataset is published

### Images Not Loading
- Verify image is published in Sanity
- Check Sanity project allows CDN access
- Verify CORS settings in Sanity

### Pages Not Showing
- Check if content is published in Sanity
- Verify slug format (lowercase, hyphens)
- Rebuild site if needed: `npm run build`

## Content Recommendations

### For Best Results

**Blog Posts:**
- Aim for 1500+ words for SEO value
- Include multiple headings (H2, H3)
- Add featured images (1200x630px)
- Include internal links
- Add relevant tags and categories

**Frequency:**
- Post at least 2-4 times per month
- Maintain consistency for Google ranking

**Topics:**
- Focus on beginner-friendly content
- Target long-tail keywords
- Answer common questions
- Create comprehensive guides

## API Reference

### Sanity Queries

Available queries in `lib/sanity/queries.ts`:

- `ALL_POSTS_QUERY` - All blog posts
- `POST_BY_SLUG_QUERY` - Single post details
- `POSTS_BY_CATEGORY_QUERY` - Posts in category
- `POSTS_BY_TAG_QUERY` - Posts with tag
- `ALL_CATEGORIES_QUERY` - All categories
- `ALL_TAGS_QUERY` - All tags
- `SITE_SETTINGS_QUERY` - Global site settings

### Utility Functions

In `lib/utils.ts`:

- `formatDate()` - Format date strings
- `calculateReadingTime()` - Estimate reading time
- `generateTableOfContents()` - Extract headings
- `slugify()` - Create URL slugs
- `truncate()` - Shorten text
- `getAbsoluteUrl()` - Create absolute URLs

## Support & Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Sanity Docs:** https://www.sanity.io/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs

## License

This project is provided as-is for your blogging needs.

## Getting Help

For issues or questions:
- Check the GitHub issues section
- Review the Sanity documentation
- Contact: contact@blogsterix.com

---

**Ready to start blogging?** Follow the installation steps above and begin creating amazing content! 🚀
