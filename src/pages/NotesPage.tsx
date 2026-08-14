import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { notes } from "../data/notes";
import { updateSeo } from "../utils/seo";

type NotesPageProps = {
  routeBase?: "/notes" | "/writing";
};

export function NotesPage({ routeBase = "/notes" }: NotesPageProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [tag, setTag] = useState("All");

  useEffect(() => updateSeo({ title: routeBase === "/writing" ? "Writing" : "Notes", description: "Technical writing from UKG Lab on Java, APIs, Docker, integrations, and system design.", path: routeBase }), [routeBase]);

  const categories = useMemo(() => ["All", ...Array.from(new Set(notes.map((note) => note.category)))], []);
  const tags = useMemo(() => ["All", ...Array.from(new Set(notes.flatMap((note) => note.tags)))], []);
  const filtered = useMemo(() => {
    const lowered = query.toLowerCase();
    return notes.filter((note) => {
      const matchesQuery = [note.title, note.description, note.category, ...note.tags].join(" ").toLowerCase().includes(lowered);
      const matchesCategory = category === "All" || note.category === category;
      const matchesTag = tag === "All" || note.tags.includes(tag);
      return matchesQuery && matchesCategory && matchesTag;
    });
  }, [category, query, tag]);

  return (
    <section className="py-20">
      <div className="section-shell">
        <SectionHeading kicker={routeBase === "/writing" ? "Writing" : "Notes"} title="Technical notes and learning traces." copy="Search, category filters, tag filters, readable URLs, and local Markdown content are ready for expansion." />
        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto_auto]">
          <label className="relative">
            <span className="sr-only">Search notes</span>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" size={18} aria-hidden="true" />
            <input className="focus-ring min-h-12 w-full rounded-md border border-ink-200 bg-white pl-10 pr-4 text-ink-900 dark:border-white/10 dark:bg-white/5 dark:text-white" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search notes" />
          </label>
          <select className="focus-ring min-h-12 rounded-md border border-ink-200 bg-white px-3 text-ink-900 dark:border-white/10 dark:bg-ink-900 dark:text-white" value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter by category">
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select className="focus-ring min-h-12 rounded-md border border-ink-200 bg-white px-3 text-ink-900 dark:border-white/10 dark:bg-ink-900 dark:text-white" value={tag} onChange={(event) => setTag(event.target.value)} aria-label="Filter by tag">
            {tags.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((note) => (
            <Link key={note.slug} to={`${routeBase}/${note.slug}`} className="focus-ring rounded-lg border border-ink-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-signal-500 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-sm font-semibold text-signal-700 dark:text-signal-400">{note.category}</p>
              <h2 className="mt-3 text-xl font-semibold text-ink-950 dark:text-white">{note.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink-600 dark:text-ink-300">{note.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {note.tags.map((item) => <span key={item} className="rounded bg-ink-100 px-2.5 py-1 text-xs font-semibold text-ink-700 dark:bg-white/10 dark:text-ink-200">{item}</span>)}
              </div>
              <p className="mt-5 text-xs font-medium text-ink-500 dark:text-ink-400">{note.readingTime} · Updated {note.updatedDate}</p>
            </Link>
          ))}
        </div>
        {!filtered.length ? <div className="mt-10 rounded-md border border-ink-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.03]"><p className="section-kicker">Writing queue</p><p className="mt-3 text-lg font-semibold text-ink-950 dark:text-white">No notes match those filters yet.</p><p className="mt-2 text-sm leading-6 text-ink-600 dark:text-ink-300">Try a broader search or return when the next engineering note is ready.</p></div> : null}
      </div>
    </section>
  );
}
