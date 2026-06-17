# Troubleshooting & FAQ - Blogsterix

Common issues and solutions for Blogsterix setup and usage.

## Getting Started

### Q: What do I need to get started?
A: You need:
- Node.js 18+ installed
- A Sanity account (free at sanity.io)
- A code editor (VS Code recommended)
- Basic knowledge of Next.js (optional but helpful)

### Q: How long does it take to set up?
A: Basic setup takes 15-30 minutes. Full setup with content takes 1-2 hours.

### Q: Can I use this without Sanity?
A: Not easily. Sanity CMS is core to the architecture. But you could:
- Replace Sanity with another headless CMS
- Use static JSON files
- Integrate with different backends
This would require significant code changes.

### Q: Is there a hosted version?
A: No, you host it yourself on Vercel, Netlify, or your server.
Sanity handles content management (they provide hosting).

---

## Installation Issues

### Q: npm install fails
A: Try:
```bash
# Clear cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Q: Node version error
A: Update Node.js:
```bash
# Check version
node --version  # Should be 18.0.0 or higher

# Use nvm to manage versions
nvm install 20
nvm use 20
```

### Q: Port 3000 already in use
A: Either:
```bash
# Use different port
npm run dev -- -p 3001

# Or kill existing process
lsof -i :3000
kill -9 <PID>
```

---

## Environment Variables

### Q: Where do I put environment variables?
A: Create `.env.local` in project root:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx
NEXT_PUBLIC_SANITY_DATASET=production
```

### Q: Why does my variable show as undefined?
A: Check:
- Variable name starts with `NEXT_PUBLIC_` for client-side
- No spaces around `=`
- File is named `.env.local`
- Dev server restarted after changes
- No extra quotes around values

### Q: How do I hide sensitive tokens?
A: Use variables WITHOUT `NEXT_PUBLIC_` prefix:
```env
# Hidden from client
SANITY_API_READ_TOKEN=secret_token

# Visible to client
NEXT_PUBLIC_SANITY_PROJECT_ID=public_id
```

---

## Sanity CMS Issues

### Q: "Project not found" error
A: Check:
- NEXT_PUBLIC_SANITY_PROJECT_ID is correct
- No extra spaces in .env.local
- Project exists in Sanity dashboard
- Correct dataset name (usually "production")

### Q: Can't query data from Sanity
A: Verify:
- Read token has permissions
- Content is published (not just drafted)
- Correct schema type name in query
- Sanity client is initialized correctly

### Q: Images won't load from Sanity
A: Check:
- Image is published in Sanity
- Image URL is correct
- CDN is enabled in Sanity settings
- CORS allows your domain

### Q: How do I set up Sanity Studio?
A:
```bash
npm install -g @sanity/cli
sanity init
sanity start
```
Then visit http://localhost:3333

---

## Development Issues

### Q: TypeScript errors when building
A: Run:
```bash
npx tsc --noEmit
```
Fix errors, then rebuild.

### Q: Components not updating
A: Try:
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear `.next` folder: `rm -rf .next`
- Restart dev server

### Q: Styles not applying
A: Check:
- Tailwind classes use correct format
- No typos in class names
- `tailwind.config.ts` includes correct paths
- PostCSS is configured

### Q: Build takes too long
A: Try:
- Clear cache: `npm run build -- --no-cache`
- Check for large files
- Review node_modules size
- Use SSD instead of external drive

---

## Content/Pages

### Q: Why doesn't my blog post appear?
A: Make sure:
- Post is published in Sanity
- Slug is set correctly
- Author and category exist and are published
- Content block is included
- Sanity query is correct

### Q: Featured image not showing
A: Check:
- Image is uploaded to Sanity
- Image asset exists and is published
- File size isn't too large
- Image format is supported (JPG, PNG, WebP)

### Q: SEO fields not working
A: These are optional:
- If empty, title and excerpt are used
- Must be published to take effect
- Check metadata in page source

### Q: How do I create custom pages?
A: Add new files in `app/` folder:
```typescript
// app/my-page/page.tsx
export default function MyPage() {
  return <h1>My Custom Page</h1>
}
```
Access at `/my-page`

---

## Deployment Issues

### Q: Vercel deployment fails
A: Check:
- All environment variables set
- Build command succeeds locally
- No node_modules committed
- Node.js version is 18+ in settings

### Q: Domain points to wrong site
A: Verify:
- DNS records updated correctly
- Waiting for propagation (up to 48 hours)
- Using correct nameservers
- Domain registered for correct root

### Q: Site shows "Not Found" after deployment
A: Check:
- URLs are lowercase
- No trailing slashes in routes
- Environment variables are set
- Sanity project is accessible

### Q: Site is slow
A: Optimize:
- Enable Vercel analytics
- Check Core Web Vitals
- Optimize images
- Review database queries
- Check for N+1 queries

---

## SEO/Google Issues

### Q: How long until Google indexes my site?
A: Usually 1-4 weeks for first index, faster after.
- Submit sitemap in Search Console
- Get backlinks from other sites
- Create quality content

### Q: Site not appearing in Google search
A: Check:
- robots.txt allows crawling
- Sitemap is submitted
- No noindex meta tag
- Domain verified in Search Console
- Content is at least 1000+ words

### Q: AdSense approval denied
A: Usually because:
- Site has less than 6 months of content
- Insufficient traffic
- Policy violations (thin content, etc.)
- Reapply after addressing issues

### Q: Ads not appearing
A: Verify:
- AdSense is approved
- Ad code is correctly added
- AdSense script is loaded
- Sufficient traffic to show ads
- Ads haven't been disabled for policy violations

