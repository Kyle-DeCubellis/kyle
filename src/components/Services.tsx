"use client";

import { Globe, Cpu, TrendingUp, Layers } from "lucide-react";
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

const services = [
  {
    icon: Globe,
    title: "Websites That Work",
    tagline: "Your corner of the internet, done right.",
    price: "Starting at $500",
    description:
      "From a simple, beautiful landing page to a full business site with booking, payments, and SEO - built to impress from day one and grow with you.",
    cta: "Perfect for: HVAC, real estate, restaurants, freelancers, anyone who wants to show up online.",
    gradient: "linear-gradient(135deg, #c75a3a 0%, #a8402a 100%)",
  },
  {
    icon: Cpu,
    title: "AI Tools for Your Business",
    tagline: "Stop doing by hand what your laptop can do for you.",
    price: "Starting at $750",
    description:
      "I identify the 2–3 places AI can genuinely save you hours every week - then set it up, train you on it, and make sure it actually sticks.",
    cta: "Perfect for: Anyone overwhelmed by admin, emails, quotes, or customer follow-up.",
    gradient: "linear-gradient(135deg, #c17a2e 0%, #9d5e1a 100%)",
  },
  {
    icon: TrendingUp,
    title: "Growth & Strategy",
    tagline: "The playbook big companies use, built for your scale.",
    price: "Starting at $1,500",
    description:
      "Pricing strategy, launch planning, finding new revenue - I bring 15+ years of product leadership to your business without the agency price tag.",
    cta: "Perfect for: Early-stage founders, career pivots, solopreneurs leveling up.",
    gradient: "linear-gradient(135deg, #3d2b1f 0%, #1a1208 100%)",
  },
  {
    icon: Layers,
    title: "Full-Stack Builds",
    tagline: "If you need it to actually work, not just look good.",
    price: "Starting at $2,500",
    description:
      "Backend logic, databases, integrations, dashboards, APIs - whatever it takes to make your idea real and scalable. I do the full stack.",
    cta: "Perfect for: SaaS ideas, internal tools, automations, anything more than a brochure site.",
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
            Whether you&apos;re starting from scratch, trying to grow, or just
            need someone who gets it - I&apos;ve got you.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                className="group relative rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-default"
                style={{ background: svc.gradient }}
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
                    {svc.title}
                  </h3>

                  <p
                    className="text-ivory/70 text-sm font-medium italic mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {svc.tagline}
                  </p>

                  <p
                    className="text-amber-light text-sm font-semibold mb-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {svc.price}
                  </p>

                  <p
                    className="text-ivory/80 text-base leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {svc.description}
                  </p>

                  <p
                    className="text-ivory/50 text-xs leading-relaxed border-t border-ivory/10 pt-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {svc.cta}
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
            className="text-walnut/60 text-base mb-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Not sure which one fits? That&apos;s what the intro call is for.
          </p>
          <p
            className="text-walnut/40 text-xs mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Exact scope determines final price. Intro call is always free.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-charcoal text-ivory font-medium rounded-full hover:bg-walnut transition-colors duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Let&apos;s figure it out together →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
