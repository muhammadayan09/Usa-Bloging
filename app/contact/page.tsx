"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <section className="bg-gray-950 text-white">
        <Container className="py-14 md:py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
            Contact
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            Got a question, idea, or partnership pitch?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Send a message about content ideas, tool reviews, collaborations,
            sponsorships, or feedback that can make Blogsterix more useful.
          </p>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="space-y-5">
              {[
                ["Email", "contact@blogsterix.com"],
                ["Response time", "Usually within 24-48 hours"],
                ["Best for", "Partnerships, feedback, tool suggestions"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                  <h2 className="text-lg font-bold text-gray-950">{title}</h2>
                  <p className="mt-2 leading-7 text-gray-600">{text}</p>
                </div>
              ))}
              <div className="rounded-lg bg-sky-50 p-5">
                <h2 className="text-lg font-bold text-gray-950">What helps us reply faster</h2>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Include your website link, what you are building, and the
                  exact kind of help or collaboration you want.
                </p>
              </div>
            </aside>

            <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-xl md:p-8">
              {submitted && (
                <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
                  <p className="font-semibold text-green-800">
                    Thank you for your message. We will get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-bold text-gray-900">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Ayan"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-900">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-bold text-gray-900">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-bold text-gray-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none rounded border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Tell us what you are building or what you need..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Do you accept guest posts?", "Yes, if the idea is practical, original, and helpful for beginner creators."],
              ["Can brands sponsor content?", "Yes, but sponsored content must be transparent and genuinely useful for readers."],
              ["Can you review my tool?", "Send the product link, audience, pricing, and what makes it different."],
            ].map(([question, answer]) => (
              <div key={question} className="rounded-lg bg-gray-50 p-5">
                <h2 className="text-lg font-bold text-gray-950">{question}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-700">{answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
