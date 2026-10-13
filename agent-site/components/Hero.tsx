"use client";

import { motion } from "framer-motion";
import SignalOrb from "./SignalOrb";
import ChatPreview from "./ChatPreview";

export default function Hero({ onOpenChat }: { onOpenChat: () => void }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid-lines bg-grid pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,92,255,0.16),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-cyan"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
            Agent status: online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl"
          >
            An agent that doesn't just answer.
            <span className="text-violet-soft"> It acts.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-lg text-balance text-base text-ink-muted sm:text-lg"
          >
            Wren is built on Microsoft Copilot Studio and wired into this site
            through the Agent SDK — it reads your knowledge base, calls your
            tools, and hands off to a human the moment it should.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button
              onClick={onOpenChat}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_30px_-6px_rgba(124,92,255,0.8)]"
            >
              Start a conversation
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-wider text-ink-faint"
          >
            <span>Copilot Studio</span>
            <span className="h-1 w-1 rounded-full bg-line" />
            <span>Agent SDK</span>
            <span className="h-1 w-1 rounded-full bg-line" />
            <span>Next.js 14</span>
            <span className="h-1 w-1 rounded-full bg-line" />
            <span>Tailwind CSS</span>
          </motion.div>
        </div>

        <div className="relative flex flex-col items-center gap-10">
          <SignalOrb />
          <div className="animate-float">
            <ChatPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
