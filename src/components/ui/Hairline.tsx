"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

type HairlineProps = {
  tone?: "paper" | "ink";
  className?: string;
};

/** A 1px rule that draws itself left → right as it enters view. */
export function Hairline({ tone = "paper", className }: HairlineProps) {
  const reduce = useReducedMotion();
  const bg = tone === "ink" ? "bg-paper/15" : "bg-ink/[0.13]";

  if (reduce) {
    return <div className={cn("h-px w-full", bg, className)} />;
  }

  return (
    <motion.div
      className={cn("h-px w-full origin-left", bg, className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -24px 0px" }}
      transition={{ duration: 1.1, ease: EASE }}
    />
  );
}
