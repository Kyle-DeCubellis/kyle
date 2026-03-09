"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

const credentials = [
  { label: "Raycon Global", detail: "VP of Product Strategy & Operations, 2021–Present", color: "border-amber/40 text-amber" },
  { label: "Hatch", detail: "Principal PM, Connected Devices, 2020–2021", color: "border-sage/40 text-sage" },
  { label: "Bose Corporation", detail: "Senior Engineer, Wearables & Consumer Electronics, 2012–2020", color: "border-terracotta/40 text-terracotta" },
  { label: "Northeastern University", detail: "B.S. Mechanical Engineering & Mathematics, 2012", color: "border-walnut/30 text-walnut" },
  { label: "10 Patents", detail: "4 Issued Utility · 6 Granted Design", color: "border-amber/40 text-amber" },
  { label: "AI/ML Product", detail: "LLMs, Automation, Decisioning", color: "border-sage/40 text-sage" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-ivory overflow-hidden"
    >
      {/* Decorative large letter - fades in slowly on its own */}
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

          {/* Left column - slides in from left */}
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

            {/* Headline - lines stagger */}
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
                This started with a favor — a friend needed a website, a family
                member needed help landing a job — and somewhere in applying
                15 years of work at companies like Bose, I realized this was
                the most fulfilling work I&apos;d ever done. So I kept saying
                yes. And I haven&apos;t stopped.
              </p>
            </motion.div>

            {/* Pull quote */}
            <motion.blockquote
              className="mt-8 border-l-2 border-amber pl-5"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, ease: EASE, delay: 0.35 }}
            >
              <p
                className="text-charcoal text-lg italic leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;You could use Fiverr. That&apos;s not what I am.&rdquo;
              </p>
              <p
                className="mt-3 text-walnut/60 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                I&apos;m not interested in checkboxes. I&apos;m interested in
                understanding what you&apos;re actually trying to do — and
                staying until it&apos;s done right.
              </p>
            </motion.blockquote>

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

          {/* Right column - slides in from right */}
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
                <li>· Modular acoustic systems (2022)</li>
                <li>· Active noise reduction earphone (2020)</li>
                <li>· Sensor integration in earphones (2017)</li>
                <li>· Headphone mechanical systems (2017)</li>
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
