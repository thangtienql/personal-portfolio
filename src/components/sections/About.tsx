"use client";

import { User } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function About() {
  return (
    <section id="about" className="page-section py-24 md:py-32">
      <div className="custom-container max-w-[1130px] mx-auto px-4">
        <div className="content-width max-w-[770px] w-full mx-auto">
          <SectionHeader
            subtitle="About"
            subtitleIcon={<User size={14} />}
            title={
              <>
                Every great design begin with
                <br />
                an even <span className="text-accent">better story</span>
              </>
            }
          />
          <ScrollAnimation animation="fade_from_bottom" delay={0.2}>
            <p className="mt-8 text-base leading-relaxed text-[#999] md:text-lg">
              Since beginning my journey as a web developer nearly 6 years ago,
              I've primarily focused on creating and customizing WordPress websites.
              Since 2020, I've been working with the talented team at Beplus to deliver
              high-quality digital products. I'm naturally curious, quietly confident,
              and always eager to learn and improve my skills.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
