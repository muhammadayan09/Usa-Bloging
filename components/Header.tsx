"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-black text-gray-900 transition-colors hover:text-secondary"
        >
          <span className="rounded bg-secondary px-2 py-1 text-white">BS</span>
          <span className="hidden sm:inline">Blogsterix</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link href="/" className="font-semibold text-gray-700 hover:text-secondary">
            Home
          </Link>
          <Link href="/blog" className="font-semibold text-gray-700 hover:text-secondary">
            Blog
          </Link>
          <div className="group relative">
            <button className="font-semibold text-gray-700 hover:text-secondary">
              Categories
            </button>
            <div className="invisible absolute left-0 mt-3 w-56 rounded-lg border border-gray-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {[
                ["AI Tools", "/category/ai-tools"],
                ["Blogging", "/category/blogging"],
                ["SEO", "/category/seo"],
                ["Creator Tools", "/category/creator-tools"],
                ["Make Money Online", "/category/make-money-online"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-secondary"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/resources" className="font-semibold text-gray-700 hover:text-secondary">
            Resources
          </Link>
          <Link href="/about" className="font-semibold text-gray-700 hover:text-secondary">
            About
          </Link>
          <Link href="/contact" className="rounded bg-amber-500 px-4 py-2 font-semibold text-white hover:bg-amber-600">
            Contact
          </Link>
        </div>

        <button
          className="rounded border border-gray-200 px-3 py-2 text-gray-700 hover:text-secondary md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
    </header>
  );
}
