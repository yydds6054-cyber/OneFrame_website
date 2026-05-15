import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OneFrame — Bright Studio",
  description:
    "OneFrame builds websites, edits video, and designs posters. A studio for premium digital products — bright edition.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-canvas">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased text-ink-900 selection:bg-bloom-lavender">
        {children}
      </body>
    </html>
  );
}
