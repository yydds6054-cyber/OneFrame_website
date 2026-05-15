"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const filters: { label: string; href?: string }[] = [
  { label: "All" },
  { label: "Web", href: "/work/web" },
  { label: "Video" },
  { label: "Poster" },
];

type Item = {
  title: string;
  client: string;
  tag: "Web" | "Video" | "Poster";
  size: "lg" | "md" | "sm";
  visual: React.ReactNode;
};

const tagColor: Record<Item["tag"], string> = {
  Web: "bg-bloom-lavender text-accent-violet",
  Video: "bg-bloom-pink text-accent-coral",
  Poster: "bg-bloom-mint text-accent-mint",
};

const items: Item[] = [
  {
    title: "Aurora — D2C Brand Site",
    client: "Aurora Studio",
    tag: "Web",
    size: "lg",
    visual: (
      <div className="absolute inset-0 bg-gradient-to-br from-bloom-lavender via-bloom-sky to-bloom-mint">
        <div className="absolute inset-6 rounded-2xl bg-white/85 backdrop-blur p-6 flex flex-col shadow-soft">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-coral" />
            <span className="h-2 w-2 rounded-full bg-bloom-butter" />
            <span className="h-2 w-2 rounded-full bg-accent-mint" />
            <span className="ml-3 text-[10px] font-mono text-ink-700">aurora.studio</span>
          </div>
          <div className="mt-6 flex-1 flex items-center justify-center">
            <p className="font-display text-3xl leading-[1] text-ink-900 text-center">
              Light, <span className="italic text-accent-violet">framed.</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Echo Festival 2026 Key Art",
    client: "Echo Festival",
    tag: "Poster",
    size: "md",
    visual: (
      <div className="absolute inset-0 bg-gradient-to-br from-bloom-pink via-bloom-peach to-bloom-butter">
        <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-ink-900">
          <p className="font-display italic text-4xl leading-[0.9] text-center">
            Sound
            <br />
            becomes
            <br />
            shape.
          </p>
        </div>
        <div className="absolute top-4 left-6 text-[9px] font-mono uppercase tracking-[0.2em] text-ink-700">
          Echo · 2026 · Vol. III
        </div>
      </div>
    ),
  },
  {
    title: "Northbound — Brand Film",
    client: "Northbound",
    tag: "Video",
    size: "md",
    visual: (
      <div className="absolute inset-0 bg-gradient-to-br from-bloom-peach via-bloom-butter to-bloom-mint">
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="relative h-16 w-16 rounded-full bg-ink-900 text-white grid place-items-center text-lg shadow-soft-xl">
            ▶
          </button>
        </div>
      </div>
    ),
  },
  {
    title: "Lumen — Product Launch",
    client: "Lumen",
    tag: "Web",
    size: "sm",
    visual: (
      <div className="absolute inset-0 bg-gradient-to-br from-bloom-sky to-bloom-lavender">
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-28 w-28 rounded-full border-2 border-white/80 bg-white/60 backdrop-blur grid place-items-center text-xs font-mono uppercase tracking-widest text-ink-900">
            Lumen 01
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Tempo — Editorial Series",
    client: "Tempo Magazine",
    tag: "Poster",
    size: "sm",
    visual: (
      <div className="absolute inset-0 bg-bloom-butter text-ink-900">
        <div className="absolute inset-0 p-5 flex items-center justify-center">
          <p className="font-display text-3xl italic leading-[0.9] text-center">
            On
            <br />
            patience
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Halo — Social Cut Series",
    client: "Halo Active",
    tag: "Video",
    size: "sm",
    visual: (
      <div className="absolute inset-0 bg-gradient-to-br from-bloom-pink to-bloom-lavender">
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-3 opacity-95">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="rounded-sm bg-white/40 grid place-items-center text-[9px] font-mono text-ink-800 backdrop-blur"
            >
              0{i + 1}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const sizeClass: Record<Item["size"], string> = {
  lg: "md:col-span-7 md:row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[520px]",
  md: "md:col-span-5 aspect-[4/3]",
  sm: "md:col-span-4 aspect-[4/3]",
};

export default function Work() {
  return (
    <section id="work" className="relative py-32 px-6 md:px-10 bg-white/40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent-violet font-semibold">
              ✦ Selected work
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1] tracking-tight text-ink-900">
              A few things we&apos;ve
              <br />
              <span className="text-bloom italic">built recently.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f, i) => {
              const base =
                "rounded-full border px-4 py-2 text-xs font-semibold transition inline-flex items-center gap-1.5";
              const styling =
                i === 0
                  ? "border-ink-900 bg-ink-900 text-white"
                  : f.href
                    ? "border-ink-900/15 bg-white text-ink-800 hover:border-accent-violet hover:text-accent-violet hover:shadow-soft"
                    : "border-ink-900/10 bg-white/40 text-ink-500 cursor-not-allowed";
              if (f.href) {
                return (
                  <Link key={f.label} href={f.href} className={`${base} ${styling}`}>
                    {f.label}
                    <span aria-hidden className="text-[10px]">→</span>
                  </Link>
                );
              }
              return (
                <button
                  key={f.label}
                  type="button"
                  disabled={i !== 0}
                  className={`${base} ${styling}`}
                >
                  {f.label}
                  {i !== 0 && (
                    <span aria-hidden className="text-[9px] uppercase tracking-widest">
                      soon
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          {items.map((item, i) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-soft hover:shadow-soft-lg transition-shadow flex flex-col ${sizeClass[item.size]}`}
            >
              {/* Visual area — top portion of the card. Clipping bounds
                  the poster so its text never bleeds into the caption. */}
              <div className="relative flex-1 overflow-hidden">
                {item.visual}
                {/* Hover affordance arrow */}
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 text-white shadow-soft opacity-0 transition-all group-hover:opacity-100 group-hover:scale-110">
                  ↗
                </div>
              </div>

              {/* Caption area — own white footer, never overlaps visual */}
              <figcaption className="relative shrink-0 border-t border-ink-900/5 bg-white px-5 py-4 md:px-6 md:py-5">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center rounded-full ${tagColor[item.tag]} px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest sticker`}
                  >
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-ink-600">
                    {item.client}
                  </span>
                </div>
                <h3 className="mt-2 text-base md:text-lg font-bold tracking-tight text-ink-900">
                  {item.title}
                </h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
