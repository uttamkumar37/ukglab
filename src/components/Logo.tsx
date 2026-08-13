import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link to="/" className="focus-ring group inline-flex items-center gap-3 rounded-md" aria-label={`${siteConfig.name} home`}>
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-brand border border-ink-200 bg-white text-[13px] font-black text-ink-950 shadow-soft transition group-hover:border-signal-500 dark:border-white/10 dark:bg-white/8 dark:text-white">
        <span className="absolute inset-x-1 top-1 h-px bg-signal-500/70" />
        UK
      </span>
      {!compact ? (
        <span className="leading-none">
          <span className="block text-base font-bold tracking-normal text-ink-950 dark:text-white">UKG</span>
          <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-ink-500 dark:text-ink-400">Lab</span>
        </span>
      ) : null}
    </Link>
  );
}
