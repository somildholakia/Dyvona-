"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Hairline reading-progress rule at the very top of the page. */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 z-10 h-[2px] origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
