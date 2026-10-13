"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { startAgentSession, type AgentMessage, type AgentSession } from "@/lib/copilotAgent";

export default function ChatLauncher({
  open,
  onOpen,
  onClose,
}: {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<AgentMessage[]>([
    {
      id: "welcome",
      role: "agent",
      text: "Hi, I'm Wren. Ask me anything about your account, or try \u201ccheck order 4417\u201d.",
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const sessionRef = useRef<AgentSession | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && !sessionRef.current) {
      startAgentSession().then((session) => {
        sessionRef.current = session;
      });
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);

  async function handleSend() {
    const text = input.trim();
    if (!text || sending) return;

    setMessages((prev) => [...prev, { id: `${Date.now()}-u`, role: "user", text }]);
    setInput("");
    setSending(true);

    const session = sessionRef.current ?? (await startAgentSession());
    sessionRef.current = session;
    const reply = await session.sendMessage(text);

    setMessages((prev) => [...prev, reply]);
    setSending(false);
  }

  return (
    <>
      <motion.button
        onClick={open ? onClose : onOpen}
        aria-label={open ? "Close chat with Wren" : "Open chat with Wren"}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 16 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-violet text-white shadow-[0_8px_30px_-6px_rgba(124,92,255,0.8)] transition-transform hover:-translate-y-0.5 sm:bottom-8 sm:right-8"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              className="text-xl leading-none"
            >
              ×
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-2.5 w-2.5 rounded-full bg-white animate-pulse-glow"
            />
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 left-4 z-50 flex h-[70vh] max-h-[560px] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/50 sm:left-auto sm:right-8 sm:h-[560px] sm:w-[380px]"
          >
            <div className="flex items-center justify-between border-b border-line bg-surface-2 px-4 py-3.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet/20">
                  <span className="h-2 w-2 rounded-full bg-cyan animate-pulse-glow" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-ink">Wren</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                    Copilot Studio agent
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close chat"
                className="text-ink-muted transition-colors hover:text-ink"
              >
                ×
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "ml-auto rounded-tr-sm bg-surface-2 text-ink"
                      : "mr-auto rounded-tl-sm bg-violet/15 text-ink"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              {sending && (
                <div className="mr-auto flex items-center gap-1 rounded-2xl rounded-tl-sm bg-violet/15 px-3.5 py-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink-muted animate-blink [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-ink-muted animate-blink [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-ink-muted animate-blink [animation-delay:300ms]" />
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 border-t border-line p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message Wren…"
                className="flex-1 rounded-full border border-line bg-base px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-violet"
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet text-white transition-opacity disabled:opacity-40"
              >
                →
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
