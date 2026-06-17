# Blogsterix Deployment Guide

Complete instructions for deploying Blogsterix to production.

## Quick Deployment to Vercel

Vercel is recommended for Next.js projects as it provides:
- Automatic deployments from Git
- Built-in HTTPS and CDN
- Serverless functions
- Environment management
- Preview deployments

### Step 1: Prepare Your Code

1. Create a GitHub repository for your project
2. Push all code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/blogsterix.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with your GitHub account
3. Click "Add New..." → "Project"
4. Select your GitHub repository
5. Click "Import"

### Step 3: Add Environment Variables

In the import screen, add your environment variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = your_project_id
NEXT_PUBLIC_SANITY_DATASET = production
NEXT_PUBLIC_SANITY_API_VERSION = 2025-01-01
SANITY_API_READ_TOKEN = your_read_token
NEXT_PUBLIC_SITE_URL = https://yourdomain.com
```

Click "Deploy" and wait for the build to complete.

### Step 4: Connect Your Domain

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your `blogsterix.com` domain
4. Follow Vercel's DNS configuration instructions

Update your domain registrar with the nameservers or DNS records Vercel provides.

## Alternative Deployments

### Netlify

1. Connect GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in Site Settings
5. Connect custom domain

### AWS Amplify

1. Connect to GitHub repository
2. Create build spec
3. Configure environment variables
4. Deploy

### Self-Hosted (VPS)

1. Install Node.js 18+ on your server
2. Clone repository
3. Install dependencies: `npm install`
4. Build: `npm run build`
5. Start with PM2: `pm2 start npm --name blogsterix -- start`
6. Set up Nginx as reverse proxy
7. Configure SSL with Let's Encrypt

## Post-Deployment Setup

### 1. Verify DNS

```bash
# Check DNS propagation
dig blogsterix.com
nslookup blogsterix.com
```

### 2. Test Your Site

- Visit https://blogsterix.com
- Test all pages load correctly
- Check images load properly
- Test forms (contact, newsletter)
- Verify mobile responsiveness

### 3. Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property for your domain
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`
5. Monitor indexing status

### 4. Google Analytics

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID
3. Add to `app/layout.tsx`:

```typescript
<Script
  strategy="afterInteractive"
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
/>
<Script
  id="google-analytics"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

### 5. Google AdSense

1. Sign up at [adsense.google.com](https://www.google.com/adsense/start/)
2. Add your site
3. Wait for approval (may take several days)
4. Get your publisher ID
5. Replace ad placeholders in components
6. Enable ads in AdSense dashboard

### 6. SSL/HTTPS

- Vercel: Automatic
- Netlify: Automatic
- Self-hosted: Use Let's Encrypt with Certbot

```bash
sudo certbot certonly --nginx -d blogsterix.com -d www.blogsterix.com
```

### 7. Email Setup

For contact form and newsletters:

**Option 1: SendGrid**
```bash
npm install @sendgrid/mail
```

**Option 2: NodeMailer**
```bash
npm install nodemailer
```

**Option 3: Serverless Function**
Use Vercel functions or Netlify functions to handle form submission.

### 8. CDN Configuration

Vercel and Netlify provide CDN by default.

For self-hosted, use Cloudflare:
1. Add domain to Cloudflare
2. Update nameservers at registrar
3. Enable caching rules
4. Configure security settings

## Performance Optimization

### Vercel Analytics

1. In Vercel dashboard → Analytics
2. Enable Web Vitals monitoring
3. Track performance metrics

### Image Optimization

Already configured in `next.config.ts`:
- Automatic optimization
- Responsive images
- WebP format support

### Caching Headers

Already set in `next.config.ts`:
- Static pages: 1 year cache
- Dynamic content: shorter cache
- Images: 24-hour cache

### Database Caching

Sanity CDN is enabled by default for fast queries.

## Backup & Disaster Recovery

### GitHub as Backup

Your code is backed up automatically on GitHub.

### Sanity Content Backup

1. Go to Sanity project settings
2. Export your dataset regularly
3. Download as JSON for safekeeping

```bash
sanity dataset export production ./backup-$(date +%Y%m%d).ndjson
```

### Database Snapshots

- Vercel: Automatic backups
- Netlify: Enable automatic backups
- Self-hosted: Set up regular backups

## Monitoring & Maintenance

### Uptime Monitoring

Use services like:
- UptimeRobot (free)
- Monitoring by Vercel/Netlify (included)
- Better Stack
- Pingdom

### Error Tracking

Add error monitoring:
```bash
npm install @sentry/nextjs
```

### Log Monitoring

- Vercel: Built-in logs
- Netlify: Built-in logs
- Self-hosted: Use Logrotate, ELK Stack, or LogDNA

## Security

### SSL/TLS

✓ Automatic with Vercel/Netlify
✓ Manual: Let's Encrypt

### Environment Variables

- Never commit `.env.local` to Git
- Use environment variable management in hosting platform
- Rotate tokens regularly
- Use read-only tokens in production

### Headers Security

Already configured in `next.config.ts`:
```
X-Content-Type-Options: nosniff
```

Add additional headers:

```typescript
// next.config.ts
headers: async () => [
  {
    source: '/:path*',
    headers: [
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ],
  },
]
```

### Rate Limiting

For production, add rate limiting:
- Vercel: Use middleware
- Netlify: Use functions
- Self-hosted: Use Nginx or middleware

## Scaling

### High Traffic

- Vercel: Auto-scaling
- Netlify: Auto-scaling
- Self-hosted: Load balancer + multiple instances

### Database Optimization

- Enable Sanity caching
- Use pagination for large datasets
- Create appropriate indexes

### CDN

- Vercel/Netlify: Built-in
- Self-hosted: Add Cloudflare or similar

## Troubleshooting Deployment

### Build Fails

Check:
- Node.js version (needs 18+)
- Environment variables set correctly
- Dependencies installed
- No build errors: `npm run build`

### Site Doesn't Load

Check:
- DNS records configured
- SSL certificate valid
- Environment variables set
- Sanity project accessible

### Images Not Loading

- Verify Sanity project allows CDN
- Check image asset IDs
- Test with direct Sanity URLs
- Check CORS settings

### Forms Not Working

- Verify email service connected
- Check API tokens
- Review error logs
- Test locally first

### Slow Performance

- Check Web Vitals
- Review database queries
- Optimize images
- Enable caching
- Check CDN status

## Cost Estimates

**Vercel:**
- Free tier: Up to 100GB bandwidth/month
- Pro: $20/month
- Enterprise: Custom

**Sanity:**
- Hobby: Free (limited)
- Growth: $99/month
- Pro: Custom

**Domain:**
- $10-15/year (.com)

**Email Service:**
- SendGrid: Free (100/day)
- Mailchimp: Free (up to 500)

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Sanity Docs:** https://www.sanity.io/docs
- **Next.js Docs:** https://nextjs.org/docs

Need help? Email: contact@blogsterix.com
