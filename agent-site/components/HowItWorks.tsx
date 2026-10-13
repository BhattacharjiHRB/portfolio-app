"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "A message arrives",
    body: "Someone asks a question through this website, wired up with the Copilot Studio Agent SDK.",
  },
  {
    n: "02",
    title: "Wren reasons over it",
    body: "Copilot Studio's orchestration decides whether this needs a lookup in your knowledge base, a tool call, or both.",
  },
  {
    n: "03",
    title: "Tools and data connect",
    body: "Connectors and Power Automate flows run in the background — checking an order, updating a record, fetching a policy.",
  },
  {
    n: "04",
    title: "A grounded reply returns",
    body: "The SDK streams the response back into this interface, or hands the thread to a person when that's the better call.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-t border-line bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <span className="font-mono text-[11px] uppercase tracking-widest text-violet-soft">
            How it works
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            From question to action, in one round trip.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block" />
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="font-mono text-3xl font-semibold text-line">
                {step.n}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
