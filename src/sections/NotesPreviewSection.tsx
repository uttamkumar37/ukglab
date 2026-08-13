import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { notes } from "../data/notes";

export function NotesPreviewSection() {
  return (
    <section id="notes" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            kicker="Notes from the Lab"
            title="Concise technical notes for things worth remembering."
            copy="Early notes cover API design, deployment, Spring Boot, integrations, and the operating knowledge behind real project work."
          />
          <Link className="focus-ring inline-flex w-fit items-center gap-2 rounded-md text-sm font-semibold text-ink-800 hover:text-signal-700 dark:text-ink-100 dark:hover:text-signal-400" to="/notes">
            View all notes <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {notes.slice(0, 3).map((note) => (
            <Link key={note.slug} to={`/notes/${note.slug}`} className="focus-ring surface-card rounded-brand p-5 transition hover:-translate-y-1 hover:border-signal-500 dark:hover:border-signal-400">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-signal-700 dark:text-signal-400">{note.category}</p>
              <h3 className="mt-4 text-lg font-semibold leading-7 text-ink-950 dark:text-white">{note.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-600 dark:text-ink-300">{note.description}</p>
              <p className="mt-5 text-xs font-semibold text-ink-500 dark:text-ink-400">{note.publishedDate} · {note.readingTime}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
