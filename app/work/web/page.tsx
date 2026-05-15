import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import WebDeck from "@/components/work/WebDeck";

export const metadata: Metadata = {
  title: "Web Projects — OneFrame Studio",
  description:
    "Every site we've shipped. Click any card to read about the project, then visit it live.",
};

export default function WebProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-canvas">
      <ScrollProgress />
      <Nav />

      {/* Page header */}
      <section className="relative pt-40 pb-16 px-6 md:px-10 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[460px] w-[900px] bg-bloom-lavender/55 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-20 right-0 h-[300px] w-[300px] bg-bloom-peach/55 blur-[100px] animate-blob"
        />
        <div className="relative mx-auto max-w-7xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink-600 hover:text-accent-violet transition-colors font-semibold"
          >
            ← Back to studio
          </a>
          <div className="mt-6 grid gap-8 md:grid-cols-12 items-end">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-accent-violet font-semibold">
                ✦ The Web Deck
              </p>
              <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1] tracking-tight text-ink-900">
                Every site,
                <br />
                <span className="text-bloom italic">one card each.</span>
              </h1>
            </div>
            <p className="md:col-span-5 text-ink-700 leading-relaxed">
              Click any card to flip it. The back tells you what we built and
              gives you a live link. New cards arrive whenever a new site ships.
            </p>
          </div>
        </div>
      </section>

      <WebDeck />

      <Footer />
    </main>
  );
}
