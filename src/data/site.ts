export const site = {
  name: "Dyvona",
  wordmark: "DYVONA",
  descriptor: "Technology / Ventures",
  tagline: "Building technology for problems that matter.",
  description:
    "Dyvona is an early-stage technology venture exploring ideas, building digital products, and solving problems that matter.",
  location: "Mumbai, India",
  established: 2026,
  email: "hello@dyvona.com",
};

/** Placeholder until the real domain is wired up — see README. */
export const siteUrl = "https://dyvona.com";

export const nav = [
  { id: "work", label: "Work", href: "/#work" },
  { id: "studio", label: "Studio", href: "/#studio" },
  { id: "about", label: "About", href: "/#about" },
  { id: "journal", label: "Journal", href: "/#journal" },
] as const;

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/dyvona" },
  { label: "X", href: "https://x.com/dyvona" },
  { label: "GitHub", href: "https://github.com/dyvona" },
];

export const hero = {
  label: "Dyvona / Independent technology venture",
  est: "Est. 2026 — Mumbai",
  headline: ["Building technology", "for problems that", "matter."],
  paragraph:
    "We explore ideas, build products, and learn by putting things into the real world.",
  links: [
    { label: "Explore our work", href: "/#work" },
    { label: "Start a conversation", href: "/#contact" },
  ],
  meta: [
    { label: "Based in", value: "Mumbai, India" },
    { label: "Status", value: "Early stage" },
    { label: "Focus", value: "Products / Technology / Brand" },
  ],
};

export const processSteps = ["Idea", "Build", "Test", "Learn"];

export const about = {
  statement: [
    "Dyvona is an early-stage venture exploring",
    "what can be built when curiosity meets",
    "execution.",
  ],
  lines: [
    "We're starting small.",
    "We're experimenting.",
    "We're building publicly.",
    "We're looking for problems worth solving.",
  ],
  ledger: [
    { label: "Founded", value: "2026" },
    { label: "Based", value: "Mumbai, India" },
    { label: "Team", value: "Small, by design" },
    { label: "Status", value: "Early stage" },
    { label: "Directions", value: "Two, in parallel" },
    { label: "Default", value: "Build in public" },
  ],
};
