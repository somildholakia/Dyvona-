"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * "Screenshot" of the Survival Game experiment — a stylized dusk scene
 * with an in-game HUD. Built entirely from flat vector layers, so it
 * reads as concept art from a real prototype, not stock imagery.
 */
export function SurvivalShot() {
  return (
    <div
      className="relative h-[430px] w-full overflow-hidden bg-[#1d2a30] md:h-[560px] lg:h-[640px]"
      role="img"
      aria-label="Survival game concept at dusk: a layered forest horizon with a campfire and lean-to shelter, surrounded by the game HUD — health, hunger and warmth meters, a minimap, an objective banner, a crafting panel, and an item hotbar."
    >
      <Scene />
      <Hud />
    </div>
  );
}

/* ------------------------------------------------------------------ */

const STARS: Array<[number, number, number]> = [
  [120, 60, 0.5],
  [300, 110, 0.35],
  [520, 70, 0.6],
  [760, 140, 0.3],
  [980, 80, 0.5],
  [1330, 120, 0.4],
  [1480, 60, 0.55],
  [220, 190, 0.25],
  [640, 180, 0.3],
  [1200, 195, 0.35],
];

function Pine({
  x,
  baseY,
  h,
  fill,
}: {
  x: number;
  baseY: number;
  h: number;
  fill: string;
}) {
  const w = h * 0.42;
  const layers = [
    { yo: 0, wo: 1, hh: 0.4 },
    { yo: 0.22, wo: 0.8, hh: 0.38 },
    { yo: 0.42, wo: 0.62, hh: 0.34 },
  ];
  return (
    <g>
      <rect
        x={x - h * 0.022}
        y={baseY - h * 0.32}
        width={h * 0.044}
        height={h * 0.32}
        fill={fill}
      />
      {layers.map((l, i) => (
        <path
          key={i}
          d={`M ${x - (w * l.wo) / 2} ${baseY - h * l.yo} L ${x} ${
            baseY - h * (l.yo + l.hh)
          } L ${x + (w * l.wo) / 2} ${baseY - h * l.yo} Z`}
          fill={fill}
        />
      ))}
    </g>
  );
}

function Scene() {
  const treeline = Array.from({ length: 18 }).map((_, i) => ({
    x: i * 95 + 30,
    y: 600 + Math.sin(i * 1.7) * 8,
    h: 42 + (i % 3) * 12,
  }));

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sv-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c2a33" />
          <stop offset="46%" stopColor="#3d4a48" />
          <stop offset="74%" stopColor="#8a6a4a" />
          <stop offset="100%" stopColor="#c2854e" />
        </linearGradient>
        <radialGradient id="sv-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f2d9a8" stopOpacity="0.9" />
          <stop offset="38%" stopColor="#e8c489" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#e8c489" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sv-fire" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8934a" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#e8934a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sky, stars, sun */}
      <rect width="1600" height="900" fill="url(#sv-sky)" />
      {STARS.map(([cx, cy, o], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.5" fill="#dfe6e2" opacity={o} />
      ))}
      <circle cx="1160" cy="468" r="180" fill="url(#sv-sun)" />
      <circle cx="1160" cy="468" r="44" fill="#efd9a6" opacity="0.92" />

      {/* Birds */}
      <path
        d="M420 208 q 8 -8 16 0 q 8 -8 16 0"
        stroke="#d9ded4"
        strokeOpacity="0.45"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M478 176 q 6 -6 12 0 q 6 -6 12 0"
        stroke="#d9ded4"
        strokeOpacity="0.35"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Far ridge + mist */}
      <path
        d="M0 520 C 200 468 380 505 560 486 C 760 465 900 500 1080 480 C 1280 458 1440 492 1600 470 L1600 900 L0 900 Z"
        fill="#31443f"
      />
      <rect x="0" y="514" width="1600" height="24" fill="#dfe6e2" opacity="0.06" />

      {/* Mid ridge + distant pines */}
      <path
        d="M0 610 C 240 566 430 606 640 588 C 860 569 1040 604 1260 584 C 1420 570 1520 588 1600 578 L1600 900 L0 900 Z"
        fill="#22332c"
      />
      {treeline.map((t, i) => (
        <Pine key={i} x={t.x} baseY={t.y} h={t.h} fill="#1b2a23" />
      ))}
      <rect x="0" y="598" width="1600" height="20" fill="#dfe6e2" opacity="0.05" />

      {/* Foreground ridge */}
      <path
        d="M0 748 C 260 714 520 754 800 738 C 1080 722 1340 756 1600 736 L1600 900 L0 900 Z"
        fill="#15211b"
      />

      {/* Camp: fire + lean-to shelter */}
      <circle cx="905" cy="740" r="62" fill="url(#sv-fire)" />
      <path d="M898 748 L 905 730 L 912 748 Z" fill="#e89a4e" />
      <path d="M902 748 L 905 738 L 908 748 Z" fill="#f2c877" />
      <rect x="888" y="748" width="34" height="4" rx="2" fill="#0f1a14" />
      <path d="M975 750 L 1035 700 L 1092 750 Z" fill="#101a15" />
      <path d="M1004 750 L 1035 723 L 1066 750 Z" fill="#0a120e" />
      <path d="M1035 700 L 1035 750" stroke="#1c2a22" strokeWidth="3" />

      {/* Framing foreground pines */}
      <Pine x={95} baseY={910} h={540} fill="#0d1712" />
      <Pine x={215} baseY={910} h={360} fill="#101c15" />
      <Pine x={1465} baseY={910} h={480} fill="#0d1712" />
      <Pine x={1570} baseY={910} h={320} fill="#101c15" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */

function Vital({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8.5px] tracking-[0.12em] text-paper/55">
          {label}
        </span>
        <span className="font-mono text-[8.5px] text-paper/70">{value}</span>
      </div>
      <div className="mt-1 h-[4px] w-full bg-paper/[0.12]">
        <div
          className="h-full"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

const IconAxe = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5 16 L 12.5 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M10.5 4.5 L 16 5.5 L 15 11 L 11.5 7.5 Z" fill="currentColor" />
  </svg>
);
const IconPick = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4.5 16 L 13 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M5 7 C 8 4 12 4 15.5 7 C 12 6 8 6 5 7 Z" fill="currentColor" />
  </svg>
);
const IconTorch = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 18 L 10 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M10 2.5 C 12.2 5 12.8 7.2 10 8.8 C 7.2 7.2 7.8 5 10 2.5 Z" fill="#c7f04a" />
  </svg>
);
const IconWood = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="3" y="8" width="14" height="5" rx="2.5" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="14.5" cy="10.5" r="1.4" stroke="currentColor" strokeWidth="1.1" />
  </svg>
);
const IconStone = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5 13.5 L 8 6.5 L 14.5 7.5 L 15.5 13 L 9 15.5 Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
);
const IconBerries = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="11" r="2.4" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="12.5" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="10" cy="14" r="2.4" stroke="currentColor" strokeWidth="1.3" />
    <path d="M10 7.5 L 10 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);
const IconRope = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10.5" r="4.5" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="10" cy="10.5" r="1.8" stroke="currentColor" strokeWidth="1.1" />
    <path d="M10 6 L 10 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const SLOTS: Array<{ glyph: ReactNode; count?: number }> = [
  { glyph: IconAxe },
  { glyph: IconPick },
  { glyph: IconTorch },
  { glyph: IconWood, count: 12 },
  { glyph: IconStone, count: 7 },
  { glyph: IconBerries, count: 3 },
  { glyph: IconRope, count: 1 },
  { glyph: null },
];

