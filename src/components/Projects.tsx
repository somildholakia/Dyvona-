"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { MaskedHeading } from "@/components/ui/MaskedHeading";
import { OutlineNumber } from "@/components/ui/OutlineNumber";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CommandCenterShot } from "@/components/mocks/CommandCenterShot";
import { SurvivalShot } from "@/components/mocks/SurvivalShot";

export function Projects() {
  return (
    <section id="work" className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 xl:px-12">
        <h2 className="sr-only">Things we&rsquo;re building</h2>
        <div className="pt-20 md:pt-28">
          <SectionHeader
            index="§ 03"
            title="Things we're building"
            tone="ink"
            right={
              <p>
                Two active experiments. Neither is finished. Both are real.
              </p>
            }
          />
        </div>
        <div className="pb-24 md:pb-32">
          {projects.map((project) => (
            <ProjectEntry key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectEntry({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [16, -16]);

  const Shot =
    project.id === "command-center" ? CommandCenterShot : SurvivalShot;

  return (
    <article className="pt-16 md:pt-24">
      {/* Entry head */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-6">
        <div className="col-span-12 md:col-span-2">
          <Reveal>
            <OutlineNumber n={project.index} tone="ink" />
            <p className="label mt-4 text-paper/45">{project.role}</p>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-7">
          <MaskedHeading
            as="h3"
            className="text-[8.4vw] font-semibold tracking-[-0.03em] sm:text-[5.8vw] lg:text-[3.3vw] xl:text-[46px]"
            lines={project.nameLines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          />
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-[54ch] text-[15px] leading-[1.7] text-paper/60">
              {project.description}
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 flex flex-col items-start gap-5 md:col-span-4 md:items-end lg:col-span-3">
          <Reveal delay={0.18} className="md:text-right">
            <p className="label text-paper/45">Status</p>
            <p className="mt-2 flex items-center gap-2.5 text-[14px] font-medium text-paper">
              <span
                aria-hidden="true"
                className="relative flex h-[8px] w-[8px] items-center justify-center"
              >
                <span className="absolute inset-0 bg-accent/25" />
                <span className="h-[4px] w-[4px] bg-accent" />
              </span>
              {project.status}
            </p>
          </Reveal>
          <Reveal delay={0.24} className="md:text-right">
            <p className="label text-paper/45">{project.year}</p>
          </Reveal>
          <ViewToggle open={open} onToggle={() => setOpen((o) => !o)} />
        </div>
      </div>

      {/* Figure — bleeds past the grid on alternating sides */}
      <figure
        className={cn(
          "relative mt-10 md:mt-16",
          project.bleed === "right"
            ? "md:-mr-12 md:ml-[8.5%] xl:-mr-16"
            : "md:-ml-12 md:mr-[8.5%] xl:-ml-16"
        )}
      >
        <figcaption
          className={cn(
            "mb-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1",
            project.bleed === "right" ? "md:pr-12 xl:pr-16" : "md:pl-12 xl:pl-16"
          )}
        >
          <span className="label text-paper/50">{project.figure}</span>
          <span className="label text-paper/35">{project.figureMeta}</span>
        </figcaption>

        <div
          ref={frameRef}
          className={cn(
            "group relative overflow-hidden border border-paper/[0.12] bg-[#1c1d1a]",
            project.frameClassName
          )}
        >
          <motion.div style={{ y }}>
            <div className="origin-center scale-[1.07] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.085]">
              <Shot />
            </div>
          </motion.div>

          {project.note && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-3 right-3 z-10 flex items-start gap-2 md:top-[186px] md:right-7"
            >
              <svg
                width="30"
                height="26"
                viewBox="0 0 30 26"
                fill="none"
                className="mt-1 shrink-0 text-paper/55"
              >
                <path
                  d="M27 3 C 19 4, 9 10, 4 22"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
                <path
                  d="M4 22 L 6 16 M4 22 L 10.2 20.4"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
              <span
                className="block font-hand text-[1.55rem] leading-none text-paper/75"
                style={{ transform: "rotate(-2.4deg)" }}
              >
                {project.note}
              </span>
            </div>
          )}
        </div>
      </figure>

      {/* Expandable detail */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-10 border-t border-paper/[0.12] pt-8 md:mt-14">
              <dl className="col-span-12 md:col-span-7 md:col-start-3">
                {project.details.map((d) => (
                  <div
                    key={d.label}
                    className="grid grid-cols-12 gap-4 border-b border-paper/[0.12] py-4"
                  >
                    <dt className="label col-span-12 text-paper/40 sm:col-span-4">
                      {d.label}
                    </dt>
                    <dd className="col-span-12 text-[14px] leading-relaxed text-paper/80 sm:col-span-8">
                      {d.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="col-span-12 md:col-span-3 md:col-start-10">
                <p className="label text-paper/45">Tools</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <li
                      key={t}
                      className="border border-paper/20 px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] text-paper/70 uppercase"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="label mt-9 text-paper/45">Timeline</p>
                <p className="mt-3 text-[14px] text-paper/80">
                  {project.timeline}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

function ViewToggle({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className={cn(
        "group inline-flex items-center gap-3 border px-5 py-3 font-mono text-[11.5px] tracking-[0.12em] uppercase transition-colors duration-300",
        open
          ? "border-accent bg-accent text-ink"
          : "border-paper/25 text-paper hover:border-accent hover:text-accent"
      )}
    >
      {open ? "Hide details" : "View project"}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      >
        {open ? "↑" : "→"}
      </span>
    </button>
  );
}
