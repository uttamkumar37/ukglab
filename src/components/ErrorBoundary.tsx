import type { ReactNode } from "react";
import { Component } from "react";
import { Button } from "./Button";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="grid min-h-screen place-items-center bg-ink-50 px-4 py-20 text-center text-ink-950 dark:bg-ink-950 dark:text-white">
        <div className="max-w-lg">
          <p className="section-kicker">UKG LAB</p>
          <h1 className="section-title">This experiment hit an unexpected error.</h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-ink-600 dark:text-ink-300">Refresh the page to try again, or return to the main lab.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/">Return home</Button>
            <button className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-ink-200 px-4 py-2.5 text-sm font-semibold text-ink-800 transition hover:border-signal-500 hover:text-signal-700 dark:border-white/10 dark:text-ink-100 dark:hover:text-signal-400" type="button" onClick={() => window.location.reload()}>Refresh</button>
          </div>
        </div>
      </main>
    );
  }
}
