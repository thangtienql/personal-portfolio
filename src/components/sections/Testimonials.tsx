"use client";

import { MessageCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Paublo Dybala",
    role: "CEO of IBM Global",
    content:
      "\"Drake - A Developer with the creativity, professional and master of code. Much more than what i'm expect. High quality product & flexiable price. Recommended!.\"",
  },
  {
    id: 2,
    name: "Christina Morillo",
    role: "Product Management of Invision App Inc",
    content:
      "\"Drake was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of designer that you can trust with any project from A-Z.\"",
  },
  {
    id: 3,
    name: "Phil Foden",
    role: "Director of Envato LLC",
    content:
      "\"Extremely profressional and fast service!. Drake is a master of code and he also very creative. We done 3 projects with him and certain will continue.\"",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonial" className="page-section py-24 md:py-32">
      <div className="custom-container max-w-[1130px] mx-auto px-4">
        <div className="content-width max-w-[770px] w-full mx-auto">
          <SectionHeader
            subtitle="Testimonial"
            subtitleIcon={<MessageCircle size={14} />}
            title={
              <>
                Trusted by Hundered <span className="text-accent">Clients</span>
              </>
            }
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, idx) => (
              <ScrollAnimation
                key={testimonial.id}
                animation="fade_from_bottom"
                delay={idx * 0.15}
              >
                <div className="relative h-full rounded-2xl border border-[#333] bg-[#252525] p-8 transition-all hover:border-accent/50">
                  {/* Avatar */}
                  <div className="mb-6 h-14 w-14 overflow-hidden rounded-full border-2 border-accent/30">
                    <img
                      src={`/images/testimonial${testimonial.id}.jpg`}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#777]">
                    {testimonial.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#999]">
                    {testimonial.content}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
