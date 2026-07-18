"use client";

import { type ReactNode, useLayoutEffect, useEffect, useRef } from "react";
import { motion, useAnimationControls, type Variants } from "framer-motion";

type AnimationDirection =
  | "fade_from_bottom"
  | "fade_from_left"
  | "fade_from_right"
  | "fade_from_top"
  | "rotate_up"
  | "fade_in";

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: AnimationDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const variants: Record<AnimationDirection, Variants> = {
  fade_from_bottom: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fade_from_left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fade_from_right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  fade_from_top: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  rotate_up: {
    hidden: { opacity: 0, rotate: -10, y: 30 },
    visible: { opacity: 1, rotate: 0, y: 0 },
  },
  fade_in: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function ScrollAnimation({
  children,
  animation = "fade_from_bottom",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const triggered = useRef(false);

  // useLayoutEffect runs synchronously before browser paint.
  // Above-fold elements stay visible (as SSR rendered them).
  // Below-fold elements are hidden BEFORE paint, so no flash.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const isInView =
      rect.top < window.innerHeight + 80 && rect.bottom > -80;

    if (isInView) {
      // Above the fold — keep natural visibility, no animation needed
      triggered.current = true;
    } else {
      // Below the fold — hide before first paint
      controls.set("hidden");
    }
  }, [controls]);

  // Scroll detection for below-fold elements
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (triggered.current) return; // Above fold, skip

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggered.current = true;
          controls.start("visible");
          if (once) observer.disconnect();
        }
      },
      { rootMargin: "-80px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [controls, once]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[animation]}
      initial={false}
      animate={controls}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
