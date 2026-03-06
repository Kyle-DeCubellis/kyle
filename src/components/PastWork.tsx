"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

const projects = [
  {
    title: "Haven & Co.",
    category: "Home Staging / Brand Identity",
    description:
      "Full brand identity + staging site for a Greater Boston home stager. Gallery, testimonials, service tiers, and inquiry flow.",
    tags: ["Brand Identity", "Gallery", "Booking"],
    gradient: "linear-gradient(135deg, #6b7c5c 0%, #2a1a0e 100%)",
    image: "home-by-nkm-mockup.jpg",
    video: "/videos/nkm-loop.mp4",
    link: "https://home-by-nkm.vercel.app/",
  },
  {
    title: "Rob Laurie Electrical",
    category: "HVAC / Trades",
    description:
      "Local trades conversion site for a MetroWest mini split specialist. Built around trust signals, certifications, and before/after proof.",
    tags: ["Web Design", "Local SEO", "Conversion"],
    gradient: "linear-gradient(135deg, #c75a3a 0%, #3d2b1f 100%)",
    image: "rob-laurie-electrical-mockup.jpg",
    link: "https://rob-design-variant-2.vercel.app/",
  },
  {
    title: "Southboro Sitters",
    category: "Childcare / Local Business",
    description:
      "Zero to live business launch. Logo, site, copy, Calendly booking, and pricing - for a kids' mother's helper service in Southborough.",
    tags: ["Full Launch", "Booking", "Brand & Copy"],
    gradient: "linear-gradient(135deg, #c17a2e 0%, #1a1208 100%)",
    image: "southboro-sitters-mockup.jpg",
    link: "https://southboro-sitters.vercel.app/",
  },
  {
    title: "Dufazz",
    category: "Photography / Creative",
    description:
      "Portfolio site for a photographer, cinematographer, and director - showcasing visual work with a clean, immersive layout.",
    tags: ["Portfolio", "Creative", "Visual Design"],
    gradient: "linear-gradient(135deg, #3d2b1f 0%, #6b7c5c 100%)",
    image: "dufazz-mockup.jpg",
    link: "https://dufazz.vercel.app/",
  },
  {
    title: "Studio Marlowe",
    category: "Interior Design",
    description:
      "Residential design firm site - consultations, mood boards, furniture sourcing, and project coordination for refined, personalized living spaces.",
    tags: ["Design Firm", "Services", "Residential"],
    gradient: "linear-gradient(135deg, #1a1208 0%, #c17a2e 100%)",
    image: "andrea-thomas-interiors-mockup.jpg",
    link: "https://andrea-thomas-interiors.vercel.app/",
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
            A sample of what I&apos;ve built - from local trades to major consumer brands.
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
              {/* Image or Video header */}
              <div
                className="h-44 relative overflow-hidden"
                style={{ background: proj.gradient }}
              >
                {proj.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={proj.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    data-src={`/${proj.image}`}
                    alt={`${proj.title} mockup`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0"
                  />
                )}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-transparent to-charcoal" />
              </div>

              {/* Card body */}
              <div className="p-6">
                <p
                  className="text-amber text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {proj.category}
                </p>
                <h3
                  className="text-charcoal text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {proj.title}
                </h3>

                <p
                  className="text-walnut/65 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
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

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber hover:text-amber-light text-sm font-medium transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  View Live Site <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}

          {/* "More on the way" card */}
          <motion.div
            className="rounded-3xl border-2 border-dashed border-fog flex items-center justify-center p-8 text-center min-h-48"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
