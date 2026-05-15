import Link from "next/link";
import Logo from "./Logo";
import { SOCIALS } from "@/lib/socials";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-900/5 bg-white/40 px-6 md:px-10 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="text-xl font-bold tracking-tight text-ink-900">
                One<span className="text-bloom">Frame</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-ink-700 leading-relaxed">
              A digital craft studio. We build websites, edit video, and
              design posters for brands that care about the details.
            </p>
          </div>

          <FooterCol
            title="Studio"
            links={["About", "Process", "Careers", "Contact"]}
          />
          <FooterCol
            title="Services"
            links={["Web Development", "Video Editing", "Poster Design", "Brand Systems"]}
          />
          <FooterCol
            title="Elsewhere"
            links={SOCIALS}
          />
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-ink-900/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-ink-600">
            © {new Date().getFullYear()} OneFrame Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-ink-600">
            <a href="#" className="hover:text-ink-900">Privacy</a>
            <a href="#" className="hover:text-ink-900">Terms</a>
            <a href="#" className="hover:text-ink-900">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterLink = string | { name: string; href: string };

function FooterCol({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="md:col-span-2">
      <h4 className="text-xs uppercase tracking-widest text-ink-700 font-semibold">
        {title}
      </h4>
      <ul className="mt-4 space-y-2">
        {links.map((l) => {
          const name = typeof l === "string" ? l : l.name;
          const href = typeof l === "string" ? "#" : l.href;
          const external = href.startsWith("http");
          return (
            <li key={name}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-sm text-ink-700 hover:text-accent-violet transition-colors"
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
