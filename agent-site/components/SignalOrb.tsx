"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "answers", angle: -40 },
  { label: "actions", angle: 60 },
  { label: "handoff", angle: 160 },
  { label: "memory", angle: 250 },
];

export default function SignalOrb() {
  return (
    <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[380px] sm:w-[380px]">
      {/* outer rotating ring with orbit nodes */}
      <div className="absolute inset-0 animate-spin-slow">
        {nodes.map((node) => (
          <div
            key={node.label}
            className="absolute left-1/2 top-1/2 flex items-center gap-2"
            style={{
              transform: `rotate(${node.angle}deg) translate(158px) rotate(${-node.angle}deg)`,
            }}
          >
            <span className="flex items-center gap-1.5 rounded-full border border-line bg-surface/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan animate-spin-reverse">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              {node.label}
            </span>
          </div>
        ))}
      </div>

      {/* static faint ring guides */}
      <div className="absolute h-[300px] w-[300px] rounded-full border border-line/60 sm:h-[340px] sm:w-[340px]" />
      <div className="absolute h-[220px] w-[220px] rounded-full border border-line/40" />

      {/* core orb */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex h-[150px] w-[150px] items-center justify-center rounded-full bg-orb-gradient shadow-[0_0_80px_-10px_rgba(124,92,255,0.65)]"
      >
        <div className="absolute inset-0 rounded-full bg-orb-gradient blur-2xl opacity-60 animate-pulse-glow" />
        <span className="relative font-display text-sm font-semibold text-base">
          Wren
        </span>
      </motion.div>
    </div>
  );
}
