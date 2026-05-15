const tags = [
  "Web design",
  "Brand sites",
  "Landing pages",
  "E-commerce",
  "Video editing",
  "Motion graphics",
  "Color grading",
  "Showreels",
  "Poster design",
  "Print collateral",
  "Social media kits",
  "Type-driven layouts",
];

const palette = [
  "bg-bloom-lavender",
  "bg-bloom-mint",
  "bg-bloom-peach",
  "bg-bloom-sky",
  "bg-bloom-pink",
  "bg-bloom-butter",
];

export default function Marquee() {
  const doubled = [...tags, ...tags];
  return (
    <section
      aria-label="Capabilities"
      className="relative border-y border-ink-900/5 bg-white/40 py-6 overflow-hidden"
    >
      <div className="flex gap-3 whitespace-nowrap animate-marquee">
        {doubled.map((tag, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-2 rounded-full ${palette[i % palette.length]} px-5 py-2 text-sm font-semibold text-ink-900 sticker`}
          >
            ✦ {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
