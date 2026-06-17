interface HeadingItem {
  text: string;
  id: string;
  level: number;
}

interface TableOfContentsProps {
  headings: HeadingItem[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) return null;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
      <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
        <span>📑</span> Table of Contents
      </h3>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id} style={{ paddingLeft: `${(heading.level - 2) * 1.5}rem` }}>
            <a
              href={`#${heading.id}`}
              className="text-secondary hover:text-blue-600 transition-colors"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
