import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo";
import SeoJsonLd from "@/components/SeoJsonLd";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blogsterix - Smart Blogging, AI Tools & Tech Guides for Beginners",
  description:
    "Discover the best AI tools, blogging strategies, and tech guides for beginners. Learn how to grow your blog, make money online, and master AI tools.",
  keywords:
    "AI tools, blogging, tech guides, beginners, content creation, SEO, online business",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  canonical: "https://blogsterix.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blogsterix.com",
    siteName: "Blogsterix",
    title: "Blogsterix - Smart Blogging, AI Tools & Tech Guides",
    description:
      "Discover AI tools, blogging tips, and tech guides designed for beginners.",
    images: [
      {
        url: "https://cdn.sanity.io/images/YOUR_PROJECT_ID/production/DEFAULT-OG-IMAGE",
        width: 1200,
        height: 630,
        alt: "Blogsterix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogsterix - Smart Blogging & AI Tools",
    description: "Discover AI tools and blogging guides for beginners",
    images: [
      "https://cdn.sanity.io/images/YOUR_PROJECT_ID/production/DEFAULT-OG-IMAGE",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
        {/* Font optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <SeoJsonLd schema={generateOrganizationSchema()} />
        <SeoJsonLd schema={generateWebsiteSchema()} />
      </head>
      <body className="bg-white">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
