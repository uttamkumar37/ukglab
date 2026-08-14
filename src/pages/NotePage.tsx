import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { notes } from "../data/notes";
import { renderMarkdown } from "../utils/markdown";
import { updateSeo } from "../utils/seo";

type NotePageProps = {
  routeBase?: "/notes" | "/writing";
};

export function NotePage({ routeBase = "/notes" }: NotePageProps) {
  const { category, slug } = useParams();
  const note = notes.find((item) => item.slug === `${category}/${slug}`);

  useEffect(() => {
    if (note) {
      updateSeo({ title: note.title, description: note.description, path: `${routeBase}/${note.slug}`, type: "article" });
    }
  }, [note, routeBase]);

  if (!note) {
    return (
      <section className="py-20">
        <div className="section-shell">
          <p className="section-kicker">Not found</p>
          <h1 className="section-title">This note does not exist yet.</h1>
          <Link className="focus-ring mt-8 inline-flex rounded-md bg-ink-950 px-4 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-ink-950" to={routeBase}>Back to {routeBase === "/writing" ? "writing" : "notes"}</Link>
        </div>
      </section>
    );
  }

  return (
    <article className="py-20">
      <div className="section-shell max-w-4xl">
        <Link className="focus-ring inline-flex items-center gap-2 rounded text-sm font-semibold text-ink-600 hover:text-signal-700 dark:text-ink-300 dark:hover:text-signal-400" to={routeBase}>
          <ArrowLeft size={17} aria-hidden="true" /> {routeBase === "/writing" ? "Writing" : "Notes"}
        </Link>
        <div className="mt-8 flex flex-wrap gap-2">
          <span className="rounded bg-signal-500/10 px-3 py-1 text-sm font-semibold text-signal-700 dark:text-signal-400">{note.category}</span>
          <span className="rounded bg-ink-100 px-3 py-1 text-sm font-semibold text-ink-700 dark:bg-white/10 dark:text-ink-200">{note.readingTime}</span>
        </div>
        <div className="mt-5">{renderMarkdown(note.content)}</div>
        <div className="mt-10 flex flex-wrap gap-2 border-t border-ink-200 pt-6 dark:border-white/10">
          {note.tags.map((tag) => <span key={tag} className="rounded-md border border-ink-200 px-3 py-1.5 text-sm text-ink-600 dark:border-white/10 dark:text-ink-300">{tag}</span>)}
        </div>
      </div>
    </article>
  );
}
