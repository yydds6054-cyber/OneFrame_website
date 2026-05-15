"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type S = {
  n: string;
  title: string;
  blurb: string;
  points: string[];
  bg: string;
  accent: string;
  icon: React.ReactNode;
};

const services: S[] = [
  {
    n: "01",
    title: "Web Development",
    bg: "bg-bloom-lavender",
    accent: "text-accent-violet",
    blurb:
      "Conversion-focused websites and bespoke landing pages built on Next.js, Astro, and headless CMS — animated, accessible, and fast.",
    points: [
      "Brand & marketing sites",
      "Interactive landing pages",
      "E-commerce storefronts",
      "Performance & SEO",
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none">
        <rect x="6" y="9" width="36" height="30" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M6 17h36" stroke="currentColor" strokeWidth="2" />
        <circle cx="11" cy="13" r="1.2" fill="currentColor" />
        <circle cx="15" cy="13" r="1.2" fill="currentColor" />
        <path d="M16 24l-4 4 4 4M32 24l4 4-4 4M27 23l-6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Video Editing",
    bg: "bg-bloom-pink",
    accent: "text-accent-coral",
    blurb:
      "From short-form social cuts to cinematic brand films — narrative editing, color grading, motion graphics, and sound design.",
    points: [
      "Brand films & promos",
      "Social cut-downs",
      "Motion graphics",
      "Color & sound",
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none">
        <rect x="6" y="11" width="36" height="26" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M6 17l36 0M6 31l36 0" stroke="currentColor" strokeWidth="2" />
        {Array.from({ length: 4 }).map((_, i) => (
          <rect key={"t" + i} x={9 + i * 8} y="13" width="3" height="2" fill="currentColor" />
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <rect key={"b" + i} x={9 + i * 8} y="33" width="3" height="2" fill="currentColor" />
        ))}
        <path d="M21 21l8 3-8 3v-6z" fill="currentColor" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Poster Design",
    bg: "bg-bloom-mint",
    accent: "text-accent-mint",
    blurb:
      "Bold, type-driven posters for events, campaigns, films, and editorial. Print-ready files, considered grids, and original art direction.",
    points: [
      "Event & gig posters",
      "Campaign key art",
      "Editorial layouts",
      "Print production",
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none">
        <rect x="10" y="6" width="28" height="36" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M14 14h20M14 19h12M14 33h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="29" cy="26" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M14 28l4-4 3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Heading scales subtly through scroll
  const headingScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.06]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          style={{ scale: headingScale }}
          className="mb-20 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent-violet font-semibold">
            ✦ What we do
          </p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-ink-900">
            Three crafts.
            <br />
            <span className="text-bloom italic">One studio.</span>
          </h2>
          <p className="mt-6 text-ink-700 text-lg leading-relaxed max-w-xl mx-auto">
            We&apos;re a small team of designers, developers, and editors who
            care about the whole picture.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.n} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service: s, index: i }: { service: S; index: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  // Each card scales 0.92 → 1.04 → 0.98 as it passes through viewport
  const cardScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [0.92, 1.04, 1, 0.98]
  );
  const cardY = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -20]);

  return (
    <motion.article
      ref={cardRef}
      style={{ scale: cardScale, y: cardY }}
      whileHover={{ y: -10 }}
      transition={{ delay: i * 0.05, type: "spring", stiffness: 80 }}
      className={`group relative overflow-hidden rounded-3xl ${s.bg} p-8 sticker transition-shadow hover:shadow-soft-lg`}
    >
      <div className="relative flex items-start justify-between">
        <span className="font-mono text-xs text-ink-700/70 font-semibold">
          {s.n}
        </span>
        <div className={`${s.accent} transition-transform group-hover:rotate-12`}>
          {s.icon}
        </div>
      </div>

      <h3 className="relative mt-10 text-2xl font-bold tracking-tight text-ink-900">
        {s.title}
      </h3>
      <p className="relative mt-3 text-ink-800/80 leading-relaxed text-sm">
        {s.blurb}
      </p>

      <ul className="relative mt-8 space-y-2">
        {s.points.map((p) => (
          <li key={p} className="flex items-center gap-3 text-sm text-ink-800/85">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-900" />
            {p}
          </li>
        ))}
      </ul>

      <div className="relative mt-8 flex items-center gap-2 text-sm font-semibold text-ink-900">
        Explore
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </motion.article>
  );
}
