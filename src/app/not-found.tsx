import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
      <p className="label text-ink-soft">Error 404 — off the grid</p>
      <h1 className="mt-6 max-w-[16ch] text-[clamp(2.4rem,7vw,4.5rem)] font-semibold tracking-[-0.03em] text-balance">
        This page doesn&rsquo;t exist. <span className="text-ink-soft">Yet.</span>
      </h1>
      <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-ink-soft">
        We&rsquo;re early — some things are still being built. The rest is one
        click away.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-3 bg-ink px-7 py-4 text-[14px] font-semibold text-paper transition-colors duration-300 hover:bg-accent hover:text-ink"
      >
        Back to Dyvona
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        >
          →
        </span>
      </Link>
    </main>
  );
}
