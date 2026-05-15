"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const word = {
  hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.2, 0.9, 0.3, 1] as const },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Headline grows slightly and dims as user scrolls down (Apple-style)
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.4, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate min-h-[100svh] flex items-center justify-center overflow-hidden grain"
    >
      {/* Animated bloom blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] bg-bloom-lavender/55 blur-[90px] animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 h-[480px] w-[480px] bg-bloom-peach/55 blur-[90px] animate-blob-slow"
        style={{ animationDelay: "5s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 h-[300px] w-[300px] bg-bloom-mint/40 blur-[100px] animate-blob"
        style={{ animationDelay: "9s" }}
      />

      {/* Subtle dots overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dots bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 text-center">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/70 px-5 py-2 text-xs font-semibold text-ink-700 backdrop-blur shadow-soft"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-mint opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-mint" />
          </span>
          Now booking projects for Q3
        </motion.div>

        {/* Massive scroll-reactive headline */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          style={{ scale: titleScale, opacity: titleOpacity, y: titleY }}
          className="font-display text-[clamp(3rem,11vw,9rem)] leading-[0.92] tracking-tight text-ink-900"
        >
          <motion.span variants={word} className="block">
            We craft
          </motion.span>
          <motion.span variants={word} className="block text-bloom italic">
            digital products
          </motion.span>
          <motion.span variants={word} className="block">
            worth <span className="text-warm">framing.</span>
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mx-auto mt-10 max-w-xl text-lg md:text-xl text-ink-700 leading-relaxed"
        >
          A digital studio building websites, editing video, and designing
          posters for brands that care about the details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#craft"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ink-900 px-8 py-4 text-sm font-semibold text-white shadow-soft-lg transition-transform hover:scale-[1.04] hover:shadow-soft-xl"
          >
            <span className="relative z-10">Explore the craft</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-1">
              →
            </span>
            <span className="absolute inset-0 btn-shimmer animate-shimmer" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-3 rounded-full bg-white/80 px-8 py-4 text-sm font-semibold text-ink-900 backdrop-blur shadow-soft hover:bg-white hover:shadow-soft-lg transition"
          >
            See selected work
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-600/60"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
          Scroll
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-ink-700/50 to-transparent" />
      </motion.div>
    </section>
  );
}
