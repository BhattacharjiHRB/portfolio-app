"use client";

import { motion } from "framer-motion";

export default function ChatPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="w-full max-w-sm rounded-2xl border border-line bg-surface/90 p-4 shadow-2xl shadow-black/40 backdrop-blur"
    >
      <div className="mb-3 flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan animate-pulse-glow" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
            live session
          </span>
        </div>
        <span className="font-mono text-[11px] text-ink-faint">#4417</span>
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-surface-2 px-3.5 py-2 text-ink">
          Can you check the status of order 4417 and refund it if it's delayed?
        </div>

        <div className="mr-auto max-w-[85%] rounded-2xl rounded-tl-sm bg-violet/15 px-3.5 py-2 text-ink">
          Order 4417 shipped 6 days late. I've issued a refund of $42.00 and
          notified the customer.
        </div>

        <div className="mr-auto flex items-center gap-1 rounded-2xl rounded-tl-sm bg-violet/15 px-3.5 py-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-ink-muted animate-blink [animation-delay:0ms]" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink-muted animate-blink [animation-delay:150ms]" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink-muted animate-blink [animation-delay:300ms]" />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-full border border-line px-3.5 py-2">
        <span className="font-mono text-xs text-ink-faint">Ask Wren anything…</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-cyan">
          agent sdk
        </span>
      </div>
    </motion.div>
  );
}
