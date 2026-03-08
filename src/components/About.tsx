"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-ivory overflow-hidden"
    >
      {/* Decorative large letter — fades in slowly on its own */}
      <motion.div
        className="absolute right-0 top-0 text-[20rem] font-black text-fog leading-none select-none pointer-events-none hidden lg:block"
        style={{ fontFamily: "var(--font-display)", transform: "translate(10%, -10%)" }}
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        K
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left column — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <span
              className="text-amber text-sm font-medium tracking-widest uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              About Kyle
            </span>

            {/* Headline — lines stagger */}
            <div
              className="mt-4 text-4xl md:text-5xl font-bold text-charcoal leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {["Engineer.", "Builder.", <><em className="text-amber">Student of people.</em></>].map(
                (line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.1 * i }}
                  >
                    {line}
                  </motion.div>
                )
              )}
            </div>

            <motion.div
              className="mt-8 space-y-4 text-walnut/75 text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
            >
              <p>
                Good products don&apos;t start with features. They start with understanding
                who you&apos;re building for.
              </p>
              <p>
                I spent 15 years at Bose, Hatch, and Raycon doing exactly that —
                researching users before a line of code got written, mapping journeys
                from first impression to loyal advocate, finding the moments where
                people fall in love with something or quietly walk away.
              </p>
              <p>
                The businesses that win aren&apos;t always the ones with the best product.
                They&apos;re the ones whose customers feel understood.
              </p>
              <p>
                That feeling starts with how you show up online. That&apos;s what I build for you.
              </p>
              <p>
                I don&apos;t hand things off. I build{" "}
                <em className="text-charcoal font-medium">with</em> you — from the
                first conversation through launch and beyond.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, ease: EASE, delay: 0.35 }}
            >
              <a
                href="https://www.linkedin.com/in/kyledecubellis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-walnut/20 text-walnut hover:border-amber hover:text-amber transition-colors duration-200 text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                LinkedIn →
              </a>
              <a
                href="mailto:hello@kyledec.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-ivory hover:bg-walnut transition-colors duration-200 text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Email me directly
              </a>
            </motion.div>
          </motion.div>

          {/* Right column — credentials list */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
          >
            <span
              className="text-amber text-sm font-medium tracking-widest uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Background &amp; Credentials
            </span>

            {/* EXPERIENCE */}
            <div className="mt-8">
              <p
                className="text-walnut/40 text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Experience
              </p>
              <div className="space-y-2" style={{ fontFamily: "var(--font-body)" }}>
                {[
                  ["Bose Corporation", "8 years"],
                  ["Bose Frames", "Lead Engineer"],
                  ["Hatch", "IoT Hardware, 1M+ devices"],
                  ["Raycon Global", "VP Product (current)"],
                ].map(([company, role]) => (
                  <div key={company} className="flex justify-between items-baseline gap-4">
                    <span className="text-charcoal text-sm font-medium">{company}</span>
                    <span className="text-walnut/50 text-sm font-light">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-fog my-8" />

            {/* EDUCATION */}
            <div>
              <p
                className="text-walnut/40 text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Education
              </p>
              <div style={{ fontFamily: "var(--font-body)" }}>
                <p className="text-charcoal text-sm font-medium">Northeastern University</p>
                <p className="text-walnut/50 text-sm font-light mt-0.5">Mechanical Engineering, Cum Laude</p>
              </div>
            </div>

            <div className="border-t border-fog my-8" />

            {/* PATENTS */}
            <div>
              <p
                className="text-walnut/40 text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Patents
              </p>
              <p
                className="text-charcoal text-sm font-medium mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                10 granted · 4 pending
              </p>
              <div className="space-y-1.5" style={{ fontFamily: "var(--font-body)" }}>
                {[
                  "T-Shaped Joint in a Headphone Cord",
                  "Active Noise Reduction Earphone",
                  "Integration of Sensors into Earphones",
                  "[+7 additional]",
                ].map((patent) => (
                  <p key={patent} className="text-walnut/50 text-sm font-light">
                    · {patent}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
