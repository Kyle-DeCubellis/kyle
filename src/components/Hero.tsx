"use client";

import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  useMotionTemplate,
  motion,
} from "framer-motion";
import { ArrowDown } from "lucide-react";

// ─── Terminal colors ─────────────────────────────────────────────────────────

const C = {
  prompt:  "#E8A020",     // bright amber for $
  command: "#F0C060",     // brighter white-amber for command text
  output:  "#C4882A",     // softer amber for output
  check:   "#4EC94E",     // green checkmark
} as const;

// ─── Terminal sequence ───────────────────────────────────────────────────────

type LineType = "prompt" | "output" | "spacer" | "launch";

interface TermLine {
  type: LineType;
  prompt?: string;
  command?: string;
  text?: string;
  delay: number;
}

const LINES: TermLine[] = [
  // whoami block
  { type: "prompt",  prompt: "$ ", command: "whoami",                         delay: 300  },
  { type: "output",  text: "kyle-decubellis",                                delay: 700  },
  { type: "spacer",                                                          delay: 900  },
  // background.log block
  { type: "prompt",  prompt: "$ ", command: "cat ./background.log",           delay: 1100 },
  { type: "output",  text: "[2012]  Bose Corporation  —  co-op kid → lead engineer",       delay: 1600 },
  { type: "output",  text: "[2019]  Bose Frames       —  napkin sketch → global product",  delay: 2000 },
  { type: "output",  text: "[2020]  Hatch             —  1M+ connected devices shipped",   delay: 2400 },
  { type: "output",  text: "[2021]  VP Product        —  built the whole thing, start to scale", delay: 2800 },
  { type: "spacer",                                                          delay: 3100 },
  // credentials block
  { type: "prompt",  prompt: "$ ", command: "ls ./credentials/",              delay: 3300 },
  { type: "output",  text: "patents/[10-granted-4-pending]/  northeastern-ME/  iso-13485/  mitx/", delay: 3700 },
  { type: "spacer",                                                          delay: 3900 },
  // services block
  { type: "prompt",  prompt: "$ ", command: "ls ./services/",                 delay: 4100 },
  { type: "output",  text: "websites/  ai-tools/  strategy/  full-stack/",   delay: 4500 },
  { type: "spacer",                                                          delay: 4700 },
  // launch block
  { type: "prompt",  prompt: "$ ", command: "./launch --for=real-people --no-jargon", delay: 4900 },
  { type: "launch",  text: "> compiling warmth.............. ✓",             delay: 5500 },
  { type: "launch",  text: "> stripping tech-bro............. ✓",            delay: 5900 },
  { type: "launch",  text: "> loading craft.................. ✓",            delay: 6300 },
  { type: "launch",  text: "> ready. ▌",                                     delay: 6700 },
];

function TerminalLine({
  line,
  visible,
  isLast,
}: {
  line: TermLine;
  visible: boolean;
  isLast: boolean;
}) {
  if (line.type === "spacer") return <div className="h-5" />;

  const isReady = isLast && visible && line.text?.includes("▌");

  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="leading-relaxed text-[13px] md:text-sm"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {line.type === "prompt" && (
        <span>
          <span style={{ color: C.prompt }} className="select-none">{line.prompt}</span>
          <span style={{ color: C.command }}>{line.command}</span>
        </span>
      )}
      {line.type === "output" && (
        <span className="pl-4" style={{ color: C.output, whiteSpace: "pre" }}>{line.text}</span>
      )}
      {line.type === "launch" && (
        <span className="pl-4" style={{ whiteSpace: "pre" }}>
          {isReady ? (
            <>
              <span style={{ color: C.output }}>{"> ready. "}</span>
              <span
                style={{
                  color: C.prompt,
                  animation: "blink-cursor 1s step-end infinite",
                }}
              >
                ▌
              </span>
            </>
          ) : (
            <>
              <span style={{ color: C.output }}>
                {line.text?.replace("✓", "")}
              </span>
              <span style={{ color: C.check }}>✓</span>
            </>
          )}
        </span>
      )}
    </motion.div>
  );
}

