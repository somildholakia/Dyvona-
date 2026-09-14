"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type CountUpProps = {
  to: number;
  label: string;
  duration?: number;
  delay?: number;
  className?: string;
};

/** A number that counts up once, quietly, when it scrolls into view. */
export function CountUp({
  to,
  label,
  duration = 1.1,
  delay = 0.2,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{label}</span>
      <span aria-hidden="true" className="tabular-nums">
        {value}
      </span>
    </span>
  );
}
