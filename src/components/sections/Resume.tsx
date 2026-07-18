"use client";

import { Briefcase } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { RESUME_ITEMS } from "@/lib/data";

export default function Resume() {
  return (
    <section id="resume" className="page-section py-24 md:py-32">
      <div className="custom-container max-w-[1130px] mx-auto px-4">
        <div className="content-width max-w-[770px] w-full mx-auto">
          <SectionHeader
            subtitle="Resume"
            subtitleIcon={<Briefcase size={14} />}
            title={
              <>
                Education & <span className="text-accent">Experience</span>
              </>
            }
          />

          <div className="resume-timeline mt-16 space-y-12 overflow-x-visible">
            {RESUME_ITEMS.map((item, idx) => (
              <ScrollAnimation
                key={item.date}
                animation="fade_from_right"
                delay={idx * 0.15}
              >
                <div className="item relative border-l border-[#333] pl-8">
                  <span className="absolute left-[-5px] top-0 h-[10px] w-[10px] rounded-full bg-accent" />
                  <span className="text-xs font-medium uppercase tracking-widest text-accent">
                    {item.date}
                  </span>
                  {item.entries.map((entry, eIdx) => (
                    <div key={eIdx} className={eIdx > 0 ? "mt-4" : "mt-3"}>
                      <h2 className="text-lg font-semibold text-white">
                        {entry.title}
                      </h2>
                      <p className="mt-0.5 text-sm text-[#777]">
                        {entry.company}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