---

## Performance/Optimization

### Q: How can I improve site speed?
A: Use:
- Lighthouse (Chrome DevTools)
- PageSpeed Insights
- GTmetrix
Focus on:
- Image optimization
- Code splitting
- Caching
- Minification

### Q: Images are too large
A: Fix:
```typescript
import Image from 'next/image'

<Image
  src={imageUrl}
  alt="description"
  width={800}
  height={600}
/>
```
Let Next.js optimize automatically.

### Q: Too many database queries
A: Optimize:
- Use `Promise.all()` for parallel queries
- Cache results when possible
- Fetch only needed fields
- Use pagination

---

## Mobile/Responsive

### Q: Site looks broken on mobile
A: Check:
- Using Tailwind responsive classes: `md:`, `lg:`
- Images are responsive
- Text is readable (not too small)
- Links are tappable (44px+ minimum)
- No horizontal scrolling

### Q: Touch issues on mobile
A: Fix:
- Remove hover-only interactions
- Use Touch events in addition to click
- Add sufficient padding to buttons
- Test on real devices

---

## Forms/Functionality

### Q: Contact form doesn't work
A: It's UI-only - need to:
1. Add backend API endpoint
2. Integrate with email service (SendGrid, Nodemailer)
3. Add form submission handler

### Q: Newsletter signup not working
A: Similarly, need to:
1. Choose email service (ConvertKit, Mailchimp)
2. Get API credentials
3. Update `NewsletterBox.tsx`
4. Test subscription

### Q: Forms require backend
A: You can use:
- Vercel Functions
- Netlify Functions
- Formspree
- EmailJS
- Custom backend

---

## Analytics/Tracking

### Q: Google Analytics not tracking
A: Check:
- Measurement ID is correct
- Script is loaded
- Site domain matches GA property
- Correct event names
- Not blocking scripts

### Q: Search Console not showing data
A: Normal if:
- Site just launched
- Low traffic
- Just submitted
- Wait 1-2 weeks minimum

---

## Version/Dependency Issues

### Q: Should I update dependencies?
A: Check:
- Test locally before updating
- Update one at a time
- Check breaking changes
- Use `npm outdated` to see options

### Q: Package version conflicts
A: Fix:
```bash
npm install --legacy-peer-deps
# Or update all packages
npm update
```

### Q: Should I use npm or yarn?
A: Either works. Just be consistent.
```bash
npm install
# OR
yarn install
```

---

## File/Permissions Issues

### Q: Permission denied errors
A: Try:
```bash
# Mac/Linux
sudo chown -R $USER ~/.npm

# Or change npm prefix
npm config set prefix '~/.npm-global'
```

### Q: File not found errors
A: Check:
- Correct file paths (case-sensitive on Linux)
- Files actually exist
- No typos in imports
- Using relative paths correctly

---

## Advanced Troubleshooting

### Q: How do I debug issues?
A:
```typescript
// Add console logs
console.log('Debug info:', variable)

// Use browser DevTools
// Inspect Network tab
// Check Console for errors
// Use React DevTools extension
```

### Q: How do I profile performance?
A:
```bash
# Build analysis
npm run build -- --analyze

# Lighthouse
npm run build && npm start
# Then run Lighthouse in Chrome DevTools
```

### Q: Still having issues?
A:
1. Check all documentation
2. Search relevant docs (Next.js, Sanity, etc.)
3. Check GitHub issues
4. Try minimal reproducible example
5. Reach out: contact@blogsterix.com

---

## Common Error Messages

### "Cannot find module '@sanity/client'"
Solution: Run `npm install`

### "NEXT_PUBLIC_SANITY_PROJECT_ID is undefined"
Solution: Add to `.env.local` and restart server

### "404 Not found"
Solution: Check URL structure, verify page file exists

### "CORS error"
Solution: Check Sanity CORS settings, add domain

### "Image optimization error"
Solution: Check image URL is accessible, file size

---

## When Nothing Else Works

1. **Delete and reinstall:**
```bash
rm -rf node_modules package-lock.json
npm install
```

2. **Clear caches:**
```bash
npm cache clean --force
rm -rf .next
```

3. **Restart everything:**
- Close all terminals
- Close code editor
- Start fresh

4. **Try on fresh clone:**
```bash
git clone <your-repo> blogsterix-test
cd blogsterix-test
npm install
npm run dev
```

5. **Get help:**
- Share error message and steps to reproduce
- Check documentation again
- Ask in relevant community forums
- Email: contact@blogsterix.com

---

## Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build            # Build for production
npm start               # Start production server
npm run lint            # Run ESLint

# Sanity
sanity init             # Initialize Sanity
sanity start            # Start Sanity Studio
sanity dataset export   # Export data

# Node/npm
npm --version           # Check npm version
node --version          # Check Node version
npm list                # List installed packages
npm outdated            # Check for updates
npm cache clean --force # Clear npm cache

# Git
git status              # Check git status
git add .               # Stage changes
git commit -m "message" # Commit changes
git push                # Push to remote
```

---

## Need More Help?

- **Documentation:** Read README.md, DEPLOYMENT_GUIDE.md, GOOGLE_SETUP.md
- **Quick Start:** See QUICK_START.md
- **Content Help:** See CONTENT_STRATEGY.md
- **Official Docs:** 
  - Next.js: https://nextjs.org/docs
  - Sanity: https://www.sanity.io/docs
  - Tailwind: https://tailwindcss.com/docs
- **Community:** Stack Overflow, Reddit, GitHub Discussions
- **Support:** contact@blogsterix.com

You've got this! 🚀
