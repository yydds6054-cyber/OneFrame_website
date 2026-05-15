"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.9, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-canvas/75 border-b border-ink-900/5 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <Logo className="h-10 w-10 md:h-12 md:w-12 transition-transform group-hover:rotate-[-6deg] group-hover:scale-105" />
          <span className="text-xl md:text-2xl font-bold tracking-tight text-ink-900">
            One<span className="text-bloom">Frame</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-mint scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
          <Link
            href="/#contact"
            className="ml-3 group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink-900 text-white px-5 py-2 text-sm font-semibold hover:bg-accent-violet transition-colors shadow-soft"
          >
            <span className="relative z-10">Start a project</span>
            <span aria-hidden className="relative z-10 transition-transform group-hover:translate-x-1">
              →
            </span>
            <span className="absolute inset-0 btn-shimmer animate-shimmer" />
          </Link>
        </nav>

        <button
          aria-label="Open menu"
          className="md:hidden rounded-md p-2 text-ink-800 hover:bg-ink-200/40"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-900/5 bg-canvas/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink-800 hover:text-ink-900"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 text-white px-5 py-3 text-sm font-semibold"
            >
              Start a project →
            </Link>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
