import type { ReactNode } from "react";
import ScrollAnimation from "./ScrollAnimation";

interface SectionHeaderProps {
  subtitle: string;
  subtitleIcon?: ReactNode;
  title: ReactNode;
  animation?: "fade_from_bottom";
}

export default function SectionHeader({
  subtitle,
  subtitleIcon,
  title,
  animation = "fade_from_bottom",
}: SectionHeaderProps) {
  return (
    <div className="section-header">
      <ScrollAnimation animation={animation}>
        <h4 className="subtitle inline-flex items-center gap-2 rounded-full border border-[#565656] px-5 py-2 text-xs font-light uppercase text-white">
          {subtitleIcon}
          {subtitle}
        </h4>
      </ScrollAnimation>
      <ScrollAnimation animation={animation} delay={0.1}>
        <h1 className="mt-14 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
      </ScrollAnimation>
    </div>
  );
}
