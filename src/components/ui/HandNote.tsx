import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * A handwritten margin note. Decorative by default — the real copy
 * always lives in the content itself.
 */
export function HandNote({
  children,
  className,
  rotate = -2.4,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block font-hand text-[1.45rem] leading-none text-ink/70 select-none",
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
