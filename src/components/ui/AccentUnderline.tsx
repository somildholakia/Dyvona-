"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

type AccentUnderlineProps = {
  className?: string;
  delay?: number;
  /** Animate on mount instead of on scroll (for above-the-fold use). */
  onLoad?: boolean;
};

/**
 * The Dyvona signature: a thin lime bar that draws itself under a word.
 * Place inside a `relative inline-block` wrapper.
 */
export function AccentUnderline({
  className,
  delay = 0.4,
  onLoad = false,
}: AccentUnderlineProps) {
  const reduce = useReducedMotion();
  const target = reduce ? undefined : { scaleX: 1 };

  return (
    <motion.span
      aria-hidden="true"
      className={cn(
        "absolute -bottom-[0.06em] left-0 h-[0.055em] w-full origin-left bg-accent",
        className
      )}
      initial={reduce ? false : { scaleX: 0 }}
      {...(onLoad
        ? { animate: target }
        : { whileInView: target, viewport: { once: true } })}
      transition={{ duration: 0.9, ease: EASE, delay }}
    />
  );
}
