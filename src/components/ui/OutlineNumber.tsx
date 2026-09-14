import { cn } from "@/lib/cn";

/**
 * Large outline section numerals — drawn, not filled.
 * Purely decorative; pair with real headings nearby.
 */
export function OutlineNumber({
  n,
  tone = "paper",
  className,
}: {
  n: string;
  tone?: "paper" | "ink";
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block text-[clamp(4rem,7vw,7.5rem)] leading-[0.85] font-light tracking-[-0.04em] text-transparent select-none",
        tone === "ink"
          ? "[-webkit-text-stroke:1px_rgba(241,239,230,0.38)]"
          : "[-webkit-text-stroke:1px_rgba(25,25,23,0.4)]",
        className
      )}
    >
      {n}
    </span>
  );
}
