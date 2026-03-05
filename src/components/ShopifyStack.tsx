"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay },
  }),
};

const categories = [
  {
    label: "Frontend",
    summary: "Liquid theme editor + Replo for custom storefronts and landing pages built to convert — no agency dependency.",
    tools: ["Liquid Theme Editor", "Replo"],
    accent: "#c75a3a",
  },
  {
    label: "Retention & CRM",
    summary: "Klaviyo flows from first-touch to post-purchase, built around segmentation, A/B testing, and revenue attribution.",
    tools: ["Klaviyo"],
    accent: "#c17a2e",
  },
  {
    label: "Checkout & Revenue",
    summary: "CartHook and AfterSell layered together to capture revenue at checkout and extend it immediately after.",
    tools: ["CartHook", "AfterSell"],
    accent: "#6b7c5c",
  },
  {
    label: "Automation & Ops",
    summary: "Shopify Flow for conditional logic and order routing. AfterShip for post-purchase experience and return reduction.",
    tools: ["Shopify Flow", "AfterShip"],
    accent: "#3d2b1f",
  },
  {
    label: "Social Proof",
    summary: "Yotpo for review collection, display, and syndication — tied directly to PDPs and ad creative.",
    tools: ["Yotpo"],
    accent: "#8b6914",
  },
  {
    label: "Voice of Customer",
    summary: "Zigpoll and Medallia for attribution surveys, exit intent, and post-purchase feedback loops that inform the roadmap.",
    tools: ["Zigpoll", "Medallia"],
    accent: "#4a5940",
  },
];

export default function ShopifyStack() {
  return (
    <section id="shopify" className="bg-charcoal py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <motion.span
            className="text-amber text-sm font-medium tracking-widest uppercase"
            style={{ fontFamily: "var(--font-body)" }}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            custom={0}
          >
            Shopify Expertise
          </motion.span>

          <motion.h2
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            custom={0.08}
          >
            Every touchpoint.
            <br />
            <em>End to end.</em>
          </motion.h2>

          <motion.p
            className="mt-5 text-ivory/55 text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            custom={0.16}
          >
            Most people know one layer of the stack. I&apos;ve operated all of
            them - theme code to post-purchase flows - on a live DTC brand doing
            real volume.
          </motion.p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="rounded-2xl border border-ivory/10 bg-ivory/5 p-7 hover:bg-ivory/8 transition-colors duration-300 group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, ease: EASE, delay: 0.06 * i }}
            >
              {/* Accent bar */}
              <div
                className="w-8 h-0.5 mb-5 rounded-full transition-all duration-300 group-hover:w-12"
                style={{ backgroundColor: cat.accent }}
              />

              <p
                className="text-ivory/40 text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {cat.label}
              </p>

              {/* Tool chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full text-xs font-medium text-ivory/80 border border-ivory/15"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p
                className="text-ivory/50 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {cat.summary}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          className="mt-14 rounded-2xl border border-amber/20 bg-amber/5 p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
        >
          <div className="max-w-xl">
            <p
              className="text-ivory text-lg font-semibold mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Running Shopify and not sure where the gaps are?
            </p>
            <p
              className="text-ivory/50 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              One call and I can tell you exactly which layer is costing you
              conversions.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-amber text-charcoal font-semibold rounded-full hover:bg-amber/90 transition-colors duration-200 text-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Book a free audit call →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
