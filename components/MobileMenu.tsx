"use client";

import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  onClose: () => void;
}

const categoryLinks = [
  ["AI Tools", "/category/ai-tools"],
  ["Blogging", "/category/blogging"],
  ["SEO", "/category/seo"],
  ["Creator Tools", "/category/creator-tools"],
  ["Make Money Online", "/category/make-money-online"],
];

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <div className="border-t border-gray-200 bg-white md:hidden">
      <div className="space-y-2 px-4 py-3">
        <Link href="/" className="block rounded px-3 py-2 font-semibold text-gray-700 hover:bg-gray-100" onClick={onClose}>
          Home
        </Link>
        <Link href="/blog" className="block rounded px-3 py-2 font-semibold text-gray-700 hover:bg-gray-100" onClick={onClose}>
          Blog
        </Link>

        <button
          onClick={() => setCategoriesOpen(!categoriesOpen)}
          className="w-full rounded px-3 py-2 text-left font-semibold text-gray-700 hover:bg-gray-100"
        >
          Categories {categoriesOpen ? "up" : "down"}
        </button>
        {categoriesOpen && (
          <div className="space-y-1 pl-3">
            {categoryLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="block rounded px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100"
                onClick={onClose}
              >
                {label}
              </Link>
            ))}
          </div>
        )}

        {[
          ["Resources", "/resources"],
          ["About", "/about"],
          ["Contact", "/contact"],
        ].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="block rounded px-3 py-2 font-semibold text-gray-700 hover:bg-gray-100"
            onClick={onClose}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
