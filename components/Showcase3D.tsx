"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BloomScene = dynamic(() => import("./hero/BloomScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-2 w-2 animate-ping rounded-full bg-accent-violet" />
    </div>
  ),
});

export default function Showcase3D() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Heading slowly slides up + fades as you scroll past
  const headingY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.4, 1, 1, 0.4]
  );
  // Whole canvas zooms in slightly on entry, out on exit
  const canvasScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);

  return (
    <section
      id="craft"
      ref={ref}
      className="relative py-32 px-6 md:px-10 overflow-hidden"
    >
      {/* Soft background washes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1100px] bg-bloom-lavender/40 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] bg-bloom-peach/40 blur-[100px] animate-blob"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent-violet font-semibold">
            ✦ Crafted in three dimensions
          </p>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-ink-900">
            We don&apos;t just design pages.
            <br />
            <span className="text-bloom italic">We design moments.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-700 leading-relaxed max-w-xl mx-auto">
            Real-time 3D, scroll-driven motion, and interactions that make a
            site feel alive. Move your cursor — they&apos;re listening.
          </p>
        </motion.div>

        {/* 3D canvas — full bleed of the container, generously tall */}
        <motion.div
          style={{ scale: canvasScale }}
          className="relative mt-12 h-[480px] md:h-[680px] w-full"
        >
          <div className="absolute inset-0">
            <BloomScene />
          </div>
        </motion.div>

        <div className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-medium text-ink-700 backdrop-blur sticker">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-mint animate-pulse" />
            Move your cursor — the shapes follow
          </span>
        </div>
      </div>
    </section>
  );
}
