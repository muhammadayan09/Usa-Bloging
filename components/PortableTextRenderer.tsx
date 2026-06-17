"use client";

import Image from "next/image";
import Link from "next/link";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { urlFor } from "@/lib/sanity/image";

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || "Article image"}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-600 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    codeBlock: ({ value }: any) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
        <code className="font-mono text-sm">{value.code}</code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-6 text-gray-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold my-5 text-gray-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold my-4 text-gray-900">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-7 mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-secondary pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-4">{children}</li>,
  },
  marks: {
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm text-red-600">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const rel = value?.rel || "noopener noreferrer";
      const target = value?.url?.startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value?.href || value?.url || ""}
          rel={rel}
          target={target}
          className="text-secondary hover:text-blue-600 underline transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};

interface PortableTextRendererProps {
  content: any;
}

export default function PortableTextRenderer({ content }: PortableTextRendererProps) {
  if (!content) return null;

  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
}
