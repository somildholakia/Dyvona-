export type Capability = {
  name: string;
  status: "Building" | "Exploring";
};

export type Service = {
  index: string;
  id: string;
  titleLines: string[];
  lede: string;
  /** Layout + identity switches for each direction. */
  tone: "paper" | "tinted";
  motif: "post" | "terminal";
  figureLabel: string;
  items?: string[];
  capabilities?: Capability[];
};

export const servicesIntro =
  "Two directions, run in parallel. Both are early, both are hands-on, and both start the same way — with a real problem and a conversation.";

export const services: Service[] = [
  {
    index: "01",
    id: "linkedin",
    titleLines: ["LinkedIn Branding", "& Marketing"],
    lede: "Helping people and brands build a stronger presence on LinkedIn — deliberately, not loudly.",
    tone: "paper",
    motif: "post",
    figureLabel: "Fig. A — a presence, deliberately built",
    items: [
      "Personal branding",
      "Content strategy",
      "Content creation",
      "Profile optimization",
      "Audience growth",
      "Brand positioning",
    ],
  },
  {
    index: "02",
    id: "studio",
    titleLines: ["Development", "Studio"],
    lede: "Building digital products, software, experiments, and useful tools — for us, and for the people we work with.",
    tone: "tinted",
    motif: "terminal",
    figureLabel: "Fig. B — the studio, most days",
    capabilities: [
      { name: "Web apps", status: "Building" },
      { name: "Mobile apps", status: "Exploring" },
      { name: "SaaS", status: "Building" },
      { name: "AI products", status: "Building" },
      { name: "Automation", status: "Building" },
      { name: "MVPs", status: "Building" },
      { name: "Internal tools", status: "Building" },
    ],
  },
];
