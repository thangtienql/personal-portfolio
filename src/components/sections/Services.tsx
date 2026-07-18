"use client";

import { Layers, Code, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const iconMap: Record<string, React.ReactNode> = {
  "bezier-curve": <Layers size={22} />,
  code: <Code size={22} />,
  "trending-up": <TrendingUp size={22} />,
};

const SERVICES = [
  {
    icon: "bezier-curve",
    title: "Website Design",
    description:
      "I create digital products with unique ideas using Figma & modern design tools",
    projects: "24 Projects",
  },
  {
    icon: "code",
    title: "Development",
    description:
      "I build websites with React, Next.js, Node.js and modern tech stacks",
    projects: "126 Projects",
  },
  {
    icon: "trending-up",
    title: "SEO / Marketing",
    description:
      "Increase the traffic for your website with SEO optimized",
    projects: "8 Projects",
  },
];

export default function Services() {
  return (
    <section id="services" className="page-section py-24 md:py-32">
      <div className="custom-container max-w-[1130px] mx-auto px-4">
        <div className="content-width max-w-[770px] w-full mx-auto">
          <SectionHeader
            subtitle="Services"
            subtitleIcon={<Layers size={14} />}
            title={
              <>
                My <span className="text-accent">Specializations</span>
              </>
            }
          />

          <div className="services-items mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, idx) => (
              <ScrollAnimation
                key={service.title}
                animation="fade_from_bottom"
                delay={idx * 0.15}
              >
                <div className="service-item group rounded-2xl border border-[#333] bg-[#252525] p-8 transition-all hover:border-accent/50">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-black">
                    {iconMap[service.icon]}
                  </div>
                  <h2 className="text-lg font-semibold text-white">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#999]">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-block text-xs font-medium uppercase tracking-wider text-accent">
                    {service.projects}
                  </span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
