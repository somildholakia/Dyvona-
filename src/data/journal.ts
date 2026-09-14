export type JournalEntry = {
  id: string;
  /** Display date, DD.MM.YY */
  date: string;
  /** ISO date, used for sorting — keep the array newest-first. */
  iso: string;
  title: string;
  tag: string;
  description: string;
  /** The full note, revealed when a reader opens the entry. */
  body: string;
};

/**
 * Studio journal — newest first.
 * To publish a note: add an entry at the top of this array. Nothing else to wire up.
 */
export const journal: JournalEntry[] = [
  {
    id: "site-goes-live",
    date: "14.09.26",
    iso: "2026-09-14",
    title: "THE SITE GOES LIVE",
    tag: "Milestone",
    description:
      "The first public draft of Dyvona goes online — designed and built in-house over the last few weeks.",
    body: "Version one of dyvona.com is out. It isn't a polished corporate statement — it's an honest snapshot of where we are: early, curious, building two things at once. Everything here was designed and built in-house. If something feels rough at the edges, that's the actual texture underneath. We'd rather show the process than hide it.",
  },
  {
    id: "refining-open-source-app",
    date: "08.09.26",
    iso: "2026-09-08",
    title: "REFINING THE OPEN-SOURCE APP",
    tag: "Product",
    description:
      "A second pass at the Command Center: tighter streak logic, clearer quests, calmer analytics.",
    body: "The second pass was mostly subtraction. Streak logic got simpler, quests got clearer requirements, and the analytics screens calmed down. We redrew the contribution heatmap three times before it felt like a reward instead of homework. The current prototype build is faster, quieter, and easier to read at a glance.",
  },
  {
    id: "rethinking-product-experience",
    date: "08.09.26",
    iso: "2026-09-08",
    title: "RETHINKING THE PRODUCT EXPERIENCE",
    tag: "Thinking",
    description:
      "We stopped adding features for a day and asked what the first five minutes should feel like.",
    body: "We stepped back from the feature list and asked a simpler question: what should someone feel in the first five minutes? The answer — 'I can see my progress, and I want to keep going' — rearranged the whole layout. Overview first, streaks front and center, leaderboards pushed later. The product got smaller and clearer in one afternoon.",
  },
  {
    id: "first-app-design",
    date: "06.09.26",
    iso: "2026-09-06",
    title: "FIRST APP DESIGN",
    tag: "Design",
    description:
      "The first real screens for the open-source Command Center: dark UI, heatmaps, progress everywhere.",
    body: "The first real screens for the open-source Command Center. Dark UI, a contribution heatmap as the centerpiece, and progress indicators in nearly every corner. Rough in places, but it was the first time the idea felt like a product instead of a paragraph in a notebook.",
  },
  {
    id: "survival-game-experiment",
    date: "02.09.26",
    iso: "2026-09-02",
    title: "SURVIVAL GAME EXPERIMENT",
    tag: "Experiment",
    description:
      "A deliberate detour into game mechanics — resources, crafting, shelter, nightfall.",
    body: "A deliberate detour: prototyping survival mechanics — resources, crafting, shelter, nightfall. Partly for fun, mostly to learn how quickly we can take a systems idea from a notebook page to something you can actually play. Some of it works. Some of it is comedy. Both are useful.",
  },
  {
    id: "first-founder-outreach",
    date: "29.08.26",
    iso: "2026-08-29",
    title: "FIRST FOUNDER OUTREACH",
    tag: "Field notes",
    description:
      "Started conversations with founders about LinkedIn presence and the product problems keeping them up.",
    body: "We started talking to founders and operators about two things: their presence on LinkedIn, and the product problems that keep them up at night. More listening than pitching, by design. The notes from these conversations are already shaping both of our directions — and a few of them will turn into journal entries of their own.",
  },
];
