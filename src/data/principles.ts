export type Principle = {
  index: string;
  title: string;
  description: string;
};

export const principles: Principle[] = [
  {
    index: "01",
    title: "Build",
    description: "Ideas become useful when they become real.",
  },
  {
    index: "02",
    title: "Listen",
    description: "Good products start with understanding real problems.",
  },
  {
    index: "03",
    title: "Experiment",
    description: "Not every idea deserves to survive.",
  },
  {
    index: "04",
    title: "Repeat",
    description: "Every iteration teaches us something.",
  },
];

export const principlesFootnote =
  "That's the whole method. There is no secret third step.";
