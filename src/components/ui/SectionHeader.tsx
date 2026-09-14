import type { ReactNode } from "react";
import { Hairline } from "@/components/ui/Hairline";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  index: string;
  title: string;
  tone?: "paper" | "ink";
  right?: ReactNode;
  className?: string;
};

/**
 * The recurring section folio: "§ 03 — THINGS WE'RE BUILDING",
 * an optional right-hand note, and a rule that draws itself.
 */
export function SectionHeader({
  index,
  title,
  tone = "paper",
  right,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3 pb-4">
        <Label className={tone === "ink" ? "text-paper/60" : "text-ink-soft"}>
          {index} — {title}
        </Label>
        {right ? (
          <div
            className={cn(
              "max-w-sm text-[13px] leading-snug md:text-right",
              tone === "ink" ? "text-paper/55" : "text-ink-soft"
            )}
          >
            {right}
          </div>
        ) : null}
      </div>
      <Hairline tone={tone} />
    </div>
  );
}
