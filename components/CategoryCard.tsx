import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";

interface CategoryCardProps {
  category: {
    _id: string;
    title: string;
    slug: { current: string };
    description: string;
    image?: any;
  };
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.slug.current}`}>
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
        {/* Category Image */}
        <div className="relative h-40 overflow-hidden bg-gradient-to-br from-secondary to-blue-600">
          {category.image && (
            <Image
              src={urlFor(category.image).width(400).height(300).url()}
              alt={category.title}
              fill
              className="object-cover hover:scale-110 transition-transform duration-300 opacity-80"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-secondary transition-colors">
            {category.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">{category.description}</p>
          <div className="mt-4 text-secondary font-semibold text-sm hover:text-blue-600 transition-colors">
            Explore Category →
          </div>
        </div>
      </article>
    </Link>
  );
}
