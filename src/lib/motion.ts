/** Shared motion language for the whole site: one easing curve, one reveal viewport. */

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const VIEWPORT_ONCE = {
  once: true,
  margin: "0px 0px -10% 0px",
} as const;
