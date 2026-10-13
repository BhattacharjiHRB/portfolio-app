"use client";

import { motion } from "framer-motion";

const code = `// lib/copilotAgent.ts
import { CopilotStudioClient } from "@microsoft/agents-copilotstudio-client";

export async function startAgentSession() {
  const token = await fetchAgentToken();       // your token route
  const client = new CopilotStudioClient({ token, agentId });
  const conversation = await client.startConversation();

  return {
    conversationId: conversation.id,
    sendMessage: (text: string) =>
      client.sendActivity(conversation.id, { type: "message", text }),
  };
}`;

export default function Integration() {
  return (
    <section id="integration" className="relative border-t border-line bg-base py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-violet-soft">
            Integration
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            One file is the whole seam.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted">
            Every screen on this site talks to{" "}
            <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-xs text-cyan">
              lib/copilotAgent.ts
            </code>{" "}
            and nowhere else. Drop your Agent SDK credentials in there,
            replace the mock <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-xs text-cyan">sendMessage</code>{" "}
            call with the real client, and the launcher, transcript, and
            typing states already built into this page keep working as-is.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink-muted">
            {[
              "Token fetching stays server-side, in a Next.js API route.",
              "Conversation state is isolated to the ChatLauncher component.",
              "Swap the mock reply for a real Copilot Studio call in minutes.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-hidden rounded-2xl border border-line bg-surface shadow-xl shadow-black/30"
        >
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            <span className="ml-3 font-mono text-[11px] text-ink-faint">copilotAgent.ts</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-ink-muted">
            <code>{code}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
