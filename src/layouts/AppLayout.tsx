import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";

export function AppLayout() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [hash, pathname]);

  return (
    <div className="min-h-screen bg-ink-50 text-ink-950 antialiased dark:bg-ink-950 dark:text-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
