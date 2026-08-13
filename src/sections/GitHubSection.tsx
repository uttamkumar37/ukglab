import { ArrowRight, Github } from "lucide-react";
import { Button } from "../components/Button";
import { siteConfig } from "../config/site";

export function GitHubSection() {
  return (
    <section className="border-y border-ink-200 bg-white py-20 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="section-shell">
        <div className="surface-card grid gap-8 rounded-xl p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-brand bg-ink-950 text-white dark:bg-white dark:text-ink-950">
              <Github aria-hidden="true" size={22} />
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal text-ink-950 dark:text-white">Engineering experiments live on GitHub.</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ink-600 dark:text-ink-300">
              Explore open-source projects, repository experiments, backend starters, deployment workflows, and the code behind UKG Lab without relying on a fragile external API.
            </p>
          </div>
          <Button href={siteConfig.githubUrl} external icon={ArrowRight}>
            View GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
