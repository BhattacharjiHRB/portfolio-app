"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Integration", href: "#integration" },
];

export default function Navbar({ onOpenChat }: { onOpenChat: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-base/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-violet/20">
            <span className="h-2.5 w-2.5 rounded-full bg-violet animate-pulse-glow" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Wren
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={onOpenChat}
            className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-base transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_rgba(124,92,255,0.6)]"
          >
            Talk to Wren
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="h-[1.5px] w-5 bg-ink"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="h-[1.5px] w-5 bg-ink"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            className="h-[1.5px] w-5 bg-ink"
          />
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-line bg-base/95 px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onOpenChat();
              }}
              className="mt-2 rounded-full bg-ink px-5 py-2 text-sm font-medium text-base"
            >
              Talk to Wren
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
