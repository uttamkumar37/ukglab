import { Copy, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import { siteConfig, socialLinks } from "../config/site";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="surface-card grid gap-10 rounded-xl p-6 md:p-8 lg:grid-cols-[.9fr_1.1fr]">
          <SectionHeading kicker="Let's Connect" title="Building reliable software is what I do." copy="Looking for a Java/backend engineer with enterprise integration and product-building experience? I would be glad to talk." />
        <div>
          <div className="flex flex-wrap gap-3">
            <Button href={`mailto:${siteConfig.email}`} icon={MessageCircle}>Let's Connect</Button>
            <Button href={siteConfig.linkedinUrl} variant="secondary" external icon={Linkedin}>LinkedIn</Button>
            <button className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-ink-200 px-4 py-2.5 text-sm font-semibold text-ink-800 transition hover:border-signal-500 hover:text-signal-700 dark:border-white/10 dark:text-ink-100 dark:hover:text-signal-400" type="button" onClick={copyEmail}>
              <Copy size={17} aria-hidden="true" /> {copied ? "Copied" : "Copy email"}
            </button>
          </div>
          <div className="mt-8 grid gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} className="focus-ring flex items-center justify-between rounded-md border border-ink-200 p-4 text-ink-700 transition hover:border-signal-500 hover:text-signal-700 dark:border-white/10 dark:text-ink-200 dark:hover:text-signal-400" href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
                <span className="flex items-center gap-3"><Icon aria-hidden="true" size={18} /> {label}</span>
                <span className="text-sm">{href.replace("mailto:", "")}</span>
              </a>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
