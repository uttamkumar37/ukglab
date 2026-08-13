import { Home } from "lucide-react";
import { useEffect } from "react";
import { Button } from "../components/Button";
import { updateSeo } from "../utils/seo";

export function NotFoundPage() {
  useEffect(() => updateSeo({ title: "Page Not Found", description: "The requested UKG Lab page could not be found.", path: "/404" }), []);

  return (
    <section className="grid min-h-[70vh] place-items-center py-20">
      <div className="section-shell text-center">
        <p className="section-kicker">404</p>
        <h1 className="section-title">Experiment not found.</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-ink-600 dark:text-ink-300">
          This route is not part of the UKG Lab architecture.
        </p>
        <div className="mt-8">
          <Button href="/" icon={Home}>Go home</Button>
        </div>
      </div>
    </section>
  );
}