function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = LINES.map((line, i) =>
      setTimeout(() => setVisibleCount(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24">
      {/* Terminal window */}
      <div
        className="max-w-2xl w-full overflow-hidden"
        style={{
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          background: "#0d1117",
        }}
      >
        {/* Traffic light buttons with padding */}
        <div className="flex items-center gap-2 px-5 pt-4 pb-3 opacity-40">
          <span className="w-3 h-3 rounded-full bg-red-400/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <span className="w-3 h-3 rounded-full bg-green-400/70" />
          <span
            className="ml-4 text-xs tracking-widest"
            style={{ fontFamily: "var(--font-mono)", color: "rgba(193,122,46,0.3)" }}
          >
            kyle@local ~ zsh
          </span>
        </div>

        {/* Lines */}
        <div className="px-5 pb-6 space-y-0.5">
          {LINES.map((line, i) => (
            <TerminalLine
              key={i}
              line={line}
              visible={i < visibleCount}
              isLast={i === LINES.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          className="text-xs tracking-widest"
          style={{ fontFamily: "var(--font-mono)", color: "rgba(193,122,46,0.3)" }}
        >
          scroll to ascend
        </span>
        <ArrowDown size={14} className="text-amber/30" />
      </motion.div>
    </div>
  );
}

// ─── Warm gradient hero ───────────────────────────────────────────────────────

function HeroContent() {
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
    <div className="absolute inset-0">
      {/* Animated gradient */}
      <div ref={gradientRef} className="absolute inset-0" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-6xl mx-auto px-6 pt-20 pb-16">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-3">
          <span className="h-px w-12 bg-amber-light/70" />
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

        {/* Sub */}
        <p
          className="mt-8 text-ivory/75 text-lg sm:text-xl max-w-xl leading-relaxed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          I build elegant websites, set up AI tools that actually save you
          time, and help real businesses compete online — no tech background
          required.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-amber text-ivory font-semibold rounded-full hover:bg-amber-light transition-all duration-200 hover:scale-105 shadow-lg"
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
        <div className="mt-12 flex flex-wrap items-center gap-3">
          {[
            "Bose Corporation",
            "3 Patents",
            "15+ Years in Product",
            "ISO 13485 Certified",
          ].map((chip) => (
            <span
              key={chip}
              className="px-3.5 py-1.5 rounded-full border border-ivory/20 text-ivory/55 text-xs tracking-wide"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-ivory z-10" />
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Terminal recedes: fades out, scales down slightly, sinks away
  const terminalOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const terminalScale   = useTransform(scrollYProgress, [0, 0.45], [1, 0.94]);
  const terminalY       = useTransform(scrollYProgress, [0, 0.45], [0, 40]);
  const terminalBlurVal = useTransform(scrollYProgress, [0, 0.45], [0, 14]);
  const terminalFilter  = useMotionTemplate`blur(${terminalBlurVal}px)`;

  // Hero descends to meet you: rises up from above, fades in
  const heroOpacity = useTransform(scrollYProgress, [0.1, 0.55], [0, 1]);
  const heroY       = useTransform(scrollYProgress, [0.1, 0.55], [-50, 0]);

  return (
    // Tall section — gives room to scroll through the transition
    <section
      ref={containerRef}
      id="hero"
      className="relative"
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── Layer 1: Terminal (ground level) ── */}
        <motion.div
          className="absolute inset-0 z-20"
          style={{
            opacity: terminalOpacity,
            scale: terminalScale,
            y: terminalY,
            filter: terminalFilter,
            background: "#0a0805",
          }}
        >
          {/* Background video/image — sits behind terminal text */}
          <video
            id="hero-visual"
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay so terminal text remains legible */}
          <div className="absolute inset-0 bg-black/75" />

          {/* Subtle scanline overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
            }}
          />
          {/* Very subtle warm glow top-left */}
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(193,122,46,0.06) 0%, transparent 70%)",
              transform: "translate(-20%, -20%)",
            }}
          />
          <Terminal />
        </motion.div>

        {/* ── Layer 2: Warm hero (altitude) ── */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            opacity: heroOpacity,
            y: heroY,
          }}
        >
          <HeroContent />
        </motion.div>

      </div>
    </section>
  );
}
