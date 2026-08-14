import { Link } from "react-router-dom";
import { learningPlatforms } from "../data/learningPlatforms";
import { navigation, siteConfig, socialLinks } from "../config/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white dark:border-white/10 dark:bg-ink-950">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 text-sm font-semibold text-signal-700 dark:text-signal-400">{siteConfig.tagline}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-ink-600 dark:text-ink-300">{siteConfig.description}</p>
        </div>
        <div>
          <p className="font-semibold text-ink-950 dark:text-white">Explore</p>
          <div className="mt-4 grid gap-2">
            {navigation.map((item) => (
              item.href.includes("#") ? (
                <a key={item.label} className="link-underline w-fit text-sm text-ink-600 hover:text-signal-700 dark:text-ink-300 dark:hover:text-signal-400" href={item.href}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} className="link-underline w-fit text-sm text-ink-600 hover:text-signal-700 dark:text-ink-300 dark:hover:text-signal-400" to={item.href}>
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-ink-950 dark:text-white">Products</p>
          <div className="mt-4 grid gap-2">
            {learningPlatforms.map((platform) => (
              <a key={platform.domain} className="link-underline w-fit text-sm text-ink-600 hover:text-signal-700 dark:text-ink-300 dark:hover:text-signal-400" href={platform.href} target="_blank" rel="noreferrer">
                {platform.name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-ink-950 dark:text-white">Social</p>
          <div className="mt-4 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} className="focus-ring rounded-md border border-ink-200 p-2 text-ink-600 transition hover:border-signal-500 hover:text-signal-700 dark:border-white/10 dark:text-ink-300 dark:hover:text-signal-400" href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" aria-label={label} title={label}>
                <Icon aria-hidden="true" size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-ink-200 py-5 text-center text-sm text-ink-500 dark:border-white/10 dark:text-ink-400">
        © {new Date().getFullYear()} {siteConfig.name}. Built by {siteConfig.owner}.
      </div>
    </footer>
  );
}
