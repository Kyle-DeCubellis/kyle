"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let t = 0;

    const animate = () => {
      t += 0.003;
      if (gradientRef.current) {
        const x = 50 + Math.sin(t) * 8;
        const y = 50 + Math.cos(t * 0.7) * 6;
        gradientRef.current.style.background = `
          radial-gradient(ellipse 80% 70% at ${x}% ${y}%, #c17a2e 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at ${100 - x}% ${100 - y}%, #c75a3a 0%, transparent 55%),
          radial-gradient(ellipse 100% 100% at 50% 50%, #1a1208 0%, #3d2b1f 100%)
        `;
      }
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        ref={gradientRef}
        className="absolute inset-0 transition-all duration-1000"
      />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23faf6f0' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-3">
          <span className="h-px w-12 bg-amber-light opacity-70" />
          <span
            className="text-amber-light text-sm font-medium tracking-widest uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Greater Boston & Beyond
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-ivory text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight max-w-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your idea
          <br />
          <span className="text-amber-light italic">deserves</span>
          <br />
          to be seen.
        </h1>

        {/* Subheading */}
        <p
          className="mt-8 text-ivory/75 text-lg sm:text-xl max-w-xl leading-relaxed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          I build elegant websites, set up AI tools that actually save you time,
          and help small businesses and real people compete online — no tech
          background required.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-amber text-ivory font-semibold rounded-full hover:bg-amber-light transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-amber/30"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tell me your idea
          </a>
          <a
            href="#work"
            className="px-8 py-4 border border-ivory/30 text-ivory/90 font-medium rounded-full hover:border-ivory/60 hover:text-ivory transition-all duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            See past work
          </a>
        </div>

        {/* Trust chips */}
        <div className="mt-14 flex flex-wrap items-center gap-3">
          {[
            "Bose Corporation",
            "3 Patents",
            "15+ Years in Product",
            "ISO 13485 Certified",
          ].map((chip) => (
            <span
              key={chip}
              className="px-3.5 py-1.5 rounded-full border border-ivory/20 text-ivory/60 text-xs tracking-wide"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <ArrowDown size={18} className="text-ivory/40" />
      </div>

      {/* Bottom bleed into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-ivory z-10" />
    </section>
  );
}
