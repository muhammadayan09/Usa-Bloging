"use client";

interface CategoryFilterProps {
  categories: Array<{ _id: string; title: string; slug: { current: string } }>;
  selectedCategory?: string;
  onCategoryChange?: (categorySlug: string | null) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-bold text-gray-900 mb-3">Filter by Category</h3>
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange?.(null)}
          className={`w-full text-left px-4 py-2 rounded transition-colors ${
            !selectedCategory
              ? "bg-secondary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => onCategoryChange?.(category.slug.current)}
            className={`w-full text-left px-4 py-2 rounded transition-colors ${
              selectedCategory === category.slug.current
                ? "bg-secondary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
}
