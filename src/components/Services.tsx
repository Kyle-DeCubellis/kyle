"use client";

import { Globe, Cpu, TrendingUp, Layers } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites That Work",
    tagline: "Your corner of the internet, done right.",
    description:
      "From a simple, beautiful landing page to a full business site with booking, payments, and SEO — built to impress from day one and grow with you.",
    cta: "Perfect for: HVAC, real estate, restaurants, freelancers, anyone who wants to show up online.",
    color: "bg-terracotta",
    textAccent: "text-terracotta-light",
  },
  {
    icon: Cpu,
    title: "AI Tools for Your Business",
    tagline: "Stop doing by hand what your laptop can do for you.",
    description:
      "I identify the 2–3 places AI can genuinely save you hours every week — then set it up, train you on it, and make sure it actually sticks.",
    cta: "Perfect for: Anyone overwhelmed by admin, emails, quotes, or customer follow-up.",
    color: "bg-amber",
    textAccent: "text-amber-light",
  },
  {
    icon: TrendingUp,
    title: "Growth & Strategy",
    tagline: "The playbook big companies use, built for your scale.",
    description:
      "Pricing strategy, launch planning, finding new revenue — I bring 15+ years of product leadership to your business without the agency price tag.",
    cta: "Perfect for: Early-stage founders, career pivots, solopreneurs leveling up.",
    color: "bg-walnut",
    textAccent: "text-amber-pale",
  },
  {
    icon: Layers,
    title: "Full-Stack Builds",
    tagline: "If you need it to actually work, not just look good.",
    description:
      "Backend logic, databases, integrations, dashboards, APIs — whatever it takes to make your idea real and scalable. I do the full stack.",
    cta: "Perfect for: SaaS ideas, internal tools, automations, anything more than a brochure site.",
    color: "bg-sage",
    textAccent: "text-ivory",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span
            className="text-amber text-sm font-medium tracking-widest uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            What I Do
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ideas become real
            <br />
            <em>businesses.</em>
          </h2>
          <p
            className="mt-5 text-walnut/70 text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Whether you&apos;re starting from scratch, trying to grow, or just
            need someone who gets it — I&apos;ve got you.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className={`group relative rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                  i === 0 || i === 3 ? "md:col-span-1" : "md:col-span-1"
                }`}
                style={{
                  background:
                    svc.color === "bg-terracotta"
                      ? "linear-gradient(135deg, #c75a3a 0%, #a8402a 100%)"
                      : svc.color === "bg-amber"
                      ? "linear-gradient(135deg, #c17a2e 0%, #9d5e1a 100%)"
                      : svc.color === "bg-walnut"
                      ? "linear-gradient(135deg, #3d2b1f 0%, #1a1208 100%)"
                      : "linear-gradient(135deg, #6b7c5c 0%, #4a5940 100%)",
                }}
              >
                {/* Large background icon */}
                <div className="absolute right-6 top-6 opacity-10 group-hover:opacity-15 transition-opacity">
                  <Icon size={100} className="text-ivory" />
                </div>

                {/* Content */}
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
                    className="text-ivory/70 text-sm font-medium italic mb-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {svc.tagline}
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
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p
            className="text-walnut/60 text-base mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Not sure which one fits? That&apos;s what the intro call is for.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-charcoal text-ivory font-medium rounded-full hover:bg-walnut transition-colors duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Let&apos;s figure it out together →
          </a>
        </div>
      </div>
    </section>
  );
}
