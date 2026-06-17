import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - Blogsterix",
  description: "Disclaimer for Blogsterix blog website",
  robots: "noindex, follow",
};

export default function DisclaimerPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 md:py-16">
        <Container className="py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Disclaimer
          </h1>
          <p className="text-gray-600">
            Please read our disclaimer carefully before using Blogsterix
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none space-y-6 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                No Professional Advice
              </h2>
              <p>
                The content on Blogsterix is for informational and educational purposes only. We do not provide professional advice including legal, financial, medical, or business advice. Always consult with qualified professionals before making important decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                No Warranties
              </h2>
              <p>
                The information, content, and services on Blogsterix are provided "as is" without warranties of any kind. We make no representations about accuracy, completeness, or reliability of the content. Your use of Blogsterix is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Research Before Acting
              </h2>
              <p>
                While we strive to provide accurate information, you should conduct your own research and due diligence. Circumstances change, and what works for one person may not work for another. Always verify information through multiple sources.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                No Income Guarantees
              </h2>
              <p>
                Articles about making money online or growing a blog do not guarantee income or results. Income potential varies based on effort, market conditions, and other factors. Results are not typical for everyone.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Affiliate Relationships
              </h2>
              <p>
                Blogsterix may earn commissions from affiliate links. While we only recommend products we believe in, we have a financial interest in promoting these products. This may influence our recommendations. See our{" "}
                <a href="/affiliate-disclosure" className="text-secondary hover:text-blue-600">
                  Affiliate Disclosure
                </a>
                {" "}for more details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                External Links
              </h2>
              <p>
                Blogsterix contains links to third-party websites. We are not responsible for their content, accuracy, or practices. Review their terms and policies before using their services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Blogsterix and its authors are not liable for any indirect, incidental, special, or consequential damages resulting from your use of our website or reliance on our content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Tool Recommendations
              </h2>
              <p>
                While we recommend tools and services we use and believe in, we cannot guarantee they will work for your specific situation. Features and pricing change. Conduct your own evaluation before purchasing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Health and Safety
              </h2>
              <p>
                Do not use Blogsterix as a substitute for professional medical, health, or safety advice. If you have health concerns, consult a qualified healthcare professional.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Changes to Disclaimer
              </h2>
              <p>
                Blogsterix reserves the right to modify this disclaimer at any time. Changes are effective immediately upon posting. Your continued use of our site indicates acceptance of the updated disclaimer.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-accent p-6 mt-8">
              <p className="font-semibold text-gray-900 mb-2">
                ⚠️ Important Notice
              </p>
              <p>
                By accessing and using Blogsterix, you acknowledge that you have read and understood this disclaimer and agree to be bound by its terms. If you do not agree with any part of this disclaimer, please do not use our site.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
