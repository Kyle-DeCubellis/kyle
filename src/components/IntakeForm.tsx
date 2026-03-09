"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;
const BG = "linear-gradient(160deg, #0D3B2E 0%, #1A5C46 50%, #0D3B2E 100%)";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

export default function IntakeForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => window.Tally?.loadEmbeds();
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: BG }}>
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <motion.span
            className="text-sm font-medium tracking-widest uppercase"
            style={{ fontFamily: "var(--font-body)", color: "#FDF8F0" }}
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
            Let&apos;s talk about where
            <br />
            <em className="text-amber-light">you&apos;re trying to go.</em>
          </motion.h2>

          <motion.p
            className="mt-5 text-ivory/55 text-base leading-relaxed max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.55, ease: EASE, delay: 0.16 }}
          >
            No pitch decks. No discovery calls just to book another call.
            Tell me where you are and where you want to be - I&apos;ll come
            back with something real.
          </motion.p>
        </div>

        {/* Tally embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE, delay: 0.24 }}
        >
          <iframe
            data-tally-src="https://tally.so/embed/jaMovJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
            loading="lazy"
            width="100%"
            height="900"
            title="Contact form"
            style={{ border: "none", minHeight: "900px" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
