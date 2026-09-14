import { principles, principlesFootnote } from "@/data/principles";
import { MaskedHeading } from "@/components/ui/MaskedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Principles() {
  return (
    <section id="principles" className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 xl:px-12">
        <h2 className="sr-only">Build. Listen. Experiment. Repeat.</h2>
        <div className="pt-20 md:pt-28">
          <SectionHeader
            index="§ 05"
            title="How we work"
            tone="ink"
            right={<p>No manifesto. Just a loop we keep running.</p>}
          />
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-14 py-16 md:py-24">
          {/* The statement — pure typography */}
          <div className="col-span-12 lg:col-span-7">
            <MaskedHeading
              ariaHidden
              className="text-[12.5vw] font-semibold tracking-[-0.03em] sm:text-[10.5vw] lg:text-[6.6vw] xl:text-[92px]"
              stagger={0.1}
              lines={principles.map((p) => (
                <span key={p.index}>
                  {p.title}
                  <span className="text-accent">.</span>
                </span>
              ))}
            />
          </div>

          {/* The explanations */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal>
              <p className="label mb-6 text-paper/45">The loop, explained</p>
            </Reveal>
            <div className="border-t border-paper/[0.12]">
              {principles.map((p, i) => (
                <Reveal key={p.index} delay={0.06 * (i + 1)}>
                  <div className="group border-b border-paper/[0.12] py-6">
                    <p className="label flex items-center gap-2 text-accent">
                      <span
                        aria-hidden="true"
                        className="inline-block h-[5px] w-[5px] bg-accent transition-transform duration-300 group-hover:scale-150"
                      />
                      {p.index} — {p.title}
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-paper/75">
                      {p.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.4}>
              <p className="mt-8 font-mono text-[11px] leading-relaxed tracking-[0.12em] text-paper/40 uppercase">
                {principlesFootnote}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
