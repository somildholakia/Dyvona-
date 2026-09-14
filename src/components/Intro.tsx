import { Fragment } from "react";
import { MaskedHeading } from "@/components/ui/MaskedHeading";
import { MarkerSwipe } from "@/components/ui/MarkerSwipe";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Intro() {
  return (
    <section id="introduction" className="relative">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 xl:px-12">
        <div className="pt-20 md:pt-28">
          <SectionHeader index="§ 01" title="Introduction" />
        </div>

        <div className="grid grid-cols-12 gap-x-6 pb-10 pt-14 md:pb-14 md:pt-20">
          <div className="col-span-12 lg:col-span-10 xl:col-span-9">
            <MaskedHeading
              className="text-[8.4vw] font-medium tracking-[-0.03em] sm:text-[7vw] lg:text-[5.6vw] xl:text-[78px]"
              lines={[
                <Fragment key="a">
                  We&rsquo;re{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">still</span>
                    <MarkerSwipe />
                  </span>{" "}
                  figuring
                </Fragment>,
                <Fragment key="b">it out.</Fragment>,
              ]}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-10 pb-24 md:pb-32 lg:pb-44">
          <Reveal
            delay={0.1}
            className="col-span-12 md:col-span-6 md:col-start-5 lg:col-span-5 lg:col-start-4"
          >
            <p className="max-w-[52ch] text-[15px] leading-[1.8] text-ink-soft md:text-[17px]">
              Dyvona is being built from scratch. We don&rsquo;t want to pretend
              we already know every answer. We want to find better answers — by
              building, testing, talking to people, and learning.
            </p>
          </Reveal>
          <Reveal
            delay={0.25}
            className="col-span-12 md:col-span-2 md:col-start-11"
          >
            <p className="label text-ink-soft/70">
              A note, not
              <br />a promise
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
