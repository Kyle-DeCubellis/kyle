"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

const credentials = [
  { label: "Bose Corporation", detail: "8 Years", color: "border-amber/40 text-amber" },
  { label: "Mechanical Engineering", detail: "Northeastern, Cum Laude", color: "border-sage/40 text-sage" },
  { label: "3 Patents", detail: "Earphone Design & ANC", color: "border-terracotta/40 text-terracotta" },
  { label: "ISO 13485", detail: "Medical Device QMS", color: "border-walnut/30 text-walnut" },
  { label: "IoT Hardware", detail: "Hatch Connected Devices", color: "border-amber/40 text-amber" },
  { label: "MITx on edX", detail: "Continuing Education", color: "border-sage/40 text-sage" },
];

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
            <div className="mb-8 flex justify-center lg:justify-start">
              <img
                id="headshot"
                src="/headshot.jpg"
                alt="Kyle DeCubellis"
                className="w-32 h-32 rounded-full object-cover border-4 border-amber/20 shadow-lg"
              />
            </div>

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
              {["Engineer.", "Builder.", <><em className="text-amber">Connector of dots.</em></>].map(
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
                I spent 8 years at Bose — from co-op student building StayHear tips
                to Product Lead shipping Bose Frames to millions of people worldwide.
                I hold 3 patents. I know what it takes to go from a sketch on a napkin
                to a product in someone&apos;s hands.
              </p>
              <p>
                After Bose I went into the startup world, leading IoT product development
                for connected devices, then moved into senior product leadership for a
                direct-to-consumer hardware brand — building data systems, AI workflows,
                and multi-SKU roadmaps from scratch.
              </p>
              <p>
                This side of my work is personal. I want the electrician, the personal
                trainer, the gig worker — people who are{" "}
                <em className="text-charcoal font-medium">really good</em> at what they
                do — to have the same quality online presence that big companies take
                for granted. So I build it for them.
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
                href="mailto:kyledecubellis@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-ivory hover:bg-walnut transition-colors duration-200 text-sm font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Email me directly
              </a>
            </motion.div>
          </motion.div>

          {/* Right column — slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
          >
            <p
              className="text-walnut/40 text-xs font-medium tracking-widest uppercase mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Background & Credentials
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  className={`rounded-2xl border p-4 hover:bg-fog/50 transition-colors duration-200 ${cred.color}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.45, ease: EASE, delay: 0.15 + 0.07 * i }}
                >
                  <p
                    className="font-semibold text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {cred.label}
                  </p>
                  <p
                    className="text-walnut/50 text-xs mt-0.5"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {cred.detail}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Patent callout */}
            <motion.div
              className="mt-6 rounded-2xl p-5 border border-amber/20 bg-amber/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, ease: EASE, delay: 0.55 }}
            >
              <p
                className="text-amber text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Patents
              </p>
              <ul
                className="space-y-1 text-walnut/70 text-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                <li>· T-shaped Joint in a Headphone Cord</li>
                <li>· Active Noise Reduction Earphone</li>
                <li>· Integration of Sensors into Earphones</li>
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
