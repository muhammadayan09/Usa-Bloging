import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Blogsterix",
  description: "Privacy policy for Blogsterix blog website",
  robots: "noindex, follow",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
                1. Introduction
              </h2>
              <p>
                Blogsterix ("we," "our," or "us") operates the website blogsterix.com (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing and using Blogsterix, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                Personal Data You Provide
              </h3>
              <p>
                We may collect personal information you voluntarily provide, including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Name and email address (for newsletter signup)</li>
                <li>Contact information (for inquiry forms)</li>
                <li>Comments and feedback on articles</li>
                <li>Information you provide through contact forms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                Automatically Collected Data
              </h3>
              <p>
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referral source and clickstream data</li>
                <li>Device information and operating system</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                3. How We Use Your Information
              </h2>
              <p>We use the information we collect for purposes including:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Delivering newsletter content and updates</li>
                <li>Responding to inquiries and customer service</li>
                <li>Improving our website functionality and user experience</li>
                <li>Analytics and understanding user behavior</li>
                <li>Marketing and promotional communications (with consent)</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                4. Third-Party Services
              </h2>
              <p>
                We use third-party services that may collect information about your usage:
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                Google Analytics
              </h3>
              <p>
                We use Google Analytics to analyze website traffic. Google may collect information about your browsing activities. For more information, visit{" "}
                <a href="https://policies.google.com/privacy" rel="nofollow" className="text-secondary hover:text-blue-600">
                  Google's Privacy Policy
                </a>
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                Google AdSense
              </h3>
              <p>
                We display ads through Google AdSense. Google may use cookies and other tracking technologies. Visit{" "}
                <a href="https://policies.google.com/technologies/ads" rel="nofollow" className="text-secondary hover:text-blue-600">
                  Google Ads Privacy
                </a>
                {" "}for details.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                Email Marketing Service
              </h3>
              <p>
                We use email marketing services to send newsletters. Your email address is processed according to their privacy policies.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                Affiliate Partners
              </h3>
              <p>
                When you click affiliate links, partner websites may collect information about your visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                5. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar technologies to enhance your experience. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand usage</li>
                <li>Advertising cookies to deliver relevant ads</li>
              </ul>
              <p>
                You can control cookies through your browser settings. Disabling cookies may affect website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                6. Data Security
              </h2>
              <p>
                We implement reasonable security measures to protect your information. However, no method is completely secure. We are not responsible for unauthorized access beyond our reasonable control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                7. Your Rights and Choices
              </h2>
              <p>You have the following rights:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Unsubscribe from marketing emails at any time</li>
                <li>Request access to personal information we hold</li>
                <li>Request deletion of personal information</li>
                <li>Control cookies through browser settings</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                8. GDPR and Privacy Laws
              </h2>
              <p>
                If you are located in the EU or other jurisdictions with data protection laws, we comply with applicable requirements including GDPR.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                9. Children's Privacy
              </h2>
              <p>
                Our Service is not directed to children under 13. We do not knowingly collect information from children under 13. If we learn we have collected such information, we will delete it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                10. Policy Updates
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Your continued use of our Service constitutes acceptance of changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                11. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our practices, please contact us at:
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
