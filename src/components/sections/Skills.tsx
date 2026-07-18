"use client";

import { Shapes } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

import { SKILLS } from "@/lib/data";

function SkillItem({ name, percent, idx }: { name: string; percent: number; idx: number }) {
  const animations = [
    "fade_from_left",
    "fade_from_bottom",
    "fade_from_top",
    "fade_from_right",
    "fade_from_left",
    "fade_from_bottom",
  ] as const;

  return (
    <ScrollAnimation animation={animations[idx]} delay={idx * 0.1}>
      <div className="skill flex flex-col items-center text-center">
        <div className="skill-inner relative mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full border border-[#333] bg-[#252525]">
          <h1 className="text-2xl font-bold text-white">{percent}%</h1>
        </div>
        <p className="mt-5 text-sm font-medium uppercase tracking-wider text-[#999]">
          {name}
        </p>
      </div>
    </ScrollAnimation>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="page-section py-24 md:py-32">
      <div className="custom-container max-w-[1130px] mx-auto px-4">
        <div className="content-width max-w-[770px] w-full mx-auto">
          <SectionHeader
            subtitle="My Skills"
            subtitleIcon={<Shapes size={14} />}
            title={
              <>
                My <span className="text-accent">Advantages</span>
              </>
            }
          />

          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
            {SKILLS.map((skill, idx) => (
              <SkillItem key={skill.name} {...skill} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
