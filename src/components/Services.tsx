"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

const services = [
  {
    title: "WEB DESIGN + DEVELOPMENT",
    description: "Sites that earn trust, convert visitors, and actually launch.",
  },
  {
    title: "AI TOOLS + AUTOMATION",
    description: "Custom workflows and tools built around how you actually work.",
  },
  {
    title: "PRODUCT STRATEGY",
    description:
      "Clarity on what to build, in what order, and why — from someone who's shipped real products.",
  },
  {
    title: "FULL-STACK BUILDS",
    description:
      "Backend, integrations, dashboards — whatever it takes to make your idea real and scalable.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-24 md:py-32">
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
            What I Do
          </motion.span>

          <motion.h2
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
          >
            Whatever you need.
            <br />
            <em>Whatever stage you&apos;re at.</em>
          </motion.h2>

          <motion.p
            className="mt-5 text-walnut/70 text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.55, ease: EASE, delay: 0.16 }}
          >
            Whether you&apos;re starting from scratch, trying to grow, or just
            need someone who gets it — I&apos;ve got you.
          </motion.p>
        </div>

        {/* Ruled list */}
        <div>
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, ease: EASE, delay: 0.06 * i }}
            >
              <div className="py-8 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10">
                <h3
                  className="text-charcoal text-sm font-semibold tracking-widest whitespace-nowrap"
                  style={{ fontFamily: "var(--font-body)", minWidth: "280px" }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-walnut/70 text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {svc.description}
                </p>
              </div>
              <div className="border-t border-fog" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
