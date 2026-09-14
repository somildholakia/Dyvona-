"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();

  /* Background transition + active-section tracking on scroll */
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 16);
        const probe = window.scrollY + 140;
        let current: string | null = null;
        for (const item of nav) {
          const el = document.getElementById(item.href.slice(1));
          if (el && el.offsetTop <= probe) current = item.id;
        }
        setActive(current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  /* Scroll lock + escape-to-close for the mobile sheet */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500",
          scrolled || open
            ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent"
        )}
      >
        <ScrollProgress />
        <div className="mx-auto flex h-[68px] max-w-[1560px] items-center justify-between gap-6 px-5 md:h-[76px] md:px-8 xl:px-12">
          <Link
            href="/#top"
            onClick={() => setOpen(false)}
            className="flex items-baseline gap-2.5"
            aria-label={`${site.name} — home`}
          >
            <span className="text-[17px] font-semibold tracking-[-0.02em] text-ink md:text-[18px]">
              {site.wordmark}
            </span>
            <span
              className="mt-[-2px] inline-block h-[7px] w-[7px] bg-accent"
              aria-hidden="true"
            />
            <span className="label hidden text-ink-soft lg:inline">
              {site.descriptor}
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "relative py-2 text-[13px] font-medium transition-colors duration-300 hover:text-ink",
                  active === item.id ? "text-ink" : "text-ink-soft"
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -left-3.5 top-1/2 h-[5px] w-[5px] -translate-y-1/2 bg-accent transition-opacity duration-300",
                    active === item.id ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <Link
              href="/#contact"
              className="group hidden items-center gap-1.5 text-[13px] font-medium text-ink md:inline-flex"
            >
              Let&rsquo;s Talk
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="label flex items-center gap-2.5 py-2 text-ink md:hidden"
              aria-haspopup="dialog"
              aria-expanded={open}
            >
              Menu
              <span className="flex flex-col gap-[3px]" aria-hidden="true">
                <span className="block h-px w-4 bg-ink" />
                <span className="block h-px w-4 bg-ink" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[60] flex flex-col bg-paper md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.28, ease: EASE }}
          >
            <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-ink/10 px-5">
              <span className="text-[17px] font-semibold tracking-[-0.02em] text-ink">
                {site.wordmark}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="label py-2 text-ink"
              >
                Close&nbsp;&nbsp;✕
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col justify-center px-5 pb-10"
            >
              {nav.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: reduce ? 0 : 0.06 + i * 0.06,
                    duration: reduce ? 0 : 0.5,
                    ease: EASE,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-5 border-b border-ink/10 py-4"
                  >
                    <span className="label text-ink-soft/70">
                      0{i + 1}
                    </span>
                    <span className="text-[2rem] font-medium tracking-[-0.02em] text-ink">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: reduce ? 0 : 0.34,
                  duration: reduce ? 0 : 0.5,
                  ease: EASE,
                }}
                className="pt-9"
              >
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2.5 bg-accent px-6 py-3.5 text-[15px] font-semibold text-ink"
                >
                  Let&rsquo;s Talk <span aria-hidden="true">↗</span>
                </Link>
              </motion.div>
            </nav>

            <div className="shrink-0 border-t border-ink/10 px-5 py-5">
              <p className="label text-ink-soft">{site.email}</p>
              <p className="label mt-2 text-ink-soft/60">{site.location}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
