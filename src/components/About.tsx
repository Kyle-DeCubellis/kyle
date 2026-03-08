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

          {/* Right column — terminal block */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
          >
            <div style={{ background: "#0a0805" }}>
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-amber/10">
                <span className="w-3 h-3 rounded-full bg-red-400/50" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/50" />
                <span className="w-3 h-3 rounded-full bg-green-400/50" />
                <span className="ml-3 font-mono text-amber/30 text-xs tracking-widest">
                  kyle@local ~ zsh
                </span>
              </div>

              {/* Terminal body */}
              <div className="px-5 py-5 font-mono text-xs md:text-sm leading-relaxed space-y-0.5">

                {/* Command */}
                <div className="flex gap-1.5 text-amber">
                  <span className="text-amber/40 select-none flex-shrink-0">$ </span>
                  <span>ls ./credentials/</span>
                </div>

                <div className="h-3" />

                {/* patents/ */}
                <div className="text-amber">patents/[10-granted-4-pending]/</div>
                <div className="pl-3 text-amber/60">· T-Shaped Joint in a Headphone Cord</div>
                <div className="pl-3 text-amber/60">· Active Noise Reduction Earphone</div>
                <div className="pl-3 text-amber/60">· Integration of Sensors into Earphones</div>
                <div className="pl-3 text-amber/60">· [+7 additional granted]</div>
                <div className="pl-3 text-amber/60">· [4 pending]</div>

                <div className="h-3" />

                {/* education/ */}
                <div className="text-amber">education/</div>
                <div className="pl-3 text-amber/60">· Northeastern University - Mechanical</div>
                <div className="pl-3 text-amber/60" style={{ whiteSpace: "pre" }}>{"  Engineering, Cum Laude"}</div>
                <div className="pl-3 text-amber/60">· MITx - Continuing Education</div>

                <div className="h-3" />

                {/* experience/ */}
                <div className="text-amber">experience/</div>
                {([
                  "· Bose Corporation  8 years",
                  "· Bose Frames       lead engineer",
                  "· Hatch             IoT hardware, 1M+ devices",
                  "· Raycon Global     VP Product (current)",
                ] as const).map((line) => (
                  <div key={line} className="pl-3 text-amber/60" style={{ whiteSpace: "pre" }}>
                    {line}
                  </div>
                ))}

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
