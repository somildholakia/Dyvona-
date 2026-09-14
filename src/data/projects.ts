export type ProjectDetail = { label: string; value: string };

export type Project = {
  id: "command-center" | "survival-game";
  index: string;
  nameLines: string[];
  role: string;
  description: string;
  status: string;
  year: string;
  figure: string;
  figureMeta: string;
  /** Layout hints: which side the figure bleeds toward, frame sizing. */
  bleed: "right" | "left";
  frameClassName?: string;
  details: ProjectDetail[];
  tools: string[];
  timeline: string;
  note?: string;
};

export const projects: Project[] = [
  {
    id: "command-center",
    index: "01",
    nameLines: ["Open Source", "Command Center"],
    role: "Concept · Design · Build",
    description:
      "A concept for making open-source contribution activity more engaging — through progress, streaks, achievements, analytics, and quests.",
    status: "Prototype",
    year: "2026 — Ongoing",
    figure: "Fig. 01 — Command Center, overview screen",
    figureMeta: "Prototype build · September 2026",
    bleed: "right",
    frameClassName:
      "h-[420px] md:h-[540px] lg:h-[620px] [mask-image:linear-gradient(to_bottom,black_68%,transparent_99%)]",
    details: [
      {
        label: "What it is",
        value:
          "One dashboard for open-source contribution — streaks, quests, achievements, and analytics, so maintaining momentum feels less like homework.",
      },
      {
        label: "What we're testing",
        value:
          "Whether progress mechanics can keep contributors showing up after week three — and what makes a streak feel earned instead of forced.",
      },
      {
        label: "For whom",
        value:
          "First-time and early-stage open-source contributors, and the maintainers who want their communities to stay alive.",
      },
      {
        label: "Where it stands",
        value:
          "A working prototype with real screens and real interactions. Not public yet, and still changing every week.",
      },
    ],
    tools: ["Next.js", "TypeScript", "Framer Motion"],
    timeline: "Since August 2026",
  },
  {
    id: "survival-game",
    index: "02",
    nameLines: ["Survival Game"],
    role: "Concept · Prototype",
    description:
      "A small experimental game concept exploring survival, resources, exploration, crafting, and shelter.",
    status: "Experiment",
    year: "2026",
    figure: "Fig. 02 — Survival Game, dusk at the camp",
    figureMeta: "Pre-alpha concept · September 2026",
    bleed: "left",
    details: [
      {
        label: "What it is",
        value:
          "A small 2D survival concept — gathering, crafting, shelter, nightfall. No grand ambition; mechanics we wanted to understand from the inside.",
      },
      {
        label: "What we're testing",
        value:
          "How much depth a few simple systems can carry before they feel like a game — and how fast we can prototype one.",
      },
      {
        label: "For whom",
        value:
          "Us, for now. It is a learning project first and a product question second.",
      },
      {
        label: "Where it stands",
        value:
          "Early experiment, pre-alpha. Some systems work, some don't, and that's the point.",
      },
    ],
    tools: ["2D", "Systems design", "Prototyping"],
    timeline: "Since September 2026",
    note: "this one is experimental.",
  },
];
