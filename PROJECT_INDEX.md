# Blogsterix - Complete Project Index

A comprehensive map of all files in the Blogsterix blogging platform.

## 📋 Project Overview

**Technology Stack:**
- Next.js 15 (App Router)
- React 19
- TypeScript (strict mode)
- Tailwind CSS 3.4
- Sanity CMS (headless content management)
- Portable Text (rich content editing)
- Node.js 18+

**Features:**
- SEO optimized blog platform
- Content management via Sanity CMS
- Responsive design (mobile-first)
- Performance optimized
- Monetization ready (AdSense + Affiliate)
- Full-text search
- Category/tag filtering
- Newsletter integration
- Contact forms
- Social sharing ready

---

## 📁 Complete File Structure

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, metadata |
| `package-lock.json` | Locked dependency versions |
| `tsconfig.json` | TypeScript configuration |
| `next.config.ts` | Next.js configuration, image optimization |
| `tailwind.config.ts` | Tailwind CSS customization |
| `postcss.config.js` | PostCSS configuration |
| `.eslintrc.json` | ESLint rules for code quality |
| `sanity.config.ts` | Sanity CMS configuration |
| `vercel.json` | Vercel deployment config |
| `.env.local.example` | Example environment variables |
| `.gitignore` | Git ignore rules |

### Documentation Files

| File | Purpose | Read Time |
|------|---------|-----------|
| `README.md` | Complete project overview & setup | 10 min |
| `QUICK_START.md` | Get running in 15 minutes | 5 min |
| `DEPLOYMENT_GUIDE.md` | Deployment to production | 15 min |
| `GOOGLE_SETUP.md` | Google services integration | 20 min |
| `CONTENT_STRATEGY.md` | Content creation guide | 25 min |
| `TROUBLESHOOTING.md` | FAQ and troubleshooting | 10 min |
| `SEED_DATA.ts` | Sample data structure reference | 5 min |

### Application Root

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root HTML layout, global metadata, schemas |
| `app/globals.css` | Global base styles, typography |
| `app/page.tsx` | Home page (/), hero, featured posts, categories |
| `app/robots.ts` | Dynamic robots.txt generation for SEO |
| `app/sitemap.ts` | Dynamic XML sitemap generation |

### Pages - Blog Routes

| Route | File | Purpose |
|-------|------|---------|
| `/blog` | `app/blog/page.tsx` | Blog listing with search, categories, pagination |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Single blog post with content, meta, ads, related posts |

### Pages - Dynamic Routes

| Route | File | Purpose |
|-------|------|---------|
| `/category/[slug]` | `app/category/[slug]/page.tsx` | Posts in specific category |
| `/tag/[slug]` | `app/tag/[slug]/page.tsx` | Posts with specific tag |

### Pages - Info Pages

| Route | File | Purpose |
|-------|------|---------|
| `/about` | `app/about/page.tsx` | Mission, values, team info |
| `/contact` | `app/contact/page.tsx` | Contact form, FAQ |
| `/resources` | `app/resources/page.tsx` | Tool recommendations (5 categories) |

### Pages - Legal Pages

| Route | File | Purpose |
|-------|------|---------|
| `/privacy-policy` | `app/privacy-policy/page.tsx` | GDPR-compliant privacy |
| `/disclaimer` | `app/disclaimer/page.tsx` | Content liability disclaimer |
| `/affiliate-disclosure` | `app/affiliate-disclosure/page.tsx` | Affiliate transparency |
| `/terms-and-conditions` | `app/terms-and-conditions/page.tsx` | Legal terms |

### Components - Layout

| Component | File | Props | Purpose |
|-----------|------|-------|---------|
| `Header` | `components/Header.tsx` | - | Navigation bar with categories dropdown, mobile menu |
| `Footer` | `components/Footer.tsx` | - | Site footer with link organization, copyright |
| `MobileMenu` | `components/MobileMenu.tsx` | `open`, `onClose` | Mobile navigation drawer |
| `Container` | `components/Container.tsx` | `children` | Max-width wrapper (max-w-6xl) |

### Components - Content Display

| Component | File | Props | Purpose |
|-----------|------|-------|---------|
| `BlogCard` | `components/BlogCard.tsx` | `post`, `priority?` | Blog post preview card |
| `FeaturedPostCard` | `components/FeaturedPostCard.tsx` | `post` | Prominent featured post |
| `CategoryCard` | `components/CategoryCard.tsx` | `category` | Category preview with image |
| `RelatedPosts` | `components/RelatedPosts.tsx` | `categoryId`, `postId` | Related posts sidebar |

