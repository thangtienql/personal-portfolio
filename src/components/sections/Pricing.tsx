"use client";

import { DollarSign } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const PACKAGES = [
  {
    name: "basic",
    description: "Have design ready to build?\nor small budget",
    price: 59,
    features: [
      "Need your wireframe",
      "Design with Figma",
      "Implement with React, Next.js, Node.js",
      "Remote / Online",
      "Work in business days, no weekend",
      "Support 6 months",
    ],
  },
  {
    name: "premium",
    description: "Not have any design?\nLeave it for me",
    price: 129,
    features: [
      "Don't need wireframe or anything",
      "Design with Figma from scratch",
      "Implement with React, Next.js, Node.js",
      "Remote / Online",
      "Work with both weekend",
      "Support 12 months",
      "Your project always be priority",
      "Customer care gifts",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="page-section py-24 md:py-32">
      <div className="custom-container max-w-[1130px] mx-auto px-4">
        <div className="content-width max-w-[770px] w-full mx-auto">
          <SectionHeader
            subtitle="Pricing"
            subtitleIcon={<DollarSign size={14} />}
            title={
              <>
                My <span className="text-accent">Pricing</span>
              </>
            }
          />

          <div className="mt-16 grid gap-6 min-w-0 md:grid-cols-2">
            {PACKAGES.map((pkg, idx) => (
              <ScrollAnimation
                key={pkg.name}
                animation={idx === 0 ? "fade_from_left" : "fade_from_right"}
                delay={0.1}
              >
                <div className="pricing-table h-full rounded-2xl border border-[#333] bg-[#252525] p-8 transition-all hover:border-accent/50">
                  <div className="pricing-table-header">
                    <div className="top flex items-start justify-between">
                      <h4 className="text-lg font-semibold uppercase text-white">
                        {pkg.name}
                      </h4>
                      <p className="text-right text-xs leading-relaxed text-[#777] whitespace-pre-line">
                        {pkg.description}
                      </p>
                    </div>
                    <h1 className="mt-6 text-4xl font-bold text-white">
                      ${pkg.price}{" "}
                      <span className="text-base font-normal text-[#777]">
                        / hour
                      </span>
                    </h1>
                  </div>
                  <ul className="feature-lists mt-8 space-y-3">
                    {pkg.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3 text-sm text-[#999]"
                      >
                        <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="theme-btn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-accent bg-accent px-6 py-3 text-xs font-semibold uppercase text-black transition-all hover:bg-transparent hover:text-accent"
                  >
                    Pick this package
                  </a>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fade_from_bottom" delay={0.3}>
            <p className="mt-10 text-center text-sm text-[#777]">
              Don&apos;t find any package match with your plan!
              <br />
              Want to setup a new tailor-made package for only you?{" "}
              <a href="#contact" className="text-accent hover:underline">
                Contact Us
              </a>
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
