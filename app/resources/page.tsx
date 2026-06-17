import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recommended Tools & Resources - Blogsterix",
  description:
    "Handpicked tools for blogging, AI writing, SEO, email marketing, hosting, and creator productivity.",
  robots: "index, follow",
};

const resources = [
  {
    category: "AI Writing",
    description: "Brainstorm, outline, edit, and refresh content faster.",
    tools: ["ChatGPT", "Claude", "Jasper"],
  },
  {
    category: "SEO Research",
    description: "Find topics, compare competitors, and track search opportunities.",
    tools: ["Ahrefs", "Semrush", "Google Search Console"],
  },
  {
    category: "Publishing",
    description: "Host and manage your blog with reliable creator-friendly platforms.",
    tools: ["WordPress", "Vercel", "Hostinger"],
  },
  {
    category: "Email Growth",
    description: "Turn readers into subscribers and build a direct relationship.",
    tools: ["ConvertKit", "MailerLite", "Beehiiv"],
  },
  {
    category: "Productivity",
    description: "Organize ideas, calendars, briefs, and publishing workflows.",
    tools: ["Notion", "Trello", "Zapier"],
  },
  {
    category: "Design",
    description: "Create clean featured images, diagrams, and social previews.",
    tools: ["Canva", "Figma", "TinyPNG"],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-gray-950 text-white">
        <Container className="py-14 md:py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
            Creator toolkit
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            Tools that help you publish better without overcomplicating the stack.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            A practical resource board for bloggers who want AI, SEO, email,
            hosting, and design tools that support real workflows.
          </p>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((section) => (
              <div key={section.category} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded bg-sky-50 text-xl font-black text-secondary">
                  {section.category.slice(0, 1)}
                </div>
                <h2 className="text-2xl font-bold text-gray-950">{section.category}</h2>
                <p className="mt-3 leading-7 text-gray-600">{section.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {section.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-xl font-bold text-gray-950">Affiliate Disclosure</h2>
            <p className="mt-2 leading-7 text-gray-700">
              Some resource links may be affiliate links. If you buy through
              them, Blogsterix may earn a commission at no extra cost to you.
              Recommendations stay focused on usefulness and fit.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
