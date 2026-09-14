import Link from "next/link";
import { nav, site, socials } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-paper">
      <div className="mx-auto max-w-[1560px] px-5 md:px-8 xl:px-12">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 border-t border-paper/[0.12] py-14 md:py-16">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="text-[22px] font-semibold tracking-[-0.02em]">
                {site.wordmark}
              </span>
              <span
                aria-hidden="true"
                className="inline-block h-[9px] w-[9px] bg-accent"
              />
            </div>
            <p className="mt-4 max-w-[34ch] text-[14.5px] leading-relaxed text-paper/60">
              {site.tagline}
            </p>
            <p className="label mt-6 text-paper/40">{site.location}</p>
          </div>

          <nav
            aria-label="Footer"
            className="col-span-6 md:col-span-2 md:col-start-7"
          >
            <p className="label text-paper/40">Navigate</p>
            <ul className="mt-5 space-y-2.5">
              {nav.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-paper/70 transition-colors duration-300 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 md:col-span-2">
            <p className="label text-paper/40">Elsewhere</p>
            <ul className="mt-5 space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[14px] text-paper/70 transition-colors duration-300 hover:text-accent"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-2">
            <p className="label text-paper/40">Talk</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 block text-[14px] text-paper/70 transition-colors duration-300 hover:text-accent"
            >
              {site.email} ↗
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-paper/[0.12] py-7 text-[11.5px] text-paper/45 md:flex-row md:items-center md:justify-between">
          <p className="font-mono tracking-[0.06em]">
            © {year} {site.name}
          </p>
          <p className="label text-paper/35">Built in public — site v1.0</p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono tracking-[0.06em] uppercase transition-colors duration-300 hover:text-accent"
          >
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            >
              ↑
            </span>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
