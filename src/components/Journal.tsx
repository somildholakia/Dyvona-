"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Fragment, useState } from "react";
import { journal } from "@/data/journal";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { AccentUnderline } from "@/components/ui/AccentUnderline";
import { Hairline } from "@/components/ui/Hairline";
import { MaskedHeading } from "@/components/ui/MaskedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Journal() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="journal" className="relative">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 xl:px-12">
        <div className="pt-20 md:pt-28">
          <SectionHeader
            index="§ 04"
            title="Built in public"
            right={
              <p className="font-mono text-[11px] tracking-[0.12em] text-ink-soft uppercase">
                {journal.length} notes · newest first
              </p>
            }
          />
        </div>

        {/* Statement + context */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 pb-12 pt-14 md:pb-16 md:pt-20">
          <div className="col-span-12 lg:col-span-7">
            <MaskedHeading
              className="text-[8.4vw] font-medium tracking-[-0.03em] sm:text-[6.4vw] lg:text-[4vw] xl:text-[58px]"
              lines={[
                <Fragment key="a">Follow the process,</Fragment>,
                <Fragment key="b">
                  not just the{" "}
                  <span className="relative inline-block">
                    outcome.
                    <AccentUnderline delay={0.6} />
                  </span>
                </Fragment>,
              ]}
            />
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15}>
              <p className="max-w-[46ch] text-[15px] leading-[1.75] text-ink-soft md:text-[16px]">
                We&rsquo;re documenting the journey — experiments,
                conversations, products, mistakes, lessons, and everything in
                between. Notes land here first.
              </p>
              <dl className="mt-8 space-y-3 border-t border-ink/[0.13] pt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="label text-ink-soft/70">Cadence</dt>
                  <dd className="text-right font-mono text-[10.5px] tracking-[0.08em] text-ink uppercase">
                    When there&rsquo;s something to say
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="label text-ink-soft/70">Also on</dt>
                  <dd className="text-right font-mono text-[10.5px] tracking-[0.08em] text-ink uppercase">
                    LinkedIn
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <div className="pb-24 md:pb-32">
          <Hairline />
          <ul>
            {journal.map((entry, i) => {
              const open = openIndex === i;
              const latest = i === 0;
              return (
                <li
                  key={entry.id}
                  className="group border-b border-ink/[0.13]"
                >
                  <div className="grid grid-cols-12 gap-x-6">
                    {/* Date column */}
                    <div className="col-span-12 md:col-span-2">
                      <div className="flex items-center gap-3 py-5 md:block md:py-8">
                        <p className="font-mono text-[12px] tracking-[0.06em] text-ink">
                          {entry.date}
                        </p>
                        <p className="label text-ink-soft/60 md:mt-2">
                          {entry.tag}
                        </p>
                        {latest && (
                          <span className="label ml-auto bg-accent px-2 py-1 text-ink md:ml-0 md:mt-4 md:inline-block">
                            Latest
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Rail */}
                    <div
                      aria-hidden="true"
                      className="relative hidden md:col-span-1 md:block"
                    >
                      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-ink/[0.15]" />
                      <span
                        className={cn(
                          "absolute left-1/2 top-[42px] h-[9px] w-[9px] -translate-x-1/2 transition-all duration-300",
                          latest
                            ? "bg-accent"
                            : "border border-ink/35 bg-paper group-hover:border-accent-deep",
                          open && "bg-accent"
                        )}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative col-span-12 border-l border-ink/[0.15] pl-6 md:col-span-9 md:border-l-0 md:pl-8">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[4.5px] top-[26px] h-[8px] w-[8px] bg-paper transition-colors duration-300 group-hover:bg-accent md:hidden"
                        style={{ boxShadow: "0 0 0 1px rgba(25,25,23,0.35)" }}
                      />
                      <div className="py-5 md:py-8">
                        <h3 className="text-[19px] font-medium tracking-[-0.01em] text-ink transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 md:text-[22px]">
                          {entry.title}
                        </h3>
                        <p className="mt-2 max-w-[62ch] text-[14px] leading-relaxed text-ink-soft">
                          {entry.description}
                        </p>
                        <button
                          type="button"
                          onClick={() => setOpenIndex(open ? null : i)}
                          aria-expanded={open}
                          className="group/btn mt-4 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-ink uppercase transition-colors hover:text-accent-deep"
                        >
                          {open ? "Close note" : "Read"}
                          <span
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                          >
                            {open ? "↑" : "→"}
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              key="note"
                              initial={reduce ? false : { height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                              transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
                              className="overflow-hidden"
                            >
                              <div className="max-w-[62ch] border-l-2 border-accent pt-5 pl-5">
                                <p className="text-[14.5px] leading-[1.75] text-ink-soft">
                                  {entry.body}
                                </p>
                                <p className="label mt-4 text-ink-soft/60">
                                  Filed under — {entry.tag}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
