"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { processSteps } from "@/data/site";
import { cn } from "@/lib/cn";

const STAGE_MS = 2400;

/**
 * The method strip: IDEA → BUILD → TEST → LEARN.
 * A small lime marker walks the loop — the only ambient motion on the page.
 */
export function ProcessLoop() {
  const [stage, setStage] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setStage((s) => (s + 1) % processSteps.length),
      STAGE_MS
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div
      className="flex flex-wrap items-center gap-x-3.5 gap-y-2 sm:gap-x-4"
      role="note"
      aria-label="Our method: idea, build, test, learn — on repeat"
    >
      {processSteps.map((step, i) => {
        const isActive = reduce || i === stage;
        return (
          <span key={step} className="relative flex items-center gap-x-3.5 sm:gap-x-4">
            <span className="relative pt-2.5">
              <span
                className={cn(
                  "label transition-colors duration-500",
                  isActive ? "text-ink" : "text-ink-soft/55"
                )}
              >
                {step}
              </span>
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 block h-[5px] w-[5px]"
              >
                <AnimatePresence>
                  {isActive && !reduce && (
                    <motion.span
                      className="absolute inset-0 block bg-accent"
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.4 }}
                      transition={{ duration: 0.35 }}
                    />
                  )}
                </AnimatePresence>
              </span>
            </span>
            {i < processSteps.length - 1 && (
              <span
                aria-hidden="true"
                className={cn(
                  "pt-2.5 text-[13px] transition-colors duration-500",
                  !reduce && i === stage ? "text-accent-deep" : "text-ink-soft/45"
                )}
              >
                →
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
