import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: LucideIcon;
  external?: boolean;
  download?: boolean;
  className?: string;
};

const variants = {
  primary: "bg-ink-950 text-white shadow-soft hover:-translate-y-0.5 hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100",
  secondary:
    "border border-ink-200 bg-white text-ink-900 hover:-translate-y-0.5 hover:border-signal-500 hover:text-signal-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-signal-400",
  ghost: "text-ink-700 hover:bg-ink-100 hover:text-ink-950 dark:text-ink-200 dark:hover:bg-white/10 dark:hover:text-white",
};

export function Button({ children, href, variant = "primary", icon: Icon, external, download, className = "" }: ButtonProps) {
  const classes = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`;
  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" size={18} /> : null}
      <span>{children}</span>
    </>
  );

  if (external || href.startsWith("mailto:") || download) {
    return (
      <a className={classes} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} download={download}>
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} to={href}>
      {content}
    </Link>
  );
}
