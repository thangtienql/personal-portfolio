"use client";

import { Mail, CloudUpload } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section id="contact" className="page-section py-24 md:py-32">
      <div className="custom-container max-w-[1130px] mx-auto px-4">
        <div className="content-width max-w-[770px] w-full mx-auto">
          <SectionHeader
            subtitle="Contact"
            subtitleIcon={<Mail size={14} />}
            title={
              <>
                Let&apos;s Work <span className="text-accent">Together!</span>
              </>
            }
          />

          <ScrollAnimation animation="fade_from_bottom" delay={0.1}>
            <h3 className="mt-12 text-xl font-semibold text-white">
              hello@johndoe.dev
            </h3>
          </ScrollAnimation>

          <ScrollAnimation animation="fade_from_bottom" delay={0.15}>
            <p className="mt-2 text-sm text-[#777]">
              * Marked fields are required to fill.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade_from_bottom" delay={0.2}>
            <form className="mt-12" onSubmit={handleSubmit}>
              {submitted && (
                <div className="mb-6 rounded-xl border border-accent/50 bg-accent/10 px-4 py-3 text-sm text-accent">
                  Your message was sent successfully.
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                {/* Full Name */}
                <div className="input-group" suppressHydrationWarning>
                  <label
                    htmlFor="full-name"
                    className="mb-2 block text-xs font-light uppercase tracking-wider text-[#999]"
                  >
                    Full Name <sup className="text-accent">*</sup>
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    placeholder="Your Full Name"
                    required
                    className="w-full rounded-lg border border-[#333] bg-[#252525] px-4 py-3 text-sm text-white placeholder:text-[#555] focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="input-group" suppressHydrationWarning>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-light uppercase tracking-wider text-[#999]"
                  >
                    Email <sup className="text-accent">*</sup>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    required
                    className="w-full rounded-lg border border-[#333] bg-[#252525] px-4 py-3 text-sm text-white placeholder:text-[#555] focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="input-group" suppressHydrationWarning>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-light uppercase tracking-wider text-[#999]"
                  >
                    Phone <span className="text-[#555]">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    className="w-full rounded-lg border border-[#333] bg-[#252525] px-4 py-3 text-sm text-white placeholder:text-[#555] focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Subject */}
                <div className="input-group" suppressHydrationWarning>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-light uppercase tracking-wider text-[#999]"
                  >
                    Subject <sup className="text-accent">*</sup>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-lg border border-[#333] bg-[#252525] px-4 py-3 text-sm text-white focus:border-accent focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="web-design">Web Design</option>
                    <option value="development">Development</option>
                    <option value="seo">SEO / Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="input-group md:col-span-2" suppressHydrationWarning>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-xs font-light uppercase tracking-wider text-[#999]"
                  >
                    Your Budget <span className="text-[#555]">(optional)</span>
                  </label>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    placeholder="A range budget for your project"
                    className="w-full rounded-lg border border-[#333] bg-[#252525] px-4 py-3 text-sm text-white placeholder:text-[#555] focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="input-group md:col-span-2" suppressHydrationWarning>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-light uppercase tracking-wider text-[#999]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here ..."
                    className="w-full rounded-lg border border-[#333] bg-[#252525] px-4 py-3 text-sm text-white placeholder:text-[#555] focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Attachment */}
                <div className="input-group upload-attachment md:col-span-2">
                  <label
                    htmlFor="attachment"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-[#555] px-5 py-3 text-sm text-[#999] transition-colors hover:border-accent hover:text-accent"
                  >
                    <CloudUpload size={18} /> Add an attachment
                    <input
                      type="file"
                      id="attachment"
                      name="file"
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Submit */}
                <div className="input-group submit-btn-wrap md:col-span-2">
                  <button
                    type="submit"
                    className="theme-btn inline-flex items-center gap-2 rounded-full border-2 border-accent bg-accent px-10 py-3 text-xs font-semibold uppercase text-black transition-all hover:bg-transparent hover:text-accent"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
