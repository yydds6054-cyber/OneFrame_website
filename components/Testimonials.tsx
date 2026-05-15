"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    quote:
      "OneFrame replaced three vendors for us. Brand site, launch film, and event posters — same team, same taste, half the chaos.",
    name: "Mira Chen",
    role: "Head of Brand, Aurora Studio",
    bg: "bg-bloom-lavender",
    avatar: "bg-accent-violet",
  },
  {
    quote:
      "The kind of studio that actually pushes back on the brief. We launched two weeks ahead of schedule with a site we still get compliments on.",
    name: "Daniel Park",
    role: "Founder, Lumen Audio",
    bg: "bg-bloom-pink",
    avatar: "bg-accent-coral",
  },
  {
    quote:
      "Our festival key art moved 40% more tickets than last year's. The poster set alone earned us a feature in a print annual.",
    name: "Sofia Reyes",
    role: "Creative Director, Echo Festival",
    bg: "bg-bloom-peach",
    avatar: "bg-accent-coral",
  },
  {
    quote:
      "Fast, opinionated, and surprisingly calm. We brief them on Monday and have a review-ready cut by Thursday.",
    name: "Ren Takahashi",
    role: "Marketing Lead, Northbound Coffee",
    bg: "bg-bloom-mint",
    avatar: "bg-accent-mint",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-violet font-semibold">
              ✦ Words from clients
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1] tracking-tight text-ink-900">
              We&apos;d rather show
              <br />
              <span className="text-bloom italic">than tell.</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-ink-700 leading-relaxed">
            But when our clients want to talk about the work, we don&apos;t stop them.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl ${q.bg} sticker p-8 md:p-10 transition-shadow hover:shadow-soft-lg`}
            >
              <div className="relative">
                <div className="font-display text-7xl leading-none text-ink-900/15">
                  &ldquo;
                </div>
                <blockquote className="mt-2 text-lg md:text-xl leading-relaxed text-ink-900 font-display italic">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <div
                    className={`grid h-11 w-11 place-items-center rounded-full ${q.avatar} text-sm font-bold text-white shadow-soft`}
                  >
                    {q.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink-900">{q.name}</div>
                    <div className="text-xs text-ink-700">{q.role}</div>
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
