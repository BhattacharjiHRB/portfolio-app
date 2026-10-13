"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    tag: "answers",
    title: "Instant, grounded answers",
    body: "Wren reads your docs, FAQs, and policies inside Copilot Studio, so every reply is grounded in what your business actually says — not a guess.",
  },
  {
    tag: "actions",
    title: "Takes real actions",
    body: "Look up an order, update a record, book a slot. Wren calls the same connectors and Power Platform flows your team already relies on.",
  },
  {
    tag: "handoff",
    title: "Knows when to hand off",
    body: "When a conversation needs a person, Wren escalates with full context attached — no one repeats themselves.",
  },
  {
    tag: "memory",
    title: "Remembers the thread",
    body: "Context carries across a session, across devices, so a conversation started on mobile can continue at a desk.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative border-t border-line bg-base py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <span className="font-mono text-[11px] uppercase tracking-widest text-violet-soft">
            Capabilities
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            One agent, four jobs it actually finishes.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface/60 p-7 transition-colors hover:border-violet/50"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-cyan">
                {cap.tag}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                {cap.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {cap.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
