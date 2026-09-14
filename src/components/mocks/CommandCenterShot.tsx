"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";
import { CountUp } from "@/components/ui/CountUp";
import { mulberry32 } from "@/lib/random";

const WEEKS = 28;
const DAYS = 7;

const LEVEL_BG = [
  "rgba(241,239,230,0.05)",
  "rgba(199,240,74,0.22)",
  "rgba(199,240,74,0.45)",
  "rgba(199,240,74,0.70)",
  "rgba(199,240,74,0.95)",
];

/** 30-day activity, trending up — the story the product tells. */
const SERIES = [
  0.18, 0.24, 0.2, 0.32, 0.28, 0.41, 0.36, 0.44, 0.52, 0.47, 0.58, 0.62, 0.55,
  0.68, 0.64, 0.72, 0.66, 0.78, 0.74, 0.82, 0.7, 0.86, 0.8, 0.92, 0.85, 0.78,
  0.9, 0.95, 0.88, 1,
];

const STATS = [
  { k: "PRs merged", v: "128", d: "+6 this week" },
  { k: "Issues closed", v: "64", d: "+2 this week" },
  { k: "Reviews given", v: "219", d: "+11 this week" },
  { k: "Community rank", v: "#12", d: "▲ 3 this month" },
];

const QUESTS = [
  { name: "Marathon", req: "Reach a 60-day streak", pct: 78 },
  { name: "Cartographer", req: "Contribute to 10 repos", pct: 40 },
  { name: "First Review", req: "Review 5 pull requests", pct: 60 },
];

const ACHIEVEMENTS = [
  { code: "FB", name: "First blood", earned: true },
  { code: "W7", name: "7-day streak", earned: true },
  { code: "C100", name: "Century", earned: true },
  { code: "RV", name: "Reviewer", earned: true },
  { code: "NO", name: "Night owl", earned: false },
  { code: "PG", name: "Polyglot", earned: false },
  { code: "M60", name: "Marathon", earned: false },
  { code: "??", name: "Hidden", earned: false },
];

function heatData(): number[] {
  const rand = mulberry32(20260914);
  const cells: number[] = [];
  for (let w = 0; w < WEEKS; w++) {
    const momentum = w / WEEKS; // consistency builds toward the present
    for (let d = 0; d < DAYS; d++) {
      const weekend = d === 0 || d === 6 ? 0.45 : 1;
      const score = rand() * weekend * (0.35 + momentum * 0.95);
      let level = 0;
      if (score > 0.82) level = 4;
      else if (score > 0.62) level = 3;
      else if (score > 0.42) level = 2;
      else if (score > 0.22) level = 1;
      cells.push(level);
    }
  }
  // The current streak: the last column and a half is hot.
  for (let d = 0; d < DAYS; d++) {
    cells[(WEEKS - 1) * DAYS + d] = d === 0 ? 2 : 4;
    if (d > 0) cells[(WEEKS - 2) * DAYS + d] = Math.max(3, cells[(WEEKS - 2) * DAYS + d]);
  }
  return cells;
}

function chartGeometry() {
  const pts = SERIES.map((v, i) => {
    const x = 2 + (i / (SERIES.length - 1)) * 596;
    const y = 128 - v * 114;
    return [x, y] as const;
  });
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `M ${pts[0][0].toFixed(1)},136 L ${pts
    .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" L ")} L ${pts[pts.length - 1][0].toFixed(1)},136 Z`;
  return { line, area };
}

/**
 * "Screenshot" of the Open Source Command Center prototype —
 * a real interface, hand-built, cropped mid-scroll.
 */
