/**
 * A whisper of print grain over the whole page — the anti-flat-screen
 * detail. Fixed, non-interactive, ~3% opacity.
 */
export function Grain() {
  return (
    <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 z-[90]" />
  );
}
