"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";

const stats = [
  { v: 120, suffix: "+", l: "Projects shipped", bg: "bg-bloom-lavender" },
  { v: 30, suffix: "", l: "Brands partnered with", bg: "bg-bloom-mint" },
  { v: 8, suffix: "", l: "Industry awards", bg: "bg-bloom-peach" },
  { v: 98, suffix: "%", l: "Repeat clients", bg: "bg-bloom-pink" },
];

const logos = [
  "AURORA",
  "LUMEN",
  "NORTHBOUND",
  "ECHO",
  "TEMPO",
  "HALO",
  "MERIDIAN",
  "ATLAS",
];

export default function Stats() {
  return (
    <section className="relative py-24 px-6 md:px-10 border-y border-ink-900/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`rounded-3xl ${s.bg} sticker p-7`}
            >
              <div className="font-display text-5xl md:text-6xl text-ink-900">
                <Counter to={s.v} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-ink-800 font-medium">{s.l}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-600 text-center font-semibold">
            Trusted by teams who care about craft
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-ink-600/40 font-display text-2xl tracking-[0.25em]">
            {logos.map((l) => (
              <span
                key={l}
                className="hover:text-ink-900 transition-colors"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