### Components - Navigation/Filtering

| Component | File | Props | Purpose |
|-----------|------|-------|---------|
| `Breadcrumbs` | `components/Breadcrumbs.tsx` | `items`, `currentPage` | SEO breadcrumb navigation |
| `CategoryFilter` | `components/CategoryFilter.tsx` | `categories`, `selected`, `onChange` | Category filter buttons |
| `SearchBox` | `components/SearchBox.tsx` | `onSearch`, `placeholder?` | Search input field |
| `TableOfContents` | `components/TableOfContents.tsx` | `content` | Auto-generated post TOC |

### Components - Forms & CTAs

| Component | File | Props | Purpose |
|-----------|------|-------|---------|
| `Button` | `components/Button.tsx` | `variant`, `size`, `children`, `href?`, `onClick?` | Reusable button/link |
| `NewsletterBox` | `components/NewsletterBox.tsx` | - | Email subscription form (TODO: email service) |
| `AffiliateDisclosure` | `components/AffiliateDisclosure.tsx` | - | Affiliate link disclosure box |
| `AdPlaceholder` | `components/AdPlaceholder.tsx` | `placement?` | Ad unit placeholder (replace with AdSense) |

### Components - Content Rendering

| Component | File | Props | Purpose |
|-----------|------|-------|---------|
| `PortableTextRenderer` | `components/PortableTextRenderer.tsx` | `value` | Render Sanity Portable Text |
| `SeoJsonLd` | `components/SeoJsonLd.tsx` | `schema` | Render JSON-LD structured data |

### Libraries - Sanity Integration

| File | Exports | Purpose |
|------|---------|---------|
| `lib/sanity/client.ts` | `sanityClient` | Sanity client instance, CDN enabled |
| `lib/sanity/queries.ts` | 13 GROQ queries | Data fetching: posts, categories, tags, authors, settings |
| `lib/sanity/image.ts` | `urlFor()`, `getImageUrl()` | Image URL generation and optimization |

### Libraries - Utilities

| File | Exports | Purpose |
|------|---------|---------|
| `lib/types.ts` | TypeScript interfaces | Type definitions for all data structures |
| `lib/seo.ts` | SEO functions | Metadata generation, JSON-LD schemas |
| `lib/utils.ts` | Utility functions | Date formatting, reading time, TOC generation |

### Sanity CMS Files

| File | Purpose |
|------|---------|
| `sanity/` | Sanity schemas directory |
| `SEED_DATA.ts` | Example data structure for reference |

### GitHub & CI/CD

| File | Purpose |
|------|---------|
| `.github/workflows/deploy.yml` | Automated deployment to Vercel on push |

---

## 🔍 GROQ Queries Reference

Located in `lib/sanity/queries.ts`:

| Query | Purpose |
|-------|---------|
| `ALL_POSTS_QUERY` | Fetch all published posts |
| `POST_BY_SLUG_QUERY` | Fetch single post by slug |
| `POSTS_BY_CATEGORY_QUERY` | Fetch posts in category |
| `POSTS_BY_TAG_QUERY` | Fetch posts with tag |
| `POSTS_BY_AUTHOR_QUERY` | Fetch posts by author |
| `RELATED_POSTS_QUERY` | Fetch related posts |
| `ALL_CATEGORIES_QUERY` | Fetch all categories |
| `CATEGORY_BY_SLUG_QUERY` | Fetch single category |
| `ALL_TAGS_QUERY` | Fetch all tags |
| `TAG_BY_SLUG_QUERY` | Fetch single tag |
| `ALL_AUTHORS_QUERY` | Fetch all authors |
| `SITE_SETTINGS_QUERY` | Fetch site configuration |

---

## 🎨 Component Hierarchy

```
layout.tsx
├── Header
│   └── MobileMenu
├── main
│   └── page.tsx (or route-specific page)
│       └── Container
│           └── [Content Components]
│               ├── BlogCard
│               ├── FeaturedPostCard
│               ├── CategoryCard
│               ├── PortableTextRenderer
│               ├── Button
│               ├── NewsletterBox
│               ├── RelatedPosts
│               ├── TableOfContents
│               ├── Breadcrumbs
│               ├── CategoryFilter
│               └── AdPlaceholder
└── Footer
```

---

## 📊 Data Structures

### BlogPost
```typescript
{
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  featuredImage?: Image
  publishedAt: string
  updatedAt?: string
  author?: Author
  category?: Category
  tags?: Tag[]
  content?: PortableText[]
  seoTitle?: string
  seoDescription?: string
  featured?: boolean
}
```

