import { Github, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation, siteConfig } from "../config/site";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";

function navClasses({ isActive }: { isActive: boolean }) {
  return `focus-ring relative rounded-md px-2.5 py-2 text-sm font-semibold transition ${
    isActive ? "text-ink-950 after:absolute after:inset-x-2.5 after:bottom-1 after:h-px after:bg-signal-500 dark:text-white" : "text-ink-600 hover:text-ink-950 dark:text-ink-300 dark:hover:text-white"
  }`;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition ${scrolled || open ? "border-b border-ink-200/80 bg-ink-50/90 shadow-[0_1px_0_rgba(15,23,42,.04)] backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/88" : "border-b border-transparent bg-ink-50/70 backdrop-blur-sm dark:bg-ink-950/60"}`}>
      <div className="section-shell flex min-h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) =>
            item.href.includes("#") ? (
              <a key={item.label} className="focus-ring rounded-md px-2.5 py-2 text-sm font-semibold text-ink-600 transition hover:text-ink-950 dark:text-ink-300 dark:hover:text-white" href={item.href}>
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
          <Button href="/contact" icon={MessageCircle}>
            Let's Connect
          </Button>
        </div>

        <button className="focus-ring rounded p-2 text-ink-800 dark:text-white lg:hidden" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle navigation">
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-navigation" className="border-t border-ink-200 bg-white/96 px-4 py-4 shadow-lift backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/96 lg:hidden">
          <nav className="grid gap-1 rounded-brand border border-ink-200 bg-ink-50 p-2 dark:border-white/10 dark:bg-white/[0.03]" aria-label="Mobile navigation">
            {navigation.map((item) =>
              item.href.includes("#") ? (
                <a key={item.label} className="focus-ring rounded-md px-3 py-3 text-sm font-medium text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-white/10" href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} className="focus-ring rounded-md px-3 py-3 text-sm font-medium text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-white/10" to={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ),
            )}
            <Link className="focus-ring rounded-md bg-ink-950 px-3 py-3 text-sm font-semibold text-white dark:bg-white dark:text-ink-950" to="/contact" onClick={() => setOpen(false)}>
              Let's Connect
            </Link>
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
