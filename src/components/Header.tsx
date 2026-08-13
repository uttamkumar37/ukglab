import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation, siteConfig } from "../config/site";
import { Button } from "./Button";
import { ThemeSwitcher } from "./ThemeSwitcher";

function navClasses({ isActive }: { isActive: boolean }) {
  return `focus-ring rounded px-2.5 py-2 text-sm font-medium transition ${
    isActive ? "text-signal-700 dark:text-signal-400" : "text-ink-600 hover:text-ink-950 dark:text-ink-300 dark:hover:text-white"
  }`;
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/70 bg-ink-50/88 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/82">
      <div className="section-shell flex min-h-16 items-center justify-between gap-4">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-ink-950 font-mono text-sm font-bold text-white dark:bg-white dark:text-ink-950">UK</span>
          <span className="text-base font-semibold tracking-normal text-ink-950 dark:text-white">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) =>
            item.href.includes("#") ? (
              <a key={item.label} className="focus-ring rounded px-2.5 py-2 text-sm font-medium text-ink-600 transition hover:text-ink-950 dark:text-ink-300 dark:hover:text-white" href={item.href}>
                {item.label}
              </a>
            ) : (
              <NavLink key={item.label} to={item.href} className={navClasses}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="focus-ring rounded p-2 text-ink-600 transition hover:text-ink-950 dark:text-ink-300 dark:hover:text-white" href={siteConfig.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
            <Github aria-hidden="true" size={20} />
          </a>
          <ThemeSwitcher />
          <Button href={siteConfig.resumePath} variant="secondary" external>
            Resume
          </Button>
        </div>

        <button className="focus-ring rounded p-2 text-ink-800 dark:text-white lg:hidden" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle navigation">
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-navigation" className="border-t border-ink-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-ink-950 lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.label} className="focus-ring rounded-md px-3 py-3 text-sm font-medium text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-white/10" to={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <ThemeSwitcher />
            <Button href={siteConfig.resumePath} variant="secondary" external>
              Resume
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
