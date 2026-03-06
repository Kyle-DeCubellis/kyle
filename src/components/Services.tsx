"use client";

import { Rocket, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay },
  }),
};

const tracks = [
  {
    icon: Rocket,
    title: "Launch",
    tagline: "Let's build it together.",
    price: "Starting at $500",
    description:
      "You're involved at every step - not just approving a final deliverable. Site, copy, deployment, domain, booking, payments. Everything live and yours. I don't hand off a file. I hand off a running business.",
    cta: "Perfect for: Anyone ready to show up online the right way for the first time.",
    gradient: "linear-gradient(135deg, #c75a3a 0%, #a8402a 100%)",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    tagline: "I stay in your corner.",
    price: "Starting at $150/mo",
    description:
      "After launch I stick around. Monthly maintenance, SEO, local search, content updates, AI tools as your business evolves. You focus on your work. I keep the digital side running and improving.",
    cta: "Perfect for: Businesses that launched but aren't getting found, or just need someone to own the online side.",
    gradient: "linear-gradient(135deg, #6b7c5c 0%, #4a5940 100%)",
  },
];

const VIEWPORT = { once: true, margin: "-80px" } as const;

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-24 md:py-32">
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
            What I Do
          </motion.span>

          <motion.h2
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            custom={0.08}
          >
            Ideas become real
            <br />
            <em>businesses.</em>
          </motion.h2>

          <motion.p
            className="mt-5 text-walnut/70 text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
            custom={0.16}
          >
            Most freelancers hand you a finished file and disappear. I build
            with you - from the first conversation through launch and
            everything that comes after.
          </motion.p>
        </div>

        {/* Two tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.title}
                className="group relative rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-default"
                style={{ background: track.gradient }}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.6, ease: EASE, delay: 0.05 * i }}
              >
                {/* Large background icon */}
                <div className="absolute right-6 top-6 opacity-10 group-hover:opacity-15 transition-opacity duration-300">
                  <Icon size={100} className="text-ivory" />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-ivory/15 flex items-center justify-center mb-6">
                    <Icon size={22} className="text-ivory" />
                  </div>

                  <h3
                    className="text-ivory text-2xl md:text-3xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {track.title}
                  </h3>

                  <p
                    className="text-ivory/70 text-sm font-medium italic mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {track.tagline}
                  </p>

                  <p
                    className="text-amber-light text-sm font-semibold mb-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {track.price}
                  </p>

                  <p
                    className="text-ivory/80 text-base leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {track.description}
                  </p>

                  <p
                    className="text-ivory/50 text-xs leading-relaxed border-t border-ivory/10 pt-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {track.cta}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          custom={0.1}
        >
          <p
            className="text-walnut/60 text-base mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Not sure which fits? That&apos;s exactly what the intro call is for.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-charcoal text-ivory font-medium rounded-full hover:bg-walnut transition-colors duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Let&apos;s figure it out →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
