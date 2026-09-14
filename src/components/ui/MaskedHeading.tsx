"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE, VIEWPORT_ONCE } from "@/lib/motion";
import { cn } from "@/lib/cn";

type MaskedHeadingProps = {
  /** One entry per rendered line — compose each line as a JSX fragment. */
  lines: ReactNode[];
  as?: "h1" | "h2" | "h3" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
  /** Hide from assistive tech (pair with an sr-only real heading). */
  ariaHidden?: boolean;
};

/**
 * Editorial line-mask reveal: each line slides up from behind its own
 * baseline mask, staggered. Static under reduced motion.
 */
export function MaskedHeading({
  lines,
  as = "h2",
  className,
  delay = 0,
  stagger = 0.09,
  ariaHidden = false,
}: MaskedHeadingProps) {
  const reduce = useReducedMotion();
  const Tag = as as "h2";

  return (
    <Tag className={className} {...(ariaHidden ? { "aria-hidden": true } : {})}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={cn("relative block overflow-hidden pb-[0.1em]")}
        >
          <motion.span
            className="relative block will-change-transform"
            initial={reduce ? false : { y: "115%" }}
            whileInView={reduce ? undefined : { y: "0%" }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.95, ease: EASE, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
