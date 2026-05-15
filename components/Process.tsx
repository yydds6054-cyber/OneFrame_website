"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Listen",
    body: "We start with a conversation. Goals, audience, constraints. We leave with a tight scope and a shared definition of done.",
    bg: "bg-bloom-lavender",
  },
  {
    n: "02",
    title: "Direct",
    body: "Art direction first. Mood boards, type studies, motion references — we lock the visual language before any pixel ships.",
    bg: "bg-bloom-sky",
  },
  {
    n: "03",
    title: "Craft",
    body: "Design and build in parallel, in tight loops. Daily previews, async feedback, no surprises at the end.",
    bg: "bg-bloom-mint",
  },
  {
    n: "04",
    title: "Ship",
    body: "Launch, measure, iterate. We hand off clean files, documented code, and the option to keep us on retainer.",
    bg: "bg-bloom-peach",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-32 px-6 md:px-10 overflow-hidden bg-white/40"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-violet font-semibold">
            ✦ How we work
          </p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[1] tracking-tight text-ink-900">
            A process built around
            <br />
            <span className="text-bloom italic">trust and tempo.</span>
          </h2>
        </div>

        <div className="relative grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 80 }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
              className={`relative rounded-3xl ${s.bg} sticker p-8 md:p-10 group`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-ink-700">
                  STEP / {s.n}
                </span>
                <span className="text-ink-900 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
              <h3 className="mt-12 font-display text-3xl text-ink-900">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-800/85">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
