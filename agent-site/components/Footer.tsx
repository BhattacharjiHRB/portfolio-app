"use client";

export default function Footer({ onOpenChat }: { onOpenChat: () => void }) {
  return (
    <footer className="relative border-t border-line bg-surface/40 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-2xl font-semibold text-ink">
            Ready when you are.
          </p>
          <p className="mt-2 text-sm text-ink-muted">
            Wren is live in the corner of this page — say hello.
          </p>
        </div>
        <button
          onClick={onOpenChat}
          className="rounded-full bg-violet px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          Start a conversation
        </button>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-line px-6 pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Wren. Built with Next.js, Tailwind CSS, and Copilot Studio.</span>
        <span className="font-mono uppercase tracking-wider">Agent SDK v1</span>
      </div>
    </footer>
  );
}
