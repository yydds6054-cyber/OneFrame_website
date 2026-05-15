"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Card = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  blurb: string;
  href: string | null;
  glyph: string;
  front: React.ReactNode;
};

function PosterFrame({
  palette,
  children,
}: {
  palette: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${palette}`} />
      <div className="absolute inset-0 bg-white/10" />
      {children}
    </div>
  );
}

const cards: Card[] = [
  {
    id: "aurora",
    number: "01",
    title: "Aurora Studio",
    tagline: "D2C · Lighting Brand",
    blurb:
      "A minimalist e-commerce experience for a designer lighting brand, with editorial product pages and a custom checkout flow.",
    href: null,
    glyph: "◐",
    front: (
      <PosterFrame palette="from-bloom-lavender via-bloom-sky to-bloom-mint">
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative h-32 w-32 rounded-full bg-white/80 shadow-soft-lg">
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-bloom-butter via-bloom-peach to-bloom-pink" />
          </div>
        </div>
      </PosterFrame>
    ),
  },
  {
    id: "lumen",
    number: "02",
    title: "Lumen Audio",
    tagline: "Product · Launch Site",
    blurb:
      "An immersive single-product launch with scroll-driven 3D, animated specifications, and motion-graphic feature reels.",
    href: null,
    glyph: "◯",
    front: (
      <PosterFrame palette="from-bloom-sky via-bloom-mint to-bloom-lavender">
        <div className="absolute inset-0 grid place-items-center">
          <div className="grid h-32 w-32 place-items-center rounded-full border-2 border-white/80 bg-white/40 backdrop-blur text-[10px] font-mono uppercase tracking-[0.3em] text-ink-900">
            Lumen 01
          </div>
        </div>
      </PosterFrame>
    ),
  },
  {
    id: "northbound",
    number: "03",
    title: "Northbound Coffee",
    tagline: "Brand · Story Site",
    blurb:
      "An editorial brand site with hero film loops, an origin map, and a quiet typographic system.",
    href: null,
    glyph: "❖",
    front: (
      <PosterFrame palette="from-bloom-peach via-bloom-butter to-bloom-mint">
        <svg viewBox="0 0 200 280" className="absolute inset-x-0 bottom-0 w-full">
          <path d="M0 200 L40 140 L70 170 L110 100 L140 150 L180 120 L200 145 L200 280 L0 280 Z" fill="#1c1633" opacity="0.25" />
          <path d="M0 220 L60 175 L100 200 L150 165 L200 195 L200 280 L0 280 Z" fill="#1c1633" opacity="0.4" />
        </svg>
        <div className="absolute top-6 left-0 right-0 text-center font-display text-2xl italic text-ink-900">
          north.
        </div>
      </PosterFrame>
    ),
  },
  {
    id: "atlas-type",
    number: "04",
    title: "Atlas Type Foundry",
    tagline: "Type · Foundry Catalogue",
    blurb:
      "A digital catalogue for a type foundry, with live letter-shape interactions and per-typeface lookbooks.",
    href: null,
    glyph: "Ⓐ",
    front: (
      <PosterFrame palette="from-bloom-butter via-bloom-peach to-bloom-pink">
        <div className="absolute inset-0 grid place-items-center text-ink-900">
          <span className="font-display text-[140px] leading-none italic">Aa</span>
        </div>
        <div className="absolute bottom-5 left-0 right-0 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-ink-700">
          Atlas · Vol. I
        </div>
      </PosterFrame>
    ),
  },
  {
    id: "echo",
    number: "05",
    title: "Echo Festival",
    tagline: "Music · Event Site",
    blurb:
      "A festival site with a live lineup grid, time-zone-aware schedule, and ticket flow with seat selection.",
    href: null,
    glyph: "◊",
    front: (
      <PosterFrame palette="from-bloom-pink via-bloom-peach to-bloom-butter">
        <div className="absolute inset-0 p-6 flex flex-col justify-center text-ink-900">
          <p className="font-display italic text-3xl leading-[0.85]">
            Sound
            <br />
            becomes
            <br />
            shape.
          </p>
        </div>
      </PosterFrame>
    ),
  },
  {
    id: "tempo",
    number: "06",
    title: "Tempo Magazine",
    tagline: "Editorial · Long-form",
    blurb:
      "A digital magazine with custom article templates, reading-time progress, and a CMS for issue-based publishing.",
    href: null,
    glyph: "❡",
    front: (
      <PosterFrame palette="from-bloom-mint via-bloom-butter to-bloom-peach">
        <div className="absolute inset-0 p-6 text-ink-900 flex flex-col">
          <div className="flex items-center justify-between text-[9px] font-mono uppercase">
            <span>Tempo</span>
            <span>014</span>
          </div>
          <div className="mt-auto">
            <p className="font-display text-4xl italic leading-[0.9]">On patience</p>
            <div className="mt-2 h-px w-12 bg-ink-900" />
          </div>
        </div>
      </PosterFrame>
    ),
  },
  {
    id: "halo",
    number: "07",
    title: "Halo Active",
    tagline: "DTC · Apparel",
    blurb:
      "A high-energy apparel site with cinematic product loops, athlete profiles, and a recommended-fit quiz.",
    href: null,
    glyph: "✺",
    front: (
      <PosterFrame palette="from-bloom-pink via-bloom-lavender to-bloom-sky">
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-3 opacity-95">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="rounded-sm bg-white/50 grid place-items-center text-[9px] font-mono text-ink-800 backdrop-blur"
            >
              0{i + 1}
            </div>
          ))}
        </div>
      </PosterFrame>
    ),
  },
  {
    id: "meridian",
    number: "08",
    title: "Meridian Travel",
    tagline: "Editorial · Journeys",
    blurb:
      "A curated travel publication with story-driven destination pages and an interactive globe of past trips.",
    href: null,
    glyph: "⊕",
    front: (
      <PosterFrame palette="from-bloom-sky via-bloom-lavender to-bloom-mint">
        <svg viewBox="0 0 200 280" className="absolute inset-0 h-full w-full">
          <g stroke="#1c1633" strokeWidth="0.6" fill="none" opacity="0.35">
            <circle cx="100" cy="140" r="60" />
            <ellipse cx="100" cy="140" rx="60" ry="22" />
            <ellipse cx="100" cy="140" rx="60" ry="44" />
            <line x1="40" y1="140" x2="160" y2="140" />
            <line x1="100" y1="80" x2="100" y2="200" />
          </g>
          <circle cx="100" cy="140" r="3.5" fill="#7c5cff" />
        </svg>
      </PosterFrame>
    ),
  },
  {
    id: "origin",
    number: "09",
    title: "Origin Studios",
    tagline: "Animation · Reel Site",
    blurb:
      "An animation studio reel with scroll-synced video grid, project case studies, and a founder bio reel.",
    href: null,
    glyph: "▷",
    front: (
      <PosterFrame palette="from-bloom-lavender via-bloom-pink to-bloom-peach">
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/60 blur-xl animate-pulse" />
            <button className="relative h-16 w-16 rounded-full bg-ink-900 text-white grid place-items-center text-lg shadow-soft-xl">
              ▶
            </button>
          </div>
        </div>
      </PosterFrame>
    ),
  },
  {
    id: "solace",
    number: "10",
    title: "Solace Ceramics",
    tagline: "Craft · Studio Shop",
    blurb:
      "A small-batch ceramic studio's shop and journal, built with a slow, photographic homepage and per-piece origin notes.",
    href: null,
    glyph: "⌬",
    front: (
      <PosterFrame palette="from-bloom-peach via-bloom-butter to-bloom-pink">
        <svg viewBox="0 0 200 280" className="absolute inset-0 h-full w-full">
          <g fill="#1c1633" opacity="0.35">
            <path d="M70 100 Q70 80 100 75 Q130 80 130 100 L135 180 Q120 195 100 195 Q80 195 65 180 Z" />
            <ellipse cx="100" cy="100" rx="30" ry="6" />
          </g>
        </svg>
      </PosterFrame>
    ),
  },
  {
    id: "zenith",
    number: "11",
    title: "Zenith Botanics",
    tagline: "Subscription · Plants",
    blurb:
      "A plant subscription service with care-by-month flows, seasonal collections, and a quiz that picks plants to your light.",
    href: null,
    glyph: "❀",
    front: (
      <PosterFrame palette="from-bloom-mint via-bloom-sky to-bloom-lavender">
        <svg viewBox="0 0 200 280" className="absolute inset-0 h-full w-full">
          <g stroke="#1c1633" strokeWidth="1.4" fill="none" opacity="0.55">
            <path d="M100 200 Q100 150 100 100" />
            <path d="M100 170 Q70 155 60 130 Q90 140 100 165" fill="#46d6a0" fillOpacity="0.4" />
            <path d="M100 150 Q130 135 140 110 Q110 120 100 145" fill="#46d6a0" fillOpacity="0.4" />
            <path d="M100 130 Q75 115 70 90 Q95 100 100 125" fill="#46d6a0" fillOpacity="0.4" />
            <circle cx="100" cy="95" r="6" fill="#fff0a8" />
          </g>
        </svg>
      </PosterFrame>
    ),
  },
  {
    id: "petal",
    number: "12",
    title: "Petal & Co.",
    tagline: "Florist · Studio",
    blurb:
      "A boutique florist with a seasonal lookbook, gift configurator, and locally-delivered bouquet ordering.",
    href: null,
    glyph: "✿",
    front: (
      <PosterFrame palette="from-bloom-pink via-bloom-peach to-bloom-butter">
        <svg viewBox="0 0 200 280" className="absolute inset-0 h-full w-full">
          <g fill="#7c5cff" opacity="0.4">
            <circle cx="100" cy="140" r="14" />
            <circle cx="80" cy="125" r="14" />
            <circle cx="120" cy="125" r="14" />
            <circle cx="80" cy="155" r="14" />
            <circle cx="120" cy="155" r="14" />
            <circle cx="100" cy="115" r="14" />
            <circle cx="100" cy="165" r="14" />
            <circle cx="100" cy="140" r="6" fill="#fff0a8" />
          </g>
          <line x1="100" y1="160" x2="100" y2="220" stroke="#46d6a0" strokeWidth="2" />
          <path d="M100 190 Q90 195 85 205 M100 185 Q110 190 115 200" stroke="#46d6a0" strokeWidth="2" fill="none" />
        </svg>
      </PosterFrame>
    ),
  },
];

export default function WebDeck() {
  const [flipped, setFlipped] = useState<Set<string>>(new Set());
  const toggle = (id: string) =>
    setFlipped((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });

  return (
    <section className="relative px-6 md:px-10 pb-32">
      <div className="relative mx-auto max-w-7xl">
        <div
          className="grid gap-x-8 gap-y-12 justify-items-center"
          style={{
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(240px, 100%), 1fr))",
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className="w-full max-w-[260px]"
            >
              <div
                className="animate-float-card"
                style={{
                  animationDelay: `${(i * 0.7) % 5}s`,
                  animationDuration: `${6 + ((i * 0.3) % 3)}s`,
                }}
              >
                <FlipCard
                  card={card}
                  flipped={flipped.has(card.id)}
                  onFlip={() => toggle(card.id)}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-16 text-center text-xs uppercase tracking-[0.3em] text-ink-600 font-semibold">
          {flipped.size === 0
            ? "Tap any card to flip it"
            : `${flipped.size} of ${cards.length} revealed`}
        </p>
      </div>
    </section>
  );
}

function FlipCard({
  card,
  flipped,
  onFlip,
}: {
  card: Card;
  flipped: boolean;
  onFlip: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onFlip}
      aria-label={`Flip ${card.title} card`}
      aria-pressed={flipped}
      className="group relative h-[380px] w-full cursor-pointer rounded-2xl bg-transparent text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative h-full w-full transition-transform duration-700 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl shadow-soft-lg sticker"
          style={{ backfaceVisibility: "hidden" }}
        >
          {card.front}
          <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/40" />

          <div className="absolute top-3 left-1/2 -translate-x-1/2 grid h-7 w-7 place-items-center rounded-full bg-white/80 backdrop-blur font-mono text-[10px] font-bold text-ink-900 shadow-soft">
            {card.number}
          </div>
          <div className="absolute top-3 right-4 text-lg text-ink-900/70">
            {card.glyph}
          </div>
          <div className="absolute bottom-3 left-4 rotate-180 text-lg text-ink-900/70">
            {card.glyph}
          </div>

          <div className="absolute inset-x-0 bottom-10 text-center px-4">
            <div className="font-display text-lg text-ink-900 leading-tight">
              {card.title}
            </div>
            <div className="mt-1 text-[9px] uppercase tracking-[0.25em] text-ink-700 font-semibold">
              {card.tagline}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl bg-white shadow-soft-lg sticker p-5 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative flex items-start justify-between">
            <span className="text-[9px] uppercase tracking-widest text-accent-violet font-bold">
              {card.tagline}
            </span>
            <span className="text-lg text-ink-700">{card.glyph}</span>
          </div>

          <h3 className="relative mt-4 font-display text-xl leading-tight text-ink-900">
            {card.title}
          </h3>

          <p className="relative mt-3 flex-1 text-xs text-ink-700 leading-relaxed">
            {card.blurb}
          </p>

          <div className="relative mt-4">
            {card.href ? (
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-accent-violet transition-colors"
              >
                Visit site
                <span className="transition-transform group-hover/btn:translate-x-0.5">
                  →
                </span>
              </a>
            ) : (
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink-900/15 bg-bloom-butter/40 px-4 py-2.5 text-xs font-semibold text-ink-700">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-coral" />
                Coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
