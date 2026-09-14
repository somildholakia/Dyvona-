import { Hairline } from "@/components/ui/Hairline";
import { MaskedHeading } from "@/components/ui/MaskedHeading";
import { OutlineNumber } from "@/components/ui/OutlineNumber";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  services,
  servicesIntro,
  type Capability,
  type Service,
} from "@/data/services";
import { cn } from "@/lib/cn";

export function Services() {
  return (
    <section id="studio" className="relative">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 xl:px-12">
        <div className="pt-8 md:pt-12">
          <h2 className="sr-only">What we&rsquo;re exploring</h2>
          <SectionHeader index="§ 02" title="What we're exploring" />
        </div>
        <div className="grid grid-cols-12 gap-x-6 pb-6 pt-10 md:pb-10 md:pt-14">
          <Reveal className="col-span-12 md:col-span-6 lg:col-span-5">
            <p className="max-w-[52ch] text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
              {servicesIntro}
            </p>
          </Reveal>
        </div>
      </div>

      {services.map((service) => (
        <ServiceBlock key={service.id} service={service} />
      ))}
    </section>
  );
}

function ServiceBlock({ service }: { service: Service }) {
  const tinted = service.tone === "tinted";

  return (
    <div
      className={cn(
        "relative",
        tinted && "border-y border-ink/[0.13] bg-paper-2"
      )}
    >
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 xl:px-12">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 py-16 md:gap-y-12 md:py-24">
          {/* Oversized index */}
          <div className="col-span-12 md:col-span-2">
            <Reveal>
              <OutlineNumber n={service.index} />
            </Reveal>
          </div>

          {/* Title + lede */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <MaskedHeading
              as="h3"
              className="text-[8.6vw] font-medium tracking-[-0.03em] sm:text-[6vw] md:text-[4.4vw] lg:text-[3.4vw] xl:text-[46px]"
              lines={service.titleLines.map((l) => (
                <span key={l}>{l}</span>
              ))}
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-[44ch] text-[15px] leading-[1.7] text-ink-soft md:text-[16.5px]">
                {service.lede}
              </p>
            </Reveal>
          </div>

          {/* Motif — each direction gets its own identity */}
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <Reveal delay={0.2}>
              {service.motif === "post" ? <PostCardMotif /> : <TerminalMotif />}
              <p className="label mt-4 text-ink-soft/70 md:text-right">
                {service.figureLabel}
              </p>
            </Reveal>
          </div>

          {/* Offerings */}
          <div className="col-span-12 md:col-span-10 md:col-start-3">
            {service.items ? (
              <ItemRows items={service.items} />
            ) : (
              <CapabilityTable rows={service.capabilities ?? []} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemRows({ items }: { items: string[] }) {
  return (
    <div>
      <Hairline />
      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
        {items.map((item, i) => (
          <li key={item}>
            <div className="group flex items-center gap-4 border-b border-ink/[0.13] py-4 transition-colors duration-300 hover:bg-ink/[0.03]">
              <span className="label w-7 shrink-0 text-ink-soft/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-[15px] font-medium text-ink transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 md:text-[16.5px]">
                {item}
              </span>
              <span
                aria-hidden="true"
                className="h-[6px] w-[6px] shrink-0 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CapabilityTable({ rows }: { rows: Capability[] }) {
  return (
    <div>
      <Hairline />
      <div className="grid grid-cols-12 gap-x-4 border-b border-ink/[0.13] py-2.5">
        <span className="label col-span-6 text-ink-soft/70">Capability</span>
        <span className="label col-span-6 text-right text-ink-soft/70">
          Status
        </span>
      </div>
      {rows.map((row) => (
        <div
          key={row.name}
          className="group grid grid-cols-12 items-center gap-x-4 border-b border-ink/[0.13] py-3.5 transition-colors duration-300 hover:bg-ink/[0.03]"
        >
          <span className="col-span-7 text-[15px] font-medium text-ink md:col-span-6 md:text-[16px]">
            {row.name}
          </span>
          <span className="col-span-5 flex items-center justify-end gap-2.5 md:col-span-6">
            <span className="label text-ink-soft">{row.status}</span>
            <span
              aria-hidden="true"
              className={cn(
                "h-[7px] w-[7px] transition-transform duration-300 group-hover:scale-125",
                row.status === "Building" ? "bg-accent" : "border border-ink/40"
              )}
            />
          </span>
        </div>
      ))}
    </div>
  );
}

/** Abstract "post" rendered entirely in hairlines and bars — no logo, no stock. */
function PostCardMotif() {
  return (
    <div
      aria-hidden="true"
      className="ml-auto w-full max-w-[380px] rotate-[-1.4deg] border border-ink/[0.14] bg-paper p-5 shadow-[0_24px_60px_-32px_rgba(25,25,23,0.2)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:rotate-0"
    >
      <div className="flex items-center gap-3">
        <span className="h-9 w-9 shrink-0 bg-ink/[0.08]" />
        <span className="flex-1 space-y-1.5">
          <span className="block h-2 w-2/5 bg-ink/[0.16]" />
          <span className="block h-1.5 w-1/4 bg-ink/[0.09]" />
        </span>
        <span className="label text-ink-soft/45">•••</span>
      </div>
      <div className="mt-5 space-y-2.5">
        <span className="block h-2 w-full bg-ink/[0.13]" />
        <span className="block h-2 w-11/12 bg-ink/[0.13]" />
        <span className="relative block h-2 w-3/4 bg-ink/[0.13]">
          <span className="absolute inset-x-0 -bottom-1 h-[6px] bg-accent/55" />
        </span>
        <span className="block h-2 w-2/3 bg-ink/[0.13]" />
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-ink/[0.13] pt-3">
        <span className="flex gap-4">
          <span className="h-1.5 w-10 bg-ink/[0.1]" />
          <span className="h-1.5 w-8 bg-ink/[0.1]" />
          <span className="h-1.5 w-9 bg-ink/[0.1]" />
        </span>
        <span className="h-[7px] w-[7px] bg-accent" />
      </div>
    </div>
  );
}

/** The studio's other self-portrait: a terminal, mid-thought. */
function TerminalMotif() {
  return (
    <div
      aria-hidden="true"
      className="ml-auto w-full max-w-[380px] rotate-[1.2deg] border border-ink/30 bg-ink font-mono text-[12px] leading-relaxed text-paper/85 shadow-[0_24px_60px_-32px_rgba(25,25,23,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:rotate-0"
    >
      <div className="flex items-center gap-2 border-b border-paper/[0.12] px-4 py-2.5">
        <span className="h-1.5 w-1.5 bg-paper/30" />
        <span className="h-1.5 w-1.5 bg-paper/30" />
        <span className="h-1.5 w-1.5 bg-paper/30" />
        <span className="label ml-2 text-paper/45">dyvona — status</span>
      </div>
      <div className="space-y-1.5 px-4 py-4">
        <p>
          <span className="text-accent">$</span> dyvona --status
        </p>
        <p className="text-paper/60">› two directions active</p>
        <p className="text-paper/60">› shipping small, shipping often</p>
        <p className="text-paper/60">› curious by default</p>
        <p className="flex items-center gap-1.5 pt-1">
          <span className="text-accent">$</span>
          <span className="inline-block h-3.5 w-[7px] animate-pulse-soft bg-accent" />
        </p>
      </div>
    </div>
  );
}
