"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Apple-style scroll-zoom moment. The container is 150vh so the sticky
 * panel pins for 50vh of scroll, then bottom-out exactly with the section
 * ending — no blank area follows. Content is visible the whole way; scroll
 * just provides subtle scale + parallax.
 */
export default function ZoomMoment() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Headline grows from 0.7 → 1 in the first half of scroll, stays at 1
  // through release. Opacity stays at 1 the entire time so nothing
  // disappears at the edges.
  const titleScale = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0.7, 1, 1.05]
  );

  // Background blob counter-scales for depth
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.95]);
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.55, 0.9, 0.55]
  );

  // Sub-line slides up + fades in once, then stays
  const subOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.45, 1],
    [0, 1, 1]
  );
  const subY = useTransform(scrollYProgress, [0.15, 0.45], [24, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[150vh] bg-gradient-to-b from-canvas via-bloom-lavender/10 to-canvas"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden grain px-6">
        {/* Background gradient blob */}
        <motion.div
          aria-hidden
          style={{ scale: bgScale, opacity: bgOpacity }}
          className="pointer-events-none absolute h-[700px] w-[700px] rounded-full bg-gradient-to-br from-bloom-lavender via-bloom-pink to-bloom-peach blur-[100px]"
        />

        {/* Tag pill */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/70 px-5 py-2 text-xs font-semibold text-ink-700 backdrop-blur shadow-soft"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
          Why studios choose us
        </motion.div>

        {/* Main scaling headline */}
        <motion.h2
          style={{ scale: titleScale }}
          className="relative mt-10 font-display text-6xl md:text-8xl text-ink-900 text-center leading-[0.95] tracking-tight max-w-5xl"
        >
          Every pixel,
          <br />
          <span className="text-bloom italic">considered.</span>
        </motion.h2>

        {/* Sub-line — appears once and stays visible */}
        <motion.p
          style={{ opacity: subOpacity, y: subY }}
          className="relative mt-10 max-w-md text-center text-ink-700 text-base md:text-lg font-medium leading-relaxed"
        >
          We obsess over typography, motion timing, and the half-second between
          a click and a delight. Then we ship it.
        </motion.p>

        {/* Three trait pills below — extra content fills the lower viewport
            so the section feels rich rather than blank during release */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            { label: "Type-driven", bg: "bg-bloom-lavender" },
            { label: "Motion-aware", bg: "bg-bloom-mint" },
            { label: "Detail-obsessed", bg: "bg-bloom-peach" },
          ].map((t) => (
            <span
              key={t.label}
              className={`sticker rounded-full ${t.bg} px-4 py-2 text-xs font-bold text-ink-900`}
            >
              ✦ {t.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