export function CommandCenterShot() {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, margin: "0px 0px -80px 0px" });
  const reduce = useReducedMotion();
  const cells = useMemo(heatData, []);
  const { line, area } = useMemo(chartGeometry, []);

  return (
    <div
      ref={rootRef}
      className="bg-[#202120] font-mono text-paper"
      role="img"
      aria-label="Overview screen of the Open Source Command Center prototype: a 47-day contribution streak, a 28-week consistency heatmap, pull-request and review statistics, an upward activity chart, active quests, and achievements."
    >
      <div className="w-[1240px] origin-top-left scale-[0.46] sm:scale-[0.58] md:scale-[0.72] lg:scale-[0.86] xl:scale-100 2xl:scale-[1.06]">
        {/* App bar */}
        <div className="flex h-14 items-center gap-8 border-b border-paper/[0.07] px-6">
          <div className="flex items-center gap-2.5">
            <span className="h-3.5 w-3.5 bg-accent" aria-hidden="true" />
            <span className="text-[12px] font-medium tracking-[0.12em] text-paper">
              COMMAND CENTER
            </span>
          </div>
          <div className="hidden items-center gap-6 text-[11px] tracking-[0.1em] text-paper/45 lg:flex">
            <span className="flex items-center gap-2 text-paper">
              <span className="h-[5px] w-[5px] bg-accent" aria-hidden="true" />
              OVERVIEW
            </span>
            <span>REPOS</span>
            <span>QUESTS</span>
            <span>STREAKS</span>
            <span>LEADERBOARD</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="hidden w-[220px] items-center gap-2 border border-paper/[0.12] px-3 py-1.5 text-[11px] text-paper/35 md:flex">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <circle cx="5" cy="5" r="3.6" stroke="currentColor" strokeWidth="1.3" />
                <path d="M8 8 L 11 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              SEARCH REPOS, QUESTS…
            </div>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-paper/20 text-[10.5px] text-paper/70">
              SD
            </span>
          </div>
        </div>

        <div className="flex">
          {/* Main column */}
          <div className="min-w-0 flex-1 p-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[11px] tracking-[0.1em] text-paper/40">
                  GOOD EVENING
                </p>
                <p className="mt-1.5 font-sans text-[22px] font-semibold tracking-[-0.01em] text-paper">
                  Your week in open source
                </p>
              </div>
              <p className="text-[11px] tracking-[0.08em] text-paper/35">
                MON 14 SEP · 21:42 IST
              </p>
            </div>

            {/* Streak + heatmap */}
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-4 border border-paper/[0.08] bg-[#262724] p-5">
                <p className="text-[10.5px] tracking-[0.12em] text-paper/45">
                  CURRENT STREAK
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <CountUp
                    to={47}
                    label="47 days"
                    className="font-sans text-[56px] leading-none font-semibold tracking-[-0.02em] text-paper"
                  />
                  <span className="font-sans text-[15px] text-paper/50">days</span>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-[11px] text-accent">
                  ▲ +1 TODAY — KEEP IT ALIVE
                </p>
                <div className="mt-5 border-t border-paper/[0.08] pt-4">
                  <p className="text-[10.5px] tracking-[0.12em] text-paper/45">
                    LONGEST
                  </p>
                  <p className="mt-1.5 font-sans text-[17px] text-paper/85">
                    63 days · spring 2026
                  </p>
                </div>
              </div>

              <div className="col-span-8 border border-paper/[0.08] bg-[#262724] p-5">
                <div className="flex items-baseline justify-between">
                  <p className="text-[10.5px] tracking-[0.12em] text-paper/45">
                    CONSISTENCY · LAST {WEEKS} WEEKS
                  </p>
                  <p className="flex items-center gap-1.5 text-[10px] tracking-[0.08em] text-paper/35">
                    LESS
                    {LEVEL_BG.map((bg, i) => (
                      <span
                        key={i}
                        className="inline-block h-[9px] w-[9px]"
                        style={{ backgroundColor: bg }}
                        aria-hidden="true"
                      />
                    ))}
                    MORE
                  </p>
                </div>
                <div className="mt-4 flex gap-[3px]">
                  {Array.from({ length: WEEKS }).map((_, w) => (
                    <div key={w} className="flex flex-col gap-[3px]">
                      {Array.from({ length: DAYS }).map((_, d) => {
                        const level = cells[w * DAYS + d];
                        return (
                          <span
                            key={d}
                            className="h-[13px] w-[13px] transition-opacity duration-500"
                            style={{
                              backgroundColor: LEVEL_BG[level],
                              opacity: inView ? 1 : 0,
                              transitionDelay: `${w * 16 + d * 4}ms`,
                            }}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-[9.5px] tracking-[0.08em] text-paper/30">
                  <span>MAR</span>
                  <span>APR</span>
                  <span>MAY</span>
                  <span>JUN</span>
                  <span>JUL</span>
                  <span>AUG</span>
                  <span>SEP</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-4 gap-6">
              {STATS.map((s) => (
                <div
                  key={s.k}
                  className="border border-paper/[0.08] bg-[#262724] px-4 py-3.5"
                >
                  <p className="text-[10px] tracking-[0.12em] text-paper/45">
                    {s.k.toUpperCase()}
                  </p>
                  <p className="mt-2 font-sans text-[24px] font-semibold tracking-[-0.01em] text-paper">
                    {s.v}
                  </p>
                  <p className="mt-1 text-[10px] tracking-[0.06em] text-accent/80">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>

            {/* Activity chart */}
            <div className="mt-6 border border-paper/[0.08] bg-[#262724] p-5">
              <div className="flex items-baseline justify-between">
                <p className="text-[10.5px] tracking-[0.12em] text-paper/45">
                  CONTRIBUTIONS · LAST 30 DAYS
                </p>
                <p className="text-[10.5px] text-paper/35">TOTAL 411</p>
              </div>
              <svg
                viewBox="0 0 600 140"
                className="mt-4 w-full"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="occ-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(199,240,74,0.20)" />
                    <stop offset="100%" stopColor="rgba(199,240,74,0)" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    x2="600"
                    y1={12 + i * 40}
                    y2={12 + i * 40}
                    stroke="rgba(241,239,230,0.06)"
                    strokeWidth="1"
                  />
                ))}
                <motion.path
                  d={area}
                  fill="url(#occ-area)"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={inView && !reduce ? { opacity: 1 } : undefined}
                  transition={{ duration: 0.9, delay: 1.1 }}
                />
                <motion.polyline
                  points={line}
                  fill="none"
                  stroke="#c7f04a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={inView && !reduce ? { pathLength: 1 } : undefined}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                />
              </svg>
              <div className="mt-2 flex justify-between text-[9.5px] tracking-[0.08em] text-paper/30">
                <span>16 AUG</span>
                <span>31 AUG</span>
                <span>14 SEP</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-[320px] shrink-0 border-l border-paper/[0.07] p-6">
            <p className="text-[10.5px] tracking-[0.12em] text-paper/45">
              ACTIVE QUESTS
            </p>
            <div className="mt-4 space-y-3">
              {QUESTS.map((q) => (
                <div
                  key={q.name}
                  className="border border-paper/[0.08] bg-[#262724] p-4"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-sans text-[13.5px] font-semibold text-paper">
                      {q.name}
                    </p>
                    <p className="text-[10.5px] text-accent">{q.pct}%</p>
                  </div>
                  <p className="mt-1 text-[10.5px] tracking-[0.04em] text-paper/45">
                    {q.req.toUpperCase()}
                  </p>
                  <div className="mt-3 h-[3px] w-full bg-paper/10">
                    <motion.div
                      className="h-full bg-accent"
                      style={reduce ? { width: `${q.pct}%` } : undefined}
                      initial={reduce ? false : { width: 0 }}
                      animate={inView && !reduce ? { width: `${q.pct}%` } : undefined}
                      transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.55,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[10.5px] tracking-[0.12em] text-paper/45">
              RECENT ACHIEVEMENTS
            </p>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {ACHIEVEMENTS.map((a) => (
                <div key={a.code} className="flex flex-col items-center gap-1.5">
                  <span
                    className={
                      a.earned
                        ? "flex h-11 w-11 items-center justify-center border border-accent/60 bg-accent/10 text-[10.5px] text-accent"
                        : "flex h-11 w-11 items-center justify-center border border-paper/[0.12] text-[10.5px] text-paper/25"
                    }
                  >
                    {a.code}
                  </span>
                  <span className="text-center text-[8.5px] leading-tight tracking-[0.04em] text-paper/35">
                    {a.name.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-paper/[0.08] bg-[#262724] p-4">
              <p className="text-[10.5px] tracking-[0.12em] text-paper/45">
                NEXT MILESTONE
              </p>
              <p className="mt-2 font-sans text-[13.5px] leading-snug text-paper/90">
                50-day streak — <span className="text-accent">3 days to go</span>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
