import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Blogsterix",
  description: "Terms and conditions for using Blogsterix",
  robots: "noindex, follow",
};

export default function TermsAndConditionsPage() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 md:py-16">
        <Container className="py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-600">
            Last updated: {lastUpdated}
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none space-y-6 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using Blogsterix (blogsterix.com), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                2. Use of Website
              </h2>
              <p>You agree to use Blogsterix only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website. Prohibited behavior includes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Harassing or causing distress or inconvenience</li>
                <li>Obscene or offensive content</li>
                <li>Disrupting normal flow of dialogue in our communities</li>
                <li>Republishing or scraping content without permission</li>
                <li>Attempting to gain unauthorized access</li>
                <li>Transmitting viruses or malicious code</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                3. Intellectual Property Rights
              </h2>
              <p>
                All content on Blogsterix, including text, images, graphics, logos, and software, is the property of Blogsterix or its content suppliers and is protected by international copyright laws.
              </p>
              <p>
                You may view and print pages for personal use, but you may not reproduce, modify, distribute, or transmit content without express permission from Blogsterix.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                4. Third-Party Content
              </h2>
              <p>
                Blogsterix may contain links to third-party websites and services. We are not responsible for their content, accuracy, or practices. Use third-party services at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                5. User Comments and Submissions
              </h2>
              <p>
                By submitting comments, feedback, or content to Blogsterix, you grant us a perpetual, non-exclusive, royalty-free license to use such content. You warrant that your submissions do not violate third-party rights or applicable laws.
              </p>
              <p>
                We reserve the right to moderate, edit, or remove any comments that violate these terms or our community guidelines.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                6. Disclaimers
              </h2>
              <p>
                The content on Blogsterix is provided "as is" without warranties. We make no representations about accuracy, completeness, or reliability. Your use is at your own risk. See our{" "}
                <a href="/disclaimer" className="text-secondary hover:text-blue-600">
                  Disclaimer page
                </a>
                {" "}for more details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Blogsterix is not liable for any indirect, incidental, special, or consequential damages resulting from your use of or inability to use the website or content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                8. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Blogsterix and its owners, operators, and contributors from any claim, demand, or damage arising from your use of the website or violation of these terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                9. Affiliate Relationships
              </h2>
              <p>
                Blogsterix may contain affiliate links and earn commissions from purchases made through these links. See our{" "}
                <a href="/affiliate-disclosure" className="text-secondary hover:text-blue-600">
                  Affiliate Disclosure
                </a>
                {" "}for complete details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                10. Advertising
              </h2>
              <p>
                Blogsterix displays advertisements, including Google AdSense ads. We are not responsible for advertiser content. Ads are not an endorsement of products or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                11. Email Communications
              </h2>
              <p>
                By subscribing to our newsletter, you consent to receive email communications. You can unsubscribe at any time using the link in our emails.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                12. Website Availability
              </h2>
              <p>
                While we strive to maintain our service, we do not guarantee continuous or error-free operation. We may modify or discontinue the website at any time without liability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                13. Governing Law
              </h2>
              <p>
                These terms are governed by applicable laws. Any disputes shall be resolved through binding arbitration or court proceedings as applicable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                14. Changes to Terms
              </h2>
              <p>
                Blogsterix reserves the right to modify these terms at any time. Changes are effective immediately. Your continued use indicates acceptance of modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                15. Contact Information
              </h2>
              <p>
                For questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> contact@blogsterix.com
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
