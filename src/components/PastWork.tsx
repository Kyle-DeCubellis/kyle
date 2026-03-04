"use client";

import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Rob's Mini Split Co.",
    category: "HVAC / Trades",
    description:
      "A warm, boutique web presence for a local mini split installation business. Two design variants — bold modern and soft boutique — built to convert local search traffic into booked jobs.",
    tags: ["Web Design", "Local SEO", "Two Variants"],
    gradient: "linear-gradient(135deg, #c75a3a 0%, #3d2b1f 100%)",
    emoji: "❄️",
    link: "https://github.com/kyle-decubellis/rob-design-variant-2",
  },
  {
    title: "Home by NKM",
    category: "Interior Design / Staging",
    description:
      "Clean, elegant website for a home staging and interior design professional. Showcase portfolio, services, and booking — all in a refined, photo-driven layout.",
    tags: ["Portfolio Site", "Booking", "Brand Identity"],
    gradient: "linear-gradient(135deg, #6b7c5c 0%, #2a1a0e 100%)",
    emoji: "🏡",
    link: "https://github.com/kyle-decubellis/home-by-nkm",
  },
  {
    title: "Analytics Dashboard",
    category: "Consumer Electronics Brand",
    description:
      "Custom data dashboard built for a leading consumer electronics company — synthesizing sales performance, inventory signals, and customer metrics into a single actionable view.",
    tags: ["JavaScript", "Data Viz", "eCommerce Analytics"],
    gradient: "linear-gradient(135deg, #c17a2e 0%, #1a1208 100%)",
    emoji: "📊",
    link: null,
  },
  {
    title: "Product App Mockup",
    category: "Consumer Hardware",
    description:
      "Interactive mobile app concept and prototype for a hardware product companion app — covering onboarding, settings, and firmware update flows.",
    tags: ["UX/UI", "Prototype", "Mobile"],
    gradient: "linear-gradient(135deg, #3d2b1f 0%, #6b7c5c 100%)",
    emoji: "📱",
    link: null,
  },
  {
    title: "Tupelo",
    category: "Custom Build",
    description:
      "A custom JavaScript project — details available on request. Demonstrates backend integration and client-side interactivity built to specification.",
    tags: ["JavaScript", "Custom Build", "Full Stack"],
    gradient: "linear-gradient(135deg, #1a1208 0%, #c17a2e 100%)",
    emoji: "⚡",
    link: "https://github.com/kyle-decubellis/jesse",
  },
];

export default function PastWork() {
  return (
    <section id="work" className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span
            className="text-amber text-sm font-medium tracking-widest uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Past Work
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Real work.
            <br />
            <em>Real results.</em>
          </h2>
          <p
            className="mt-5 text-walnut/70 text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            A sample of what I&apos;ve built — from local trades to major consumer brands.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-ivory border border-fog"
            >
              {/* Color bleed header */}
              <div
                className="h-36 flex items-center justify-center relative overflow-hidden"
                style={{ background: proj.gradient }}
              >
                <span className="text-5xl relative z-10">{proj.emoji}</span>
                <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-transparent to-charcoal" />
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p
                      className="text-amber text-xs font-semibold tracking-widest uppercase mb-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {proj.category}
                    </p>
                    <h3
                      className="text-charcoal text-xl font-bold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {proj.title}
                    </h3>
                  </div>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-walnut/40 hover:text-amber transition-colors mt-1 flex-shrink-0 ml-2"
                      aria-label="View project"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <p
                  className="text-walnut/65 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {proj.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-fog text-walnut/70 text-xs font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* "More on the way" card */}
          <div className="rounded-3xl border-2 border-dashed border-fog flex items-center justify-center p-8 text-center min-h-48">
            <div>
              <p
                className="text-walnut/30 text-4xl mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                +
              </p>
              <p
                className="text-walnut/40 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                More projects added regularly.
                <br />
                Yours could be next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
