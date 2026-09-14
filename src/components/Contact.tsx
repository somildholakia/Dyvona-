import { Fragment } from "react";
import { site, socials } from "@/data/site";
import { AccentUnderline } from "@/components/ui/AccentUnderline";
import { MaskedHeading } from "@/components/ui/MaskedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const linkedin = socials.find((s) => s.label === "LinkedIn");

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 xl:px-12">
        <div className="pt-20 md:pt-28">
          <SectionHeader index="§ 07" title="Contact" tone="ink" />
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 pb-14 pt-16 md:pb-20 md:pt-24">
          <div className="col-span-12 lg:col-span-8">
            <MaskedHeading
              className="text-[10.5vw] font-semibold tracking-[-0.035em] sm:text-[7.6vw] lg:text-[5.2vw] xl:text-[76px]"
              lines={[
                <Fragment key="a">Have a problem</Fragment>,
                <Fragment key="b">
                  worth{" "}
                  <span className="relative inline-block">
                    solving?
                    <AccentUnderline delay={0.7} />
                  </span>
                </Fragment>,
              ]}
            />
            <Reveal delay={0.25}>
              <p className="mt-8 text-[17px] text-paper/60 md:text-[19px]">
                Tell us about it.
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 flex flex-col justify-end gap-6 lg:col-span-4">
            <Reveal delay={0.3}>
              <p className="max-w-[42ch] text-[14.5px] leading-relaxed text-paper/55">
                A product idea, a tool your team keeps wishing for, or a
                presence worth building — the earlier we talk, the more useful
                we can be.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <a
                href={`mailto:${site.email}`}
                className="label block text-paper/50 transition-colors duration-300 hover:text-accent"
              >
                Or write to us — {site.email}
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="flex flex-col gap-8 border-t border-paper/[0.12] py-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-3 bg-accent px-7 py-4 text-[14px] font-semibold tracking-[-0.01em] text-ink transition-colors duration-300 hover:bg-paper"
              >
                Start a conversation
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
              {linkedin && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-3 border border-paper/25 px-7 py-4 text-[14px] font-medium text-paper transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  Follow Dyvona
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              )}
            </div>
            <ul className="flex items-center gap-7" aria-label="Dyvona elsewhere">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="label text-paper/50 transition-colors duration-300 hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
