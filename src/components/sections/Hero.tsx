"use client";

import { Home, ArrowDown } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useRef, useEffect } from "react";

function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const countRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const duration = 1500;
    const startTime = performance.now();
    // Capture in a non-nullable const so the tick() closure
    // passes TypeScript strict null checks during build.
    const elm = el;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuad for a smooth deceleration
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = Math.floor(eased * target);

      if (current !== countRef.current) {
        countRef.current = current;
        elm.textContent = `${current}+`;
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        elm.textContent = `${target}+`;
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target]);

  return <span ref={ref}>0+</span>;
}

export default function Hero() {
  return (
    <section
      id="home"
      className="page-section relative flex min-h-screen items-center"
    >
      <div className="custom-container w-full max-w-[1130px] mx-auto px-4">
        <div className="content-width max-w-[770px] w-full mx-auto">
          {/* Section header */}
          <div className="section-header">
            <ScrollAnimation animation="fade_from_bottom">
              <h4 className="subtitle mb-14 inline-flex items-center gap-2 rounded-full border border-[#565656] px-5 py-2 text-xs font-light uppercase text-white">
                <Home size={14} /> Introduce
              </h4>
            </ScrollAnimation>
            <ScrollAnimation animation="fade_from_bottom" delay={0.1}>
              <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Say Hi from <span className="text-accent">Tiến</span>,{" "}
                <br className="hidden sm:block" />
                Web Developer
              </h1>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fade_from_bottom" delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-[#999] md:text-lg">
              I specialize in creating beautiful and functional WordPress websites,
              and I love what I do. Just simple like that!
            </p>
          </ScrollAnimation>

          {/* Round button */}
          <ScrollAnimation animation="rotate_up" delay={0.3}>
            <a
              href="#portfolio"
              className="go-to-project-btn relative mx-auto mt-12 flex h-[120px] w-[120px] items-center justify-center"
            >
              <svg
                className="absolute inset-0 animate-spin-slow"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="text-path"
                  d="M60,15 a45,45 0 1,1 -0.1,0"
                  fill="none"
                  stroke="none"
                />
                <text
                  fontSize="11"
                  fontWeight="500"
                  fill="white"
                  letterSpacing="3"
                >
                  <textPath href="#text-path" startOffset="0%">
                    ● MY PROJECTS ● MY PROJECTS ●
                  </textPath>
                </text>
              </svg>
              <span className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-black">
                <ArrowDown size={20} strokeWidth={2.5} />
              </span>
            </a>
          </ScrollAnimation>

          {/* Stats */}
          <div className="facts mt-20 flex flex-col gap-10 sm:flex-row sm:gap-16">
            <ScrollAnimation animation="fade_from_left" delay={0.4}>
              <div>
                <h1 className="text-5xl font-bold text-white md:text-6xl">
                  <AnimatedCounter target={6} />
                </h1>
                <p className="mt-2 text-sm uppercase tracking-wider text-[#999]">
                  YEARS OF <br />
                  EXPERIENCE
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade_from_right" delay={0.5}>
              <div>
                <h1 className="text-5xl font-bold text-white md:text-6xl">
                  <AnimatedCounter target={50} />
                </h1>
                <p className="mt-2 text-sm uppercase tracking-wider text-[#999]">
                  projects completed on <br />
                  various platforms
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
