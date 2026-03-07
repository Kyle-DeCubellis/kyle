"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

const projects = [
  {
    category: "Home Staging / Brand Identity",
    title: "Haven & Co.",
    description:
      "Full brand identity and staging site for a Greater Boston home stager. Gallery, testimonials, service tiers, and inquiry flow.",
    tags: ["Brand Identity", "Gallery", "Booking"],
    link: "https://home-by-nkm.vercel.app/",
  },
  {
    category: "Interior Design",
    title: "Studio Marlowe",
    description:
      "Editorial interior design brand built around a dark architectural aesthetic. Gallery, services, and inquiry flow.",
    tags: ["Web Design", "Editorial", "Brand"],
    link: "https://andrea-thomas-interiors.vercel.app/",
  },
  {
    category: "HVAC / Trades",
    title: "Rob Laurie Electrical",
    description:
      "Conversion-focused site for a solo MetroWest mini split specialist. Built around local trust signals, certifications, and a single clear CTA.",
    tags: ["Web Design", "Local SEO", "Conversion"],
    link: "https://rob-design-variant-2.vercel.app/",
  },
  {
    category: "Childcare / Local Business",
    title: "Southboro Sitters",
    description:
      "Zero to live business launch. Logo, site, copy, Calendly booking, and pricing for a kids mother's helper service.",
    tags: ["Full Launch", "Booking", "Brand & Copy"],
    link: "https://southboro-sitters.vercel.app/",
  },
  {
    category: "Photography / Creative",
    title: "Dufazz",
    description:
      "Portfolio site for a Boston-area photographer, cinematographer, and director. Bold, minimal, built to let the work speak.",
    tags: ["Portfolio", "Creative", "Visual Design"],
    link: "https://dufazz.vercel.app/",
  },
];

export default function PastWork() {
  return (
    <section id="work" className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <motion.span
            className="text-amber text-sm font-medium tracking-widest uppercase"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, ease: EASE }}
          >
            Past Work
          </motion.span>

          <motion.h2
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
          >
            Real work.
            <br />
            <em>Real results.</em>
          </motion.h2>

          <motion.p
            className="mt-5 text-walnut/70 text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.55, ease: EASE, delay: 0.16 }}
          >
            A sample of what I&apos;ve built — from local trades to creative brands.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-ivory border border-fog"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, ease: EASE, delay: 0.07 * i }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <div className="p-6 pt-7">
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
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-walnut/40 hover:text-amber transition-colors mt-1 flex-shrink-0 ml-2"
                    aria-label="View project"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <p
                  className="text-walnut/65 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {proj.description}
                </p>

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
            </motion.div>
          ))}
        </div>

        {/* More coming soon */}
        <motion.p
          className="mt-12 text-center text-walnut/40 text-sm"
          style={{ fontFamily: "var(--font-body)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
        >
          More coming soon.
        </motion.p>
      </div>
    </section>
  );
}
