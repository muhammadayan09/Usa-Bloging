# Quick Start Guide - Blogsterix

Get your Blogsterix blog up and running in 15 minutes!

## 🚀 5-Minute Setup

### 1. Install Dependencies (1 min)

```bash
npm install
```

### 2. Set Up Environment Variables (2 min)

1. Copy `.env.local.example` to `.env.local`
2. Get your Sanity credentials from [sanity.io](https://www.sanity.io):
   - Create account
   - Create project
   - Note Project ID
   - Create read token in API dashboard

3. Update `.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_READ_TOKEN=YOUR_TOKEN
NEXT_PUBLIC_SITE_URL=https://blogsterix.com
```

### 3. Start Dev Server (1 min)

```bash
npm run dev
```

Visit http://localhost:3000 - Your site is live! ✨

## 📝 Create Your First Post (10 min)

### Option A: Using Sanity Studio (Recommended)

1. Initialize Sanity:
```bash
sanity init
sanity start
```

2. Visit http://localhost:3333
3. Create in this order:
   - Author (Settings → Authors)
   - Category (Settings → Categories)
   - Blog Post (Blog Posts)

### Option B: Directly with Sanity Client

Use sample data from `SEED_DATA.ts` as reference.

## 📂 Project Structure

```
blogsterix/
├── app/                 # Pages (route.tsx files)
├── components/          # Reusable React components
├── lib/
│   ├── sanity/         # CMS client and queries
│   ├── seo.ts          # SEO utilities
│   ├── utils.ts        # Helper functions
│   └── types.ts        # TypeScript interfaces
└── public/             # Static assets
```

## 🎨 Customize Your Site

### Update Site Info

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your site description",
  // ... more metadata
};
```

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: "#YOUR_COLOR",
  secondary: "#YOUR_COLOR",
  accent: "#YOUR_COLOR",
}
```

### Update Navigation

Edit `components/Header.tsx` navbar links

### Update Footer

Edit `components/Footer.tsx` footer content

## 🔍 Add Google Services

### Google Search Console
See `GOOGLE_SETUP.md` for detailed instructions
- Verify your domain
- Submit sitemap at `/sitemap.xml`

### Google Analytics
See `GOOGLE_SETUP.md`
- Create GA4 property
- Add tracking code to layout

### Google AdSense
See `GOOGLE_SETUP.md`
- Set up account
- Replace ad placeholders

## 📱 Test Your Site

```bash
# Build for production
npm run build

# Start production server
npm start
```

Test at http://localhost:3000

## 🚢 Deploy to Vercel

Simplest deployment:

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Add environment variables
5. Deploy! 🎉

See `DEPLOYMENT_GUIDE.md` for details.

## 📊 Create Content

### Blog Post Structure
1. **Title** - Descriptive, keyword-rich
2. **Slug** - Auto-generated from title
3. **Excerpt** - 150 words, summary
4. **Featured Image** - 1200x630px ideal
5. **Content** - Use Portable Text editor
6. **Category** - Select existing category
7. **Tags** - Add relevant tags
8. **SEO Fields** - Title and description

### Recommended Content
- Minimum 1500 words for good SEO
- Include images and formatting
- Add internal links
- Include affiliate disclosure

See `CONTENT_STRATEGY.md` for full guide.

## 🎯 Key Pages to Visit

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Overview, featured posts |
| Blog | `/blog` | All articles, search, filter |
| About | `/about` | Your story, mission |
| Contact | `/contact` | Email form |
| Resources | `/resources` | Tool recommendations |
| Privacy | `/privacy-policy` | Privacy info |
| Affiliate | `/affiliate-disclosure` | Affiliate transparency |

## 🛠️ Common Tasks

### Add a Category
1. Go to Sanity Studio
2. Click "Categories"
3. "New document"
4. Fill in: title, slug, description
5. Publish

### Create a Blog Post
1. Go to Sanity Studio
2. Click "Blog Posts"
3. "New document"
4. Fill in all fields
5. Publish

### Enable Newsletter
1. Choose email service (ConvertKit, Mailchimp, etc.)
2. Get API keys
3. Update `components/NewsletterBox.tsx`
4. Connect API

### Enable AdSense
1. Sign up at [adsense.google.com](https://www.google.com/adsense)
2. Get Publisher ID
3. Create ad units
4. Replace placeholders in `components/AdPlaceholder.tsx`

## 📚 Documentation

- **Full Setup:** `README.md`
- **Deployment:** `DEPLOYMENT_GUIDE.md`
- **Google Services:** `GOOGLE_SETUP.md`
- **Content Strategy:** `CONTENT_STRATEGY.md`
- **Seed Data:** `SEED_DATA.ts`

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
lsof -i :3000
kill -9 <PID>
```

### Images Not Loading
- Check Sanity CDN is enabled
- Verify image asset IDs
- Check CORS in Sanity settings

### Site Won't Build
- Run `npm install` again
- Check for TypeScript errors: `npx tsc`
- Review error messages in build log

### Environment Variables Not Working
- Restart dev server: `npm run dev`
- Check `.env.local` format
- Prefix must be `NEXT_PUBLIC_` for client-side

## ✅ Pre-Launch Checklist

Before deploying to production:

- [ ] Test all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Verify images display properly
- [ ] Test contact form
- [ ] Check internal links work
- [ ] Verify SEO metadata
- [ ] Check Google services setup
- [ ] Test on different browsers
- [ ] Review performance (Lighthouse)
- [ ] Set up analytics tracking
- [ ] Enable AdSense (if ready)

## 💡 Pro Tips

1. **Use Portable Text blocks** for rich content
2. **Tag posts properly** for navigation
3. **Update featured image size** to 1200x630px
4. **Write 1500+ word articles** for SEO
5. **Include internal links** to other posts
6. **Use semantic HTML** for accessibility
7. **Test mobile layout** before publishing
8. **Monitor analytics** monthly
9. **Refresh robots.txt** after deployments
10. **Keep content fresh** with regular updates

## 🎓 Learning Resources

- **Next.js:** https://nextjs.org/docs
- **React:** https://react.dev
- **Sanity:** https://www.sanity.io/docs
- **Tailwind CSS:** https://tailwindcss.com
- **SEO:** https://moz.com/beginners-guide-to-seo
- **Blogging:** https://www.blogsterix.com/blog

## 🤝 Get Help

- **Docs:** Check respective documentation
- **Issues:** GitHub issues
- **Community:** Relevant forums/communities
- **Email:** contact@blogsterix.com

---

**Ready to launch?** You're all set! 🚀

Next steps:
1. ✅ Create your first blog post
2. ✅ Deploy to production
3. ✅ Set up Google services
4. ✅ Start promoting your content
5. ✅ Monitor analytics
6. ✅ Optimize and grow!

Happy blogging! 📝