### Category
```typescript
{
  _id: string
  title: string
  slug: { current: string }
  description: string
  image?: Image
  seoTitle?: string
  seoDescription?: string
}
```

### Author
```typescript
{
  _id: string
  name: string
  slug: { current: string }
  image?: Image
  bio?: string
  socialLinks?: SocialLink[]
}
```

---

## 🚀 Key Features by File

### SEO Features (`app/robots.ts`, `app/sitemap.ts`, `lib/seo.ts`)
- Dynamic robots.txt generation
- XML sitemap with priorities
- JSON-LD structured data (Article, Organization, Website)
- Meta tags and OpenGraph images
- Breadcrumb schema

### Responsive Design (`app/globals.css`, components/*)
- Mobile-first approach
- Tailwind CSS breakpoints (md:, lg:, xl:)
- Responsive images with Next.js Image
- Touch-friendly buttons (44px+)
- Flexible layouts

### Performance (`next.config.ts`)
- Image optimization
- Font optimization
- Code splitting
- Static generation where possible
- ISR (Incremental Static Regeneration)

### Monetization
- AdSense placeholder components
- Affiliate disclosure components
- Newsletter signup integration
- Ad placement strategy

### Accessibility
- Semantic HTML
- Skip-to-content link
- Proper heading hierarchy
- Alt text for images
- Form labels

---

## 📝 Environment Variables

### Required in .env.local

```env
# Sanity CMS (get from sanity.io)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token

# Site URL (for sitemap, canonical URLs)
NEXT_PUBLIC_SITE_URL=https://blogsterix.com
```

### Optional

```env
# Google services (add after setup)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Email service (for forms)
NEXT_PUBLIC_EMAIL_SERVICE_KEY=your_key

# AdSense (add after approval)
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxx
```

---

## 🔧 Build & Deploy

### Local Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server (port 3000)
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Check code quality
```

### Deployment

- **Vercel** (recommended): Auto-deploy from GitHub
- **Netlify**: Connect repository, configure build
- **Self-hosted**: Build locally, deploy to server

---

## 📚 Documentation Map

1. **Start Here**: [QUICK_START.md](QUICK_START.md) - 15 min setup
2. **Full Setup**: [README.md](README.md) - Comprehensive guide
3. **Deploy**: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Production deployment
4. **Google**: [GOOGLE_SETUP.md](GOOGLE_SETUP.md) - Google services integration
5. **Content**: [CONTENT_STRATEGY.md](CONTENT_STRATEGY.md) - Create blog content
6. **Help**: [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - FAQ & issues

---

## ✅ Pre-Launch Checklist

- [ ] Install dependencies: `npm install`
- [ ] Create .env.local with Sanity credentials
- [ ] Test locally: `npm run dev`
- [ ] Create initial content in Sanity
- [ ] Set up Google Search Console
- [ ] Configure Google Analytics
- [ ] Test all pages on mobile
- [ ] Run Lighthouse audit
- [ ] Deploy to Vercel
- [ ] Set up custom domain
- [ ] Enable Google AdSense
- [ ] Configure email service
- [ ] Set up monitoring

---

## 🎯 File Sizes (Approximate)

- Total project size: ~15,000+ lines of code
- Components: ~2,500 lines
- Pages: ~3,000 lines
- Configuration: ~500 lines
- Utilities: ~1,000 lines
- Documentation: ~5,000 lines

---

## 🔗 External Services

**Required:**
- Sanity CMS (free tier available) - Content management
- Vercel or similar - Hosting/deployment

**Recommended:**
- Google Search Console - SEO monitoring
- Google Analytics - Traffic analysis
- Google AdSense - Monetization
- Email service (SendGrid, Mailchimp, etc.) - Newsletters

**Optional:**
- CDN (Cloudflare) - Performance
- Error tracking (Sentry) - Debugging
- Uptime monitoring - Reliability
- Git hosting (GitHub) - Code repository

---

## 🎓 Learning Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **React Documentation**: https://react.dev
- **Sanity Documentation**: https://www.sanity.io/docs
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/
- **SEO Beginner's Guide**: https://moz.com/beginners-guide-to-seo

---

## 📞 Support

- **Documentation**: See files above
- **Issues**: Check TROUBLESHOOTING.md
- **Contact**: contact@blogsterix.com
- **Community**: Stack Overflow, Reddit, GitHub Discussions

---

## 📄 License

This project is provided as-is. Customize and use for your blogging needs.

---

**Last Updated:** 2025-01-01  
**Next.js Version:** 15.x  
**React Version:** 19.x  
**Node Version:** 18+  

Happy blogging! 🚀📝
