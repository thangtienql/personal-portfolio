import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Palette } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import ColorCard from '@/components/colors/ColorCard';
import { COLOR_GROUPS } from '@/lib/colors';

export const metadata: Metadata = {
  title: 'Color System — Personal Portfolio',
  description:
    'The live design palette powering this portfolio — every color, token, and hex code in one place.',
};

const TOTAL_COLORS = COLOR_GROUPS.reduce((sum, group) => sum + group.colors.length, 0);

export default function ColorsPage() {
  return (
    <main className="min-h-screen bg-[#1f1f1f] px-4 py-6 text-[#999999] sm:px-8 sm:py-8">
      <div className="custom-container mx-auto max-w-[1130px]">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="hover:border-accent hover:text-accent inline-flex items-center gap-2 rounded-full border border-[#565656] px-5 py-2 text-sm font-light tracking-wide text-[#999] uppercase transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
          <img src="/images/logo.png" alt="Logo" className="h-9 w-auto" />
        </div>

        <header className="mt-20 max-w-[770px]">
          <ScrollAnimation animation="fade_from_bottom">
            <h4 className="inline-flex items-center gap-2 rounded-full border border-[#565656] px-5 py-2 text-xs font-light text-white uppercase">
              <Palette size={14} />
              Design Tokens
            </h4>
          </ScrollAnimation>
          <ScrollAnimation animation="fade_from_bottom" delay={0.1}>
            <h1 className="mt-14 text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
              Color <span className="text-accent">System</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade_from_bottom" delay={0.2}>
            <p className="mt-6 text-base leading-relaxed">
              The live palette powering this portfolio — every color used across the design tokens
              and components, organized by role.
            </p>
            <span className="border-accent bg-accent/10 text-accent mt-6 inline-block rounded-full border px-4 py-1.5 text-xs tracking-wide uppercase">
              {TOTAL_COLORS} colors · {COLOR_GROUPS.length} groups
            </span>
          </ScrollAnimation>
        </header>

        <div className="mt-20 flex flex-col gap-20">
          {COLOR_GROUPS.map((group, gi) => (
            <section key={group.id} aria-labelledby={`group-${group.id}`}>
              <ScrollAnimation animation="fade_from_bottom">
                <div className="flex items-center gap-4">
                  <span className="text-accent font-mono text-sm">
                    {String(gi + 1).padStart(2, '0')}
                  </span>
                  <h2
                    id={`group-${group.id}`}
                    className="text-xl font-bold tracking-wide text-white uppercase sm:text-2xl"
                  >
                    {group.label}
                  </h2>
                </div>
                <div className="bg-accent mt-4 h-px w-24" />
              </ScrollAnimation>

              <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {group.colors.map((token, idx) => (
                  <ColorCard key={token.hex} token={token} idx={idx} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
