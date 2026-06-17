import Container from "@/components/Container";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Blogsterix - Smart Blogging for Beginners",
  description:
    "Learn about Blogsterix, a practical resource for AI tools, blogging systems, SEO, and creator monetization.",
  robots: "index, follow",
};

const values = [
  {
    title: "Useful before clever",
    text: "Every guide is written to help a beginner take action, not just collect theory.",
  },
  {
    title: "Honest recommendations",
    text: "Affiliate links are disclosed clearly, and tools are explained with best-fit use cases.",
  },
  {
    title: "Systems over hacks",
    text: "We focus on repeatable workflows that survive algorithm changes and trend cycles.",
  },
  {
    title: "Beginner-friendly depth",
    text: "Complex topics are broken into simple steps without making the advice shallow.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-950 text-white">
        <Container className="py-14 md:py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
            About Blogsterix
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            We help beginners turn scattered ideas into useful, trusted blogs.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Blogsterix is built for creators who want practical guidance on AI
            tools, content planning, SEO, affiliate strategy, and online growth.
          </p>
        </Container>
      </section>

      <section className="py-14 md:py-18">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-secondary">
                Our mission
              </p>
              <h2 className="mt-2 text-3xl font-black text-gray-950 md:text-4xl">
                Make blogging feel clear, calm, and actually achievable.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-gray-700">
              <p>
                New bloggers often get stuck between too many tools, too much
                SEO advice, and content that sounds generic. Blogsterix brings
                everything back to a simple question: what helps the reader?
              </p>
              <p>
                We publish playbooks, reviews, templates, and workflows that
                help you research better topics, write stronger posts, and build
                monetization into your site without losing trust.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-14 md:py-18">
        <Container>
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-secondary">
              What we cover
            </p>
            <h2 className="mt-2 text-3xl font-black text-gray-950 md:text-4xl">
              The full creator workflow.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {["AI tool workflows", "SEO and keyword maps", "Affiliate content", "Creator productivity"].map(
              (item) => (
                <div key={item} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 h-2 w-12 rounded-full bg-amber-400" />
                  <h3 className="text-xl font-bold text-gray-950">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Clear guides, practical examples, and decision-friendly recommendations.
                  </p>
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-18">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-950">{value.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{value.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg bg-gray-950 p-8 text-center text-white">
            <h2 className="text-3xl font-black text-white">Ready to build smarter?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-300">
              Start with the featured AI blogging guide or browse our tool
              recommendations for your next publishing setup.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href="/blog" size="lg">
                Read Articles
              </Button>
              <Button href="/resources" variant="secondary" size="lg">
                View Resources
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
