export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

export function calculateReadingTime(content: any[]): number {
  const wordsPerMinute = 200;
  let wordCount = 0;

  if (!Array.isArray(content)) {
    return 0;
  }

  const countWords = (block: any): number => {
    if (typeof block === "string") {
      return block.split(/\s+/).length;
    }
    if (block._type === "block" && block.children) {
      return block.children.reduce((count: number, child: any) => {
        return count + countWords(child.text || "");
      }, 0);
    }
    return 0;
  };

  wordCount = content.reduce((count: number, block: any) => {
    return count + countWords(block);
  }, 0);

  return Math.ceil(wordCount / wordsPerMinute);
}

export function generateTableOfContents(content: any[]) {
  const headings: any[] = [];

  if (!Array.isArray(content)) {
    return headings;
  }

  content.forEach((block: any) => {
    if (block._type === "block" && (block.style === "h2" || block.style === "h3")) {
      const text = block.children?.map((child: any) => child.text).join("") || "";
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      headings.push({
        text,
        id,
        level: block.style === "h2" ? 2 : 3,
      });
    }
  });

  return headings;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
}

export function getAbsoluteUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blogsterix.com";
  return `${baseUrl}${path}`;
}

export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