function Hud() {
  return (
    <>
      {/* Vitals */}
      <div className="absolute left-4 top-4 w-[185px] border border-paper/15 bg-ink/55 p-3 backdrop-blur-[2px] md:left-6 md:top-6 md:w-[215px] md:p-3.5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-[0.14em] text-paper/85">
            DAY 04
          </span>
          <span className="font-mono text-[9px] tracking-[0.14em] text-accent">
            DUSK
          </span>
        </div>
        <div className="mt-2.5 space-y-2">
          <Vital label="HEALTH" value={82} color="#d4695f" />
          <Vital label="HUNGER" value={64} color="#d3a054" />
          <Vital label="WARMTH" value={47} color="#7fa8b5" />
        </div>
      </div>

      {/* Objective */}
      <div className="absolute left-1/2 top-4 hidden -translate-x-1/2 border border-paper/15 bg-ink/55 px-4 py-2 text-center backdrop-blur-[2px] md:top-6 md:block">
        <p className="font-mono text-[9px] tracking-[0.16em] text-paper/60">
          OBJECTIVE
        </p>
        <p className="mt-1 font-mono text-[10.5px] tracking-[0.1em] text-paper">
          SURVIVE THE NIGHT · SHELTER 3/5
        </p>
      </div>

      {/* Minimap */}
      <div className="absolute right-4 top-4 hidden sm:block md:right-6 md:top-6">
        <svg
          width="118"
          height="118"
          viewBox="0 0 118 118"
          role="img"
          aria-label="Minimap: camp at center, river to the south-west, quarry to the south"
        >
          <rect x="1" y="1" width="116" height="116" fill="#1a2620" stroke="rgba(241,239,230,0.18)" />
          <path d="M8 30 C 26 22 40 34 58 26 C 74 19 92 28 110 20 L 110 8 L 8 8 Z" fill="#233529" />
          <path d="M10 84 C 30 70 44 78 62 62 C 78 48 92 54 108 40" stroke="#4d6b5c" strokeWidth="5" fill="none" />
          <path d="M14 108 L 40 92 L 58 104 L 34 112 Z" fill="#2a3a2e" />
          <circle cx="86" cy="84" r="2" fill="rgba(241,239,230,0.35)" />
          <circle cx="30" cy="46" r="2" fill="rgba(241,239,230,0.35)" />
          <line x1="59" y1="46" x2="59" y2="72" stroke="rgba(241,239,230,0.12)" />
          <line x1="46" y1="59" x2="72" y2="59" stroke="rgba(241,239,230,0.12)" />
          <rect x="55" y="55" width="8" height="8" fill="#c7f04a" />
          <text x="59" y="86" textAnchor="middle" fontSize="8" fill="rgba(241,239,230,0.55)" fontFamily="monospace" letterSpacing="1">
            CAMP
          </text>
          <text x="59" y="15" textAnchor="middle" fontSize="8.5" fill="rgba(241,239,230,0.5)" fontFamily="monospace">
            N
          </text>
        </svg>
      </div>

      {/* Crosshair */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 hidden h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper/60 md:block"
      />

      {/* Pickup toast */}
      <div className="absolute bottom-[108px] left-1/2 hidden -translate-x-1/2 border border-paper/[0.12] bg-ink/60 px-3 py-1.5 backdrop-blur-[2px] md:block">
        <p className="font-mono text-[9.5px] tracking-[0.1em] text-paper/80">
          +2 WOOD · +1 STONE GATHERED
        </p>
      </div>

      {/* Crafting */}
      <div className="absolute bottom-6 left-6 hidden w-[210px] border border-paper/15 bg-ink/55 p-3 backdrop-blur-[2px] md:block">
        <p className="font-mono text-[9px] tracking-[0.14em] text-paper/55">
          CRAFTING
        </p>
        <p className="mt-1.5 font-sans text-[12.5px] font-semibold text-paper">
          Wooden shelter
        </p>
        <div className="mt-2 h-[3px] w-full bg-paper/15">
          <div className="h-full w-[60%] bg-accent" />
        </div>
        <p className="mt-1.5 font-mono text-[9px] tracking-[0.06em] text-paper/60">
          3 / 5 WOOD · 0 / 2 ROPE
        </p>
        <p className="mt-1 font-mono text-[9px] tracking-[0.06em] text-accent">
          [E] BUILD
        </p>
      </div>

      {/* Hotbar */}
      <div
        aria-hidden="true"
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1 md:bottom-6 md:gap-1.5"
      >
        {SLOTS.map((slot, i) => (
          <div
            key={i}
            className={cn(
              "relative flex h-9 w-9 items-center justify-center border bg-ink/55 text-paper/70 backdrop-blur-[2px] md:h-12 md:w-12",
              i === 2 ? "border-accent text-accent" : "border-paper/15"
            )}
          >
            <span className="absolute left-1 top-0.5 font-mono text-[8px] text-paper/45">
              {i + 1}
            </span>
            {slot.glyph}
            {slot.count != null && (
              <span className="absolute bottom-0.5 right-1 font-mono text-[8.5px] text-paper/70">
                {slot.count}
              </span>
            )}
          </div>
        ))}
      </div>

    </>
  );
}
