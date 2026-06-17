import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure - Blogsterix",
  description: "Affiliate disclosure for Blogsterix blog website",
  robots: "noindex, follow",
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 md:py-16">
        <Container className="py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Affiliate Disclosure
          </h1>
          <p className="text-gray-600">
            Transparency about how we earn commissions and maintain our business
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none space-y-6 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                What Are Affiliate Links?
              </h2>
              <p>
                An affiliate link is a special URL that tracks referrals from our website. When you click an affiliate link on Blogsterix and make a purchase, we earn a commission. This is at no extra cost to you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Products and Services We Promote
              </h2>
              <p>
                Blogsterix includes affiliate links for products and services in the following categories:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Web hosting and domain registrars</li>
                <li>AI writing and content creation tools</li>
                <li>SEO and marketing software</li>
                <li>Email marketing platforms</li>
                <li>Productivity and project management tools</li>
                <li>Educational courses and resources</li>
                <li>WordPress plugins and themes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                How We Choose Products to Recommend
              </h2>
              <p>
                We only recommend products and services we genuinely believe in and have tested or researched thoroughly. Our recommendations are based on:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Personal use and experience</li>
                <li>Quality and value for money</li>
                <li>Customer reviews and ratings</li>
                <li>Relevance to our audience</li>
                <li>Reputation and reliability</li>
              </ul>
              <p className="mt-4">
                While we do earn commissions, this does not compromise our editorial integrity. We would never recommend a poor product just for a commission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Identifying Affiliate Links
              </h2>
              <p>
                We are committed to transparency. Affiliate links on Blogsterix are typically identified by:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Explicit disclosure within the article</li>
                <li>Hover tooltips showing "This is an affiliate link"</li>
                <li>The rel="sponsored" or rel="nofollow" attribute in the HTML</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Benefits to You
              </h2>
              <p>
                Using our affiliate links doesn't cost you anything extra. You benefit from:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Same prices as direct links to the vendor</li>
                <li>Access to exclusive discounts we negotiate</li>
                <li>Support for Blogsterix to continue creating free content</li>
                <li>Vetted recommendations from experienced creators</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Our Commitment to You
              </h2>
              <p>
                We are committed to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Disclosing all affiliate relationships transparently</li>
                <li>Never recommending low-quality products for commission</li>
                <li>Providing honest reviews and comparisons</li>
                <li>Maintaining editorial independence</li>
                <li>Prioritizing reader benefit over commission potential</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                How Our Commissions Support Blogsterix
              </h2>
              <p>
                The commissions we earn from affiliate partnerships help us:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Maintain and improve our website</li>
                <li>Create more high-quality, in-depth content</li>
                <li>Pay for research and tools to make better recommendations</li>
                <li>Keep content free for our readers</li>
                <li>Invest in creating resources that help beginners</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Shopping Without Affiliate Links
              </h2>
              <p>
                You can support our recommendations without using affiliate links if you prefer. Simply:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Search for the product directly on Google</li>
                <li>Visit the company website directly</li>
                <li>Use a different referral link if available</li>
              </ul>
              <p className="mt-4">
                We appreciate if you do use our links to help support Blogsterix, but we understand if you prefer to shop directly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Non-Affiliate Recommendations
              </h2>
              <p>
                Not all recommendations on Blogsterix are affiliate links. We also recommend free tools, open-source software, and competitors' products when they're the best option for our readers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Questions or Concerns?
              </h2>
              <p>
                If you have questions about our affiliate relationships or would like to report a missing disclosure, please{" "}
                <a href="/contact" className="text-secondary hover:text-blue-600">
                  contact us
                </a>
                .
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-secondary p-6 mt-8">
              <p className="font-semibold text-gray-900 mb-2">
                ✓ Our Promise
              </p>
              <p>
                We promise to always disclose affiliate relationships, maintain editorial independence, and prioritize your interests. Your trust is important to us.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
