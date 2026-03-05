"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

const BG = "linear-gradient(160deg, #1a1208 0%, #3d2b1f 50%, #1a1208 100%)";

export default function IntakeForm() {
  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: BG }}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.span
            className="text-amber text-sm font-medium tracking-widest uppercase"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, ease: EASE }}
          >
            Get Started
          </motion.span>

          <motion.h2
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
          >
            Book a free
            <br />
            <em className="text-amber-light">30-min call.</em>
          </motion.h2>

          <motion.p
            className="mt-5 text-ivory/55 text-base leading-relaxed max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.55, ease: EASE, delay: 0.16 }}
          >
            No sales pitch. No obligation. Just a real conversation about what
            you need and whether I can help. Pick a time that works for you.
          </motion.p>
        </div>

        {/* Calendly embed */}
        <motion.div
          className="rounded-2xl overflow-hidden bg-ivory/5 border border-ivory/10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE, delay: 0.24 }}
        >
          <iframe
            src="https://calendly.com/kyle-opsdev/mothers-helpers"
            width="100%"
            height="700"
            frameBorder="0"
            title="Schedule a call with Kyle DeCubellis"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
