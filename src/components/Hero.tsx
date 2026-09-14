"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { hero } from "@/data/site";
import { EASE } from "@/lib/motion";
import { AccentUnderline } from "@/components/ui/AccentUnderline";
import { Hairline } from "@/components/ui/Hairline";
import { MaskedHeading } from "@/components/ui/MaskedHeading";
import { ProcessLoop } from "@/components/ui/ProcessLoop";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[68px] md:pt-[76px]">
      {/* Faint 12-column rules — the grid, made visible on purpose */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1560px] grid-cols-12 gap-6 px-8 md:grid xl:px-12"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="relative">
            <div className="absolute inset-y-0 left-0 w-px bg-ink/[0.045]" />
            {i === 11 && (
              <div className="absolute inset-y-0 right-0 w-px bg-ink/[0.045]" />
            )}
          </div>
        ))}
      </div>

      <div className="relative mx-auto max-w-[1560px] px-5 md:px-8 xl:px-12">
        {/* Masthead strip */}
        <div className="grid grid-cols-12 items-end gap-6 pb-5 pt-8 md:pt-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="label col-span-12 text-ink md:col-span-7"
          >
            {hero.label}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="label col-span-12 text-ink-soft md:col-span-5 md:text-right"
          >
            {hero.est}
          </motion.p>
        </div>
        <Hairline />

        {/* Headline + right rail */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 pb-14 pt-12 md:pb-20 md:pt-16 lg:pb-24 lg:pt-20">
          <div className="col-span-12 lg:col-span-8">
            <MaskedHeading
              as="h1"
              className="text-[9.3vw] font-semibold tracking-[-0.035em] lg:text-[6.4vw] xl:text-[74px] 2xl:text-[88px]"
              lines={[
                <Fragment key="a">Building technology</Fragment>,
                <Fragment key="b">for problems that</Fragment>,
                <span key="matter" className="relative inline-block">
                  matter.
                  <AccentUnderline onLoad delay={1.05} />
                </span>,
              ]}
            />
          </div>

          <div className="col-span-12 flex flex-col justify-end gap-8 lg:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
              className="max-w-[36ch] text-[15px] leading-[1.7] text-ink-soft md:text-base"
            >
              &ldquo;{hero.paragraph}&rdquo;
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              {hero.links.map((link) => (
                <HeroLink key={link.href} href={link.href}>
                  {link.label}
                </HeroLink>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Method + metadata strip */}
        <Hairline />
        <div className="grid grid-cols-12 items-center gap-y-9 py-8 md:py-10">
          <div className="col-span-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-5 xl:col-span-8 xl:justify-start">
            <div className="flex items-center gap-4 xl:w-[27%] xl:shrink-0">
              <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                DYVONA
              </span>
              <span
                aria-hidden="true"
                className="inline-block h-[6px] w-[6px] bg-accent"
              />
              <span className="label text-ink-soft">01 — Method</span>
            </div>
            <div className="xl:flex-1 xl:border-l xl:border-ink/[0.13] xl:pl-10">
              <ProcessLoop />
            </div>
          </div>

          <dl className="col-span-12 grid grid-cols-1 gap-y-5 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-1 xl:col-span-4 xl:grid-cols-1 xl:gap-y-4 xl:border-l xl:border-ink/[0.13] xl:pl-10">
            {hero.meta.map((m) => (
              <div key={m.label}>
                <dt className="label text-ink-soft/75">{m.label}</dt>
                <dd className="mt-1.5 text-[13px] leading-snug font-medium text-ink">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <Hairline />
      </div>
    </section>
  );
}

function hrefOf(link: { href: string }) {
  return link.href;
}

function HeroLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-[15px] font-medium text-ink"
    >
      <span className="relative pb-1">
        {children}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-ink/30 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:h-[2px] group-hover:bg-accent-deep"
        />
      </span>
      <span
        aria-hidden="true"
        className="text-accent-deep transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        ↗
      </span>
    </Link>
  );
}
