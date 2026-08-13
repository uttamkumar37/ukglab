import type { ReactNode } from "react";

function inline(text: string): ReactNode {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={index} className="rounded bg-ink-100 px-1.5 py-0.5 font-mono text-sm text-ink-800 dark:bg-white/10 dark:text-ink-100">
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export function renderMarkdown(markdown: string) {
  const lines = markdown.split("\n");
  const nodes: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (!listItems.length) return;
    nodes.push(
      <ul key={`list-${nodes.length}`} className="my-5 space-y-2 pl-5 text-ink-700 marker:text-signal-500 dark:text-ink-200">
        {listItems.map((item) => (
          <li key={item}>{inline(item)}</li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  lines.forEach((line) => {
    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      return;
    }

    flushList();
    if (line.startsWith("# ")) {
      nodes.push(
        <h1 key={line} className="mt-2 text-4xl font-semibold tracking-normal text-ink-950 dark:text-white">
          {inline(line.slice(2))}
        </h1>,
      );
    } else if (line.startsWith("## ")) {
      nodes.push(
        <h2 key={line} className="mt-10 text-2xl font-semibold tracking-normal text-ink-950 dark:text-white">
          {inline(line.slice(3))}
        </h2>,
      );
    } else if (line.trim()) {
      nodes.push(
        <p key={`${line}-${nodes.length}`} className="my-4 text-lg leading-8 text-ink-700 dark:text-ink-200">
          {inline(line)}
        </p>,
      );
    }
  });

  flushList();
  return nodes;
}
