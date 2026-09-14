"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

/**
 * A marker-pen swipe behind a word. Wrap the word itself in a
 * `relative z-10` span so it stays above the highlight.
 */
export function MarkerSwipe({
  className,
  delay = 0.55,
}: {
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className={cn(
        "absolute inset-x-[-0.05em] bottom-[0.09em] z-0 h-[0.34em] origin-left bg-accent/55",
        className
      )}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={reduce ? undefined : { scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    />
  );
}
