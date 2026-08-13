import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="focus-ring fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-md bg-ink-950 text-white shadow-soft transition hover:bg-signal-600 dark:bg-white dark:text-ink-950"
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ArrowUp aria-hidden="true" size={20} />
    </button>
  );
}
