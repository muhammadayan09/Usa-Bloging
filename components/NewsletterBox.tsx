"use client";

import { useState } from "react";
import Button from "./Button";

export default function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open user's mail client to send subscription request to site owner
    try {
      const subject = encodeURIComponent("Subscribe: Blogsterix Weekly Brief");
      const body = encodeURIComponent(`Please subscribe ${email} to the Blogsterix weekly creator brief.`);
      window.location.href = `mailto:iamayan469@gmail.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Unable to open mail client", err);
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="overflow-hidden rounded-lg bg-white text-gray-900 shadow-lg">
      <div className="grid gap-8 p-6 md:grid-cols-[1fr_0.9fr] md:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-amber-500">
            Weekly creator brief
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
            Get smarter blogging ideas before you publish your next post.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-gray-600">
            One practical email with AI workflows, SEO ideas, tool picks, and
            content systems for beginners building serious websites.
          </p>
        </div>

        <div className="rounded-lg border border-gray-100 bg-white p-5">
          {submitted ? (
            <div className="rounded bg-green-50 p-4 font-semibold text-green-800">
              Thanks. Check your email to confirm subscription.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded border border-white/20 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <Button
                type="submit"
                variant="secondary"
                className="w-full justify-center"
              >
                Subscribe Free
              </Button>
            </form>
          )}
          <p className="mt-4 text-xs leading-5 text-gray-400">
            No spam. Unsubscribe anytime. Useful ideas only.
          </p>
        </div>
      </div>
    </section>
  );
}
