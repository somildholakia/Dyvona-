import { Fragment } from "react";
import { about } from "@/data/site";
import { AccentUnderline } from "@/components/ui/AccentUnderline";
import { Hairline } from "@/components/ui/Hairline";
import { HandNote } from "@/components/ui/HandNote";
import { MaskedHeading } from "@/components/ui/MaskedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 xl:px-12">
        <div className="pt-20 md:pt-28">
          <SectionHeader index="§ 06" title="About Dyvona" />
        </div>

        <div className="grid grid-cols-12 gap-x-6 pb-12 pt-14 md:pb-16 md:pt-20">
          <div className="col-span-12 lg:col-span-11 xl:col-span-10">
            <h2 className="sr-only">
              Dyvona is an early-stage venture exploring what can be built when
              curiosity meets execution.
            </h2>

            {/* Small screens: one naturally-wrapped paragraph-heading */}
            <p
              aria-hidden="true"
              className="text-[7.6vw] font-medium tracking-[-0.025em] text-pretty sm:text-[5vw] lg:hidden"
            >
              Dyvona is an early-stage venture exploring what can be built when{" "}
              <span className="relative inline-block">
                curiosity
                <AccentUnderline delay={0.5} />
              </span>{" "}
              meets execution.
            </p>

            {/* From lg: the same statement, set as masked editorial lines */}
            <div className="hidden lg:block">
              <MaskedHeading
                as="div"
                ariaHidden
                className="text-[3.5vw] font-medium tracking-[-0.028em] xl:text-[44px] 2xl:text-[52px]"
                lines={[
                  <Fragment key="a">
                    Dyvona is an early-stage venture exploring
                  </Fragment>,
                  <Fragment key="b">
                    what can be built when{" "}
                    <span className="relative inline-block">
                      curiosity
                      <AccentUnderline delay={0.75} />
                    </span>{" "}
                    meets
                  </Fragment>,
                  <Fragment key="c">execution.</Fragment>,
                ]}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 pb-24 md:pb-32">
          {/* What we're doing, in plain words */}
          <div className="col-span-12 md:col-span-7">
            <Hairline />
            <ul>
              {about.lines.map((line, i) => (
                <Reveal key={line} delay={i * 0.07}>
                  <li className="group flex items-center gap-4 border-b border-ink/[0.13] py-5">
                    <span
                      aria-hidden="true"
                      className="h-[7px] w-[7px] shrink-0 bg-accent transition-transform duration-300 group-hover:scale-125"
                    />
                    <span className="text-[17px] font-medium tracking-[-0.01em] text-ink md:text-[19px]">
                      {line}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* The honest ledger */}
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <Reveal delay={0.15}>
              <div className="border-t-2 border-ink">
                {about.ledger.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-6 border-b border-ink/[0.13] py-3.5"
                  >
                    <span className="label text-ink-soft/70">{row.label}</span>
                    <span className="text-right font-mono text-[11.5px] tracking-[0.06em] text-ink uppercase">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex items-start gap-2 pl-1">
                <HandNote>let&rsquo;s see where this goes.</HandNote>
                <svg
                  width="30"
                  height="26"
                  viewBox="0 0 30 26"
                  fill="none"
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-ink/45"
                >
                  <path
                    d="M3 23 C 9 12, 18 6, 27 4"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M27 4 L 20.4 5.4 M27 4 L 25.6 10.6"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
